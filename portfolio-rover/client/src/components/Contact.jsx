import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Github, Linkedin, MessageCircle, MapPin, Mail, Send, CheckCircle, Loader2 } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";

export default function Contact({ profile }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [state, handleSubmit] = useForm("mlgqlvwg");

  const links = [
    { label: "GitHub", value: "github.com/roverserrano", href: profile.github, icon: Github },
    { label: "LinkedIn", value: "linkedin.com/in/rover-serrano", href: profile.linkedin, icon: Linkedin },
    { label: "WhatsApp", value: `+${profile.whatsapp}`, href: `https://wa.me/${profile.whatsapp}`, icon: MessageCircle },
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  ];

  const onSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
  };

  // Estado de éxito — mensaje de confirmación con carácter humano
  if (state.succeeded) {
    return (
      <section id="contacto" className="section-shell">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionHeader eyebrow="Contacto" title="Mensaje enviado">
            Gracias por escribir. Te respondo en menos de 24 horas.
          </SectionHeader>

          <div className="mx-auto max-w-xl rounded-xl border border-accent-green/20 bg-accent-green/[0.04] p-10 text-center shadow-card">
            <CheckCircle size={48} className="mx-auto mb-4 text-accent-green" />
            <h3 className="mb-2 font-heading text-xl font-bold text-text-primary">
              ¡Mensaje recibido!
            </h3>
            <p className="mb-6 text-text-secondary">
              Reviso el correo varias veces al día. Si es urgente, escríbeme por WhatsApp.
            </p>
            <a
              href={`https://wa.me/${profile.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex"
            >
              <MessageCircle size={16} />
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="section-shell">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeader eyebrow="Contacto" title="¿Tienes un proyecto o una vacante?">
          Si necesitas a alguien que construya, aprenda rápido y documente bien, escríbeme. Respondo en menos de 24 horas.
        </SectionHeader>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Formulario con Formspree */}
          <form onSubmit={onSubmit} className="rounded-xl border border-white/[0.06] bg-bg-panel/60 p-8 shadow-card">
            {/* Nombre (campo extra, Formspree lo captura automáticamente) */}
            <div className="mb-5">
              <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-text-secondary">
                Nombre
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="¿Cómo te llamas?"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="form-input"
              />
            </div>

            {/* Email (campo requerido por Formspree) */}
            <div className="mb-5">
              <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-text-secondary">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="tu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="form-input"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="mt-2 text-xs text-red-400"
              />
            </div>

            {/* Mensaje (campo requerido por Formspree) */}
            <div className="mb-6">
              <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-text-secondary">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Cuéntame sobre tu proyecto o la vacante..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="form-input min-h-[120px] resize-y"
              />
              <ValidationError
                prefix="Mensaje"
                field="message"
                errors={state.errors}
                className="mt-2 text-xs text-red-400"
              />
            </div>

            {/* Botón de envío con estados */}
            <button
              type="submit"
              disabled={state.submitting}
              className="btn-primary w-full"
            >
              {state.submitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar mensaje
                  <Send size={16} />
                </>
              )}
            </button>

            {/* Error general de Formspree */}
            {state.errors && state.errors.length > 0 && !state.errors.find(e => e.field) && (
              <p className="mt-3 text-xs text-red-400">
                Algo salió mal. Intenta de nuevo o escríbeme directamente por email.
              </p>
            )}
          </form>

          {/* Links de contacto */}
          <div className="flex flex-col gap-3">
            {links.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-bg-panel/60 p-5 transition hover:-translate-y-0.5 hover:border-accent-warm/15"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent-warm/10 text-accent-warm transition group-hover:bg-accent-warm/15">
                  <Icon size={19} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-text-primary">{label}</span>
                  <span className="block truncate font-mono text-xs text-text-muted">{value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}