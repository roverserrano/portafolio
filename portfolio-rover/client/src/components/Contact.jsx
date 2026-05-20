import { Github, Linkedin, MessageCircle, MapPin } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";

export default function Contact({ profile }) {
  const links = [
    { label: "GitHub", value: profile.github.replace("https://", ""), href: profile.github, icon: Github },
    { label: "LinkedIn", value: profile.linkedin.replace("https://", ""), href: profile.linkedin, icon: Linkedin },
    { label: "WhatsApp", value: `+${profile.whatsapp}`, href: `https://wa.me/${profile.whatsapp}?text=Hola%20Rover,%20vi%20tu%20portafolio%20y%20quiero%20contactarte.`, icon: MessageCircle },
    { label: "Ubicacion", value: profile.location, href: "#contacto", icon: MapPin },
  ];

  return (
    <section id="contacto" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Contacto" title="Contacto">
          Si el proyecto requiere construir, aprender rapido y documentar bien, puedo aportar desde una base tecnica honesta.
        </SectionHeader>

        <div className="mx-auto max-w-3xl">
          <aside className="rounded-lg border border-white/10 bg-slatePanel/60 p-6 shadow-card">
            <h3 className="font-heading text-2xl font-extrabold text-white">Canales de contacto</h3>
            <div className="mt-5 grid gap-3">
              {links.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-navy/60 p-4 transition hover:-translate-y-0.5 hover:border-cyanTech/40"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-cyanTech/10 text-cyanTech">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-bold text-white">{label}</span>
                    <span className="block truncate text-sm text-slate-400">{value}</span>
                  </span>
                </a>
              ))}
            </div>
            <a
              href={`https://wa.me/${profile.whatsapp}?text=Hola%20Rover,%20vi%20tu%20portafolio%20y%20quiero%20contactarte.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 w-full sm:w-auto"
            >
              Contactar por WhatsApp
              <MessageCircle size={18} aria-hidden="true" />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
