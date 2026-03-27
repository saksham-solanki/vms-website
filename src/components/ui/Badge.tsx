import { clsx } from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "accent" | "success" | "glow" | "outline";
  className?: string;
}

const variants = {
  default: "bg-slate-100 text-slate-600",
  primary: "bg-slate-100 text-slate-700 ring-1 ring-slate-200/50",
  accent: "bg-cyan-50 text-cyan-700 ring-1 ring-cyan-200/50",
  success: "bg-success-light text-success",
  glow: "bg-cyan-500/10 text-cyan-600 ring-1 ring-cyan-500/20",
  outline: "bg-transparent text-slate-600 ring-1 ring-slate-200",
};

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold font-heading",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
