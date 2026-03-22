import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "white";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-500 text-neutral-950 hover:bg-accent-600 shadow-sm hover:shadow-md font-semibold",
  secondary:
    "bg-primary-700 text-white hover:bg-primary-800 shadow-sm hover:shadow-md font-semibold",
  outline:
    "border-2 border-primary-700 text-primary-700 hover:bg-primary-50 font-semibold",
  ghost:
    "text-primary-700 hover:text-primary-800 hover:bg-primary-50 font-medium",
  white:
    "bg-white text-neutral-900 hover:bg-neutral-100 shadow-sm font-semibold",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-sm rounded-xl",
  lg: "px-8 py-4 text-base rounded-xl",
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
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer select-none";
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
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
      {children}
    </button>
  );
}
