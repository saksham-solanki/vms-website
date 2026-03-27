"use client";

/**
 * Premium dashboard mockup rendered in SVG - LIGHT THEME.
 * Clean white UI with subtle borders and professional typography.
 */
export function DashboardIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 960 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="VMS Dashboard showing visitor check-in, live status, and workplace analytics"
    >
      <defs>
        <filter id="card-shadow" x="-5%" y="-5%" width="110%" height="115%">
          <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor="#000" floodOpacity="0.06" />
        </filter>
        <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00D4AA" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#00D4AA" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Main container */}
      <rect width="960" height="600" rx="12" fill="#FFFFFF" />
      <rect width="960" height="600" rx="12" stroke="#E2E8F0" strokeWidth="1" />

      {/* Browser chrome */}
      <rect width="960" height="40" rx="12" fill="#F8FAFC" />
      <rect y="28" width="960" height="12" fill="#F8FAFC" />
      <line x1="0" y1="40" x2="960" y2="40" stroke="#E2E8F0" strokeWidth="1" />

      <circle cx="20" cy="20" r="5" fill="#FF5F57" />
      <circle cx="36" cy="20" r="5" fill="#FFBD2E" />
      <circle cx="52" cy="20" r="5" fill="#28CA41" />

      <rect x="200" y="10" width="360" height="20" rx="10" fill="#F1F5F9" />
      <text x="275" y="24" fill="#64748B" fontSize="9" fontFamily="ui-monospace, monospace">dashboard.visitormanagement.us</text>

      <rect x="870" y="12" width="56" height="16" rx="8" fill="rgba(0,212,170,0.08)" />
      <circle cx="882" cy="20" r="3" fill="#00D4AA">
        <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="890" y="24" fill="#028E76" fontSize="8" fontFamily="system-ui" fontWeight="500">Live</text>

      {/* Sidebar */}
      <rect y="40" width="200" height="560" fill="#F8FAFC" />
      <line x1="200" y1="40" x2="200" y2="600" stroke="#E2E8F0" strokeWidth="1" />

      <rect x="16" y="56" width="28" height="28" rx="8" fill="rgba(0,212,170,0.1)" />
      <path d="M30 63l-6 3v4.5c0 3.8 2.4 7.3 6 8.2 3.6-0.9 6-4.4 6-8.2V66l-6-3z" fill="none" stroke="#00D4AA" strokeWidth="1.2" />
      <path d="M27 71l2 2 4-4" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="54" y="75" fill="#0F172A" fontSize="13" fontFamily="system-ui" fontWeight="700">VMS</text>

      {/* Active nav */}
      <rect x="12" y="104" width="176" height="36" rx="8" fill="rgba(0,212,170,0.06)" />
      <rect x="12" y="104" width="3" height="36" rx="1.5" fill="#00D4AA" />
      <text x="48" y="126" fill="#028E76" fontSize="11" fontFamily="system-ui" fontWeight="600">Visitors</text>
      <rect x="148" y="114" width="28" height="16" rx="8" fill="rgba(0,212,170,0.1)" />
      <text x="162" y="125" fill="#028E76" fontSize="8" fontFamily="system-ui" fontWeight="700" textAnchor="middle">47</text>

      <text x="48" y="166" fill="#64748B" fontSize="11" fontFamily="system-ui" fontWeight="500">Queue</text>
      <text x="168" y="166" fill="#94A3B8" fontSize="9" fontFamily="system-ui">12</text>
      <text x="48" y="196" fill="#64748B" fontSize="11" fontFamily="system-ui" fontWeight="500">Attendance</text>
      <text x="168" y="196" fill="#94A3B8" fontSize="9" fontFamily="system-ui">89</text>
      <text x="48" y="226" fill="#64748B" fontSize="11" fontFamily="system-ui" fontWeight="500">Deliveries</text>
      <text x="168" y="226" fill="#94A3B8" fontSize="9" fontFamily="system-ui">5</text>
      <text x="48" y="256" fill="#64748B" fontSize="11" fontFamily="system-ui" fontWeight="500">Meeting Rooms</text>
      <text x="48" y="286" fill="#64748B" fontSize="11" fontFamily="system-ui" fontWeight="500">Desk Booking</text>

      <line x1="16" y1="312" x2="184" y2="312" stroke="#E2E8F0" strokeWidth="1" />
      <text x="48" y="338" fill="#94A3B8" fontSize="11" fontFamily="system-ui" fontWeight="500">Settings</text>

      <circle cx="32" cy="560" r="14" fill="#E2E8F0" />
      <circle cx="32" cy="556" r="5" fill="#CBD5E1" />
      <path d="M22 568c0-4 4.5-7 10-7s10 3 10 7" fill="#CBD5E1" />
      <text x="54" y="556" fill="#334155" fontSize="10" fontFamily="system-ui" fontWeight="500">Alex Chen</text>
      <text x="54" y="568" fill="#94A3B8" fontSize="8" fontFamily="system-ui">Admin</text>

      {/* Main content header */}
      <text x="224" y="76" fill="#0F172A" fontSize="18" fontFamily="system-ui" fontWeight="700">Visitors</text>
      <text x="224" y="92" fill="#94A3B8" fontSize="10" fontFamily="system-ui">Today, March 27, 2026</text>

      <rect x="760" y="56" width="80" height="32" rx="8" fill="rgba(0,212,170,0.08)" />
      <text x="800" y="76" fill="#028E76" fontSize="10" fontFamily="system-ui" fontWeight="600" textAnchor="middle">+ New Visit</text>
      <rect x="850" y="56" width="80" height="32" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
      <text x="890" y="76" fill="#64748B" fontSize="10" fontFamily="system-ui" fontWeight="500" textAnchor="middle">Export</text>

      {/* Stat cards */}
      <rect x="224" y="112" width="170" height="96" rx="10" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" filter="url(#card-shadow)" />
      <text x="240" y="136" fill="#94A3B8" fontSize="9" fontFamily="system-ui" fontWeight="500">VISITORS TODAY</text>
      <text x="240" y="168" fill="#0F172A" fontSize="32" fontFamily="system-ui" fontWeight="800">47</text>
      <rect x="288" y="152" width="40" height="18" rx="9" fill="rgba(0,212,170,0.08)" />
      <text x="308" y="164" fill="#028E76" fontSize="9" fontFamily="system-ui" fontWeight="600" textAnchor="middle">+12%</text>
      <polyline points="240,192 252,188 264,190 276,184 288,186 300,180 312,184 324,178 336,182 348,176 360,180 372,174 384,178" stroke="#00D4AA" strokeWidth="1.5" fill="none" opacity="0.5" strokeLinecap="round" strokeLinejoin="round" />

      <rect x="404" y="112" width="170" height="96" rx="10" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" filter="url(#card-shadow)" />
      <text x="420" y="136" fill="#94A3B8" fontSize="9" fontFamily="system-ui" fontWeight="500">AVG CHECK-IN</text>
      <text x="420" y="168" fill="#0F172A" fontSize="32" fontFamily="system-ui" fontWeight="800">12s</text>
      <rect x="474" y="152" width="44" height="18" rx="9" fill="rgba(59,130,246,0.08)" />
      <text x="496" y="164" fill="#3B82F6" fontSize="9" fontFamily="system-ui" fontWeight="600" textAnchor="middle">-23%</text>
      <circle cx="544" cy="170" r="18" fill="none" stroke="#E2E8F0" strokeWidth="3" />
      <circle cx="544" cy="170" r="18" fill="none" stroke="#3B82F6" strokeWidth="3" strokeDasharray="90 113" strokeLinecap="round" transform="rotate(-90, 544, 170)" />
      <text x="544" y="174" fill="#0F172A" fontSize="9" fontFamily="system-ui" fontWeight="700" textAnchor="middle">80%</text>

      <rect x="584" y="112" width="170" height="96" rx="10" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" filter="url(#card-shadow)" />
      <text x="600" y="136" fill="#94A3B8" fontSize="9" fontFamily="system-ui" fontWeight="500">COMPLIANCE</text>
      <text x="600" y="168" fill="#028E76" fontSize="32" fontFamily="system-ui" fontWeight="800">100%</text>
      <path d="M738 135l-8 4v6c0 5.2 3.4 10 8 11.4 4.6-1.4 8-6.2 8-11.4v-6l-8-4z" fill="rgba(0,212,170,0.06)" stroke="#00D4AA" strokeWidth="1" />
      <path d="M734 147l3 3 5-5" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

      <rect x="764" y="112" width="170" height="96" rx="10" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" filter="url(#card-shadow)" />
      <text x="780" y="136" fill="#94A3B8" fontSize="9" fontFamily="system-ui" fontWeight="500">ON-SITE NOW</text>
      <text x="780" y="168" fill="#0F172A" fontSize="32" fontFamily="system-ui" fontWeight="800">18</text>
      <circle cx="870" cy="162" r="10" fill="#F1F5F9" stroke="#FFFFFF" strokeWidth="2" />
      <circle cx="886" cy="162" r="10" fill="#F1F5F9" stroke="#FFFFFF" strokeWidth="2" />
      <circle cx="902" cy="162" r="10" fill="#F1F5F9" stroke="#FFFFFF" strokeWidth="2" />
      <text x="902" y="166" fill="#64748B" fontSize="8" fontFamily="system-ui" fontWeight="600" textAnchor="middle">+16</text>

      {/* Visitor table */}
      <text x="224" y="240" fill="#94A3B8" fontSize="9" fontFamily="system-ui" fontWeight="600" letterSpacing="1.5">RECENT VISITORS</text>

      <rect x="224" y="250" width="710" height="28" rx="6" fill="#F8FAFC" />
      <text x="244" y="268" fill="#94A3B8" fontSize="9" fontFamily="system-ui" fontWeight="600">VISITOR</text>
      <text x="440" y="268" fill="#94A3B8" fontSize="9" fontFamily="system-ui" fontWeight="600">COMPANY</text>
      <text x="610" y="268" fill="#94A3B8" fontSize="9" fontFamily="system-ui" fontWeight="600">HOST</text>
      <text x="750" y="268" fill="#94A3B8" fontSize="9" fontFamily="system-ui" fontWeight="600">STATUS</text>
      <text x="880" y="268" fill="#94A3B8" fontSize="9" fontFamily="system-ui" fontWeight="600">TIME</text>

      {/* Row 1 */}
      <rect x="224" y="284" width="710" height="52" rx="8" fill="#FFFFFF" stroke="#F1F5F9" strokeWidth="1" />
      <circle cx="252" cy="310" r="16" fill="rgba(0,212,170,0.06)" />
      <text x="246" y="314" fill="#028E76" fontSize="11" fontFamily="system-ui" fontWeight="700">RM</text>
      <text x="278" y="304" fill="#0F172A" fontSize="11" fontFamily="system-ui" fontWeight="600">Rachel Morrison</text>
      <text x="278" y="318" fill="#94A3B8" fontSize="9" fontFamily="system-ui">rachel@bridgewater.com</text>
      <text x="440" y="312" fill="#334155" fontSize="10" fontFamily="system-ui">Bridgewater Associates</text>
      <text x="610" y="312" fill="#64748B" fontSize="10" fontFamily="system-ui">David Kim</text>
      <rect x="740" y="300" width="72" height="22" rx="11" fill="rgba(0,212,170,0.08)" />
      <circle cx="754" cy="311" r="3" fill="#00D4AA" />
      <text x="762" y="315" fill="#028E76" fontSize="9" fontFamily="system-ui" fontWeight="600">Checked In</text>
      <text x="880" y="312" fill="#94A3B8" fontSize="10" fontFamily="system-ui">9:14 AM</text>

      {/* Row 2 */}
      <rect x="224" y="342" width="710" height="52" rx="8" fill="#FFFFFF" stroke="#F1F5F9" strokeWidth="1" />
      <circle cx="252" cy="368" r="16" fill="rgba(245,158,11,0.06)" />
      <text x="246" y="372" fill="#D97706" fontSize="11" fontFamily="system-ui" fontWeight="700">KT</text>
      <text x="278" y="362" fill="#0F172A" fontSize="11" fontFamily="system-ui" fontWeight="600">Kenji Tanaka</text>
      <text x="278" y="376" fill="#94A3B8" fontSize="9" fontFamily="system-ui">k.tanaka@meridian.io</text>
      <text x="440" y="370" fill="#334155" fontSize="10" fontFamily="system-ui">Meridian Dynamics</text>
      <text x="610" y="370" fill="#64748B" fontSize="10" fontFamily="system-ui">Sarah Park</text>
      <rect x="740" y="358" width="82" height="22" rx="11" fill="rgba(245,158,11,0.08)" />
      <circle cx="754" cy="369" r="3" fill="#F59E0B" />
      <text x="762" y="373" fill="#D97706" fontSize="9" fontFamily="system-ui" fontWeight="600">Pre-registered</text>
      <text x="880" y="370" fill="#94A3B8" fontSize="10" fontFamily="system-ui">10:00 AM</text>

      {/* Row 3 */}
      <rect x="224" y="400" width="710" height="52" rx="8" fill="#FFFFFF" stroke="#F1F5F9" strokeWidth="1" />
      <circle cx="252" cy="426" r="16" fill="rgba(59,130,246,0.06)" />
      <text x="246" y="430" fill="#2563EB" fontSize="11" fontFamily="system-ui" fontWeight="700">AL</text>
      <text x="278" y="420" fill="#0F172A" fontSize="11" fontFamily="system-ui" fontWeight="600">Amara Laurent</text>
      <text x="278" y="434" fill="#94A3B8" fontSize="9" fontFamily="system-ui">amara@voss-capital.com</text>
      <text x="440" y="428" fill="#334155" fontSize="10" fontFamily="system-ui">Voss Capital Group</text>
      <text x="610" y="428" fill="#64748B" fontSize="10" fontFamily="system-ui">James Wright</text>
      <rect x="740" y="416" width="80" height="22" rx="11" fill="rgba(59,130,246,0.08)" />
      <circle cx="754" cy="427" r="3" fill="#3B82F6" />
      <text x="762" y="431" fill="#2563EB" fontSize="9" fontFamily="system-ui" fontWeight="600">Badge Printed</text>
      <text x="880" y="428" fill="#94A3B8" fontSize="10" fontFamily="system-ui">9:45 AM</text>

      {/* Row 4 */}
      <rect x="224" y="458" width="710" height="52" rx="8" fill="#FFFFFF" stroke="#F1F5F9" strokeWidth="1" />
      <circle cx="252" cy="484" r="16" fill="rgba(148,163,184,0.06)" />
      <text x="246" y="488" fill="#94A3B8" fontSize="11" fontFamily="system-ui" fontWeight="700">MP</text>
      <text x="278" y="478" fill="#0F172A" fontSize="11" fontFamily="system-ui" fontWeight="600">Maya Patel</text>
      <text x="278" y="492" fill="#94A3B8" fontSize="9" fontFamily="system-ui">maya.p@aurora.tech</text>
      <text x="440" y="486" fill="#334155" fontSize="10" fontFamily="system-ui">Aurora Technologies</text>
      <text x="610" y="486" fill="#64748B" fontSize="10" fontFamily="system-ui">Lisa Chen</text>
      <rect x="740" y="474" width="76" height="22" rx="11" fill="rgba(148,163,184,0.04)" />
      <circle cx="754" cy="485" r="3" fill="#94A3B8" />
      <text x="762" y="489" fill="#94A3B8" fontSize="9" fontFamily="system-ui" fontWeight="600">Checked Out</text>
      <text x="880" y="486" fill="#94A3B8" fontSize="10" fontFamily="system-ui">8:30 AM</text>

      {/* Bottom chart */}
      <rect x="224" y="524" width="460" height="60" rx="8" fill="#FFFFFF" stroke="#F1F5F9" strokeWidth="1" />
      <text x="240" y="544" fill="#94A3B8" fontSize="9" fontFamily="system-ui" fontWeight="600">VISITOR FLOW TODAY</text>
      <text x="644" y="544" fill="#CBD5E1" fontSize="8" fontFamily="system-ui" textAnchor="end">Peak: 11:30 AM</text>
      <path d="M240 570 L270 562 L300 566 L330 554 L360 558 L390 546 L420 550 L450 538 L480 542 L510 534 L540 538 L570 530 L600 536 L630 528 L660 534 L660 576 L240 576 Z" fill="url(#chart-gradient)" />
      <polyline points="240,570 270,562 300,566 330,554 360,558 390,546 420,550 450,538 480,542 510,534 540,538 570,530 600,536 630,528 660,534" stroke="#00D4AA" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="580" y1="530" x2="580" y2="576" stroke="#00D4AA" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      <circle cx="580" cy="531" r="3" fill="#00D4AA" />

      {/* Quick actions */}
      <rect x="694" y="524" width="240" height="60" rx="8" fill="#FFFFFF" stroke="#F1F5F9" strokeWidth="1" />
      <text x="710" y="544" fill="#94A3B8" fontSize="9" fontFamily="system-ui" fontWeight="600">QUICK ACTIONS</text>
      <rect x="710" y="552" width="68" height="24" rx="6" fill="rgba(0,212,170,0.06)" />
      <text x="744" y="568" fill="#028E76" fontSize="9" fontFamily="system-ui" fontWeight="500" textAnchor="middle">Print Badge</text>
      <rect x="786" y="552" width="60" height="24" rx="6" fill="rgba(59,130,246,0.06)" />
      <text x="816" y="568" fill="#2563EB" fontSize="9" fontFamily="system-ui" fontWeight="500" textAnchor="middle">Notify</text>
      <rect x="854" y="552" width="64" height="24" rx="6" fill="#F8FAFC" />
      <text x="886" y="568" fill="#64748B" fontSize="9" fontFamily="system-ui" fontWeight="500" textAnchor="middle">Check Out</text>
    </svg>
  );
}
