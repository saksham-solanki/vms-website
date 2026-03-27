import Link from "next/link";
import { clsx } from "clsx";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "white" | "gradient";
type ButtonSize = "sm" | "md" | "lg" | "xl";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-slate-900 text-white hover:bg-slate-800 shadow-sm hover:shadow-md font-semibold",
  secondary:
    "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:shadow-[0_4px_16px_rgba(0,212,170,0.3)] shadow-sm font-semibold",
  outline:
    "border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 font-semibold",
  ghost:
    "text-cyan-600 hover:text-cyan-700 hover:bg-cyan-50 font-medium",
  white:
    "bg-white text-slate-900 hover:bg-slate-50 shadow-sm font-semibold ring-1 ring-slate-200/60",
  gradient:
    "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:shadow-[0_8px_24px_rgba(0,212,170,0.35)] shadow-md font-semibold",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg gap-1.5",
  md: "px-5 py-2.5 text-sm rounded-full gap-2",
  lg: "px-7 py-3.5 text-base rounded-full gap-2",
  xl: "px-8 py-4 text-lg rounded-full gap-2.5",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  icon,
  iconPosition = "right",
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center transition-all duration-300 cursor-pointer select-none hover:-translate-y-px active:translate-y-0",
    variants[variant],
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
