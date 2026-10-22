export const LOCALES = ["es", "en", "fr", "pt"];
export const LANGUAGE_NAMES = {
  es: "Español",
  en: "English",
  fr: "Français",
  pt: "Português",
};
export const STORAGE_KEY = "portfolio.language";

export function pathLocale(pathname = "") {
  return pathname.match(/^\/(es|en|fr|pt)(?:\/|$)/)?.[1] ?? null;
}

// Kept self-contained so the same resolver can run before the first page paint.
export function resolveLocale(pathname, saved, languages = []) {
  const supported = ["es", "en", "fr", "pt"];
  const explicit = pathname.match(/^\/(es|en|fr|pt)(?:\/|$)/)?.[1];
  if (explicit) return explicit;
  if (supported.includes(saved)) return saved;
  for (const language of Array.isArray(languages) ? languages : []) {
    const base =
      typeof language === "string"
        ? language.toLowerCase().split(/[-_]/)[0]
        : "";
    if (supported.includes(base)) return base;
  }
  return "en";
}

// Executed only at the neutral entry point. Direct language URLs never redirect.
export function redirectEntry(resolve) {
  if (location.pathname !== "/" && location.pathname !== "/index.html") return;
  let saved = null;
  try {
    saved = localStorage.getItem("portfolio.language");
  } catch {
    /* Storage may be unavailable. */
  }
  const locale = resolve(
    location.pathname,
    saved,
    navigator.languages?.length ? navigator.languages : [navigator.language],
  );
  location.replace(`/${locale}/${location.search}${location.hash}`);
}

export const entryScript = `(${redirectEntry.toString()})(${resolveLocale.toString()});`;

export function rememberLocale(locale) {
  if (!LOCALES.includes(locale)) return;
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    /* The language link still works. */
  }
}
