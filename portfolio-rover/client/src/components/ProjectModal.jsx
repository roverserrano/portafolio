import { useI18n } from "../i18n/LanguageProvider.jsx";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, Github, LockKeyhole, X } from "lucide-react";
import Architecture from "./Architecture.jsx";
const focusableSelector =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
export default function ProjectModal({ project, onClose }) {
  const { t } = useI18n();
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const previouslyFocused = useRef(null);
  useEffect(() => {
    previouslyFocused.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const appRoot = document.getElementById("root");
    const previousInert = appRoot?.inert;
    if (appRoot) appRoot.inert = true;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = panelRef.current?.querySelectorAll(focusableSelector);
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      if (appRoot) appRoot.inert = previousInert;
      document.removeEventListener("keydown", onKeyDown);
      if (previouslyFocused.current instanceof HTMLElement) {
        previouslyFocused.current.focus();
      }
    };
  }, [onClose]);
  return createPortal(
    <div
      className="modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        className="modal-panel"
        data-project={project.slug}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          ref={closeRef}
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label={t("Cerrar caso de estudio")}
        >
          <X size={18} />
        </button>

        <div className="modal-media">
          <img
            src={project.image}
            srcSet={`${project.imageSmall} 800w, ${project.image} 1600w`}
            sizes="(min-width: 1024px) 820px, 100vw"
            width="1600"
            height="1000"
            alt={project.imageAlt}
          />
          <p className="image-caption">
            {project.imageCaption ??
              t("Recreación visual de producto · datos ilustrativos")}
          </p>
        </div>

        <div className="modal-body">
          <div className="flex flex-wrap items-center gap-2">
            <span className="tag">{project.type}</span>
            <span className="tag tag-muted">{project.category}</span>
            <span className="font-mono text-[0.8125rem] uppercase tracking-[0.1em] text-subtle">
              {project.timeline}
            </span>
          </div>

          <h2
            id="project-modal-title"
            className="mt-5 font-heading text-[clamp(2rem,4vw,3rem)] font-semibold leading-none tracking-[-0.05em] text-ink"
          >
            {project.name}
          </h2>
          <p className="mt-3 text-base text-muted">{project.tagline}</p>

          <div className="modal-metrics">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>

          <div className="modal-sections">
            <section>
              <h3>{t("El reto")}</h3>
              <p>{project.caseStudy.challenge}</p>
            </section>
            <section>
              <h3>{t("Mi contribución")}</h3>
              <p>{project.role}</p>
            </section>
            <section>
              <h3>{t("La solución")}</h3>
              <p>{project.caseStudy.approach}</p>
            </section>
            <section className="modal-result">
              <h3>{t("Resultado")}</h3>
              <p>{project.caseStudy.result}</p>
            </section>
            <section>
              <h3>{t("Lo que me llevo")}</h3>
              <p>{project.caseStudy.learnings}</p>
            </section>
          </div>

          {project.featured && <Architecture />}

          <div className="mt-7 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span className="tech-tag" key={tech}>
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/[0.08] pt-6 sm:flex-row">
            {project.repoUrl ? (
              <a
                className="btn btn-primary"
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} aria-hidden="true" />
                {t("Ver código en GitHub")}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ) : (
              <a className="btn btn-primary" href="#contacto" onClick={onClose}>
                <LockKeyhole size={16} aria-hidden="true" />
                {t("Solicitar acceso")}
              </a>
            )}
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              {t("Seguir explorando")}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
