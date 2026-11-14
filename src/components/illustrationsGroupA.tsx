import React from 'react';

export function renderIllustrationGroupA(wordId: string): React.ReactNode | null {
  switch (wordId) {
    case 'apple':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <path d="M50 24 C50 15, 58 12, 62 12" stroke="#78350F" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          <path d="M52 21 C62 10, 76 14, 70 25 C64 29, 55 26, 52 21Z" fill="#22C55E" stroke="#15803D" strokeWidth="2.5" />
          <path d="M50 28 C34 22, 18 35, 20 56 C22 76, 36 88, 46 85 C49 84, 51 84, 54 85 C64 88, 78 76, 80 56 C82 35, 66 22, 50 28Z" fill="#EF4444" stroke="#B91C1C" strokeWidth="3" />
          <path d="M32 39 C29 46, 29 54, 32 59" stroke="#FCA5A5" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'banana':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <path d="M25 65 C30 82, 58 88, 78 70 C88 60, 88 42, 82 28 L75 24 C74 36, 70 50, 56 60 C44 68, 32 64, 24 58 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="3" strokeLinejoin="round" />
          <path d="M77 25 L82 18" stroke="#78350F" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M22 61 L18 65" stroke="#78350F" strokeWidth="4" strokeLinecap="round" />
          <path d="M40 73 C54 75, 67 67, 74 54" stroke="#FEF08A" strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'grape':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <path d="M50 14 L50 28" stroke="#78350F" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M50 22 C63 12, 74 18, 67 28 C61 30, 54 27, 50 22Z" fill="#22C55E" stroke="#15803D" strokeWidth="2.5" />
          <circle cx="38" cy="38" r="10.5" fill="#8B5CF6" stroke="#6D28D9" strokeWidth="2.5" />
          <circle cx="51" cy="36" r="10.5" fill="#9333EA" stroke="#6D28D9" strokeWidth="2.5" />
          <circle cx="63" cy="39" r="10.5" fill="#8B5CF6" stroke="#6D28D9" strokeWidth="2.5" />
          <circle cx="42" cy="53" r="10.5" fill="#9333EA" stroke="#6D28D9" strokeWidth="2.5" />
          <circle cx="57" cy="54" r="10.5" fill="#7C3AED" stroke="#6D28D9" strokeWidth="2.5" />
          <circle cx="50" cy="69" r="10.5" fill="#8B5CF6" stroke="#6D28D9" strokeWidth="2.5" />
          <circle cx="46" cy="82" r="8.5" fill="#7C3AED" stroke="#6D28D9" strokeWidth="2.5" />
          <circle cx="35" cy="34" r="2.5" fill="#DDD6FE" />
          <circle cx="48" cy="32" r="2.5" fill="#DDD6FE" />
          <circle cx="47" cy="65" r="2.5" fill="#DDD6FE" />
        </svg>
      );

    case 'puppy':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <ellipse cx="24" cy="46" rx="11" ry="20" transform="rotate(14 24 46)" fill="#B45309" stroke="#78350F" strokeWidth="3" />
          <ellipse cx="76" cy="46" rx="11" ry="20" transform="rotate(-14 76 46)" fill="#B45309" stroke="#78350F" strokeWidth="3" />
          <circle cx="50" cy="52" r="28" fill="#FDE68A" stroke="#92400E" strokeWidth="3" />
          <ellipse cx="50" cy="61" rx="14" ry="11" fill="#FFFBEB" />
          <circle cx="39" cy="46" r="4" fill="#1E293B" />
          <circle cx="61" cy="46" r="4" fill="#1E293B" />
          <circle cx="37.5" cy="44.5" r="1.3" fill="#FFFFFF" />
          <circle cx="59.5" cy="44.5" r="1.3" fill="#FFFFFF" />
          <ellipse cx="50" cy="56" rx="5.5" ry="4" fill="#1E293B" />
          <path d="M44 63 Q50 69 56 63" stroke="#78350F" strokeWidth="2.8" strokeLinecap="round" fill="none" />
          <path d="M47 67 C47 74, 53 74, 53 67 Z" fill="#FB7185" />
        </svg>
      );

    case 'cat':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <polygon points="24,42 26,16 44,30" fill="#FB923C" stroke="#9A3412" strokeWidth="3" strokeLinejoin="round" />
          <polygon points="76,42 74,16 56,30" fill="#FB923C" stroke="#9A3412" strokeWidth="3" strokeLinejoin="round" />
          <polygon points="28,38 29,22 40,31" fill="#FDBA74" />
          <polygon points="72,38 71,22 60,31" fill="#FDBA74" />
          <ellipse cx="50" cy="55" rx="28" ry="25" fill="#FDBA74" stroke="#9A3412" strokeWidth="3" />
          <circle cx="39" cy="50" r="3.8" fill="#1E293B" />
          <circle cx="61" cy="50" r="3.8" fill="#1E293B" />
          <polygon points="46,56 54,56 50,60" fill="#FB7185" />
          <path d="M43 63 Q46.5 67 50 62 Q53.5 67 57 63" stroke="#7C2D12" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M16 54 L31 56 M16 61 L31 60 M84 54 L69 56 M84 61 L69 60" stroke="#7C2D12" strokeWidth="2.3" strokeLinecap="round" />
        </svg>
      );

    case 'rabbit':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <ellipse cx="38" cy="28" rx="8.5" ry="20" transform="rotate(-8 38 28)" fill="#FFF1F2" stroke="#9D174D" strokeWidth="3" />
          <ellipse cx="62" cy="28" rx="8.5" ry="20" transform="rotate(8 62 28)" fill="#FFF1F2" stroke="#9D174D" strokeWidth="3" />
          <ellipse cx="38" cy="29" rx="4" ry="13" transform="rotate(-8 38 29)" fill="#F9A8D4" />
          <ellipse cx="62" cy="29" rx="4" ry="13" transform="rotate(8 62 29)" fill="#F9A8D4" />
          <circle cx="50" cy="60" r="25" fill="#FFFFFF" stroke="#9D174D" strokeWidth="3" />
          <circle cx="40" cy="56" r="3.6" fill="#1E293B" />
          <circle cx="60" cy="56" r="3.6" fill="#1E293B" />
          <circle cx="33" cy="63" r="4" fill="#FBCFE8" />
          <circle cx="67" cy="63" r="4" fill="#FBCFE8" />
          <ellipse cx="50" cy="61" rx="3.5" ry="2.5" fill="#EC4899" />
          <path d="M45 66 Q50 71 55 66" stroke="#9D174D" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'school':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <rect x="14" y="44" width="72" height="40" rx="4" fill="#FEF3C7" stroke="#B45309" strokeWidth="3" />
          <polygon points="10,46 50,22 90,46" fill="#EF4444" stroke="#991B1B" strokeWidth="3" strokeLinejoin="round" />
          <rect x="42" y="16" width="16" height="20" rx="2" fill="#FFFBEB" stroke="#B45309" strokeWidth="2.5" />
          <circle cx="50" cy="26" r="5.5" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2" />
          <path d="M50 23 L50 26 L52.5 27" stroke="#1E293B" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <rect x="42" y="62" width="16" height="22" rx="2" fill="#92400E" stroke="#78350F" strokeWidth="2.5" />
          <rect x="22" y="54" width="13" height="12" rx="2" fill="#BAE6FD" stroke="#0369A1" strokeWidth="2" />
          <rect x="65" y="54" width="13" height="12" rx="2" fill="#BAE6FD" stroke="#0369A1" strokeWidth="2" />
          <line x1="50" y1="16" x2="50" y2="8" stroke="#475569" strokeWidth="2.5" />
          <polygon points="50,8 62,11 50,15" fill="#3B82F6" />
        </svg>
      );

    case 'pencil':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <g transform="rotate(-40 50 50)">
            <rect x="22" y="40" width="46" height="20" rx="2" fill="#FACC15" stroke="#B45309" strokeWidth="3" />
            <line x1="22" y1="47" x2="68" y2="47" stroke="#EAB308" strokeWidth="2.5" />
            <line x1="22" y1="53" x2="68" y2="53" stroke="#EAB308" strokeWidth="2.5" />
            <rect x="14" y="40" width="9" height="20" rx="3" fill="#FDA4AF" stroke="#BE123C" strokeWidth="3" />
            <rect x="21" y="40" width="6" height="20" fill="#CBD5E1" stroke="#475569" strokeWidth="2.5" />
            <polygon points="68,40 86,50 68,60" fill="#FDE68A" stroke="#B45309" strokeWidth="3" strokeLinejoin="round" />
            <polygon points="79,46 86,50 79,54" fill="#1E293B" />
          </g>
        </svg>
      );

    case 'book':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <path d="M16 26 C30 22, 44 25, 50 31 L50 78 C43 72, 29 70, 16 74 Z" fill="#FFFFFF" stroke="#047857" strokeWidth="3" strokeLinejoin="round" />
          <path d="M84 26 C70 22, 56 25, 50 31 L50 78 C57 72, 71 70, 84 74 Z" fill="#F8FAFC" stroke="#047857" strokeWidth="3" strokeLinejoin="round" />
          <path d="M13 30 L16 30 L16 76 L50 80 L84 76 L84 30 L87 30 L87 80 L50 84 L13 80 Z" fill="#10B981" stroke="#065F46" strokeWidth="2.5" strokeLinejoin="round" />
          <line x1="24" y1="38" x2="42" y2="40" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
          <line x1="24" y1="48" x2="42" y2="50" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
          <line x1="24" y1="58" x2="39" y2="60" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
          <line x1="58" y1="40" x2="76" y2="38" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
          <line x1="58" y1="50" x2="76" y2="48" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
          <line x1="58" y1="60" x2="71" y2="58" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case 'car':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <path d="M24 50 L33 32 L66 32 L76 50 Z" fill="#EF4444" stroke="#991B1B" strokeWidth="3" strokeLinejoin="round" />
          <path d="M31 48 L37 36 L48 36 L48 48 Z" fill="#BAE6FD" stroke="#0369A1" strokeWidth="2" />
          <path d="M52 48 L52 36 L63 36 L69 48 Z" fill="#BAE6FD" stroke="#0369A1" strokeWidth="2" />
          <rect x="14" y="48" width="72" height="22" rx="8" fill="#EF4444" stroke="#991B1B" strokeWidth="3" />
          <circle cx="30" cy="70" r="10" fill="#334155" stroke="#0F172A" strokeWidth="3" />
          <circle cx="30" cy="70" r="4.5" fill="#E2E8F0" />
          <circle cx="70" cy="70" r="10" fill="#334155" stroke="#0F172A" strokeWidth="3" />
          <circle cx="70" cy="70" r="4.5" fill="#E2E8F0" />
          <circle cx="80" cy="57" r="3.5" fill="#FDE047" />
        </svg>
      );

    case 'bus':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <rect x="12" y="28" width="76" height="42" rx="10" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="3" />
          <rect x="18" y="35" width="16" height="16" rx="3" fill="#E0F2FE" stroke="#1E40AF" strokeWidth="2" />
          <rect x="38" y="35" width="16" height="16" rx="3" fill="#E0F2FE" stroke="#1E40AF" strokeWidth="2" />
          <rect x="58" y="35" width="22" height="16" rx="3" fill="#E0F2FE" stroke="#1E40AF" strokeWidth="2" />
          <rect x="12" y="55" width="76" height="5" fill="#FACC15" />
          <circle cx="29" cy="72" r="9.5" fill="#1E293B" stroke="#0F172A" strokeWidth="3" />
          <circle cx="29" cy="72" r="4" fill="#CBD5E1" />
          <circle cx="71" cy="72" r="9.5" fill="#1E293B" stroke="#0F172A" strokeWidth="3" />
          <circle cx="71" cy="72" r="4" fill="#CBD5E1" />
        </svg>
      );

    case 'train':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <circle cx="30" cy="20" r="6" fill="#CBD5E1" />
          <circle cx="42" cy="14" r="8" fill="#E2E8F0" />
          <rect x="26" y="25" width="10" height="16" fill="#334155" stroke="#0F172A" strokeWidth="2.5" />
          <rect x="20" y="39" width="46" height="29" rx="4" fill="#10B981" stroke="#065F46" strokeWidth="3" />
          <rect x="56" y="28" width="24" height="40" rx="3" fill="#F59E0B" stroke="#92400E" strokeWidth="3" />
          <rect x="62" y="34" width="12" height="12" rx="2" fill="#E0F2FE" stroke="#0369A1" strokeWidth="2" />
          <polygon points="20,68 12,73 20,73" fill="#EF4444" stroke="#991B1B" strokeWidth="2" />
          <circle cx="30" cy="72" r="8" fill="#334155" stroke="#0F172A" strokeWidth="2.5" />
          <circle cx="48" cy="72" r="8" fill="#334155" stroke="#0F172A" strokeWidth="2.5" />
          <circle cx="68" cy="72" r="9" fill="#334155" stroke="#0F172A" strokeWidth="2.5" />
          <line x1="8" y1="81" x2="92" y2="81" stroke="#64748B" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      );

    case 'airplane':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <path d="M16 55 L34 45 L50 20 L60 20 L52 45 L78 45 L88 35 L92 35 L86 50 L92 65 L88 65 L78 55 L52 55 L60 80 L50 80 L34 55 Z" fill="#0EA5E9" stroke="#0369A1" strokeWidth="3" strokeLinejoin="round" />
          <circle cx="40" cy="50" r="3" fill="#E0F2FE" />
          <circle cx="52" cy="50" r="3" fill="#E0F2FE" />
          <circle cx="64" cy="50" r="3" fill="#E0F2FE" />
        </svg>
      );

    case 'lion':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <circle cx="50" cy="52" r="33" fill="#D97706" stroke="#78350F" strokeWidth="3" strokeDasharray="10 4" />
          <circle cx="50" cy="52" r="29" fill="#B45309" />
          <circle cx="32" cy="30" r="7" fill="#FCD34D" stroke="#92400E" strokeWidth="2.5" />
          <circle cx="68" cy="30" r="7" fill="#FCD34D" stroke="#92400E" strokeWidth="2.5" />
          <circle cx="50" cy="53" r="22" fill="#FDE68A" stroke="#92400E" strokeWidth="2.5" />
          <circle cx="42" cy="49" r="3.3" fill="#1E293B" />
          <circle cx="58" cy="49" r="3.3" fill="#1E293B" />
          <polygon points="46,55 54,55 50,60" fill="#78350F" />
          <path d="M44 63 Q50 68 56 63" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'elephant':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <ellipse cx="23" cy="50" rx="14" ry="22" fill="#94A3B8" stroke="#475569" strokeWidth="3" />
          <ellipse cx="77" cy="50" rx="14" ry="22" fill="#94A3B8" stroke="#475569" strokeWidth="3" />
          <ellipse cx="24" cy="51" rx="8" ry="14" fill="#FBCFE8" />
          <ellipse cx="76" cy="51" rx="8" ry="14" fill="#FBCFE8" />
          <circle cx="50" cy="48" r="23" fill="#CBD5E1" stroke="#475569" strokeWidth="3" />
          <path d="M45 55 C44 68, 46 80, 56 80 C61 80, 62 74, 57 73 C53 72, 53 64, 55 55 Z" fill="#CBD5E1" stroke="#475569" strokeWidth="3" strokeLinejoin="round" />
          <circle cx="40" cy="44" r="3.5" fill="#1E293B" />
          <circle cx="60" cy="44" r="3.5" fill="#1E293B" />
        </svg>
      );

    case 'giraffe':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <rect x="42" y="50" width="16" height="36" fill="#FDE047" stroke="#A16207" strokeWidth="3" />
          <circle cx="48" cy="64" r="4" fill="#B45309" />
          <circle cx="53" cy="76" r="3.5" fill="#B45309" />
          <line x1="43" y1="22" x2="40" y2="12" stroke="#92400E" strokeWidth="3" strokeLinecap="round" />
          <line x1="57" y1="22" x2="60" y2="12" stroke="#92400E" strokeWidth="3" strokeLinecap="round" />
          <circle cx="40" cy="12" r="3.5" fill="#92400E" />
          <circle cx="60" cy="12" r="3.5" fill="#92400E" />
          <ellipse cx="32" cy="30" rx="8" ry="4.5" transform="rotate(-20 32 30)" fill="#FDE047" stroke="#A16207" strokeWidth="2.5" />
          <ellipse cx="68" cy="30" rx="8" ry="4.5" transform="rotate(20 68 30)" fill="#FDE047" stroke="#A16207" strokeWidth="2.5" />
          <ellipse cx="50" cy="36" rx="18" ry="20" fill="#FEF08A" stroke="#A16207" strokeWidth="3" />
          <ellipse cx="50" cy="45" rx="12" ry="8" fill="#FDE68A" />
          <circle cx="43" cy="31" r="3.2" fill="#1E293B" />
          <circle cx="57" cy="31" r="3.2" fill="#1E293B" />
          <path d="M45 46 Q50 50 55 46" stroke="#78350F" strokeWidth="2.3" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'monkey':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <circle cx="20" cy="48" r="10" fill="#B45309" stroke="#78350F" strokeWidth="3" />
          <circle cx="80" cy="48" r="10" fill="#B45309" stroke="#78350F" strokeWidth="3" />
          <circle cx="20" cy="48" r="5" fill="#FDE68A" />
          <circle cx="80" cy="48" r="5" fill="#FDE68A" />
          <circle cx="50" cy="50" r="27" fill="#B45309" stroke="#78350F" strokeWidth="3" />
          <circle cx="41" cy="44" r="10" fill="#FDE68A" />
          <circle cx="59" cy="44" r="10" fill="#FDE68A" />
          <ellipse cx="50" cy="60" rx="18" ry="13" fill="#FDE68A" />
          <circle cx="42" cy="44" r="3.5" fill="#1E293B" />
          <circle cx="58" cy="44" r="3.5" fill="#1E293B" />
          <path d="M42 61 Q50 69 58 61" stroke="#78350F" strokeWidth="2.8" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'milk':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <polygon points="30,32 42,16 58,16 70,32" fill="#38BDF8" stroke="#0284C7" strokeWidth="3" strokeLinejoin="round" />
          <rect x="40" y="12" width="20" height="6" rx="2" fill="#0284C7" />
          <rect x="30" y="32" width="40" height="52" rx="4" fill="#FFFFFF" stroke="#0284C7" strokeWidth="3" />
          <rect x="30" y="54" width="40" height="18" fill="#BAE6FD" />
          <path d="M50 40 C46 46, 44 50, 50 52 C56 50, 54 46, 50 40 Z" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2" />
        </svg>
      );

    case 'bread':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <path d="M18 54 C14 34, 34 22, 50 22 C66 22, 86 34, 82 54 L78 74 C77 78, 72 80, 68 80 L32 80 C28 80, 23 78, 22 74 Z" fill="#F59E0B" stroke="#92400E" strokeWidth="3" />
          <path d="M27 52 C25 39, 38 30, 50 30 C62 30, 75 39, 73 52 L70 72 L30 72 Z" fill="#FEF3C7" />
          <path d="M36 44 L44 37 M52 44 L60 37" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case 'strawberry':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <path d="M50 85 C30 78, 20 52, 26 36 C32 24, 68 24, 74 36 C80 52, 70 78, 50 85 Z" fill="#F43F5E" stroke="#BE123C" strokeWidth="3" />
          <path d="M30 30 L42 22 L50 32 L58 22 L70 30 L56 36 L44 36 Z" fill="#22C55E" stroke="#15803D" strokeWidth="2.5" strokeLinejoin="round" />
          <circle cx="39" cy="45" r="2" fill="#FEF08A" />
          <circle cx="52" cy="44" r="2" fill="#FEF08A" />
          <circle cx="62" cy="47" r="2" fill="#FEF08A" />
          <circle cx="44" cy="58" r="2" fill="#FEF08A" />
          <circle cx="56" cy="59" r="2" fill="#FEF08A" />
          <circle cx="50" cy="71" r="2" fill="#FEF08A" />
        </svg>
      );

    case 'watermelon':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <path d="M14 40 C16 72, 84 72, 86 40 Z" fill="#16A34A" stroke="#14532D" strokeWidth="3" strokeLinejoin="round" />
          <path d="M20 40 C22 65, 78 65, 80 40 Z" fill="#DCFCE7" />
          <path d="M24 40 C26 60, 74 60, 76 40 Z" fill="#EF4444" />
          <circle cx="39" cy="48" r="2.2" fill="#1E293B" />
          <circle cx="50" cy="52" r="2.2" fill="#1E293B" />
          <circle cx="61" cy="48" r="2.2" fill="#1E293B" />
        </svg>
      );

    default:
      return null;
  }
}
