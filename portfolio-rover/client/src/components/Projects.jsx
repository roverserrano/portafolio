import { ExternalLink, Github, Eye } from "lucide-react";
import { projects } from "../data/projects.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Projects() {
  return (
    <section id="proyectos" className="section-shell">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeader eyebrow="Proyectos" title="Cosas que construí con propósito">
          Cada uno resuelve un problema concreto. No son ejercicios de tutorial: tienen decisiones técnicas reales y código en producción.
        </SectionHeader>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col rounded-xl border border-white/[0.06] bg-bg-panel/60 p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:border-accent-warm/15"
            >
              {/* Header: tipo + categoría */}
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="rounded border border-accent-green/20 bg-accent-green/10 px-2.5 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-accent-green">
                  {project.type}
                </span>
                <span className="rounded border border-accent-cool/20 bg-accent-cool/10 px-2.5 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-accent-cool">
                  {project.category}
                </span>
              </div>

              {/* Título */}
              <h3 className="mb-3 font-heading text-xl font-bold text-text-primary group-hover:text-accent-warm transition-colors duration-300">
                {project.name}
              </h3>

              {/* El problema — contexto humano */}
              <div className="mb-4 rounded-lg border-l-2 border-accent-cool/30 bg-accent-cool/[0.03] py-3 px-4">
                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-accent-cool/80">
                  El problema
                </span>
                <p className="mt-1 text-sm leading-relaxed text-text-secondary/90">
                  {project.problem}
                </p>
              </div>

              {/* Descripción — la solución */}
              <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">
                {project.description}
              </p>

              {/*}
              {/*
              <div className="mb-4 rounded-lg border border-white/[0.04] bg-white/[0.02] py-3 px-4">
                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-text-muted">
                  Mi contribución
                </span>
                <p className="mt-1.5 text-xs leading-relaxed text-text-muted">
                  {project.myRole}
                </p>
              </div>
              */}

              {/* Resultado — highlight */}
              <div className="mb-5 border-l-2 border-accent-warm bg-accent-warm/[0.03] py-2.5 pl-3">
                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-accent-warm">
                  Resultado
                </span>
                <p className="mt-1 text-xs leading-relaxed text-text-secondary">
                  {project.highlight}
                </p>
              </div>

              {/* Stack */}
              <div className="mb-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-white/[0.03] px-2 py-1 font-mono text-[0.65rem] text-text-muted ring-1 ring-white/[0.05]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-auto flex gap-4 pt-2 border-t border-white/[0.04]">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-warm transition hover:text-[#c9965f]"
                  >
                    <Github size={15} />
                    Código
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-secondary transition hover:text-text-primary"
                  >
                    <Eye size={15} />
                    Demo
                  </a>
                )}
                {!project.repoUrl && !project.demoUrl && (
                  <span className="text-xs text-text-muted italic">
                    Repositorio privado — solicitar acceso
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}