import { ArrowRight, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero({ profile }) {
  const [typedTitle, setTypedTitle] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (!profile.title) return;
    let index = 0;
    setTypedTitle("");
    const timer = setInterval(() => {
      index += 1;
      setTypedTitle(profile.title.slice(0, index));
      if (index >= profile.title.length) clearInterval(timer);
    }, 45);
    return () => clearInterval(timer);
  }, [profile.title]);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(212,165,116,0.1),transparent_35%),radial-gradient(circle_at_85%_10%,rgba(124,156,181,0.08),transparent_30%)]" />
      <div className="tech-grid absolute inset-0 -z-10 opacity-60" />

      <div className="mx-auto grid w-full max-w-7xl gap-16 px-6 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
        <div className="min-w-0 animate-fade-up">
          <div className="mb-6 flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent-warm">
            <span className="h-px w-6 bg-accent-warm/60" />
            Desarrollador Full Stack
          </div>

          <h1 className="mt-2 max-w-4xl font-heading text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-text-primary">
            Construyo soluciones
            <br />
            <span className="font-light italic text-accent-warm">que funcionan</span> en
            <br />
            el mundo real.
          </h1>

          <p className="mt-6 max-w-full font-heading text-xl font-medium text-accent-cool sm:max-w-2xl sm:text-2xl">
            {typedTitle}
            <span
              className={`ml-1 inline-block h-[1.1em] w-[3px] bg-accent-warm align-middle transition-opacity duration-100 ${
                showCursor ? "opacity-100" : "opacity-0"
              }`}
            />
          </p>

          <p className="mt-6 max-w-full break-words text-base leading-[1.8] text-text-secondary sm:max-w-xl sm:text-lg">
            {profile.phrase}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href="#proyectos">
              Ver proyectos
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="btn-secondary" href="#contacto">
              Hablemos
              <MessageCircle size={17} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="relative hidden min-h-[420px] lg:block" aria-hidden="true">
          <div className="absolute right-4 top-6 h-64 w-64 rounded-full border border-accent-warm/10 bg-accent-warm/[0.04] blur-3xl" />
          <div className="absolute bottom-8 left-4 h-56 w-56 rounded-full border border-accent-cool/10 bg-accent-cool/[0.04] blur-3xl" />

          <div className="relative ml-auto mt-8 w-full max-w-md overflow-hidden rounded-xl border border-white/[0.06] bg-bg-panel/80 p-6 shadow-card backdrop-blur-sm">
            <div className="mb-5 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#e06c75]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#e5c07b]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#98c379]" />
            </div>
            <pre className="overflow-hidden font-mono text-[0.78rem] leading-[1.9] text-text-secondary">
              <code>
                <span className="text-[#c678dd]">const</span> rover = {"{"}
                {"\n"}  rol: <span className="text-[#98c379]">"Full Stack Dev"</span>,
                {"\n"}  ubicacion: <span className="text-[#98c379]">"Cochabamba, BO"</span>,
                {"\n"}  stack: [<span className="text-[#98c379]">"React"</span>, <span className="text-[#98c379]">"Flutter"</span>, <span className="text-[#98c379]">"Node"</span>, <span className="text-[#98c379]">"Python"</span>],
                {"\n"}  intereses: [<span className="text-[#98c379]">"Desarrollo"</span>, <span className="text-[#98c379]">"IA"</span>, <span className="text-[#98c379]">"Seguridad"</span>],
                {"\n"}  disponible: <span className="text-[#c678dd]">true</span>
                {"\n"}
                {"}"};
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}