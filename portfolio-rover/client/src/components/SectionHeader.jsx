export default function SectionHeader({
  eyebrow,
  title,
  children,
  id,
  align = "left",
  className = "",
}) {
  const alignment =
    align === "center" ? "mx-auto text-center items-center" : "items-start";

  return (
    <header className={`flex max-w-3xl flex-col ${alignment} ${className}`}>
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px w-8 bg-accent/60" aria-hidden="true" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2
        id={id}
        className="font-heading text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-ink text-balance"
      >
        {title}
      </h2>
      {children ? (
        <p className="mt-5 max-w-2xl text-base leading-[1.75] text-muted sm:text-lg">
          {children}
        </p>
      ) : null}
    </header>
  );
}
