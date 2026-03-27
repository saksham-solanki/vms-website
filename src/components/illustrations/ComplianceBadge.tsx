/**
 * Floating compliance badge - light theme
 * with GDPR, SOC 2, and AES-256 certification badges.
 */
export function ComplianceBadge({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`animate-float ${className}`}
      style={{ animationDelay: "1.2s" }}
      role="img"
      aria-label="GDPR and SOC 2 compliance certified"
    >
      <defs>
        <filter id="badge-shadow" x="-8" y="-4" width="236" height="92" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.1" />
        </filter>
        <linearGradient id="badge-bg" x1="0" y1="0" x2="220" y2="76" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="100%" stopColor="#F8FAFC" stopOpacity="1" />
        </linearGradient>
      </defs>

      <rect x="4" y="4" width="212" height="68" rx="16" fill="url(#badge-bg)" filter="url(#badge-shadow)" />
      <rect x="4" y="4" width="212" height="68" rx="16" stroke="rgba(226,232,240,0.8)" strokeWidth="1" />

      {/* Shield icon */}
      <path d="M30 18 L20 23 V33 C20 40 24 47 30 49 C36 47 40 40 40 33 V23 L30 18Z" fill="rgba(0,212,170,0.08)" stroke="#00D4AA" strokeWidth="1.2" />
      <path d="M26 33 L28.5 35.5 L34 30" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Compliance labels */}
      <text x="52" y="29" fill="#0F172A" fontSize="11" fontFamily="system-ui" fontWeight="600">Enterprise Security</text>

      {/* Badge pills */}
      <rect x="52" y="36" width="38" height="18" rx="9" fill="rgba(0,212,170,0.06)" stroke="rgba(0,212,170,0.2)" strokeWidth="0.5" />
      <text x="71" y="48" fill="#00D4AA" fontSize="8" fontFamily="system-ui" fontWeight="600" textAnchor="middle">GDPR</text>

      <rect x="94" y="36" width="38" height="18" rx="9" fill="rgba(59,130,246,0.06)" stroke="rgba(59,130,246,0.2)" strokeWidth="0.5" />
      <text x="113" y="48" fill="#3B82F6" fontSize="8" fontFamily="system-ui" fontWeight="600" textAnchor="middle">SOC 2</text>

      <rect x="136" y="36" width="48" height="18" rx="9" fill="rgba(148,163,184,0.08)" stroke="rgba(148,163,184,0.15)" strokeWidth="0.5" />
      <text x="160" y="48" fill="#94A3B8" fontSize="8" fontFamily="system-ui" fontWeight="600" textAnchor="middle">AES-256</text>
    </svg>
  );
}
