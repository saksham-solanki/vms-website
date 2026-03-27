"use client";

/**
 * Floating notification card - shows a host notification arriving.
 * Clean light theme with subtle shadow and white card.
 */
export function FloatingNotification({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 260 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`animate-float ${className}`}
      role="img"
      aria-label="Host notification: Rachel Morrison has arrived"
    >
      <defs>
        <filter id="notif-shadow" x="-8" y="-4" width="276" height="92" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.1" />
        </filter>
        <linearGradient id="notif-bg" x1="0" y1="0" x2="260" y2="76" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="100%" stopColor="#F8FAFC" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* Card background */}
      <rect x="4" y="4" width="252" height="68" rx="16" fill="url(#notif-bg)" filter="url(#notif-shadow)" />
      <rect x="4" y="4" width="252" height="68" rx="16" stroke="rgba(226,232,240,0.8)" strokeWidth="1" />

      {/* Cyan accent indicator */}
      <circle cx="28" cy="38" r="12" fill="rgba(0,212,170,0.1)" />
      <path d="M23 38 L26.5 41.5 L33 35" stroke="#00D4AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* Text content */}
      <text x="48" y="32" fill="#0F172A" fontSize="12" fontFamily="system-ui" fontWeight="600">Host Notified</text>
      <text x="48" y="49" fill="#64748B" fontSize="10" fontFamily="system-ui">Rachel Morrison has arrived</text>

      {/* Time */}
      <text x="232" y="30" fill="#94A3B8" fontSize="8" fontFamily="system-ui" textAnchor="end">just now</text>

      {/* Pulse indicator */}
      <circle cx="240" cy="46" r="4" fill="#00D4AA" opacity="0.6">
        <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
