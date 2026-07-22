import { skillGroups } from "../data/skills.js";
import SectionHeader from "./SectionHeader.jsx";

const tagStyles = {
  primary: "bg-accent-warm/10 text-accent-warm border-accent-warm/15",
  secondary: "bg-accent-cool/8 text-accent-cool border-accent-cool/12",
  muted: "bg-white/[0.03] text-text-muted border-white/[0.06]",
};

export default function Skills() {
  return (
    <section id="habilidades" className="section-shell">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeader eyebrow="Stack técnico" title="Tecnologías que uso en producción">
          Divididas por nivel de confianza: las que domino, las que manejo bien y las que he usado en contextos específicos.
        </SectionHeader>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="group rounded-xl border border-white/[0.06] bg-bg-panel/60 p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-accent-warm/15"
            >
              <h3 className="mb-4 border-b border-white/[0.06] pb-3 font-heading text-lg font-bold text-text-primary">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`rounded-md border px-3 py-1.5 text-xs font-medium ${tagStyles[skill.level]}`}
                  >
                    {skill.name}
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