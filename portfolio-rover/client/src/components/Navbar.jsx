import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Stack", href: "#habilidades" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Formación", href: "#formacion" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar({ profile }) {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.href.slice(1));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-bg-primary/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8" aria-label="Navegación principal">
        <a href="#inicio" className="group flex items-center gap-3" aria-label="Ir al inicio">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent-warm/30 bg-accent-warm/10 font-mono text-xs font-bold text-accent-warm transition group-hover:bg-accent-warm/15">
            RS
          </span>
          <span className="min-w-0">
            <span className="block truncate font-heading text-sm font-bold text-text-primary">{profile.name}</span>
            <span className="hidden text-[0.7rem] font-semibold text-text-muted sm:block">{profile.shortTitle}</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative rounded-lg px-3 py-2 text-sm font-medium transition ${
                activeSection === item.href.slice(1)
                  ? "text-text-primary"
                  : "text-text-muted hover:text-text-primary"
              }`}
            >
              {item.label}
              {activeSection === item.href.slice(1) && (
                <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-accent-warm" />
              )}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-text-primary transition hover:bg-white/[0.06] lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((c) => !c)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/[0.06] bg-bg-primary/95 px-6 py-4 shadow-soft lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-3 text-sm font-medium transition ${
                  activeSection === item.href.slice(1) ? "text-accent-warm" : "text-text-secondary"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}