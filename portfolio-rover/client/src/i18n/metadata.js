import { createTranslator, translateData } from "./translate.js";
import { profile } from "../data/profile.js";
import { LOCALES } from "./locale.js";

export const SITE_URL = "https://portafolio-jidm.onrender.com";
const description =
  "Desarrollador Full Stack Junior. React, Node.js e IA aplicada. Proyectos, casos de estudio y CV. Disponible para trabajo remoto.";
const imageAlt = "Rover Serrano — Full Stack Junior · BoviSense AI";

export function siteMetadata(locale, neutral = false) {
  const t = createTranslator(locale);
  return {
    locale,
    url: `${SITE_URL}/${neutral ? "" : `${locale}/`}`,
    title: `Rover Serrano | ${t(profile.role)}`,
    description: t(description),
    ogLocale: { es: "es_BO", en: "en_US", fr: "fr_FR", pt: "pt_BR" }[locale],
    imageAlt,
  };
}

function escapeAttribute(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export function localizeSchema(schema, locale, neutral = false) {
  const t = createTranslator(locale);
  const meta = siteMetadata(locale, neutral);
  const localized = translateData(schema, t);
  for (const item of localized["@graph"] ?? []) {
    if (item["@type"] === "Person") {
      item.jobTitle = t(profile.role);
      item.description = t(profile.summary);
      item.url = meta.url;
    }
    if (item["@type"] === "WebSite") {
      item["@id"] = `${meta.url}#website`;
      item.url = meta.url;
      item.name = `Rover Serrano — ${t("Portafolio")}`;
      item.description = meta.description;
      item.inLanguage = locale;
    }
  }
  return localized;
}

export function localizeDocument(template, locale, neutral = false) {
  const meta = siteMetadata(locale, neutral);
  const t = createTranslator(locale);
  const content = {
    description: meta.description,
    "og:title": meta.title,
    "twitter:title": meta.title,
    "og:description": meta.description,
    "twitter:description": meta.description,
    "og:url": meta.url,
    "og:locale": meta.ogLocale,
    "og:image:alt": meta.imageAlt,
    "twitter:image:alt": meta.imageAlt,
  };
  let html = template
    .replace(/<html lang="[^"]+">/, `<html lang="${locale}">`)
    .replace(
      /<title>.*?<\/title>/s,
      `<title>${escapeAttribute(meta.title)}</title>`,
    )
    .replace(
      /<link rel="canonical" href="[^"]+"\s*\/?>/,
      `<link rel="canonical" href="${meta.url}" />`,
    )
    .replace(/<meta\b[^>]*>/g, (tag) => {
      const name = tag.match(/(?:name|property)="([^"]+)"/)?.[1];
      return content[name]
        ? tag.replace(
            /content="[^"]*"/,
            `content="${escapeAttribute(content[name])}"`,
          )
        : tag;
    })
    .replace(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
      (_, json) =>
        `<script type="application/ld+json">${JSON.stringify(localizeSchema(JSON.parse(json), locale, neutral)).replaceAll("<", "\\u003c")}</script>`,
    )
    .replace(
      "Los controles interactivos requieren JavaScript. Puedes escribir a",
      t("Los controles interactivos requieren JavaScript. Puedes escribir a"),
    );
  const alternates = [
    ...LOCALES.map(
      (code) =>
        `<link rel="alternate" hreflang="${code}" href="${SITE_URL}/${code}/" />`,
    ),
    `<link rel="alternate" hreflang="x-default" href="${SITE_URL}/" />`,
  ].join("\n    ");
  html = html.replace("</head>", `    ${alternates}\n  </head>`);
  return html;
}

export function updateDocumentMetadata(locale) {
  const meta = siteMetadata(locale);
  document.documentElement.lang = locale;
  document.title = meta.title;
  const content = {
    description: meta.description,
    "og:title": meta.title,
    "twitter:title": meta.title,
    "og:description": meta.description,
    "twitter:description": meta.description,
    "og:url": meta.url,
    "og:locale": meta.ogLocale,
    "og:image:alt": meta.imageAlt,
    "twitter:image:alt": meta.imageAlt,
  };
  for (const [name, value] of Object.entries(content)) {
    document
      .querySelector(`meta[name="${name}"], meta[property="${name}"]`)
      ?.setAttribute("content", value);
  }
  document
    .querySelector('link[rel="canonical"]')
    ?.setAttribute("href", meta.url);
  for (const code of [...LOCALES, "x-default"]) {
    let link = document.querySelector(
      `link[rel="alternate"][hreflang="${code}"]`,
    );
    if (!link) {
      link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = code;
      document.head.appendChild(link);
    }
    link.href = `${SITE_URL}/${code === "x-default" ? "" : `${code}/`}`;
  }
  const schema = document.querySelector('script[type="application/ld+json"]');
  if (schema)
    schema.textContent = JSON.stringify(
      localizeSchema(JSON.parse(schema.textContent), locale),
    );
}
