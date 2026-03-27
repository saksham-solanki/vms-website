/**
 * Hand-crafted SVG illustrations for product modules.
 * Midnight/cyan palette with detailed vector art.
 */

export function VisitorIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Kiosk device */}
      <rect x="110" y="20" width="100" height="160" rx="12" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
      <rect x="118" y="30" width="84" height="120" rx="6" fill="white" stroke="#E2E8F0" strokeWidth="0.5" />

      {/* Screen content - check-in form */}
      <rect x="126" y="42" width="68" height="8" rx="4" fill="#0A0F1C" />
      <text x="160" y="49" fill="white" fontSize="5" fontFamily="system-ui" fontWeight="600" textAnchor="middle">Welcome to VMS</text>

      {/* Avatar placeholder */}
      <circle cx="160" cy="72" r="14" fill="rgba(0,212,170,0.12)" />
      <circle cx="160" cy="69" r="5" fill="#00D4AA" opacity="0.5" />
      <path d="M150 82 C150 77 154 74 160 74 C166 74 170 77 170 82" fill="#00D4AA" opacity="0.3" />

      {/* Form fields */}
      <rect x="132" y="94" width="56" height="8" rx="3" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="0.5" />
      <rect x="132" y="106" width="56" height="8" rx="3" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="0.5" />

      {/* Check-in button */}
      <rect x="132" y="122" width="56" height="14" rx="5" fill="#00D4AA" />
      <text x="160" y="132" fill="white" fontSize="6" fontFamily="system-ui" fontWeight="600" textAnchor="middle">Check In</text>

      {/* Camera indicator */}
      <circle cx="160" cy="165" r="3" fill="#CBD5E1" />

      {/* Stand */}
      <rect x="150" y="180" width="20" height="4" rx="2" fill="#CBD5E1" />
      <rect x="156" y="184" width="8" height="24" rx="2" fill="#E2E8F0" />
      <rect x="140" y="208" width="40" height="4" rx="2" fill="#CBD5E1" />

      {/* Person approaching */}
      <circle cx="52" cy="110" r="16" fill="#E2E8F0" />
      <circle cx="52" cy="106" r="6" fill="#94A3B8" />
      <path d="M40 122 C40 116 45 112 52 112 C59 112 64 116 64 122" fill="#94A3B8" opacity="0.5" />

      {/* Motion lines */}
      <line x1="72" y1="110" x2="98" y2="110" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
      <polygon points="98,106 106,110 98,114" fill="#00D4AA" opacity="0.5" />

      {/* Badge coming out */}
      <g>
        <rect x="230" y="80" width="52" height="36" rx="4" fill="white" stroke="#CBD5E1" strokeWidth="0.5" />
        <circle cx="243" cy="91" r="5" fill="rgba(0,212,170,0.15)" />
        <rect x="252" y="88" width="22" height="3" rx="1.5" fill="#0A0F1C" />
        <rect x="252" y="94" width="16" height="2" rx="1" fill="#94A3B8" />
        <rect x="235" y="103" width="40" height="2" rx="1" fill="#E2E8F0" />
        <rect x="235" y="108" width="30" height="2" rx="1" fill="#E2E8F0" />
      </g>
      <text x="256" y="128" fill="#64748B" fontSize="7" fontFamily="system-ui" textAnchor="middle">Badge printed</text>
    </svg>
  );
}

export function QueueIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Display board */}
      <rect x="60" y="20" width="200" height="120" rx="8" fill="#0A0F1C" />
      <rect x="68" y="28" width="184" height="104" rx="4" fill="#0F1629" />

      {/* Header */}
      <text x="160" y="46" fill="#94A3B8" fontSize="8" fontFamily="system-ui" fontWeight="600" textAnchor="middle" letterSpacing="2">NOW SERVING</text>

      {/* Current token */}
      <text x="160" y="80" fill="#00D4AA" fontSize="36" fontFamily="system-ui" fontWeight="700" textAnchor="middle">A-024</text>

      {/* Counter info */}
      <text x="160" y="100" fill="#64748B" fontSize="9" fontFamily="system-ui" textAnchor="middle">Counter 3 - Registration</text>

      {/* Queue list */}
      <rect x="76" y="108" width="168" height="16" rx="4" fill="#0A0F1C" />
      <text x="84" y="119" fill="#475569" fontSize="7" fontFamily="system-ui">Next: A-025, A-026, A-027</text>
      <text x="236" y="119" fill="#00D4AA" fontSize="7" fontFamily="system-ui" textAnchor="end">~3 min</text>

      {/* Stand */}
      <rect x="145" y="140" width="30" height="4" rx="2" fill="#334155" />
      <rect x="157" y="144" width="6" height="30" rx="2" fill="#475569" />
      <rect x="140" y="174" width="40" height="4" rx="2" fill="#334155" />

      {/* People in queue */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <circle cx={70 + i * 40} cy={210} r={10} fill="#E2E8F0" />
          <circle cx={70 + i * 40} cy={207} r={4} fill="#94A3B8" />
          <path d={`M${62 + i * 40} 218 C${62 + i * 40} 214 ${66 + i * 40} 212 ${70 + i * 40} 212 C${74 + i * 40} 212 ${78 + i * 40} 214 ${78 + i * 40} 218`} fill="#94A3B8" opacity="0.4" />
          <rect x={64 + i * 40} y={224} width={12} height={8} rx={2} fill="rgba(0,212,170,0.12)" />
          <text x={70 + i * 40} y={231} fill="#00D4AA" fontSize="5" fontFamily="system-ui" fontWeight="700" textAnchor="middle">A-{25 + i}</text>
        </g>
      ))}

      {/* Arrow showing flow direction */}
      <path d="M200 210 L240 210" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
      <polygon points="240,206 248,210 240,214" fill="#00D4AA" opacity="0.5" />

      {/* Served person */}
      <circle cx="270" cy="210" r="10" fill="rgba(0,212,170,0.15)" />
      <circle cx="270" cy="207" r="4" fill="#00D4AA" opacity="0.6" />
      <path d="M262 218 C262 214 266 212 270 212 C274 212 278 214 278 218" fill="#00D4AA" opacity="0.3" />
    </svg>
  );
}

export function SecurityShieldIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Main shield */}
      <path
        d="M100 16 L36 44 V96 C36 136 64 172 100 184 C136 172 164 136 164 96 V44 L100 16Z"
        fill="#F8FAFC"
        stroke="#CBD5E1"
        strokeWidth="1.5"
      />

      {/* Inner shield */}
      <path
        d="M100 32 L52 54 V96 C52 128 72 158 100 168 C128 158 148 128 148 96 V54 L100 32Z"
        fill="rgba(0,212,170,0.06)"
        stroke="rgba(0,212,170,0.3)"
        strokeWidth="1"
      />

      {/* Checkmark */}
      <path
        d="M78 96 L92 110 L124 78"
        stroke="#00D4AA"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Decorative elements */}
      <circle cx="100" cy="148" r="3" fill="#00D4AA" opacity="0.3" />
      <circle cx="90" cy="142" r="2" fill="#00D4AA" opacity="0.2" />
      <circle cx="110" cy="142" r="2" fill="#00D4AA" opacity="0.2" />

      {/* Lock at top */}
      <rect x="92" y="8" width="16" height="12" rx="3" fill="#0A0F1C" />
      <path d="M96 8 V4 C96 1.8 97.8 0 100 0 C102.2 0 104 1.8 104 4 V8" stroke="#0A0F1C" strokeWidth="1.5" fill="none" />
    </svg>
  );
}
