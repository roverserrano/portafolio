export default function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="mb-12 max-w-2xl">
      <span className="mb-4 inline-flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent-warm">
        <span className="h-px w-8 rounded-full bg-accent-warm/50" />
        {eyebrow}
      </span>
      <h2 className="font-heading text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-[1.1] tracking-[-0.02em] text-text-primary">
        {title}
      </h2>
      {children ? <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">{children}</p> : null}
    </div>
  );
}