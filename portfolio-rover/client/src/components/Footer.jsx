import { useI18n } from "../i18n/LanguageProvider.jsx";
import {
  ArrowUp,
  Download,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
const footerLinks = [
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
export default function Footer({ profile }) {
  const { t } = useI18n();
  return (
    <footer className="site-footer">
      <div className="container-page">
        <div className="footer-top">
          <div className="footer-brand-wrap">
            <a href="#inicio" className="footer-brand">
              <span className="brand-mark">{profile.initials}</span>
              <span className="sr-only">{t("Volver al inicio")}</span>
              <span>
                <strong>{profile.name}</strong>
                <span>
                  {profile.role} {t("· Cochabamba")}
                </span>
              </span>
            </a>
            <span className="footer-status">
              <span className="status-dot" aria-hidden="true" />
              {profile.availability}
            </span>
          </div>

          <nav
            className="footer-nav"
            aria-label={t("Navegación del pie de página")}
          >
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {t(link.label)}
              </a>
            ))}
            <a
              href={profile.cvUrl}
              download="Rover-Serrano-CV.pdf"
              className="footer-cv"
            >
              <Download size={13} aria-hidden="true" />
              {t("CV")}
            </a>
          </nav>

          <div className="footer-social" aria-label={t("Redes y contacto")}>
            <a
              href={`mailto:${profile.email}`}
              aria-label={t("Enviar un correo")}
              title={t("Email")}
            >
              <Mail size={16} aria-hidden="true" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("GitHub de Rover Serrano")}
              title={"GitHub"}
            >
              <Github size={16} aria-hidden="true" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("LinkedIn de Rover Serrano")}
              title={"LinkedIn"}
            >
              <Linkedin size={16} aria-hidden="true" />
            </a>
            <a
              href={`https://wa.me/${profile.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("Escribir por WhatsApp")}
              title={"WhatsApp"}
            >
              <MessageCircle size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {profile.name}
            {t(". Diseñado y construido con React y Tailwind.")}
          </p>
          <div className="footer-bottom-meta">
            <span>
              {profile.location} · {profile.timezone}
            </span>
            <a href="#inicio" className="footer-top-link">
              {t("Volver arriba")}
              <ArrowUp size={13} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
