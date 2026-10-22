import messages from "./messages.json" with { type: "json" };

export function createTranslator(locale) {
  return (text, replacements = {}) => {
    const translated =
      locale === "es" ? text : (messages[text]?.[locale] ?? text);
    return translated.replace(
      /\{(\w+)\}/g,
      (match, key) => replacements[key] ?? match,
    );
  };
}

export function translateData(value, t) {
  if (typeof value === "string") return t(value);
  if (Array.isArray(value)) return value.map((item) => translateData(item, t));
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [
        key,
        key === "icon" ? item : translateData(item, t),
      ]),
    );
  }
  return value;
}
