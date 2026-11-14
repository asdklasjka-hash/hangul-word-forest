import React from 'react';
import { CheckCircle2, Lock, Play, Star, Target } from 'lucide-react';
import { MISSIONS } from '../data/customization';
import { STAGES } from '../data/stages';
import { PlayMode, PlayerProgress, StageConfig } from '../types/game';
import { WordIllustration } from './WordIllustration';

interface StageSelectScreenProps {
  progress: PlayerProgress;
  onSelectStage: (stage: StageConfig) => void;
  onChangePlayMode: (mode: PlayMode) => void;
}

export const StageSelectScreen: React.FC<StageSelectScreenProps> = ({
  progress,
  onSelectStage,
  onChangePlayMode,
}) => {
  return (
    <main className="max-w-[1140px] mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-8">
      {/* Header & Play Mode Toggle */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl sm:text-4xl text-slate-900 text-balance">
            스테이지를 골라보아요
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-1">
            쉬운 3쌍부터 시작해 8쌍 마스터 단계까지 차근차근 도전해 보세요.
          </p>
        </div>

        {/* Play Mode Segmented Control */}
        <div className="flex flex-col gap-1.5">
          <span className="text-xs font-bold text-slate-500">카드 놀이 방식</span>
          <div className="inline-flex items-center p-1 bg-[#EDE8DC] rounded-xl">
            <button
              type="button"
              onClick={() => onChangePlayMode('flip')}
              className={`px-4 py-2 min-h-[40px] text-sm font-bold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                progress.preferredPlayMode === 'flip'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              뒤집어 찾기 (기본)
            </button>
            <button
              type="button"
              onClick={() => onChangePlayMode('open')}
              className={`px-4 py-2 min-h-[40px] text-sm font-bold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                progress.preferredPlayMode === 'open'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              펼쳐서 잇기 (쉬움)
            </button>
          </div>
        </div>
      </div>

      {/* 12 Stages Grid */}
      <section aria-label="스테이지 목록" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {STAGES.map((stage) => {
          const isUnlocked = stage.id <= progress.unlockedStageId;
          const record = progress.stageRecords[stage.id];
          const stars = record?.stars ?? 0;
          const isCompleted = (record?.completedCount ?? 0) > 0;
          const previewWordId = stage.wordIds[0];

          return (
            <div
              key={stage.id}
              className={`rounded-3xl border p-5 transition-all flex flex-col justify-between ${
                isUnlocked
                  ? 'bg-white border-[#E7E2D5] shadow-sm hover:border-orange-300'
                  : 'bg-[#F5F2EA] border-[#E5E0D3] opacity-80'
              }`}
            >
              <div>
                {/* Top Metadata Line (Zero-Pill clean text) */}
                <div className="flex items-center justify-between gap-2">
                  <div className="text-sm font-bold text-slate-500 flex items-center gap-1.5">
                    <span className="text-orange-600">{stage.id}단계</span>
                    <span aria-hidden="true">·</span>
                    <span>{stage.pairCount}쌍 ({stage.pairCount * 2}장)</span>
                    <span aria-hidden="true">·</span>
                    <span>{stage.difficultyLabel}</span>
                  </div>

                  {/* Star Rating */}
                  <div className="flex items-center gap-0.5" aria-label={`별 ${stars}개`}>
                    {[1, 2, 3].map((idx) => (
                      <Star
                        key={idx}
                        className={`w-5 h-5 ${
                          idx <= stars ? 'text-amber-400 fill-amber-400' : 'text-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Stage Title & Preview Art */}
                <div className="mt-4 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#FFF8EB] border border-[#F3E5C8] p-2 shrink-0 flex items-center justify-center">
                    <WordIllustration wordId={previewWordId} wordLabel={stage.title} className="w-12 h-12" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-display text-2xl text-slate-900 truncate">{stage.title}</h2>
                    <p className="text-sm text-slate-600 mt-0.5">{stage.subtitle}</p>
                  </div>
                </div>

                <p className="mt-3 text-sm text-slate-600">{stage.missionText}</p>
              </div>

              {/* Action Footer */}
              <div className="mt-5 pt-4 border-t border-[#F1EDE2] flex items-center justify-between gap-3">
                <div className="text-sm text-slate-600 tabular-nums">
                  {isCompleted ? (
                    <span>최고 {record.bestScore.toLocaleString()}점</span>
                  ) : isUnlocked ? (
                    <span>도전 가능</span>
                  ) : (
                    <span>이전 단계를 먼저 깨세요</span>
                  )}
                </div>

                {isUnlocked ? (
                  <button
                    type="button"
                    onClick={() => onSelectStage(stage)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 min-h-[44px] bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>{isCompleted ? '다시 놀이하기' : '시작하기'}</span>
                  </button>
                ) : (
                  <div className="inline-flex items-center gap-1.5 px-4 py-2.5 min-h-[44px] bg-[#E8E3D6] text-slate-500 font-bold text-sm rounded-xl whitespace-nowrap shrink-0">
                    <Lock className="w-4 h-4" />
                    <span>잠김</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </section>

      {/* Missions Section */}
      <section className="bg-white border border-[#E7E2D5] rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2.5 mb-4">
          <Target className="w-6 h-6 text-orange-500" />
          <h2 className="font-display text-2xl sm:text-3xl text-slate-900">도전! 특별 미션</h2>
        </div>
        <p className="text-base text-slate-600 mb-5">
          미션을 달성하면 캐릭터를 꾸밀 수 있는 보너스 별을 받을 수 있어요!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {MISSIONS.map((mission) => {
            const done = progress.completedMissionIds.includes(mission.id);
            return (
              <div
                key={mission.id}
                className={`rounded-2xl border p-4 flex flex-col justify-between ${
                  done ? 'bg-emerald-50/60 border-emerald-200' : 'bg-[#FFFDF7] border-[#E7E2D5]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-lg text-slate-900">{mission.title}</h3>
                    {done ? (
                      <span className="inline-flex items-center gap-1 text-sm font-bold text-emerald-700 whitespace-nowrap shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                        완료
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-sm font-bold text-amber-600 tabular-nums whitespace-nowrap shrink-0">
                        <Star className="w-4 h-4 fill-amber-400" />+{mission.rewardStars}별
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 mt-1.5">{mission.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};
