import { Cpu, Layers3, Sparkles } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";

const points = [
  {
    icon: Layers3,
    title: "Full stack con foco practico",
    text: "Construccion de interfaces, APIs, dashboards y flujos separados entre frontend y backend.",
  },
  {
    icon: Sparkles,
    title: "IA aplicada a problemas reales",
    text: "Trabajo academico con NLP, vision por computadora, modelos transformer y visualizacion de resultados.",
  },
  {
    icon: Cpu,
    title: "Integracion IoT y embebidos",
    text: "Experiencia integrando Jetson Orin Nano, ESP32, LoRa, BLE y comunicacion hardware-software.",
  },
];

export default function About() {
  return (
    <section id="sobre-mi" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Sobre mi" title="Perfil orientado a construir soluciones">
          Desarrollo proyectos reales con enfoque en producto, arquitectura y entrega de valor.
        </SectionHeader>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-lg border border-white/10 bg-slatePanel/60 p-6 shadow-card sm:p-8">
            <p className="text-lg leading-8 text-slate-200">
              Soy estudiante de ultimo semestre de Ingenieria de Sistemas y me enfoco en crear soluciones web, moviles e inteligentes que respondan a necesidades concretas. Trabajo en proyectos academicos y personales donde integro desarrollo full stack, inteligencia artificial aplicada e integracion hardware-software, cuidando tanto la calidad tecnica como la utilidad del producto. Busco aportar en equipos que valoren la ejecucion, la colaboracion y la mejora continua.
            </p>
          </article>

          <div className="grid gap-4">
            {points.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-cyanTech/40">
                <div className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-cyanTech/10 text-cyanTech">
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-extrabold text-white">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-400">{text}</p>
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
