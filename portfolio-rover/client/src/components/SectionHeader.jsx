export default function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="mb-10 max-w-3xl">
      <span className="mb-3 inline-flex items-center gap-2 text-sm font-extrabold uppercase text-cyanTech">
        <span className="h-0.5 w-7 rounded-full bg-cyanTech" />
        {eyebrow}
      </span>
      <h2 className="font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {children ? <p className="mt-4 text-lg leading-8 text-slate-400">{children}</p> : null}
    </div>
  );
}
