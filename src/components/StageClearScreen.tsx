import React from 'react';
import { ArrowRight, RotateCcw, Sparkles, Star, Trophy } from 'lucide-react';
import { CHARACTERS, MISSIONS } from '../data/customization';
import { STAGES } from '../data/stages';
import { GameScreen, PlayerProgress, StageResult } from '../types/game';
import { formatSeconds } from '../utils/storage';
import { MascotCharacter } from './MascotCharacter';

interface StageClearScreenProps {
  result: StageResult;
  progress: PlayerProgress;
  onNextStage: () => void;
  onReplay: () => void;
  onNavigate: (screen: GameScreen) => void;
}

export const StageClearScreen: React.FC<StageClearScreenProps> = ({
  result,
  progress,
  onNextStage,
  onReplay,
  onNavigate,
}) => {
  const stage = STAGES.find((s) => s.id === result.stageId) ?? STAGES[0];
  const hasNextStage = result.stageId < STAGES.length;
  const unlockedChar = result.newlyUnlockedCharacterId
    ? CHARACTERS.find((c) => c.id === result.newlyUnlockedCharacterId)
    : null;

  return (
    <main className="max-w-[920px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <section className="bg-white border border-[#E7E2D5] rounded-3xl p-6 sm:p-10 shadow-sm text-center">
        <p className="text-sm sm:text-base font-bold text-emerald-700">
          {stage.id}단계 클리어 · {stage.title}
        </p>

        <h1 className="font-display text-4xl sm:text-5xl text-slate-900 mt-2 text-balance">
          와! 모든 낱말 짝꿍을 찾았어요!
        </h1>

        {/* Mascot & Stars Showcase */}
        <div className="mt-6 flex flex-col items-center">
          <MascotCharacter
            characterId={progress.equippedCharacter}
            hatId={progress.equippedAccessories.hat}
            faceId={progress.equippedAccessories.face}
            neckId={progress.equippedAccessories.neck}
            mood="excited"
            sizeClass="w-40 h-40 sm:w-44 sm:h-44"
          />

          <div className="flex items-center justify-center gap-3 mt-2" aria-label={`별 ${result.starsEarned}개 획득`}>
            {[1, 2, 3].map((idx) => {
              const earned = idx <= result.starsEarned;
              return (
                <Star
                  key={idx}
                  className={`w-12 h-12 sm:w-14 sm:h-14 transition-transform ${
                    earned
                      ? 'text-amber-400 fill-amber-400 scale-110 drop-shadow-sm'
                      : 'text-slate-200 fill-slate-100'
                  }`}
                />
              );
            })}
          </div>

          <p className="mt-3 text-lg font-bold text-amber-700 tabular-nums">
            {result.newStarsAdded > 0
              ? `새로운 별 +${result.newStarsAdded}개를 얻었어요!`
              : '이번 스테이지의 별을 모두 모았어요!'}
          </p>
        </div>

        {/* Score Breakdown */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
          <div className="bg-[#FFFDF7] border border-[#E7E2D5] rounded-2xl p-4">
            <p className="text-xs font-bold text-slate-500">총 획득 점수</p>
            <p className="font-display text-3xl text-orange-600 mt-1 tabular-nums">
              {result.score.toLocaleString()}
            </p>
          </div>
          <div className="bg-[#FFFDF7] border border-[#E7E2D5] rounded-2xl p-4">
            <p className="text-xs font-bold text-slate-500">정확도</p>
            <p className="font-display text-3xl text-emerald-600 mt-1 tabular-nums">
              {result.accuracyPercent}%
            </p>
          </div>
          <div className="bg-[#FFFDF7] border border-[#E7E2D5] rounded-2xl p-4">
            <p className="text-xs font-bold text-slate-500">최고 콤보</p>
            <p className="font-display text-3xl text-amber-600 mt-1 tabular-nums">
              {result.maxCombo}연속
            </p>
          </div>
          <div className="bg-[#FFFDF7] border border-[#E7E2D5] rounded-2xl p-4">
            <p className="text-xs font-bold text-slate-500">걸린 시간</p>
            <p className="font-display text-3xl text-sky-700 mt-1 tabular-nums">
              {formatSeconds(result.elapsedSec)}
            </p>
          </div>
        </div>

        {/* Newly Unlocked Character or Mission Notification */}
        {(unlockedChar || result.newlyCompletedMissions.length > 0) && (
          <div className="mt-6 bg-[#FFF8EB] border border-[#F3E5C8] rounded-2xl p-5 text-left space-y-2">
            {unlockedChar && (
              <p className="text-base font-bold text-amber-900">
                새 친구 도착! 이제 ‘{unlockedChar.name}’ 캐릭터를 선택할 수 있어요!
              </p>
            )}
            {result.newlyCompletedMissions.map((mId) => {
              const mission = MISSIONS.find((m) => m.id === mId);
              if (!mission) return null;
              return (
                <p key={mId} className="text-base font-bold text-emerald-800">
                  미션 달성! ‘{mission.title}’ 완료로 보너스 +{mission.rewardStars}별을 받았어요!
                </p>
              );
            })}
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          {hasNextStage ? (
            <button
              type="button"
              onClick={onNextStage}
              className="inline-flex items-center gap-2 px-7 py-4 min-h-[54px] bg-orange-500 hover:bg-orange-600 text-white font-display text-2xl rounded-2xl shadow-md shadow-orange-500/20 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>{result.stageId + 1}단계 도전하기</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => onNavigate('RESULTS')}
              className="inline-flex items-center gap-2 px-7 py-4 min-h-[54px] bg-emerald-600 hover:bg-emerald-700 text-white font-display text-2xl rounded-2xl shadow-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Trophy className="w-6 h-6" />
              <span>전체 결과 확인하기</span>
            </button>
          )}

          <button
            type="button"
            onClick={onReplay}
            className="inline-flex items-center gap-2 px-5 py-4 min-h-[54px] bg-[#F1EDE2] hover:bg-[#E7E2D5] text-slate-800 font-bold text-lg rounded-2xl transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <RotateCcw className="w-5 h-5" />
            <span>다시 하기</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('CUSTOMIZE')}
            className="inline-flex items-center gap-2 px-5 py-4 min-h-[54px] bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 font-bold text-lg rounded-2xl transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span>캐릭터 꾸미기</span>
          </button>
        </div>
      </section>
    </main>
  );
};
