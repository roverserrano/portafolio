import { GraduationCap } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";

export default function Education() {
  return (
    <section id="formacion" className="section-shell">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeader eyebrow="Formación" title="Educación y certificaciones">
          Grado universitario completado + formación continua en cloud, seguridad y desarrollo.
        </SectionHeader>

        <article className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-bg-panel/60 p-8 shadow-card sm:p-10">
          <div className="absolute left-0 top-10 h-[calc(100%-80px)] w-[3px] bg-gradient-to-b from-accent-warm to-transparent" />
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-accent-warm/15 bg-accent-warm/10 text-accent-warm">
              <GraduationCap size={26} aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-heading text-2xl font-bold text-text-primary">
                Universidad Privada del Valle — Univalle
              </h3>
              <p className="mt-1 text-lg font-semibold text-accent-cool">
                Licenciatura en Ingeniería de Sistemas Informáticos
              </p>
              <p className="mt-1 text-text-muted">Febrero 2020 — Julio 2026 · Cochabamba, Bolivia</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Desarrollo de software", "IA aplicada", "Sistemas embebidos", "Documentación técnica"].map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2 text-xs font-medium text-text-secondary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: "📱", title: "Desarrollo", items: "Flutter Auth · Git Avanzado · React desde Cero" },
            { icon: "☁️", title: "Cloud Computing", items: "AWS Cloud Practitioner · Huawei HCIA-Cloud · Skillshop" },
            { icon: "🔒", title: "Ciberseguridad", items: "Ethical Hacking · Red Team Ofensivo · Seguridad Web" },
          ].map((cert) => (
            <div
              key={cert.title}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition hover:border-accent-warm/15"
            >
              <h4 className="mb-2 flex items-center gap-2 font-heading text-sm font-bold text-text-primary">
                <span>{cert.icon}</span>
                {cert.title}
              </h4>
              <p className="text-xs leading-relaxed text-text-muted">{cert.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}