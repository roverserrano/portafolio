import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mi", href: "#sobre-mi" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Formacion", href: "#formacion" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar({ profile }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Navegacion principal">
        <a href="#inicio" className="group flex items-center gap-3" aria-label="Ir al inicio">
          <span className="grid h-11 w-11 place-items-center rounded-lg border border-cyanTech/40 bg-cyanTech/10 font-heading text-sm font-extrabold text-cyanTech transition group-hover:bg-cyanTech/15">
            RS
          </span>
          <span className="min-w-0">
            <span className="block truncate font-heading text-base font-extrabold text-white">{profile.name}</span>
            <span className="hidden text-xs font-semibold text-slate-400 sm:block">{profile.shortTitle}</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-bold text-slate-300 transition hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyanTech/60"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyanTech/60 lg:hidden"
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-navy/95 px-5 py-4 shadow-soft lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm font-bold text-slate-200 transition hover:bg-white/5"
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
