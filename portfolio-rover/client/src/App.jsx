import { useI18n } from "./i18n/LanguageProvider.jsx";
import About from "./components/About.jsx";
import { lazy, Suspense } from "react";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Journey from "./components/Journey.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import ProofStrip from "./components/ProofStrip.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Skills from "./components/Skills.jsx";
import { profile as rawProfile } from "./data/profile.js";
const Contact = lazy(() => import("./components/Contact.jsx"));
export default function App() {
  const { t, translateData } = useI18n();
  const profile = translateData(rawProfile);
  return (
    <div className="relative min-h-screen overflow-x-clip bg-canvas text-ink">
      <a className="skip-link" href="#contenido">
        {t("Saltar al contenido")}
      </a>

      <ScrollProgress />
      <Navbar profile={profile} />

      <main id="contenido" tabIndex={-1} className="outline-none">
        <Hero profile={profile} />
        <ProofStrip />
        <Projects />
        <About profile={profile} />
        <Skills profile={profile} />
        <Journey profile={profile} />
        <section id="contacto" aria-label={t("Contacto")}>
          <Suspense
            fallback={
              <section
                className="section-shell min-h-[720px]"
                aria-label={t("Contacto")}
              >
                <div className="container-page">
                  <a className="text-link" href={`mailto:${profile.email}`}>
                    {t("Contactar a Rover por email")}
                  </a>
                </div>
              </section>
            }
          >
            <Contact profile={profile} />
          </Suspense>
        </section>
      </main>

      <Footer profile={profile} />
    </div>
  );
}
