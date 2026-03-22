interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "light" | "tint" | "dark";
}

const backgrounds = {
  white: "bg-white",
  light: "bg-neutral-50",
  tint: "bg-primary-50",
  dark: "bg-neutral-900 text-white",
};

export function Section({
  children,
  className = "",
  id,
  background = "light",
}: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${backgrounds[background]} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-bold uppercase tracking-[1.5px] text-primary-700 font-heading mb-3">
      {children}
    </span>
  );
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-3xl md:text-4xl lg:text-[42px] font-extrabold text-neutral-900 leading-tight ${className}`}
    >
      {children}
    </h2>
  );
}

export function SectionDescription({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`mt-4 text-lg text-neutral-500 max-w-2xl leading-relaxed ${className}`}
    >
      {children}
    </p>
  );
}
