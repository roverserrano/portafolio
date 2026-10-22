import { useI18n } from "../i18n/LanguageProvider.jsx";
import {
  ArrowUpRight,
  Cloud,
  Download,
  GraduationCap,
  MapPin,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import {
  certifications as raw_certifications,
  education as raw_education,
  experience as raw_experience,
} from "../data/journey.js";
import Reveal from "./Reveal.jsx";
import SectionHeader from "./SectionHeader.jsx";
const certIcons = {
  cloud: Cloud,
  shield: ShieldCheck,
  terminal: Terminal,
};
export default function Journey({ profile }) {
  const { t, translateData } = useI18n();
  const certifications = translateData(raw_certifications);
  const education = translateData(raw_education);
  const experience = translateData(raw_experience);
  return (
    <section
      id="trayectoria"
      className="section-shell"
      aria-labelledby="journey-heading"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeader
            id="journey-heading"
            eyebrow={t("Trayectoria")}
            title={t("Una base sólida. Mucho por construir.")}
          >
            {t(
              "Mi experiencia empieza en proyectos de grado, académicos y personales: problemas concretos, decisiones técnicas y aprendizaje al construir.",
            )}
          </SectionHeader>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div>
            <Reveal delay={60}>
              <h3 className="journey-label">{t("Experiencia práctica")}</h3>
            </Reveal>
            <div className="timeline">
              {experience.map((item, index) => (
                <Reveal key={item.title} delay={80 + index * 60}>
                  <article className="timeline-item">
                    <span className="timeline-marker" aria-hidden="true" />
                    <div className="timeline-head">
                      <span className="timeline-period">{item.period}</span>
                      <span className="tag">{item.context}</span>
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span className="tech-tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <Reveal delay={100}>
              <article className="education-card">
                <div className="flex items-start gap-4">
                  <span className="education-icon">
                    <GraduationCap size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <span className="eyebrow">{t("Formación")}</span>
                    <h3 className="mt-2 font-heading text-xl font-semibold tracking-[-0.03em] text-ink">
                      {education.degree}
                    </h3>
                    <p className="mt-1 text-base text-muted">
                      {education.institution}
                    </p>
                    <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-subtle">
                      <span>{education.period}</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={12} aria-hidden="true" />
                        {education.location}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {education.languages.map((language) => (
                    <span className="tech-tag" key={language.name}>
                      {language.name} · {language.level}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal delay={140}>
              <div className="certs-card">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="journey-label">{t("Formación continua")}</h3>
                  <span className="font-mono text-[0.8125rem] uppercase tracking-[0.1em] text-subtle">
                    2025 — 2026
                  </span>
                </div>
                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {certifications.map((cert) => {
                    const Icon = certIcons[cert.icon] ?? Terminal;
                    return (
                      <div className="cert-item" key={cert.title}>
                        <span className="cert-icon">
                          <Icon size={14} aria-hidden="true" />
                        </span>
                        <div>
                          <strong>{cert.title}</strong>
                          <span>
                            {cert.issuer} · {cert.date}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  className="btn btn-primary"
                  href={profile.cvUrl}
                  download="Rover-Serrano-CV.pdf"
                >
                  <Download size={16} aria-hidden="true" />
                  {t("Descargar CV")}
                </a>
                <a className="btn btn-secondary" href="#contacto">
                  {t("Hablemos")}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
