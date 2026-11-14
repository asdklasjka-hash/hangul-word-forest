import React from 'react';

export function renderIllustrationGroupB(wordId: string): React.ReactNode | null {
  switch (wordId) {
    // Stage 7: 자연
    case 'sun':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <g stroke="#F59E0B" strokeWidth="4.5" strokeLinecap="round">
            <line x1="50" y1="10" x2="50" y2="20" />
            <line x1="50" y1="80" x2="50" y2="90" />
            <line x1="10" y1="50" x2="20" y2="50" />
            <line x1="80" y1="50" x2="90" y2="50" />
            <line x1="22" y1="22" x2="29" y2="29" />
            <line x1="71" y1="71" x2="78" y2="78" />
            <line x1="78" y1="22" x2="71" y2="29" />
            <line x1="29" y1="71" x2="22" y2="78" />
          </g>
          <circle cx="50" cy="50" r="22" fill="#FACC15" stroke="#EA580C" strokeWidth="3" />
          <circle cx="43" cy="46" r="2.8" fill="#78350F" />
          <circle cx="57" cy="46" r="2.8" fill="#78350F" />
          <path d="M44 55 Q50 60 56 55" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'moon':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <path d="M62 18 C40 20, 25 38, 28 59 C31 78, 49 87, 68 80 C52 78, 44 64, 46 47 C48 34, 54 24, 62 18 Z" fill="#FDE047" stroke="#CA8A04" strokeWidth="3" strokeLinejoin="round" />
          <circle cx="72" cy="34" r="3" fill="#FACC15" />
          <circle cx="76" cy="54" r="2" fill="#FACC15" />
        </svg>
      );

    case 'star':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <polygon points="50,12 61,36 88,39 68,57 73,84 50,71 27,84 32,57 12,39 39,36" fill="#FACC15" stroke="#D97706" strokeWidth="3" strokeLinejoin="round" />
          <circle cx="43" cy="47" r="2.6" fill="#78350F" />
          <circle cx="57" cy="47" r="2.6" fill="#78350F" />
          <path d="M45 55 Q50 59 55 55" stroke="#78350F" strokeWidth="2.4" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'cloud':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <path d="M26 70 L74 70 C83 70, 89 63, 88 54 C87 46, 80 41, 72 42 C69 30, 57 23, 45 26 C35 29, 28 38, 28 47 C20 47, 13 53, 13 60 C13 66, 19 70, 26 70 Z" fill="#E0F2FE" stroke="#0284C7" strokeWidth="3" strokeLinejoin="round" />
          <circle cx="43" cy="53" r="2.5" fill="#0369A1" />
          <circle cx="57" cy="53" r="2.5" fill="#0369A1" />
          <path d="M46 59 Q50 63 54 59" stroke="#0369A1" strokeWidth="2.3" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'tree':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <rect x="42" y="56" width="16" height="28" rx="2" fill="#92400E" stroke="#78350F" strokeWidth="3" />
          <circle cx="34" cy="44" r="18" fill="#22C55E" stroke="#15803D" strokeWidth="3" />
          <circle cx="66" cy="44" r="18" fill="#22C55E" stroke="#15803D" strokeWidth="3" />
          <circle cx="50" cy="30" r="20" fill="#4ADE80" stroke="#15803D" strokeWidth="3" />
          <circle cx="50" cy="45" r="17" fill="#22C55E" />
        </svg>
      );

    case 'flower':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <path d="M50 52 L50 86" stroke="#16A34A" strokeWidth="5" strokeLinecap="round" />
          <path d="M50 72 C62 64, 70 72, 58 79 Z" fill="#22C55E" stroke="#15803D" strokeWidth="2" />
          <circle cx="50" cy="24" r="11" fill="#F472B6" stroke="#DB2777" strokeWidth="2.5" />
          <circle cx="66" cy="35" r="11" fill="#F472B6" stroke="#DB2777" strokeWidth="2.5" />
          <circle cx="60" cy="53" r="11" fill="#F472B6" stroke="#DB2777" strokeWidth="2.5" />
          <circle cx="40" cy="53" r="11" fill="#F472B6" stroke="#DB2777" strokeWidth="2.5" />
          <circle cx="34" cy="35" r="11" fill="#F472B6" stroke="#DB2777" strokeWidth="2.5" />
          <circle cx="50" cy="41" r="10" fill="#FACC15" stroke="#CA8A04" strokeWidth="2.5" />
        </svg>
      );

    // Stage 8: 동네
    case 'house':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <rect x="22" y="45" width="56" height="39" rx="3" fill="#FFFBEB" stroke="#B45309" strokeWidth="3" />
          <polygon points="14,48 50,18 86,48" fill="#F97316" stroke="#9A3412" strokeWidth="3" strokeLinejoin="round" />
          <rect x="42" y="58" width="16" height="26" rx="2" fill="#92400E" stroke="#78350F" strokeWidth="2.5" />
          <circle cx="54" cy="72" r="2" fill="#FACC15" />
          <rect x="27" y="54" width="10" height="10" rx="1.5" fill="#BAE6FD" stroke="#0369A1" strokeWidth="2" />
          <rect x="63" y="54" width="10" height="10" rx="1.5" fill="#BAE6FD" stroke="#0369A1" strokeWidth="2" />
        </svg>
      );

    case 'park':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <path d="M12 78 Q50 70 88 78" stroke="#16A34A" strokeWidth="8" strokeLinecap="round" fill="none" />
          <rect x="25" y="48" width="8" height="26" fill="#78350F" />
          <circle cx="29" cy="38" r="16" fill="#22C55E" stroke="#15803D" strokeWidth="2.5" />
          <rect x="46" y="56" width="34" height="7" rx="2" fill="#D97706" stroke="#78350F" strokeWidth="2" />
          <rect x="50" y="63" width="5" height="12" fill="#78350F" />
          <rect x="71" y="63" width="5" height="12" fill="#78350F" />
          <circle cx="76" cy="24" r="9" fill="#FACC15" />
        </svg>
      );

    case 'hospital':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <rect x="20" y="24" width="60" height="60" rx="6" fill="#FFFFFF" stroke="#475569" strokeWidth="3" />
          <rect x="45" y="32" width="10" height="26" rx="2" fill="#EF4444" />
          <rect x="37" y="40" width="26" height="10" rx="2" fill="#EF4444" />
          <rect x="41" y="65" width="18" height="19" rx="2" fill="#BAE6FD" stroke="#0284C7" strokeWidth="2.5" />
        </svg>
      );

    case 'police':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <rect x="18" y="34" width="64" height="50" rx="4" fill="#EFF6FF" stroke="#1E40AF" strokeWidth="3" />
          <rect x="18" y="26" width="64" height="12" rx="3" fill="#2563EB" stroke="#1E3A8A" strokeWidth="2.5" />
          <circle cx="50" cy="21" r="6" fill="#EF4444" stroke="#991B1B" strokeWidth="2" />
          <polygon points="50,43 56,51 50,62 44,51" fill="#FACC15" stroke="#B45309" strokeWidth="2" />
          <rect x="41" y="66" width="18" height="18" rx="2" fill="#60A5FA" stroke="#1E40AF" strokeWidth="2" />
        </svg>
      );

    case 'library':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <rect x="16" y="24" width="68" height="60" rx="5" fill="#F5F3FF" stroke="#5B21B6" strokeWidth="3" />
          <line x1="22" y1="54" x2="78" y2="54" stroke="#7C3AED" strokeWidth="4" />
          <line x1="22" y1="78" x2="78" y2="78" stroke="#7C3AED" strokeWidth="4" />
          <rect x="26" y="32" width="10" height="20" rx="1" fill="#EF4444" stroke="#991B1B" strokeWidth="2" />
          <rect x="38" y="30" width="10" height="22" rx="1" fill="#3B82F6" stroke="#1E40AF" strokeWidth="2" />
          <rect x="50" y="34" width="10" height="18" rx="1" fill="#10B981" stroke="#065F46" strokeWidth="2" />
          <rect x="62" y="31" width="10" height="21" rx="1" fill="#F59E0B" stroke="#92400E" strokeWidth="2" />
          <rect x="28" y="58" width="12" height="18" rx="1" fill="#8B5CF6" stroke="#5B21B6" strokeWidth="2" />
          <rect x="44" y="60" width="12" height="16" rx="1" fill="#EC4899" stroke="#9D174D" strokeWidth="2" />
          <rect x="60" y="57" width="12" height="19" rx="1" fill="#14B8A6" stroke="#0F766E" strokeWidth="2" />
        </svg>
      );

    case 'market':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <rect x="20" y="42" width="60" height="42" fill="#FFF7ED" stroke="#9A3412" strokeWidth="3" />
          <path d="M14 42 L24 22 L76 22 L86 42 Z" fill="#F97316" stroke="#9A3412" strokeWidth="3" strokeLinejoin="round" />
          <path d="M24 22 L28 42 M40 22 L40 42 M58 22 L60 42 M74 22 L72 42" stroke="#FFFFFF" strokeWidth="4" />
          <circle cx="36" cy="64" r="6" fill="#EF4444" />
          <circle cx="50" cy="64" r="6" fill="#FACC15" />
          <circle cx="64" cy="64" r="6" fill="#22C55E" />
          <rect x="26" y="70" width="48" height="14" fill="#D97706" stroke="#78350F" strokeWidth="2" />
        </svg>
      );

    // Stage 9: 옷과 물건
    case 'hat':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <path d="M24 62 C24 32, 76 32, 76 62 Z" fill="#F59E0B" stroke="#92400E" strokeWidth="3" />
          <path d="M24 54 L76 54 L76 62 L24 62 Z" fill="#EF4444" stroke="#991B1B" strokeWidth="2.5" />
          <ellipse cx="50" cy="63" rx="38" ry="10" fill="#FBBF24" stroke="#92400E" strokeWidth="3" />
        </svg>
      );

    case 'shoes':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <path d="M20 40 L44 40 L52 54 L78 56 C85 57, 88 64, 86 72 L18 72 Z" fill="#3B82F6" stroke="#1E3A8A" strokeWidth="3" strokeLinejoin="round" />
          <rect x="17" y="68" width="70" height="8" rx="3" fill="#FFFFFF" stroke="#1E3A8A" strokeWidth="2.5" />
          <line x1="46" y1="47" x2="54" y2="45" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="53" x2="58" y2="51" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case 'bag':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <path d="M38 28 C38 16, 62 16, 62 28" stroke="#9D174D" strokeWidth="4" fill="none" />
          <rect x="22" y="28" width="56" height="54" rx="14" fill="#EC4899" stroke="#9D174D" strokeWidth="3" />
          <rect x="30" y="50" width="40" height="22" rx="6" fill="#FBCFE8" stroke="#9D174D" strokeWidth="2.5" />
          <path d="M22 42 Q50 48 78 42" stroke="#9D174D" strokeWidth="2.5" fill="none" />
        </svg>
      );

    case 'glasses':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <circle cx="30" cy="52" r="16" fill="#E0F2FE" stroke="#1E293B" strokeWidth="4.5" />
          <circle cx="70" cy="52" r="16" fill="#E0F2FE" stroke="#1E293B" strokeWidth="4.5" />
          <path d="M46 50 Q50 45 54 50" stroke="#1E293B" strokeWidth="4.5" fill="none" />
          <line x1="14" y1="50" x2="8" y2="46" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
          <line x1="86" y1="50" x2="92" y2="46" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
          <line x1="23" y1="45" x2="29" y2="41" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          <line x1="63" y1="45" x2="69" y2="41" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case 'socks':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <path d="M35 18 L55 18 L55 56 L72 64 C79 67, 81 76, 74 82 C67 86, 54 81, 40 73 C35 70, 35 64, 35 58 Z" fill="#10B981" stroke="#065F46" strokeWidth="3" strokeLinejoin="round" />
          <rect x="35" y="18" width="20" height="10" fill="#FACC15" stroke="#065F46" strokeWidth="2.5" />
          <path d="M68 62 C76 66, 78 75, 72 80" stroke="#FACC15" strokeWidth="4" fill="none" />
        </svg>
      );

    case 'umbrella':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <path d="M50 14 L50 74 C50 82, 62 82, 62 74" stroke="#78350F" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M14 52 C14 26, 86 26, 86 52 Q74 46 62 52 Q50 46 38 52 Q26 46 14 52 Z" fill="#6366F1" stroke="#312E81" strokeWidth="3" strokeLinejoin="round" />
          <line x1="50" y1="22" x2="50" y2="14" stroke="#312E81" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );

    // Stage 10: 바다
    case 'whale':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <path d="M48 25 C44 16, 36 16, 35 22 M52 25 C56 16, 64 16, 65 22" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M16 58 C16 36, 64 32, 72 52 L86 42 L84 58 L90 70 L70 66 C60 76, 16 76, 16 58 Z" fill="#0284C7" stroke="#075985" strokeWidth="3" strokeLinejoin="round" />
          <path d="M22 62 C30 71, 56 71, 64 62 Z" fill="#E0F2FE" />
          <circle cx="30" cy="52" r="3" fill="#0F172A" />
        </svg>
      );

    case 'octopus':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <path d="M26 62 C20 72, 16 80, 22 82 M38 64 C35 76, 34 84, 40 84 M50 65 L50 85 M62 64 C65 76, 66 84, 60 84 M74 62 C80 72, 84 80, 78 82" stroke="#F43F5E" strokeWidth="7" strokeLinecap="round" fill="none" />
          <circle cx="50" cy="42" r="24" fill="#FB7185" stroke="#BE123C" strokeWidth="3" />
          <circle cx="41" cy="42" r="3.5" fill="#1E293B" />
          <circle cx="59" cy="42" r="3.5" fill="#1E293B" />
          <path d="M45 50 Q50 54 55 50" stroke="#881337" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'turtle':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <ellipse cx="32" cy="70" rx="7" ry="10" fill="#4ADE80" stroke="#15803D" strokeWidth="2.5" />
          <ellipse cx="64" cy="70" rx="7" ry="10" fill="#4ADE80" stroke="#15803D" strokeWidth="2.5" />
          <circle cx="78" cy="48" r="11" fill="#4ADE80" stroke="#15803D" strokeWidth="2.5" />
          <circle cx="81" cy="45" r="2.5" fill="#1E293B" />
          <path d="M18 60 C18 32, 72 32, 72 60 Z" fill="#16A34A" stroke="#14532D" strokeWidth="3" strokeLinejoin="round" />
          <path d="M35 42 L55 42 L60 56 L30 56 Z" fill="#86EFAC" stroke="#15803D" strokeWidth="2" />
        </svg>
      );

    case 'crab':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <path d="M26 42 C18 32, 18 20, 28 22 L25 32 L34 26 C34 36, 30 42, 26 42 Z" fill="#EF4444" stroke="#991B1B" strokeWidth="2.5" />
          <path d="M74 42 C82 32, 82 20, 72 22 L75 32 L66 26 C66 36, 70 42, 74 42 Z" fill="#EF4444" stroke="#991B1B" strokeWidth="2.5" />
          <path d="M22 58 L12 64 M24 66 L14 74 M78 58 L88 64 M76 66 L86 74" stroke="#991B1B" strokeWidth="3.5" strokeLinecap="round" />
          <ellipse cx="50" cy="60" rx="26" ry="18" fill="#EF4444" stroke="#991B1B" strokeWidth="3" />
          <circle cx="41" cy="54" r="3" fill="#1E293B" />
          <circle cx="59" cy="54" r="3" fill="#1E293B" />
          <path d="M44 63 Q50 67 56 63" stroke="#7F1D1D" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'fish':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <polygon points="68,50 88,32 88,68" fill="#FB923C" stroke="#C2410C" strokeWidth="3" strokeLinejoin="round" />
          <ellipse cx="45" cy="50" rx="28" ry="20" fill="#FACC15" stroke="#C2410C" strokeWidth="3" />
          <path d="M46 32 Q53 50 46 68" stroke="#F97316" strokeWidth="4" fill="none" />
          <circle cx="30" cy="46" r="3.5" fill="#1E293B" />
          <path d="M22 55 Q27 59 32 55" stroke="#C2410C" strokeWidth="2.3" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'shark':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <polygon points="44,34 52,14 60,36" fill="#64748B" stroke="#334155" strokeWidth="3" strokeLinejoin="round" />
          <path d="M14 55 C24 34, 62 34, 76 50 L88 38 L84 54 L90 68 L74 60 C60 72, 24 72, 14 55 Z" fill="#64748B" stroke="#334155" strokeWidth="3" strokeLinejoin="round" />
          <path d="M20 57 C30 66, 58 66, 70 57 Z" fill="#F1F5F9" />
          <circle cx="30" cy="48" r="3" fill="#0F172A" />
          <path d="M22 57 L28 57" stroke="#334155" strokeWidth="2.5" />
        </svg>
      );

    case 'starfish':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <path d="M50 14 L60 37 L86 40 L67 57 L72 82 L50 69 L28 82 L33 57 L14 40 L40 37 Z" fill="#F472B6" stroke="#BE185D" strokeWidth="3" strokeLinejoin="round" />
          <circle cx="44" cy="48" r="2.8" fill="#1E293B" />
          <circle cx="56" cy="48" r="2.8" fill="#1E293B" />
          <path d="M46 56 Q50 60 54 56" stroke="#831843" strokeWidth="2.3" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'shrimp':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <path d="M30 40 C16 32, 14 22, 22 18 M30 44 C16 44, 12 36, 18 30" stroke="#EA580C" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M30 42 C40 24, 70 28, 76 52 C80 68, 66 78, 52 76 L46 84 L58 84 L64 74 C60 66, 56 54, 44 52 C36 51, 30 48, 30 42 Z" fill="#FB923C" stroke="#C2410C" strokeWidth="3" strokeLinejoin="round" />
          <circle cx="37" cy="40" r="2.8" fill="#1E293B" />
        </svg>
      );

    // Stage 11: 몸과 마음
    case 'eye':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <path d="M12 50 Q50 20 88 50 Q50 80 12 50 Z" fill="#FFFFFF" stroke="#1E293B" strokeWidth="3.5" />
          <circle cx="50" cy="50" r="15" fill="#0284C7" stroke="#0369A1" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="7.5" fill="#0F172A" />
          <circle cx="45" cy="45" r="3" fill="#FFFFFF" />
        </svg>
      );

    case 'nose':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <path d="M48 22 L44 58 C42 66, 34 68, 36 74 C38 80, 62 80, 64 72 C66 64, 58 60, 56 56" fill="#FDE68A" stroke="#D97706" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'mouth':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <path d="M16 48 Q35 32 50 40 Q65 32 84 48 Q68 74 50 74 Q32 74 16 48 Z" fill="#F43F5E" stroke="#9F1239" strokeWidth="3" strokeLinejoin="round" />
          <path d="M22 49 Q50 54 78 49 Q66 63 50 63 Q34 63 22 49 Z" fill="#FFFFFF" />
        </svg>
      );

    case 'ear':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <path d="M38 30 C38 14, 70 16, 70 42 C70 58, 56 64, 56 76 C56 84, 42 84, 40 74" fill="#FDE68A" stroke="#B45309" strokeWidth="4" strokeLinecap="round" />
          <path d="M47 36 C49 28, 60 30, 58 44 C56 52, 48 54, 48 62" stroke="#B45309" strokeWidth="3" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'hand':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <path d="M32 54 L22 42 C19 38, 25 33, 29 37 L35 44 L35 22 C35 17, 42 17, 42 22 L42 40 L47 18 C47 13, 54 13, 54 18 L54 40 L60 22 C60 17, 67 17, 67 22 L66 44 L72 31 C74 26, 80 29, 78 34 L70 58 C68 74, 58 84, 48 84 C36 84, 32 72, 32 54 Z" fill="#FDE68A" stroke="#B45309" strokeWidth="3" strokeLinejoin="round" />
        </svg>
      );

    case 'foot':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <path d="M38 20 L58 20 L58 50 L74 62 C82 68, 80 80, 68 80 L38 80 C30 80, 28 72, 32 62 L38 48 Z" fill="#FDE68A" stroke="#B45309" strokeWidth="3" strokeLinejoin="round" />
          <circle cx="76" cy="64" r="3" fill="#FDE68A" stroke="#B45309" strokeWidth="2" />
        </svg>
      );

    case 'head':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <circle cx="50" cy="54" r="26" fill="#FDE68A" stroke="#92400E" strokeWidth="3" />
          <path d="M24 50 C24 24, 76 24, 76 50 C68 38, 56 36, 50 40 C44 36, 32 38, 24 50 Z" fill="#475569" stroke="#1E293B" strokeWidth="3" />
          <circle cx="41" cy="55" r="3" fill="#1E293B" />
          <circle cx="59" cy="55" r="3" fill="#1E293B" />
          <path d="M44 65 Q50 70 56 65" stroke="#92400E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'smile':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <circle cx="50" cy="50" r="32" fill="#FDE047" stroke="#CA8A04" strokeWidth="3" />
          <path d="M34 43 Q39 36 44 43" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M56 43 Q61 36 66 43" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <circle cx="30" cy="54" r="4.5" fill="#FDA4AF" />
          <circle cx="70" cy="54" r="4.5" fill="#FDA4AF" />
          <path d="M34 55 Q50 72 66 55 Z" fill="#EF4444" stroke="#991B1B" strokeWidth="2.5" strokeLinejoin="round" />
        </svg>
      );

    // Stage 12: 종합축제
    case 'rainbow':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <path d="M16 70 A34 34 0 0 1 84 70" stroke="#EF4444" strokeWidth="7" fill="none" />
          <path d="M23 70 A27 27 0 0 1 77 70" stroke="#F59E0B" strokeWidth="7" fill="none" />
          <path d="M30 70 A20 20 0 0 1 70 70" stroke="#22C55E" strokeWidth="7" fill="none" />
          <path d="M37 70 A13 13 0 0 1 63 70" stroke="#3B82F6" strokeWidth="7" fill="none" />
          <circle cx="20" cy="70" r="9" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
          <circle cx="80" cy="70" r="9" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
        </svg>
      );

    case 'butterfly':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <path d="M48 45 C26 16, 12 32, 22 50 C14 66, 30 78, 48 60 Z" fill="#A855F7" stroke="#6B21A8" strokeWidth="3" />
          <path d="M52 45 C74 16, 88 32, 78 50 C86 66, 70 78, 52 60 Z" fill="#A855F7" stroke="#6B21A8" strokeWidth="3" />
          <rect x="47" y="34" width="6" height="36" rx="3" fill="#1E293B" />
          <path d="M48 34 Q42 22 36 22 M52 34 Q58 22 64 22" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <circle cx="30" cy="42" r="4" fill="#FDE047" />
          <circle cx="70" cy="42" r="4" fill="#FDE047" />
        </svg>
      );

    case 'frog':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <circle cx="34" cy="34" r="10" fill="#22C55E" stroke="#15803D" strokeWidth="3" />
          <circle cx="66" cy="34" r="10" fill="#22C55E" stroke="#15803D" strokeWidth="3" />
          <circle cx="34" cy="34" r="5" fill="#FFFFFF" />
          <circle cx="66" cy="34" r="5" fill="#FFFFFF" />
          <circle cx="34" cy="34" r="2.5" fill="#1E293B" />
          <circle cx="66" cy="34" r="2.5" fill="#1E293B" />
          <ellipse cx="50" cy="58" rx="30" ry="22" fill="#4ADE80" stroke="#15803D" strokeWidth="3" />
          <path d="M34 58 Q50 70 66 58" stroke="#14532D" strokeWidth="3" strokeLinecap="round" fill="none" />
          <circle cx="29" cy="56" r="4" fill="#FDA4AF" />
          <circle cx="71" cy="56" r="4" fill="#FDA4AF" />
        </svg>
      );

    case 'piano':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <rect x="16" y="28" width="68" height="44" rx="4" fill="#1E293B" stroke="#0F172A" strokeWidth="3" />
          <rect x="20" y="42" width="10" height="26" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
          <rect x="30" y="42" width="10" height="26" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
          <rect x="40" y="42" width="10" height="26" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
          <rect x="50" y="42" width="10" height="26" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
          <rect x="60" y="42" width="10" height="26" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
          <rect x="70" y="42" width="10" height="26" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
          <rect x="27" y="42" width="6" height="16" fill="#0F172A" />
          <rect x="37" y="42" width="6" height="16" fill="#0F172A" />
          <rect x="57" y="42" width="6" height="16" fill="#0F172A" />
          <rect x="67" y="42" width="6" height="16" fill="#0F172A" />
        </svg>
      );

    case 'soccer':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <circle cx="50" cy="50" r="32" fill="#FFFFFF" stroke="#1E293B" strokeWidth="3.5" />
          <polygon points="50,36 62,45 57,59 43,59 38,45" fill="#1E293B" />
          <line x1="50" y1="36" x2="50" y2="18" stroke="#1E293B" strokeWidth="3" />
          <line x1="62" y1="45" x2="79" y2="39" stroke="#1E293B" strokeWidth="3" />
          <line x1="57" y1="59" x2="68" y2="75" stroke="#1E293B" strokeWidth="3" />
          <line x1="43" y1="59" x2="32" y2="75" stroke="#1E293B" strokeWidth="3" />
          <line x1="38" y1="45" x2="21" y2="39" stroke="#1E293B" strokeWidth="3" />
        </svg>
      );

    case 'bicycle':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <circle cx="26" cy="64" r="14" fill="none" stroke="#1E293B" strokeWidth="4" />
          <circle cx="74" cy="64" r="14" fill="none" stroke="#1E293B" strokeWidth="4" />
          <path d="M26 64 L44 42 L66 42 L74 64 M44 42 L48 64 L26 64 M48 64 L66 42" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <line x1="38" y1="38" x2="48" y2="38" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
          <path d="M62 34 L68 34 L66 42" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'clock':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <circle cx="50" cy="52" r="30" fill="#FFFFFF" stroke="#D97706" strokeWidth="5" />
          <circle cx="50" cy="52" r="3.5" fill="#1E293B" />
          <line x1="50" y1="52" x2="50" y2="32" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
          <line x1="50" y1="52" x2="66" y2="52" stroke="#EF4444" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="50" cy="27" r="2" fill="#94A3B8" />
          <circle cx="50" cy="77" r="2" fill="#94A3B8" />
          <circle cx="25" cy="52" r="2" fill="#94A3B8" />
          <circle cx="75" cy="52" r="2" fill="#94A3B8" />
        </svg>
      );

    case 'letter':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <rect x="14" y="28" width="72" height="48" rx="6" fill="#FFFBEB" stroke="#B45309" strokeWidth="3" />
          <path d="M16 30 L50 56 L84 30" stroke="#B45309" strokeWidth="3" strokeLinejoin="round" fill="none" />
          <path d="M50 47 C46 42, 39 44, 41 50 C43 55, 50 59, 50 59 C50 59, 57 55, 59 50 C61 44, 54 42, 50 47 Z" fill="#F43F5E" />
        </svg>
      );

    default:
      return null;
  }
}
