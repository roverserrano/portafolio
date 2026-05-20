import { Github, Linkedin, MessageCircle, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero({ profile }) {
  const [typedTitle, setTypedTitle] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTypedTitle(profile.title.slice(0, index));

      if (index >= profile.title.length) {
        window.clearInterval(timer);
      }
    }, 34);

    return () => window.clearInterval(timer);
  }, [profile.title]);

  const socialLinks = [
    { label: "GitHub", href: profile.github, icon: Github },
    { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
    { label: "WhatsApp", href: `https://wa.me/${profile.whatsapp}?text=Hola%20Rover,%20vi%20tu%20portafolio%20y%20quiero%20contactarte.`, icon: MessageCircle },
  ];

  return (
    <section id="inicio" className="relative isolate flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.14),transparent_28%)]" />
      <div className="tech-grid absolute inset-0 -z-10 opacity-70" />

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="hero-copy min-w-0 animate-fade-up">
          <h1 className="mt-7 max-w-4xl font-heading text-5xl font-extrabold leading-tight tracking-normal text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>

          <p className="typing-title mt-6 max-w-full font-heading text-xl font-extrabold text-cyanTech sm:max-w-3xl sm:text-2xl" aria-label={profile.title}>
            {typedTitle}
            <span className="typing-caret" aria-hidden="true" />
          </p>

          <p className="mt-6 max-w-full break-words text-base leading-8 text-slate-200 sm:max-w-3xl sm:text-xl">{profile.phrase}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="btn-secondary" href="#proyectos">
              Ver proyectos
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="btn-secondary" href="#contacto">
              Contactarme
              <MessageCircle size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3" aria-label="Links sociales">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-200 transition hover:-translate-y-0.5 hover:border-cyanTech/50 hover:text-cyanTech"
                aria-label={label}
              >
                <Icon size={19} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative hidden min-h-[460px] lg:block" aria-hidden="true">
          <div className="absolute right-0 top-8 h-72 w-72 rounded-full border border-cyanTech/20 bg-cyanTech/10 blur-2xl" />
          <div className="absolute bottom-12 left-6 h-64 w-64 rounded-full border border-greenTech/20 bg-greenTech/10 blur-2xl" />
          <div className="relative ml-auto mt-10 w-full max-w-md rounded-lg border border-white/10 bg-slatePanel/65 p-6 shadow-soft backdrop-blur">
            <div className="mb-5 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-300" />
              <span className="h-3 w-3 rounded-full bg-greenTech" />
            </div>
            <pre className="overflow-hidden text-sm leading-7 text-slate-300">
              <code>{`const rover = {
  stack: ["React", "Flutter", "Node", "Python"],
  enfoque: ["Desarrollo web y apps"],
  ubicacion: "Cochabamba, BO",
  objetivo: "Aportar desde el dia 1"
};`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
