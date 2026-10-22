import { useI18n } from "../i18n/LanguageProvider.jsx";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  MapPin,
} from "lucide-react";
import BoviPreview from "./BoviPreview.jsx";
export default function Hero({ profile }) {
  const { t } = useI18n();
  return (
    <section
      id="inicio"
      className="hero-section relative isolate overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="hero-glow hero-glow-a" />
        <div className="hero-glow hero-glow-b" />
        <div className="hero-grid" />
        <div className="hero-orbit hero-orbit-a" />
      </div>
      <div className="container-page">
        <div className="hero-layout">
          <div className="hero-copy">
            <div className="availability-badge">
              <span className="status-dot" aria-hidden="true" />
              <span>{t("Disponible para mi primer rol full-time")}</span>
            </div>
            <p className="hero-intro">
              {t("Hola, soy")} <strong>{profile.shortName}</strong>
              <span aria-hidden="true"> /</span>
            </p>
            <p className="eyebrow hero-role">
              {t("Desarrollador Full Stack Junior")}
            </p>
            <h1>
              {t("De la interfaz")}
              <br />
              {t("al dato.")}
              <br />
              <span className="hero-accent">{t("Todo conecta.")}</span>
            </h1>
            <p className="hero-description">
              {t("Construyo aplicaciones con")}{" "}
              <strong>{t("React y Node.js")}</strong>
              {t(
                ", desde la experiencia de usuario hasta la API. Mi diferencial: experiencia integrando IA, dispositivos y aplicaciones en BoviSense.",
              )}
            </p>
            <div className="hero-proof">
              <span>
                <b>4</b> {t("proyectos con código")}
              </span>
              <span>
                <b>{"~2 h → ~5 min"}</b> {t("con BoviSense")}
              </span>
            </div>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#proyectos">
                {t("Explorar proyectos")}{" "}
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a
                className="btn btn-secondary"
                href={profile.cvUrl}
                download="Rover-Serrano-CV.pdf"
              >
                <Download size={16} aria-hidden="true" /> {t("Descargar CV")}
              </a>
            </div>
            <div className="hero-location">
              <span>
                <MapPin size={14} aria-hidden="true" /> {profile.location}
              </span>
              <span>
                {t("Remoto ·")} {profile.timezone}
              </span>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("Ver GitHub de Rover Serrano")}
              >
                <Github size={15} aria-hidden="true" /> {"GitHub"}{" "}
                <ArrowUpRight size={12} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="hero-project">
            <div className="hero-project-kicker">
              <span className="eyebrow">
                {t("Una idea llevada al mundo real")}
              </span>
              <span className="project-number">01 / 04</span>
            </div>
            <BoviPreview priority />
            <div className="hero-project-foot">
              <span>{t("Visión artificial · IoT · Full Stack")}</span>
              <a href="#proyectos">
                {t("Conocer BoviSense")}{" "}
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <a href="#proyectos">
            <ArrowDown size={14} aria-hidden="true" />{" "}
            {t("El trabajo habla primero")}
          </a>
          <span>{"React · Node.js · Python · Flutter"}</span>
          <span className="hidden sm:inline">
            {t("Diseño con intención. Código con propósito.")}
          </span>
        </div>
      </div>
    </section>
  );
}
