import { createContext, useContext, useMemo } from "react";
import { createTranslator, translateData } from "./translate.js";

const LanguageContext = createContext(null);

export function LanguageProvider({ locale, children }) {
  const value = useMemo(() => {
    const t = createTranslator(locale);
    return { locale, t, translateData: (data) => translateData(data, t) };
  }, [locale]);
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("LanguageProvider is required.");
  return value;
}
