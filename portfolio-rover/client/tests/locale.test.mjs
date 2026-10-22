import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";
import { entryScript, LOCALES, resolveLocale } from "../src/i18n/locale.js";
import { createTranslator } from "../src/i18n/translate.js";
import { localizeDocument } from "../src/i18n/metadata.js";

for (const [description, path, saved, languages, expected] of [
  ["explicit Spanish overrides preferences", "/es/", "fr", ["en-US"], "es"],
  ["explicit English overrides preferences", "/en/", "es", ["fr-FR"], "en"],
  ["explicit French overrides preferences", "/fr/", "en", ["pt-BR"], "fr"],
  ["explicit Portuguese overrides preferences", "/pt/", "fr", ["es-CO"], "pt"],
  ["explicit path without trailing slash", "/fr", "en", ["es"], "fr"],
  ["saved manual choice", "/", "fr", ["es-CO"], "fr"],
  ["Colombian Spanish", "/", null, ["es-CO"], "es"],
  ["US English", "/", null, ["en-US"], "en"],
  ["Canadian French", "/", null, ["fr-CA"], "fr"],
  ["Brazilian Portuguese", "/", null, ["pt-BR"], "pt"],
  ["European Portuguese", "/", null, ["pt-PT"], "pt"],
  [
    "first supported preferred language",
    "/",
    null,
    ["de-DE", "fr-FR", "en-US"],
    "fr",
  ],
  ["case-insensitive browser locale", "/", null, ["PT-br"], "pt"],
  ["unknown languages use English", "/", null, ["ja-JP", "de-DE"], "en"],
  ["empty language list", "/", null, [], "en"],
  ["corrupt saved preference is ignored", "/", "not-a-locale", ["es"], "es"],
  [
    "non-language path is not an explicit locale",
    "/france/",
    null,
    ["pt"],
    "pt",
  ],
]) {
  test(description, () =>
    assert.equal(resolveLocale(path, saved, languages), expected),
  );
}

function runEntry({
  pathname = "/",
  saved = null,
  blocked = false,
  languages = ["fr-FR"],
} = {}) {
  const redirects = [];
  let storageReads = 0;
  const context = {
    location: {
      pathname,
      search: "?source=linkedin",
      hash: "#proyectos",
      replace: (target) => redirects.push(target),
    },
    navigator: { languages, language: "en-US" },
    localStorage: {
      getItem: () => {
        storageReads++;
        if (blocked) throw new Error("Blocked");
        return saved;
      },
    },
  };
  vm.runInNewContext(entryScript, context);
  return { redirects, storageReads };
}

test("neutral entry preserves query and section", () => {
  assert.deepEqual(runEntry().redirects, ["/fr/?source=linkedin#proyectos"]);
});
test("neutral index.html also detects language", () => {
  assert.deepEqual(
    runEntry({ pathname: "/index.html", languages: ["pt-PT"] }).redirects,
    ["/pt/?source=linkedin#proyectos"],
  );
});
test("storage restrictions do not prevent detection", () => {
  assert.deepEqual(runEntry({ blocked: true }).redirects, [
    "/fr/?source=linkedin#proyectos",
  ]);
});
for (const locale of LOCALES) {
  test(`direct /${locale}/ never redirects or reads stored preference`, () => {
    assert.deepEqual(runEntry({ pathname: `/${locale}/`, saved: "en" }), {
      redirects: [],
      storageReads: 0,
    });
  });
}

test("translated ARIA labels interpolate project names", () => {
  assert.equal(
    createTranslator("fr")("Ver el caso de estudio de {name}", {
      name: "BoviSense",
    }),
    "Voir l’étude de cas de BoviSense",
  );
});
test("all translation entries provide the three target languages", async () => {
  const catalog = JSON.parse(
    await readFile(
      new URL("../src/i18n/messages.json", import.meta.url),
      "utf8",
    ),
  );
  for (const [source, translations] of Object.entries(catalog)) {
    for (const locale of ["en", "fr", "pt"])
      assert.ok(translations[locale]?.trim(), `${source}: ${locale}`);
  }
});
test("page metadata identifies each language without adding spoken-language claims", async () => {
  const template = await readFile(
    new URL("../index.html", import.meta.url),
    "utf8",
  );
  for (const locale of LOCALES) {
    const html = localizeDocument(template, locale);
    assert.ok(html.includes(`<html lang="${locale}">`));
    assert.ok(
      html.includes(
        `rel="canonical" href="https://portafolio-jidm.onrender.com/${locale}/"`,
      ),
    );
    for (const code of LOCALES) assert.ok(html.includes(`hreflang="${code}"`));
    const schema = JSON.parse(
      html.match(
        /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
      )[1],
    );
    assert.equal(
      schema["@graph"].find((item) => item["@type"] === "WebSite").inLanguage,
      locale,
    );
    assert.equal(
      schema["@graph"].find((item) => item["@type"] === "Person").knowsLanguage
        .length,
      2,
    );
  }
});
