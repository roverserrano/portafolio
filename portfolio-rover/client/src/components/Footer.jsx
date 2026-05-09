export default function Footer({ profile }) {
  return (
    <footer className="border-t border-white/10 bg-[#08111f] py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex flex-wrap gap-4 font-bold">
          <a className="transition hover:text-cyanTech" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="transition hover:text-cyanTech" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="transition hover:text-cyanTech" href={`https://wa.me/${profile.whatsapp}?text=Hola%20Rover,%20vi%20tu%20portafolio%20y%20quiero%20contactarte.`} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
