import { useI18n } from "../i18n/LanguageProvider.jsx";
import { ArrowUpRight, Code2, Compass, Download, Sparkles } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionHeader from "./SectionHeader.jsx";
const principles = [
  {
    icon: Compass,
    title: "Producto primero",
    text: "Pienso en la persona que va a usar el sistema antes que en la tecnología. La solución más simple suele ser la mejor.",
  },
  {
    icon: Sparkles,
    title: "IA que aterriza",
    text: "Modelos que corren en el mundo real: edge, latencia, hardware y datos sucios. La métrica importa cuando resuelve algo.",
  },
  {
    icon: Code2,
    title: "Código legible",
    text: "Nombres claros, componentes pequeños y documentación para que otra persona pueda continuar sin adivinar.",
  },
];
export default function About({ profile }) {
  const { t } = useI18n();
  return (
    <section
      id="sobre-mi"
      className="section-shell"
      aria-labelledby="about-heading"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeader
            id="about-heading"
            eyebrow={t("Sobre mí")}
            title={t("Curiosidad técnica. Criterio de producto.")}
          >
            {t(
              "Me interesa el software que llega a alguien y le resuelve algo. Por eso trabajo de la interfaz al dato, y disfruto especialmente cuando el problema mezcla web, IA o hardware.",
            )}
          </SectionHeader>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div>
            <Reveal delay={60}>
              <div className="space-y-5 text-[1.0625rem] leading-[1.85] text-muted">
                <p>
                  {t(
                    "Soy Rover, licenciado en Ingeniería de Sistemas Informáticos (Univalle, 2026). Mi proyecto de grado,",
                  )}{" "}
                  <strong className="font-medium text-ink">
                    {"BoviSense"}
                  </strong>
                  {t(
                    ", me llevó de la visión por computadora en una Jetson hasta una app Flutter y un backend en Node. Ahí entendí que el software útil vive en la intersección entre producto, datos e infraestructura.",
                  )}
                </p>
                <p>
                  {t(
                    "Antes de eso construí sistemas de gestión, una bóveda de credenciales y una plataforma de análisis de sentimiento. En todos el patrón fue el mismo:",
                  )}{" "}
                  <strong className="font-medium text-ink">
                    {t(
                      "entender el problema, reducir el alcance y entregar algo que funcione",
                    )}
                  </strong>
                  .
                </p>
                <p>
                  {t(
                    "Busco mi primer rol full stack en un equipo que construya producto, revise código y dé feedback directo. Trabajo remoto o desde Cochabamba.",
                  )}
                </p>
              </div>
            </Reveal>

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {principles.map(({ icon: Icon, title, text }, index) => (
                <Reveal key={t(title)} delay={100 + index * 60}>
                  <article className="principle-card">
                    <span className="principle-icon">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <h3>{t(title)}</h3>
                    <p>{t(text)}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={140}>
            <aside className="about-panel">
              <div className="about-orbit" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="about-monogram" aria-hidden="true">
                {profile.initials}
              </div>
              <p className="eyebrow">{t("Lo que busco")}</p>
              <h3 className="mt-3 font-heading text-2xl font-semibold leading-tight tracking-[-0.04em] text-ink">
                {t(
                  "Mi primer rol full stack, en un equipo que construya en serio.",
                )}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {t(
                  "Me interesa participar desde el diseño de la solución hasta el deploy. Aprendo rápido, pido feedback y documento lo que hago.",
                )}
              </p>

              <dl className="about-facts">
                <div>
                  <dt>{t("Disponibilidad")}</dt>
                  <dd>{profile.availability}</dd>
                </div>
                <div>
                  <dt>{t("Modalidad")}</dt>
                  <dd>{profile.workModes}</dd>
                </div>
                <div>
                  <dt>{t("Idiomas")}</dt>
                  <dd>{profile.languages}</dd>
                </div>
              </dl>

              <a
                className="btn btn-primary mt-6 w-full"
                href={profile.cvUrl}
                download="Rover-Serrano-CV.pdf"
              >
                <Download size={16} aria-hidden="true" />
                {t("Descargar CV")}
              </a>
              <a className="about-link" href="#contacto">
                {t("Hablemos de una oportunidad")}
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
