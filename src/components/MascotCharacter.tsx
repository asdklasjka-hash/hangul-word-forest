import React from 'react';
import { CharacterId } from '../types/game';

interface MascotCharacterProps {
  characterId: CharacterId;
  hatId: string | null;
  faceId: string | null;
  neckId: string | null;
  mood?: 'happy' | 'excited' | 'thinking';
  sizeClass?: string;
}

export const MascotCharacter: React.FC<MascotCharacterProps> = ({
  characterId,
  hatId,
  faceId,
  neckId,
  mood = 'happy',
  sizeClass = 'w-44 h-44',
}) => {
  const palette = {
    tori: {
      main: '#EA8C44',
      dark: '#B45309',
      belly: '#FEF3C7',
      earInner: '#FDBA74',
    },
    bori: {
      main: '#A17452',
      dark: '#6D4C3D',
      belly: '#FDE68A',
      earInner: '#F5CBA7',
    },
    luna: {
      main: '#F8FAFC',
      dark: '#94A3B8',
      belly: '#FFF1F2',
      earInner: '#FBCFE8',
    },
  }[characterId];

  return (
    <div className={`${sizeClass} relative select-none`}>
      <svg viewBox="0 0 180 180" className="w-full h-full drop-shadow-sm" aria-label="캐릭터 마스코트">
        {/* 용감한 빨간 망토 (Body 뒤) */}
        {neckId === 'neck_cape' && (
          <path
            d="M46 116 C30 132, 24 156, 36 164 L144 164 C156 156, 150 132, 134 116 Z"
            fill="#DC2626"
            stroke="#991B1B"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
        )}

        {/* 다람쥐 토리 꼬리 */}
        {characterId === 'tori' && (
          <path
            d="M126 144 C158 140, 166 96, 140 84 C124 76, 114 96, 122 122 Z"
            fill="#D97706"
            stroke={palette.dark}
            strokeWidth="3.5"
          />
        )}

        {/* 몸통 */}
        <ellipse cx="90" cy="136" rx="38" ry="30" fill={palette.main} stroke={palette.dark} strokeWidth="3.5" />
        <ellipse cx="90" cy="140" rx="23" ry="20" fill={palette.belly} />

        {/* 팔 */}
        <ellipse
          cx="52"
          cy={mood === 'excited' ? 114 : 132}
          rx="11"
          ry="16"
          transform={mood === 'excited' ? 'rotate(45 52 114)' : 'rotate(18 52 132)'}
          fill={palette.main}
          stroke={palette.dark}
          strokeWidth="3.5"
        />
        <ellipse
          cx="128"
          cy={mood === 'excited' ? 114 : 132}
          rx="11"
          ry="16"
          transform={mood === 'excited' ? 'rotate(-45 128 114)' : 'rotate(-18 128 132)'}
          fill={palette.main}
          stroke={palette.dark}
          strokeWidth="3.5"
        />

        {/* 귀 */}
        {characterId === 'luna' ? (
          <>
            <ellipse cx="66" cy="40" rx="11" ry="28" transform="rotate(-10 66 40)" fill={palette.main} stroke={palette.dark} strokeWidth="3.5" />
            <ellipse cx="66" cy="41" rx="5.5" ry="18" transform="rotate(-10 66 41)" fill={palette.earInner} />
            <ellipse cx="114" cy="40" rx="11" ry="28" transform="rotate(10 114 40)" fill={palette.main} stroke={palette.dark} strokeWidth="3.5" />
            <ellipse cx="114" cy="41" rx="5.5" ry="18" transform="rotate(10 114 41)" fill={palette.earInner} />
          </>
        ) : characterId === 'tori' ? (
          <>
            <polygon points="52,66 48,38 72,52" fill={palette.main} stroke={palette.dark} strokeWidth="3.5" strokeLinejoin="round" />
            <polygon points="55,61 53,44 68,53" fill={palette.earInner} />
            <polygon points="128,66 132,38 108,52" fill={palette.main} stroke={palette.dark} strokeWidth="3.5" strokeLinejoin="round" />
            <polygon points="125,61 127,44 112,53" fill={palette.earInner} />
          </>
        ) : (
          <>
            <circle cx="56" cy="54" r="14" fill={palette.main} stroke={palette.dark} strokeWidth="3.5" />
            <circle cx="56" cy="54" r="7" fill={palette.earInner} />
            <circle cx="124" cy="54" r="14" fill={palette.main} stroke={palette.dark} strokeWidth="3.5" />
            <circle cx="124" cy="54" r="7" fill={palette.earInner} />
          </>
        )}

        {/* 머리 */}
        <ellipse cx="90" cy="84" rx="40" ry="34" fill={palette.main} stroke={palette.dark} strokeWidth="3.5" />
        {/* 입 주변 밝은 무늬 */}
        <ellipse cx="90" cy="94" rx="22" ry="15" fill={palette.belly} />

        {/* 눈 */}
        {mood === 'excited' ? (
          <>
            <path d="M68 79 Q74 71 80 79" stroke="#1E293B" strokeWidth="3.8" strokeLinecap="round" fill="none" />
            <path d="M100 79 Q106 71 112 79" stroke="#1E293B" strokeWidth="3.8" strokeLinecap="round" fill="none" />
          </>
        ) : (
          <>
            <circle cx="74" cy="79" r="5" fill="#1E293B" />
            <circle cx="106" cy="79" r="5" fill="#1E293B" />
            <circle cx="72" cy="77" r="1.8" fill="#FFFFFF" />
            <circle cx="104" cy="77" r="1.8" fill="#FFFFFF" />
          </>
        )}

        {/* 코 & 입 */}
        <ellipse cx="90" cy="88" rx="5.5" ry="4" fill={characterId === 'luna' ? '#EC4899' : '#1E293B'} />
        {mood === 'thinking' ? (
          <circle cx="90" cy="98" r="3.5" fill="#78350F" />
        ) : (
          <path d="M82 96 Q90 104 98 96" stroke="#78350F" strokeWidth="3" strokeLinecap="round" fill="none" />
        )}

        {/* 기본 볼터치 */}
        <circle cx="62" cy="90" r="5.5" fill="#FDA4AF" opacity="0.65" />
        <circle cx="118" cy="90" r="5.5" fill="#FDA4AF" opacity="0.65" />

        {/* 얼굴 액세서리 */}
        {faceId === 'face_blush' && (
          <>
            <path d="M62 88 C60 85, 56 86, 57 90 C58 93, 62 95, 62 95 C62 95, 66 93, 67 90 C68 86, 64 85, 62 88 Z" fill="#FB7185" />
            <path d="M118 88 C116 85, 112 86, 113 90 C114 93, 118 95, 118 95 C118 95, 122 93, 123 90 C124 86, 120 85, 118 88 Z" fill="#FB7185" />
          </>
        )}
        {faceId === 'face_round_glasses' && (
          <g>
            <circle cx="74" cy="79" r="12" fill="#E0F2FE" fillOpacity="0.4" stroke="#0284C7" strokeWidth="3.2" />
            <circle cx="106" cy="79" r="12" fill="#E0F2FE" fillOpacity="0.4" stroke="#0284C7" strokeWidth="3.2" />
            <line x1="86" y1="79" x2="94" y2="79" stroke="#0284C7" strokeWidth="3.2" />
          </g>
        )}
        {faceId === 'face_star_sunglasses' && (
          <g>
            <polygon points="74,66 78,74 87,75 80,81 82,89 74,85 66,89 68,81 61,75 70,74" fill="#1E293B" stroke="#EC4899" strokeWidth="2.5" strokeLinejoin="round" />
            <polygon points="106,66 110,74 119,75 112,81 114,89 106,85 98,89 100,81 93,75 102,74" fill="#1E293B" stroke="#EC4899" strokeWidth="2.5" strokeLinejoin="round" />
            <line x1="85" y1="76" x2="95" y2="76" stroke="#EC4899" strokeWidth="3" />
          </g>
        )}

        {/* 목 액세서리 */}
        {neckId === 'neck_bowtie' && (
          <g>
            <polygon points="74,113 90,120 74,127" fill="#38BDF8" stroke="#0369A1" strokeWidth="2.5" strokeLinejoin="round" />
            <polygon points="106,113 90,120 106,127" fill="#38BDF8" stroke="#0369A1" strokeWidth="2.5" strokeLinejoin="round" />
            <circle cx="90" cy="120" r="4.5" fill="#0EA5E9" stroke="#0369A1" strokeWidth="2" />
          </g>
        )}
        {neckId === 'neck_clover' && (
          <g transform="translate(107, 126)">
            <circle cx="-4" cy="-4" r="4.5" fill="#22C55E" stroke="#15803D" strokeWidth="1.5" />
            <circle cx="4" cy="-4" r="4.5" fill="#22C55E" stroke="#15803D" strokeWidth="1.5" />
            <circle cx="-4" cy="4" r="4.5" fill="#22C55E" stroke="#15803D" strokeWidth="1.5" />
            <circle cx="4" cy="4" r="4.5" fill="#22C55E" stroke="#15803D" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="2.2" fill="#FACC15" />
          </g>
        )}
        {neckId === 'neck_medal' && (
          <g>
            <path d="M78 112 L90 132 L102 112" stroke="#EF4444" strokeWidth="4.5" fill="none" strokeLinecap="round" />
            <circle cx="90" cy="136" r="10" fill="#FACC15" stroke="#B45309" strokeWidth="2.5" />
            <polygon points="90,129 92,134 97,134 93,137 94,142 90,139 86,142 87,137 83,134 88,134" fill="#FFFBEB" />
          </g>
        )}

        {/* 모자 액세서리 */}
        {hatId === 'hat_cap' && (
          <g>
            <path d="M62 52 C62 32, 118 32, 118 52 Z" fill="#EF4444" stroke="#991B1B" strokeWidth="3" />
            <path d="M58 52 L126 52 C126 57, 108 58, 92 55 Z" fill="#DC2626" stroke="#991B1B" strokeWidth="2.5" />
          </g>
        )}
        {hatId === 'hat_chick' && (
          <g>
            <ellipse cx="90" cy="44" rx="22" ry="15" fill="#FDE047" stroke="#CA8A04" strokeWidth="3" />
            <circle cx="83" cy="42" r="2.2" fill="#1E293B" />
            <circle cx="97" cy="42" r="2.2" fill="#1E293B" />
            <polygon points="87,46 93,46 90,50" fill="#F97316" />
          </g>
        )}
        {hatId === 'hat_explorer' && (
          <g>
            <path d="M68 50 L74 30 L106 30 L112 50 Z" fill="#16A34A" stroke="#14532D" strokeWidth="3" strokeLinejoin="round" />
            <ellipse cx="90" cy="51" rx="34" ry="7" fill="#22C55E" stroke="#14532D" strokeWidth="3" />
            <rect x="69" y="42" width="42" height="6" fill="#FACC15" />
          </g>
        )}
        {hatId === 'hat_crown' && (
          <g>
            <polygon points="68,52 65,28 79,39 90,22 101,39 115,28 112,52" fill="#FACC15" stroke="#B45309" strokeWidth="3" strokeLinejoin="round" />
            <circle cx="90" cy="42" r="3.5" fill="#EF4444" />
            <circle cx="76" cy="44" r="2.5" fill="#3B82F6" />
            <circle cx="104" cy="44" r="2.5" fill="#10B981" />
          </g>
        )}
        {hatId === 'hat_wizard' && (
          <g>
            <polygon points="66,51 90,10 114,51" fill="#6366F1" stroke="#312E81" strokeWidth="3" strokeLinejoin="round" />
            <ellipse cx="90" cy="52" rx="34" ry="7" fill="#4F46E5" stroke="#312E81" strokeWidth="3" />
            <polygon points="90,25 92,30 97,30 93,33 94,38 90,35 86,38 87,33 83,30 88,30" fill="#FDE047" />
          </g>
        )}
      </svg>
    </div>
  );
};
