import { clsx } from "clsx";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "light" | "tint" | "dark" | "gradient" | "mesh";
  spacing?: "sm" | "md" | "lg";
}

const backgrounds = {
  white: "bg-white",
  light: "bg-slate-50",
  tint: "bg-cyan-50/30",
  dark: "bg-slate-900 text-white",
  gradient: "bg-gradient-to-b from-white to-slate-50",
  mesh: "bg-white gradient-mesh",
};

const spacings = {
  sm: "py-10 md:py-12",
  md: "py-12 md:py-16",
  lg: "py-14 md:py-20",
};

export function Section({
  children,
  className = "",
  id,
  background = "light",
  spacing = "md",
}: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(spacings[spacing], backgrounds[background], className)}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={clsx(
      "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 mb-6",
      className
    )}>
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
      className={clsx(
        "text-3xl md:text-5xl lg:text-[56px] font-bold text-slate-950 leading-[1.05] tracking-[-0.03em]",
        className
      )}
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
      className={clsx(
        "mt-5 text-lg text-slate-500 max-w-2xl leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  );
}
