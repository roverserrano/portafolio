import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import { LanguageProvider } from "./i18n/LanguageProvider.jsx";
import { pathLocale, redirectEntry, resolveLocale } from "./i18n/locale.js";
import { updateDocumentMetadata } from "./i18n/metadata.js";
import "./fonts.css";
import "./index.css";
import "./refinements.css";
import { initAnalytics } from "./analytics.js";

if (import.meta.env.DEV) redirectEntry(resolveLocale);
const locale = pathLocale(window.location.pathname) ?? "en";
updateDocumentMetadata(locale);
initAnalytics();

const root = document.getElementById("root");
const app = (
  <React.StrictMode>
    <LanguageProvider locale={locale}>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);

if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
