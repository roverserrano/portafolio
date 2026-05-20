import { ExternalLink } from "lucide-react";
import { projects } from "../data/projects.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Projects() {
  return (
    <section id="proyectos" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Proyectos" title="Experiencia practica academica y personal">
          Proyectos desarrollados con enfoque en impacto real, arquitectura y resultados medibles.
        </SectionHeader>

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className={`project-card rounded-lg border border-white/10 bg-slatePanel/60 p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-cyanTech/40 hover:shadow-soft ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <span className="mb-3 inline-flex rounded-full border border-greenTech/30 bg-greenTech/10 px-3 py-1 text-xs font-extrabold uppercase text-emerald-200">
                    {project.type}
                  </span>
                  <h3 className="font-heading text-2xl font-extrabold text-white">{project.name}</h3>
                </div>
                <span className="w-fit rounded-lg border border-cyanTech/30 bg-cyanTech/10 px-3 py-2 text-sm font-extrabold text-cyan-100">
                  {project.category}
                </span>
              </div>
              <p className="mt-5 text-base leading-7 text-slate-300">{project.description}</p>
              <p className="mt-4 rounded-lg border border-white/10 bg-navy/60 p-4 text-sm leading-6 text-slate-300">
                <strong className="text-white">Enfoque:</strong> {project.highlight}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-lg bg-white/5 px-3 py-2 text-xs font-bold text-slate-200 ring-1 ring-white/10">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <a className="inline-flex items-center gap-2 text-sm font-extrabold text-cyanTech transition hover:text-white" href="#contacto">
                  Solicitar detalles
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
