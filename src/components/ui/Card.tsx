import { clsx } from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  padding?: "sm" | "md" | "lg";
}

export function Card({ children, className = "", hover = false, glow = false, padding = "md" }: CardProps) {
  const paddings = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={clsx(
        "rounded-2xl border border-slate-200/80 bg-white",
        paddings[padding],
        hover && "transition-all duration-300 hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.08)] hover:border-slate-300 hover:-translate-y-1",
        glow && "hover:shadow-[0_8px_30px_rgba(0,212,170,0.1)]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardIcon({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 mb-4",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={clsx("text-lg font-bold text-slate-900 font-heading", className)}>
      {children}
    </h3>
  );
}

export function CardDescription({ children }: { children: React.ReactNode }) {
  return <p className="mt-2 text-sm text-slate-500 leading-relaxed">{children}</p>;
}

export function BentoCard({
  children,
  className = "",
  span = "1",
}: {
  children: React.ReactNode;
  className?: string;
  span?: "1" | "2" | "row";
}) {
  const spans = {
    "1": "",
    "2": "md:col-span-2",
    row: "md:col-span-full",
  };

  return (
    <div
      className={clsx(
        "group rounded-2xl border border-slate-200/80 bg-white p-6 lg:p-8 transition-all duration-300 hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.08)] hover:border-slate-300",
        spans[span],
        className
      )}
    >
      {children}
    </div>
  );
}
