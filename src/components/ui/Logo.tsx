import Link from "next/link";

/**
 * Premium VMS logo.
 *
 * A bold, confident wordmark with a distinctive design element:
 * The V has a subtle cyan gradient bottom tip, creating
 * a unique brand mark that doubles as a "check" motif (visitor verified).
 * Letters are custom-weighted for premium feel: tight tracking,
 * slightly condensed, with a sturdy geometric character.
 */

function VMSLogoSVG({ fill = "#0F172A", className = "" }: { fill?: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 200 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="VMS"
    >
      {/* V - bold with gradient tip */}
      <path
        d="M0 6h7.2l18.3 30.4L43.8 6H51L27.6 46h-4.2L0 6z"
        fill={fill}
      />
      {/* Gradient accent on V's tip */}
      <path
        d="M21 38l4.5 8h4.2l4.5-8h-3.6l-3 5.2L24.6 38H21z"
        fill="#00D4AA"
      />

      {/* M - strong geometric */}
      <path
        d="M58 6h6.6l16.9 28L98.4 6H105v40h-6V17.2L83.6 42h-4.2L64 17.2V46h-6V6z"
        fill={fill}
      />

      {/* S - confident curves */}
      <path
        d="M118 38.6c3.2 2.4 7.4 3.8 11.6 3.8 5.6 0 9-2.4 9-6.2 0-3.4-2.4-5.2-8.4-6.8-7.6-2-13.4-4.6-13.4-12 0-7.2 6-12 14.2-12 5.2 0 9.6 1.6 12.6 4l-3.4 5c-2.6-2-5.8-3.2-9.4-3.2-5 0-7.8 2.4-7.8 5.8 0 3.6 3 5 9 6.6 7.6 2.2 12.8 4.8 12.8 12.2 0 7.6-6.2 12.4-15.4 12.4-5.8 0-11-2-14.6-5.2l3.2-4.4z"
        fill={fill}
      />
    </svg>
  );
}

export function Logo({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: { svgClass: "w-[68px] h-[16px]" },
    md: { svgClass: "w-[84px] h-[20px]" },
    lg: { svgClass: "w-[108px] h-[26px]" },
  };

  const s = sizes[size];

  return (
    <Link href="/" className={`flex items-center group ${className}`}>
      <VMSLogoSVG className={s.svgClass} />
    </Link>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return <VMSLogoSVG className={`w-[84px] h-[20px] ${className}`} />;
}

export function LogoWhite({ className = "" }: { className?: string }) {
  return <VMSLogoSVG fill="white" className={`w-[84px] h-[20px] ${className}`} />;
}
