import { useI18n } from "../i18n/LanguageProvider.jsx";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
const navItems = [
  {
    label: "Inicio",
    href: "#inicio",
  },
  {
    label: "Proyectos",
    href: "#proyectos",
  },
  {
    label: "Sobre mí",
    href: "#sobre-mi",
  },
  {
    label: "Stack",
    href: "#stack",
  },
  {
    label: "Trayectoria",
    href: "#trayectoria",
  },
  {
    label: "Contacto",
    href: "#contacto",
  },
];
export default function Navbar({ profile }) {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const menuButton = useRef(null);
  const menuPanel = useRef(null);
  const firstLink = useRef(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      {
        rootMargin: "-24% 0px -62% 0px",
        threshold: [0, 0.2, 0.5],
      },
    );
    navItems.forEach((item) => {
      const element = document.getElementById(item.href.slice(1));
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLink.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
      if (event.key === "Tab") {
        const links = menuPanel.current?.querySelectorAll("a[href]");
        const first = links?.[0];
        const last = links?.[links.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          menuButton.current?.focus();
        } else if (
          event.shiftKey &&
          document.activeElement === menuButton.current
        ) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          menuButton.current?.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === menuButton.current
        ) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 1280) setOpen(false);
    };
    const onPointerDown = (event) => {
      if (
        menuPanel.current &&
        !menuPanel.current.contains(event.target) &&
        !menuButton.current?.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${scrolled ? "border-white/[0.08] bg-canvas/85 backdrop-blur-xl" : "border-transparent bg-transparent"}`}
    >
      <nav
        className="container-page flex h-[72px] items-center justify-between gap-6"
        aria-label={t("Navegación principal")}
      >
        <a
          href="#inicio"
          className="group flex min-w-0 items-center gap-3 rounded-lg"
        >
          <span className="brand-mark">{profile.initials}</span>
          <span className="sr-only">{t("Ir al inicio")}</span>
          <span className="min-w-0">
            <span className="block truncate font-heading text-sm font-semibold tracking-[-0.02em] text-ink">
              {profile.name}
            </span>
            <span className="hidden text-[0.8125rem] font-medium tracking-[0.03em] text-subtle sm:block">
              {profile.role}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? "is-active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {t(item.label)}
              </a>
            );
          })}
        </div>

        <div className="nav-actions flex items-center gap-2">
          <LanguageSwitcher />
          <a
            className="nav-cv btn btn-secondary hidden h-10 px-4 text-sm sm:inline-flex"
            href={profile.cvUrl}
            download="Rover-Serrano-CV.pdf"
          >
            <Download size={15} aria-hidden="true" />
            {t("CV")}
          </a>
          <button
            ref={menuButton}
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/[0.1] bg-white/[0.035] text-ink transition hover:bg-white/[0.07] xl:hidden"
            aria-label={open ? t("Cerrar menú") : t("Abrir menú")}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div
          id="mobile-menu"
          ref={menuPanel}
          className="mobile-menu min-h-[calc(100dvh-72px)] overflow-y-auto border-t border-white/[0.08] bg-canvas/[0.98] px-6 pb-8 pt-4 backdrop-blur-2xl xl:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-1">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                ref={index === 0 ? firstLink : undefined}
                href={item.href}
                className={`rounded-lg px-3 py-3 text-base font-medium transition ${activeSection === item.href.slice(1) ? "bg-accent/10 text-accent" : "text-muted hover:bg-white/[0.04] hover:text-ink"}`}
                onClick={() => setOpen(false)}
              >
                {t(item.label)}
              </a>
            ))}
            <a
              href={profile.cvUrl}
              download="Rover-Serrano-CV.pdf"
              className="btn btn-primary mt-3"
              onClick={() => setOpen(false)}
            >
              <Download size={16} aria-hidden="true" />
              {t("Descargar CV")}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
