import { skillGroups } from "../data/skills.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Skills() {
  return (
    <section id="habilidades" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Habilidades tecnicas" title="Stack de trabajo">
          Tecnologias usadas en proyectos web, moviles, IA aplicada, datos e integracion hardware-software.
        </SectionHeader>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-lg border border-white/10 bg-slatePanel/55 p-5 shadow-card transition hover:-translate-y-1 hover:border-cyanTech/40">
              <h3 className="font-heading text-xl font-extrabold text-white">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-lg border border-white/10 bg-navy/70 px-3 py-2 text-sm font-bold text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
