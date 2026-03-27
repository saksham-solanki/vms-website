/**
 * Premium check-in flow illustration - LIGHT THEME.
 * White cards with subtle borders and colored accents.
 */
export function CheckInFlowIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Four-step visitor check-in flow: Scan, Verify, Badge, Notify"
    >
      <defs>
        <linearGradient id="flow-connector" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00D4AA" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#00D4AA" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#00D4AA" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* Step 1: Scan */}
      <g>
        <rect x="20" y="32" width="140" height="140" rx="20" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <circle cx="90" cy="84" r="24" fill="#00D4AA" opacity="0.04" />
        <rect x="64" y="58" width="52" height="52" rx="4" fill="none" stroke="#CBD5E1" strokeWidth="1" />
        <rect x="68" y="62" width="18" height="18" rx="3" fill="#00D4AA" opacity="0.2" />
        <rect x="71" y="65" width="12" height="12" rx="2" fill="#00D4AA" />
        <rect x="94" y="62" width="18" height="18" rx="3" fill="#00D4AA" opacity="0.2" />
        <rect x="97" y="65" width="12" height="12" rx="2" fill="#00D4AA" />
        <rect x="68" y="88" width="18" height="18" rx="3" fill="#00D4AA" opacity="0.2" />
        <rect x="71" y="91" width="12" height="12" rx="2" fill="#00D4AA" />
        <rect x="94" y="88" width="8" height="8" rx="1" fill="#00D4AA" opacity="0.4" />
        <rect x="106" y="96" width="6" height="10" rx="1" fill="#00D4AA" opacity="0.3" />
        <rect x="94" y="100" width="10" height="6" rx="1" fill="#00D4AA" opacity="0.2" />
        <line x1="62" y1="84" x2="118" y2="84" stroke="#00D4AA" strokeWidth="2" opacity="0.6" strokeLinecap="round">
          <animate attributeName="y1" values="62;108;62" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="y2" values="62;108;62" dur="2.5s" repeatCount="indefinite" />
        </line>
        <circle cx="36" cy="46" r="10" fill="#00D4AA" />
        <text x="36" y="50" fill="white" fontSize="10" fontFamily="system-ui" fontWeight="700" textAnchor="middle">1</text>
        <text x="90" y="140" fill="#0F172A" fontSize="13" fontFamily="system-ui" fontWeight="700" textAnchor="middle">Scan</text>
        <text x="90" y="156" fill="#64748B" fontSize="10" fontFamily="system-ui" textAnchor="middle">QR code check-in</text>
      </g>

      {/* Connector 1 */}
      <line x1="168" y1="102" x2="210" y2="102" stroke="url(#flow-connector)" strokeWidth="2" strokeDasharray="6 4">
        <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.5s" repeatCount="indefinite" />
      </line>
      <circle cx="210" cy="102" r="4" fill="#00D4AA" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="1.5s" repeatCount="indefinite" />
      </circle>

      {/* Step 2: Verify */}
      <g>
        <rect x="220" y="32" width="140" height="140" rx="20" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <circle cx="290" cy="84" r="24" fill="#3B82F6" opacity="0.04" />
        <path d="M290 56 L264 68 V88 C264 102 276 114 290 118 C304 114 316 102 316 88 V68 L290 56Z" fill="rgba(59,130,246,0.04)" stroke="#3B82F6" strokeWidth="1.5" />
        <path d="M278 86 L286 94 L302 78" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="301" y="96" width="18" height="14" rx="3" fill="#F8FAFC" stroke="#3B82F6" strokeWidth="0.8" opacity="0.8" />
        <rect x="304" y="100" width="8" height="2" rx="1" fill="#3B82F6" opacity="0.4" />
        <rect x="304" y="104" width="12" height="2" rx="1" fill="#3B82F6" opacity="0.25" />
        <circle cx="236" cy="46" r="10" fill="#3B82F6" />
        <text x="236" y="50" fill="white" fontSize="10" fontFamily="system-ui" fontWeight="700" textAnchor="middle">2</text>
        <text x="290" y="140" fill="#0F172A" fontSize="13" fontFamily="system-ui" fontWeight="700" textAnchor="middle">Verify</text>
        <text x="290" y="156" fill="#64748B" fontSize="10" fontFamily="system-ui" textAnchor="middle">ID & NDA signing</text>
      </g>

      {/* Connector 2 */}
      <line x1="368" y1="102" x2="410" y2="102" stroke="url(#flow-connector)" strokeWidth="2" strokeDasharray="6 4">
        <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.5s" repeatCount="indefinite" />
      </line>
      <circle cx="410" cy="102" r="4" fill="#00D4AA" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="1.5s" repeatCount="indefinite" />
      </circle>

      {/* Step 3: Badge */}
      <g>
        <rect x="420" y="32" width="140" height="140" rx="20" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <circle cx="490" cy="84" r="24" fill="#00D4AA" opacity="0.04" />
        <rect x="466" y="54" width="48" height="62" rx="8" fill="rgba(0,212,170,0.03)" stroke="#00D4AA" strokeWidth="1.2" />
        <circle cx="490" cy="62" r="4" fill="none" stroke="#CBD5E1" strokeWidth="1" />
        <line x1="490" y1="54" x2="490" y2="46" stroke="#CBD5E1" strokeWidth="1" />
        <circle cx="490" cy="79" r="9" fill="rgba(0,212,170,0.06)" stroke="#00D4AA" strokeWidth="0.8" />
        <circle cx="490" cy="77" r="3.5" fill="#00D4AA" opacity="0.25" />
        <path d="M484 86c0-2.5 2.7-4.5 6-4.5s6 2 6 4.5" fill="#00D4AA" opacity="0.15" />
        <rect x="476" y="96" width="28" height="3" rx="1.5" fill="#00D4AA" opacity="0.3" />
        <rect x="478" y="102" width="24" height="2.5" rx="1.25" fill="#CBD5E1" />
        <rect x="480" y="108" width="20" height="2" rx="1" fill="#E2E8F0" />
        <circle cx="436" cy="46" r="10" fill="#00D4AA" />
        <text x="436" y="50" fill="white" fontSize="10" fontFamily="system-ui" fontWeight="700" textAnchor="middle">3</text>
        <text x="490" y="140" fill="#0F172A" fontSize="13" fontFamily="system-ui" fontWeight="700" textAnchor="middle">Badge</text>
        <text x="490" y="156" fill="#64748B" fontSize="10" fontFamily="system-ui" textAnchor="middle">Print in seconds</text>
      </g>

      {/* Connector 3 */}
      <line x1="568" y1="102" x2="610" y2="102" stroke="url(#flow-connector)" strokeWidth="2" strokeDasharray="6 4">
        <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.5s" repeatCount="indefinite" />
      </line>
      <circle cx="610" cy="102" r="4" fill="#00D4AA" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="1.5s" repeatCount="indefinite" />
      </circle>

      {/* Step 4: Notify */}
      <g>
        <rect x="620" y="32" width="140" height="140" rx="20" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <circle cx="690" cy="84" r="24" fill="#F59E0B" opacity="0.04" />
        <path d="M690 64 C690 58 695 52 702 52 C709 52 714 58 714 64 L714 78 L720 84 L664 84 L670 78 Z" fill="rgba(245,158,11,0.04)" stroke="#F59E0B" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="690" cy="92" r="4" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
        <circle cx="714" cy="56" r="6" fill="#F59E0B" opacity="0.6">
          <animate attributeName="r" values="4;8;4" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0.15;0.6" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="714" cy="56" r="3" fill="#F59E0B" />
        <rect x="668" y="100" width="44" height="6" rx="3" fill="rgba(245,158,11,0.06)" />
        <rect x="673" y="102" width="16" height="2" rx="1" fill="#F59E0B" opacity="0.25" />
        <circle cx="636" cy="46" r="10" fill="#F59E0B" />
        <text x="636" y="50" fill="white" fontSize="10" fontFamily="system-ui" fontWeight="700" textAnchor="middle">4</text>
        <text x="690" y="140" fill="#0F172A" fontSize="13" fontFamily="system-ui" fontWeight="700" textAnchor="middle">Notify</text>
        <text x="690" y="156" fill="#64748B" fontSize="10" fontFamily="system-ui" textAnchor="middle">Host gets alerted</text>
      </g>

      {/* Timing labels */}
      <text x="90" y="196" fill="#94A3B8" fontSize="9" fontFamily="system-ui" textAnchor="middle">0s</text>
      <text x="290" y="196" fill="#94A3B8" fontSize="9" fontFamily="system-ui" textAnchor="middle">5s</text>
      <text x="490" y="196" fill="#94A3B8" fontSize="9" fontFamily="system-ui" textAnchor="middle">8s</text>
      <text x="690" y="196" fill="#94A3B8" fontSize="9" fontFamily="system-ui" textAnchor="middle">12s</text>

      {/* Timeline bar */}
      <rect x="90" y="204" width="600" height="3" rx="1.5" fill="#E2E8F0" />
      <rect x="90" y="204" width="600" height="3" rx="1.5" fill="#00D4AA" opacity="0.3">
        <animate attributeName="width" values="0;600" dur="3s" repeatCount="indefinite" />
      </rect>
      <text x="400" y="218" fill="#94A3B8" fontSize="9" fontFamily="system-ui" textAnchor="middle">Total check-in time: under 15 seconds</text>
    </svg>
  );
}
