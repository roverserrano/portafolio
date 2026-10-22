import { spawnSync } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

import { LOCALES, entryScript } from "../src/i18n/locale.js";
import { localizeDocument, SITE_URL } from "../src/i18n/metadata.js";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const vite = join(root, "node_modules/vite/bin/vite.js");

for (const args of [
  ["build"],
  ["build", "--ssr", "src/prerender.jsx", "--outDir", ".prerender"],
]) {
  const result = spawnSync(process.execPath, [vite, ...args], {
    cwd: root,
    stdio: "inherit",
  });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}

const { render } = await import(
  pathToFileURL(join(root, ".prerender/prerender.js"))
);
const template = await readFile(join(root, "dist/index.html"), "utf8");
if (!template.includes('<div id="root"></div>'))
  throw new Error("Missing root element.");
for (const locale of LOCALES) {
  const markup = await render(locale);
  const html = localizeDocument(template, locale).replace(
    '<div id="root"></div>',
    `<div id="root">${markup}</div>`,
  );
  const directory = join(root, "dist", locale);
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, "index.html"), html);
}
const neutral = localizeDocument(template, "en", true)
  .replace(
    '<meta charset="UTF-8" />',
    `<meta charset="UTF-8" /><script>${entryScript}</script>`,
  )
  .replace(
    '<div id="root"></div>',
    `<div id="root">${await render("en")}</div>`,
  );
await writeFile(join(root, "dist/index.html"), neutral);
const alternatives = [
  ...LOCALES.map(
    (code) =>
      `<xhtml:link rel="alternate" hreflang="${code}" href="${SITE_URL}/${code}/"/>`,
  ),
  `<xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/"/>`,
].join("");
const urls = ["", ...LOCALES.map((code) => `${code}/`)];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.map((path) => `<url><loc>${SITE_URL}/${path}</loc>${alternatives}</url>`).join("")}</urlset>
`;
await writeFile(join(root, "dist/sitemap.xml"), sitemap);
console.log(
  "Static HTML generated for ES, EN, FR and PT; neutral entry detects the visitor’s language.",
);
