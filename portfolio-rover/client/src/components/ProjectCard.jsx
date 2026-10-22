import { useI18n } from "../i18n/LanguageProvider.jsx";
import { ArrowUpRight, Github, LockKeyhole } from "lucide-react";
import Reveal from "./Reveal.jsx";
export default function ProjectCard({ project, index, onOpen }) {
  const { t } = useI18n();
  const visibleStack = project.stack.slice(0, 4);
  const extraStack = project.stack.length - visibleStack.length;
  return (
    <Reveal delay={index * 80}>
      <article
        className="project-card"
        data-project={project.slug}
        style={{
          "--tone": project.tone,
        }}
        aria-labelledby={`project-${project.slug}-title`}
      >
        <button
          type="button"
          className="project-media"
          onClick={() => onOpen(project)}
          aria-label={t("Ver el caso de estudio de {name}", {
            name: project.name,
          })}
          aria-haspopup="dialog"
        >
          <img
            src={project.image}
            srcSet={`${project.imageSmall} 800w, ${project.image} 1600w`}
            sizes="(min-width: 1024px) 600px, 100vw"
            width="1600"
            height="1000"
            alt={project.imageAlt}
            loading="lazy"
            decoding="async"
          />
          <span className="project-index" aria-hidden="true">
            {String(index + 2).padStart(2, "0")}
          </span>
          <span className="project-category">{project.category}</span>
          <span className="project-hover">
            {t("Ver caso")}
            <ArrowUpRight size={15} aria-hidden="true" />
          </span>
        </button>
        <p className="image-caption project-image-caption">
          {t("Visualización de producto · recreación con IA")}
        </p>

        <div className="project-body">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="tag">{project.type}</span>
            <span className="font-mono text-[0.8125rem] uppercase tracking-[0.1em] text-subtle">
              {project.timeline}
            </span>
          </div>

          <h3
            id={`project-${project.slug}-title`}
            className="mt-4 font-heading text-2xl font-semibold leading-tight tracking-[-0.04em] text-ink"
          >
            {project.name}
          </h3>
          <p className="mt-2 text-base leading-relaxed text-muted">
            {project.tagline}
          </p>

          <p className="project-role">
            <span>{t("Mi contribución")}</span>
            {project.role}
          </p>

          <div className="project-outcome">
            <span>{t("Resultado")}</span>
            <p>{project.outcome}</p>
          </div>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {visibleStack.map((tech) => (
              <span className="tech-tag" key={tech}>
                {tech}
              </span>
            ))}
            {extraStack > 0 ? (
              <span className="tech-tag tech-tag-muted">+{extraStack}</span>
            ) : null}
          </div>

          <div className="project-actions">
            <button
              type="button"
              className="text-link"
              onClick={() => onOpen(project)}
              aria-haspopup="dialog"
            >
              {t("Caso de estudio")}
              <ArrowUpRight size={14} aria-hidden="true" />
            </button>
            {project.repoUrl ? (
              <a
                className="text-link text-link-muted"
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={14} aria-hidden="true" />
                {t("Código en GitHub")}
              </a>
            ) : (
              <a className="text-link text-link-muted" href="#contacto">
                <LockKeyhole size={14} aria-hidden="true" />
                {t("Repositorio privado")}
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
