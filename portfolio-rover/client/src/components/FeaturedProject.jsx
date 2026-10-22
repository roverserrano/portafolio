import { useI18n } from "../i18n/LanguageProvider.jsx";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import Reveal from "./Reveal.jsx";
export default function FeaturedProject({ project, onOpen }) {
  const { t } = useI18n();
  return (
    <Reveal>
      <article
        className="featured-card"
        data-project={project.slug}
        style={{
          "--tone": project.tone,
        }}
        aria-labelledby="featured-project-title"
      >
        <div className="featured-media">
          <div className="featured-media-content">
            <div className="browser-frame browser-frame-compact">
              <div className="browser-bar">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="browser-dot" />
                  <span className="browser-dot" />
                  <span className="browser-dot" />
                </div>
                <span className="browser-address">
                  {t("BoviSense / vista de producto")}
                </span>
                <span className="browser-live">
                  <span className="status-dot" aria-hidden="true" />
                  {t("CONCEPTO")}
                </span>
              </div>
              <div className="browser-screen">
                <img
                  src={project.image}
                  srcSet={`${project.imageSmall} 800w, ${project.image} 1600w`}
                  sizes="(min-width: 1024px) 720px, 100vw"
                  width="1600"
                  height="1000"
                  alt={project.imageAlt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <p className="image-caption">
              {t("Recreación de interfaz · datos ilustrativos")}
            </p>
            <div className="featured-proof">
              <div>
                <strong>0.87</strong>
                <span>{t("mAP del prototipo")}</span>
              </div>
              <div>
                <strong>{"~5 min"}</strong>
                <span>{t("por lote · antes ~2 h")}</span>
              </div>
            </div>
          </div>

          <div className="featured-badge" aria-hidden="true">
            <Sparkles size={14} />
            <span>{t("Proyecto destacado")}</span>
          </div>

          <div className="featured-float" aria-hidden="true">
            <span className="hero-float-label">{"mAP"}</span>
            <strong>0.87</strong>
            <span className="hero-float-meta">{t("detección en edge")}</span>
          </div>
        </div>

        <div className="featured-body">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="tag tag-mint">{project.type}</span>
            <span className="font-mono text-[0.8125rem] uppercase tracking-[0.12em] text-subtle">
              {project.timeline}
            </span>
          </div>

          <h3
            id="featured-project-title"
            className="mt-5 font-heading text-[clamp(2rem,3.2vw,2.8rem)] font-semibold leading-none tracking-[-0.05em] text-ink"
          >
            {project.name}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            {project.tagline}
          </p>

          <div className="mt-7 space-y-4">
            <div className="featured-note">
              <span className="featured-note-label">{t("El problema")}</span>
              <p>{project.problem}</p>
            </div>
            <div className="featured-note">
              <span className="featured-note-label">
                {t("Mi contribución")}
              </span>
              <p>{project.role}</p>
            </div>
            <div className="featured-result">
              <span className="featured-note-label">{t("Resultado")}</span>
              <p>{project.outcome}</p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span className="tech-tag" key={tech}>
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/[0.08] pt-6 sm:flex-row">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onOpen(project)}
              aria-haspopup="dialog"
            >
              {t("Ver caso de estudio")}
              <ArrowUpRight size={17} aria-hidden="true" />
            </button>
            {project.repoUrl ? (
              <a
                className="btn btn-secondary"
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} aria-hidden="true" />
                {t("Ver código")}
              </a>
            ) : null}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
