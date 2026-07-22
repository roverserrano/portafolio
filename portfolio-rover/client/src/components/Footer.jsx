export default function Footer({ profile }) {
  return (
    <footer className="border-t border-white/[0.06] bg-bg-primary py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name} — Hecho con café y curiosidad en Cochabamba
        </p>
        <div className="flex flex-wrap gap-6 font-medium">
          <a className="transition hover:text-accent-warm" href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a className="transition hover:text-accent-warm" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a
            className="transition hover:text-accent-warm"
            href={`https://wa.me/${profile.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}