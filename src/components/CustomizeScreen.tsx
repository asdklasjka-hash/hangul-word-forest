import React, { useState } from 'react';
import { Check, Lock, Sparkles, Star } from 'lucide-react';
import { ACCESSORIES, CHARACTERS } from '../data/customization';
import { AccessoryItem, AccessorySlot, CharacterId, PlayerProgress } from '../types/game';
import { getAvailableStars } from '../utils/storage';
import { MascotCharacter } from './MascotCharacter';

interface CustomizeScreenProps {
  progress: PlayerProgress;
  onSelectCharacter: (charId: CharacterId) => void;
  onBuyAccessory: (item: AccessoryItem) => void;
  onToggleAccessory: (slot: AccessorySlot, itemId: string | null) => void;
}

const SLOT_TABS: { slot: AccessorySlot; label: string }[] = [
  { slot: 'hat', label: '모자' },
  { slot: 'face', label: '안경과 얼굴' },
  { slot: 'neck', label: '목걸이와 망토' },
];

export const CustomizeScreen: React.FC<CustomizeScreenProps> = ({
  progress,
  onSelectCharacter,
  onBuyAccessory,
  onToggleAccessory,
}) => {
  const [activeSlot, setActiveSlot] = useState<AccessorySlot>('hat');
  const availableStars = getAvailableStars(progress);
  const filteredItems = ACCESSORIES.filter((item) => item.slot === activeSlot);

  return (
    <main className="max-w-[1140px] mx-auto px-4 sm:px-6 py-8 sm:py-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <h1 className="font-display text-3xl sm:text-4xl text-slate-900">
            나만의 캐릭터 꾸미기
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-1">
            게임을 하며 모은 별로 귀여운 모자와 소품을 선물해 보세요!
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-3 flex items-center gap-2.5 self-start sm:self-auto">
          <Star className="w-6 h-6 text-amber-500 fill-amber-400" />
          <span className="font-bold text-slate-700">내가 가진 별</span>
          <span className="font-display text-2xl text-amber-700 tabular-nums">
            {availableStars}개
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Live Mascot Preview + Character Picker */}
        <section className="lg:col-span-5 bg-white border border-[#E7E2D5] rounded-3xl p-6 shadow-sm space-y-6">
          <div className="bg-[#FFF8EB] border border-[#F3E5C8] rounded-2xl p-6 flex flex-col items-center">
            <MascotCharacter
              characterId={progress.equippedCharacter}
              hatId={progress.equippedAccessories.hat}
              faceId={progress.equippedAccessories.face}
              neckId={progress.equippedAccessories.neck}
              mood="excited"
              sizeClass="w-52 h-52"
            />
            <p className="font-display text-2xl text-slate-900 mt-2">
              {CHARACTERS.find((c) => c.id === progress.equippedCharacter)?.name}
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-slate-900 mb-3">함께할 친구 고르기</h2>
            <div className="space-y-2.5">
              {CHARACTERS.map((char) => {
                const isUnlocked =
                  char.unlockStageId === 0 ||
                  (progress.stageRecords[char.unlockStageId]?.completedCount ?? 0) > 0;
                const isEquipped = progress.equippedCharacter === char.id;

                return (
                  <button
                    key={char.id}
                    type="button"
                    disabled={!isUnlocked}
                    onClick={() => onSelectCharacter(char.id)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-colors flex items-center justify-between gap-3 ${
                      isEquipped
                        ? 'bg-orange-50 border-orange-400'
                        : isUnlocked
                          ? 'bg-[#FFFDF7] border-[#E7E2D5] hover:border-orange-300 cursor-pointer'
                          : 'bg-slate-50 border-slate-200 opacity-70 cursor-not-allowed'
                    }`}
                  >
                    <div>
                      <p className="font-bold text-base text-slate-900">{char.name}</p>
                      <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                        {isUnlocked
                          ? char.description
                          : `${char.unlockStageId}단계를 깨면 만날 수 있어요!`}
                      </p>
                    </div>
                    {isEquipped ? (
                      <span className="inline-flex items-center gap-1 text-sm font-bold text-orange-600 shrink-0">
                        <Check className="w-4 h-4" /> 선택됨
                      </span>
                    ) : !isUnlocked ? (
                      <Lock className="w-4 h-4 text-slate-400 shrink-0" />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Right: Accessory Store & Closet */}
        <section className="lg:col-span-7 bg-white border border-[#E7E2D5] rounded-3xl p-6 shadow-sm">
          {/* Slot Segmented Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <div className="inline-flex p-1 bg-[#EDE8DC] rounded-xl">
              {SLOT_TABS.map((tab) => (
                <button
                  key={tab.slot}
                  type="button"
                  onClick={() => setActiveSlot(tab.slot)}
                  className={`px-4 py-2 min-h-[42px] text-sm sm:text-base font-bold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    activeSlot === tab.slot
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {progress.equippedAccessories[activeSlot] && (
              <button
                type="button"
                onClick={() => onToggleAccessory(activeSlot, null)}
                className="px-3.5 py-2 min-h-[40px] text-sm font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                착용 해제하기
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredItems.map((item) => {
              const isOwned = progress.ownedAccessoryIds.includes(item.id);
              const isEquipped = progress.equippedAccessories[item.slot] === item.id;
              const canAfford = availableStars >= item.costStars;

              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border p-4 flex flex-col justify-between transition-colors ${
                    isEquipped
                      ? 'bg-orange-50/70 border-orange-400'
                      : 'bg-[#FFFDF7] border-[#E7E2D5]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-4 h-4 rounded-full shrink-0 border border-black/10"
                          style={{ backgroundColor: item.color }}
                          aria-hidden="true"
                        />
                        <h3 className="font-bold text-lg text-slate-900">{item.name}</h3>
                      </div>

                      {!isOwned && (
                        <span className="inline-flex items-center gap-1 text-sm font-bold text-amber-700 tabular-nums shrink-0">
                          <Star className="w-4 h-4 fill-amber-400" />
                          {item.costStars}별
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 mt-1.5">{item.description}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#F1EDE2]">
                    {isOwned ? (
                      <button
                        type="button"
                        onClick={() =>
                          onToggleAccessory(item.slot, isEquipped ? null : item.id)
                        }
                        className={`w-full py-2.5 min-h-[44px] rounded-xl font-bold text-sm transition-colors cursor-pointer ${
                          isEquipped
                            ? 'bg-slate-800 text-white hover:bg-slate-700'
                            : 'bg-emerald-600 text-white hover:bg-emerald-700'
                        }`}
                      >
                        {isEquipped ? '착용 중 (누르면 벗기)' : '착용하기'}
                      </button>
                    ) : (
                      <button
                        type="button"
                        disabled={!canAfford}
                        onClick={() => onBuyAccessory(item)}
                        className={`w-full py-2.5 min-h-[44px] rounded-xl font-bold text-sm inline-flex items-center justify-center gap-1.5 transition-colors ${
                          canAfford
                            ? 'bg-orange-500 hover:bg-orange-600 text-white cursor-pointer'
                            : 'bg-slate-200 text-slate-500 cursor-not-allowed'
                        }`}
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>
                          {canAfford ? `별 ${item.costStars}개로 얻기` : `별이 ${item.costStars - availableStars}개 더 필요해요`}
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
};
