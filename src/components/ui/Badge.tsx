interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "accent" | "success";
  className?: string;
}

const variants = {
  default: "bg-neutral-100 text-neutral-600",
  primary: "bg-primary-50 text-primary-700",
  accent: "bg-accent-100 text-accent-800",
  success: "bg-success-light text-success",
};

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold font-heading ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
