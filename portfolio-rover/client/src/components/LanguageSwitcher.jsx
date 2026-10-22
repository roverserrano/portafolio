import { useEffect, useRef } from "react";
import { ChevronDown, Languages } from "lucide-react";
import { useI18n } from "../i18n/LanguageProvider.jsx";
import { LANGUAGE_NAMES, LOCALES, rememberLocale } from "../i18n/locale.js";

export default function LanguageSwitcher() {
  const { locale, t } = useI18n();
  const menu = useRef(null);
  useEffect(() => {
    const dismiss = (event) => {
      if (!menu.current?.contains(event.target))
        menu.current?.removeAttribute("open");
    };
    const escape = (event) => {
      if (event.key === "Escape" && menu.current?.open) {
        menu.current.removeAttribute("open");
        menu.current.querySelector("summary")?.focus();
      }
    };
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("keydown", escape);
    };
  }, []);
  return (
    <details className="language-switcher" ref={menu}>
      <summary
        aria-label={`${t("Seleccionar idioma")} — ${locale.toUpperCase()}`}
      >
        <Languages size={15} aria-hidden="true" />
        <span>{locale.toUpperCase()}</span>
        <ChevronDown size={12} aria-hidden="true" />
      </summary>
      <nav className="language-options" aria-label={t("Idiomas")}>
        {LOCALES.map((code) => (
          <a
            key={code}
            href={`/${code}/`}
            hrefLang={code}
            lang={code}
            aria-current={code === locale ? "page" : undefined}
            onClick={(event) => {
              rememberLocale(code);
              event.currentTarget.href = `/${code}/${window.location.search}${window.location.hash}`;
            }}
          >
            <span>{LANGUAGE_NAMES[code]}</span>
            <span aria-hidden="true">{code.toUpperCase()}</span>
          </a>
        ))}
      </nav>
    </details>
  );
}
