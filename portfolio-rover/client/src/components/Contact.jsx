import { useI18n } from "../i18n/LanguageProvider.jsx";
import { useForm } from "@formspree/react";
import { useEffect, useRef } from "react";
import { track } from "../analytics.js";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Download,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionHeader from "./SectionHeader.jsx";
function FieldError({ field, errors, id }) {
  const { t } = useI18n();
  if (!errors?.getFieldErrors(field).length) return null;
  return (
    <div id={id} className="form-error" role="alert">
      {t(
        field === "email"
          ? "Introduce un correo electrónico válido."
          : "Revisa este campo e inténtalo de nuevo.",
      )}
    </div>
  );
}
export default function Contact({ profile }) {
  const { t } = useI18n();
  const [state, handleSubmit, reset] = useForm("mlgqlvwg");
  const formRef = useRef(null);
  const successRef = useRef(null);
  useEffect(() => {
    if (state.succeeded) {
      track("contact_submit");
      successRef.current?.focus();
    }
  }, [state.succeeded]);
  useEffect(() => {
    if (state.errors) {
      const field = ["name", "email", "message"].find(
        (name) => state.errors.getFieldErrors(name).length,
      );
      if (field) formRef.current?.elements.namedItem(field)?.focus();
    }
  }, [state.errors]);
  const links = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}?subject=${encodeURIComponent(t("Oportunidad laboral"))}`,
      icon: Mail,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/rover-serrano",
      href: profile.linkedin,
      icon: Linkedin,
    },
    {
      label: "GitHub",
      value: "github.com/roverserrano",
      href: profile.github,
      icon: Github,
    },
    {
      label: "WhatsApp",
      value: `+${profile.whatsapp}`,
      href: `https://wa.me/${profile.whatsapp}`,
      icon: MessageCircle,
    },
  ];
  return (
    <div className="section-shell" aria-labelledby="contact-heading">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            id="contact-heading"
            eyebrow={t("Contacto")}
            title={t("Hablemos de lo que sigue.")}
          >
            {t(
              "Estoy disponible para roles full-time o remotos. Si te interesa mi perfil, escribime y te respondo en menos de 24 horas.",
            )}
          </SectionHeader>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
          <div className="space-y-4">
            <Reveal delay={60}>
              <div className="contact-availability">
                <div className="flex items-center gap-3">
                  <span className="status-dot" aria-hidden="true" />
                  <span className="font-mono text-[0.8125rem] uppercase tracking-[0.14em] text-mint">
                    {t("Disponible ahora")}
                  </span>
                </div>
                <h3>{profile.availability}</h3>
                <p>
                  {profile.workModes} · {profile.timezone}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="tech-tag">{t("Full stack")}</span>
                  <span className="tech-tag">{t("React / Node")}</span>
                  <span className="tech-tag">{t("IA aplicada")}</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="contact-links">
                {links.map(({ label, value, href, icon: Icon }) => (
                  <a
                    key={t(label)}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="contact-link group"
                  >
                    <span className="contact-link-icon">
                      <Icon size={17} aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-base font-medium text-ink">
                        {t(label)}
                      </span>
                      <span className="block truncate font-mono text-[0.8125rem] text-subtle">
                        {value}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={15}
                      className="shrink-0 text-subtle transition group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="contact-meta">
                <div>
                  <MapPin size={14} aria-hidden="true" />
                  <span>{profile.location}</span>
                </div>
                <div>
                  <Clock size={14} aria-hidden="true" />
                  <span>{profile.responseTime}</span>
                </div>
              </div>
              <a
                className="btn btn-secondary mt-4 w-full"
                href={profile.cvUrl}
                download="Rover-Serrano-CV.pdf"
              >
                <Download size={16} aria-hidden="true" />
                {t("Descargar CV")}
              </a>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="contact-form-card">
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <span className="eyebrow">{t("Mensaje directo")}</span>
                  <h3 className="mt-2 font-heading text-xl font-semibold tracking-[-0.03em] text-ink">
                    {t("Contame qué tenés en mente.")}
                  </h3>
                </div>
                <span className="hidden font-mono text-[0.8125rem] uppercase tracking-[0.12em] text-subtle sm:block">
                  {"24 h"}
                </span>
              </div>

              {state.succeeded ? (
                <div
                  ref={successRef}
                  tabIndex={-1}
                  className="form-success"
                  role="status"
                  aria-live="polite"
                >
                  <CheckCircle2
                    size={34}
                    className="text-mint"
                    aria-hidden="true"
                  />
                  <h4>{t("Mensaje recibido")}</h4>
                  <p>
                    {t(
                      "Gracias por escribir. Te respondo en menos de 24 horas. Si es urgente, podés escribirme por WhatsApp.",
                    )}
                  </p>
                  <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                    <a
                      className="btn btn-primary"
                      href={`https://wa.me/${profile.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle size={16} aria-hidden="true" />
                      {t("Escribir por WhatsApp")}
                    </a>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => reset()}
                    >
                      {t("Enviar otro mensaje")}
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  action="https://formspree.io/f/mlgqlvwg"
                  method="POST"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  aria-busy={state.submitting}
                >
                  <input
                    type="hidden"
                    name="_subject"
                    value={t("Nuevo contacto desde el portafolio")}
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="form-label" htmlFor="name">
                        {t("Nombre")}
                      </label>
                      <input
                        className="form-input"
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        aria-invalid={
                          state.errors?.getFieldErrors("name").length
                            ? true
                            : undefined
                        }
                        aria-describedby={
                          state.errors?.getFieldErrors("name").length
                            ? "name-error"
                            : undefined
                        }
                        placeholder={t("Tu nombre")}
                        required
                      />
                      <FieldError
                        prefix={t("Nombre")}
                        id="name-error"
                        field="name"
                        errors={state.errors}
                        className="form-error"
                      />
                    </div>
                    <div>
                      <label className="form-label" htmlFor="email">
                        {t("Email")}
                      </label>
                      <input
                        className="form-input"
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        aria-invalid={
                          state.errors?.getFieldErrors("email").length
                            ? true
                            : undefined
                        }
                        aria-describedby={
                          state.errors?.getFieldErrors("email").length
                            ? "email-error"
                            : undefined
                        }
                        placeholder={t("tu@email.com")}
                        required
                      />
                      <FieldError
                        prefix={t("Email")}
                        id="email-error"
                        field="email"
                        errors={state.errors}
                        className="form-error"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label" htmlFor="message">
                      {t("Mensaje")}
                    </label>
                    <textarea
                      className="form-input min-h-[148px] resize-y"
                      id="message"
                      name="message"
                      aria-invalid={
                        state.errors?.getFieldErrors("message").length
                          ? true
                          : undefined
                      }
                      aria-describedby={
                        state.errors?.getFieldErrors("message").length
                          ? "message-error"
                          : undefined
                      }
                      placeholder={t(
                        "Contame sobre el rol, el equipo o el proyecto...",
                      )}
                      required
                    />
                    <FieldError
                      prefix={t("Mensaje")}
                      id="message-error"
                      field="message"
                      errors={state.errors}
                      className="form-error"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-full"
                    disabled={state.submitting}
                  >
                    {state.submitting ? (
                      <>
                        <Loader2
                          size={16}
                          className="animate-spin"
                          aria-hidden="true"
                        />
                        {t("Enviando...")}
                      </>
                    ) : (
                      <>
                        {t("Enviar mensaje")}
                        <Send size={16} aria-hidden="true" />
                      </>
                    )}
                  </button>

                  {state.errors?.getFormErrors().length ? (
                    <p className="form-error" role="alert">
                      {t(
                        "Algo salió mal. Probá de nuevo o escribime directamente a",
                      )}{" "}
                      <a href={`mailto:${profile.email}`}>{profile.email}</a>.
                    </p>
                  ) : null}
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
