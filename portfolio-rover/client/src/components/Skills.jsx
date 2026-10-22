import { useI18n } from "../i18n/LanguageProvider.jsx";
import {
  ArrowUpRight,
  Cloud,
  LayoutGrid,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react";
import {
  levelDescriptions as raw_levelDescriptions,
  levelLabels as raw_levelLabels,
  skillGroups as raw_skillGroups,
} from "../data/skills.js";
import Reveal from "./Reveal.jsx";
import SectionHeader from "./SectionHeader.jsx";
const icons = {
  layout: LayoutGrid,
  server: Server,
  spark: Sparkles,
  terminal: Terminal,
  cloud: Cloud,
  shield: ShieldCheck,
};
export default function Skills({ profile }) {
  const { t, translateData } = useI18n();
  const levelDescriptions = translateData(raw_levelDescriptions);
  const levelLabels = translateData(raw_levelLabels);
  const skillGroups = translateData(raw_skillGroups);
  return (
    <section
      id="stack"
      className="section-shell"
      aria-labelledby="stack-heading"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeader
            id="stack-heading"
            eyebrow={t("Stack")}
            title={t("El stack con el que construyo.")}
          >
            {t(
              "Marco mi nivel real: core, intermedio y familiar. Cada tecnología core tiene un proyecto detrás.",
            )}
          </SectionHeader>
        </Reveal>

        <Reveal delay={80}>
          <div
            className="skills-legend"
            aria-label={t("Niveles de experiencia")}
          >
            {Object.entries(levelLabels).map(([level, label]) => (
              <span key={level} title={levelDescriptions[level]}>
                <i
                  className={`skill-dot skill-dot-${level}`}
                  aria-hidden="true"
                />
                {label}
              </span>
            ))}
            <span className="skills-legend-note">
              {t(
                "Core = uso frecuente · Intermedio = proyectos concretos · Familiar = bases y experiencia puntual",
              )}
            </span>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.icon] ?? Terminal;
            return (
              <Reveal key={group.title} delay={100 + index * 60}>
                <article className="skill-card">
                  <div className="skill-card-head">
                    <span className="skill-card-icon">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <h3>{group.title}</h3>
                    <span className="skill-count">
                      {group.skills.length} {t("herramientas")}
                    </span>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        className={`skill-tag skill-tag-${skill.level}`}
                        key={skill.name}
                        aria-label={`${skill.name}: ${levelLabels[skill.level]}`}
                      >
                        <i
                          className={`skill-dot skill-dot-${skill.level}`}
                          aria-hidden="true"
                        />
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={160}>
          <div className="mt-7 flex flex-col items-start justify-between gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-5 py-4 sm:flex-row sm:items-center">
            <p className="text-sm text-muted">
              {t("¿Querés el detalle completo de cursos y certificaciones?")}
            </p>
            <a
              className="text-link"
              href={profile.cvUrl}
              download="Rover-Serrano-CV.pdf"
            >
              {t("Ver CV completo")}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
