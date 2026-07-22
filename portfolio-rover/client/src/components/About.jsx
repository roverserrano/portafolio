import { Cpu, Layers3, Sparkles } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";

const points = [
  {
    icon: Layers3,
    title: "Full stack con foco práctico",
    text: "Interfaces, APIs, dashboards y flujos bien separados entre frontend y backend. Código que otro pueda leer y mantener.",
  },
  {
    icon: Sparkles,
    title: "IA aplicada a problemas reales",
    text: "NLP, visión por computadora y modelos transformer. No teoría abstracta: modelos que clasifican, detectan y cuentan.",
  },
  {
    icon: Cpu,
    title: "Integración IoT y embebidos",
    text: "Jetson Orin Nano, ESP32, LoRa, BLE. Cuando el software necesita tocar hardware, no me asusto.",
  },
];

export default function About() {
  return (
    <section id="sobre-mi" className="section-shell">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeader eyebrow="Sobre mí" title="De la universidad a proyectos que resuelven problemas">
          Recién graduado de Ingeniería de Sistemas en Univalle. No me quedé en teoría: cada proyecto buscaba resolver algo concreto.
        </SectionHeader>

        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <article className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-bg-panel/70 p-8 shadow-card sm:p-10">
            <div className="absolute left-10 top-0 h-[2px] w-16 bg-accent-warm" />
            <div className="space-y-5">
              <p className="text-base leading-[1.85] text-text-secondary sm:text-lg">
                Durante la carrera me di cuenta de que lo que más me motiva no es escribir código por escribirlo, sino{" "}
                <strong className="font-semibold text-text-primary">
                  ver cómo una solución técnica mejora el trabajo de otra persona
                </strong>
                . Por eso mis proyectos van desde contar ganado con IA hasta detectar bots en redes sociales.
              </p>
              <p className="text-base leading-[1.85] text-text-secondary sm:text-lg">
                Me formé de forma autodidacta en{" "}
                <strong className="font-semibold text-text-primary">ciberseguridad</strong> (Red Team, ethical hacking) y{" "}
                <strong className="font-semibold text-text-primary">cloud computing</strong> (AWS, Huawei Cloud) porque creo que un buen desarrollador debe entender el stack completo, no solo su capa.{" "}
                <strong className="font-semibold text-text-primary">
                  Busco unirme a un equipo donde pueda aportar desde el día uno
                </strong>{" "}
                y seguir creciendo junto a personas que valoren la ejecución.
              </p>
            </div>
          </article>

          <div className="grid gap-4">
            {points.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:border-accent-warm/20"
              >
                <div className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent-warm/10 text-accent-warm transition group-hover:bg-accent-warm/15">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-bold text-text-primary">{title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}