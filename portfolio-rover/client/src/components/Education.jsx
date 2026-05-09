import { GraduationCap } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";

export default function Education() {
  return (
    <section id="formacion" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Formacion academica" title="Ingenieria de Sistemas Informaticos">
          Base universitaria orientada a software, datos, infraestructura, IA aplicada y soluciones tecnologicas.
        </SectionHeader>

        <article className="rounded-lg border border-white/10 bg-slatePanel/60 p-6 shadow-card sm:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-start">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-cyanTech/10 text-cyanTech">
              <GraduationCap size={28} aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-heading text-2xl font-extrabold text-white">Universidad Privada del Valle - Univalle</h3>
              <p className="mt-2 text-lg font-bold text-cyan-100">Ingenieria de Sistemas Informáticos</p>
              <p className="mt-2 text-slate-300">Feb 2021 - Actualidad | Ultimo semestre | Cochabamba, Bolivia</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Desarrollo de software", "IA aplicada", "Sistemas embebidos", "Documentacion tecnica"].map((item) => (
                  <span key={item} className="rounded-lg border border-white/10 bg-navy/60 px-3 py-2 text-sm font-bold text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
