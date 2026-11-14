import React, { useState } from 'react';
import { Award, CheckCircle2, RotateCcw, Star, Trophy } from 'lucide-react';
import { ACCESSORIES, MISSIONS } from '../data/customization';
import { STAGES } from '../data/stages';
import { WORDS_DICTIONARY } from '../data/words';
import { PlayerProgress } from '../types/game';
import { getTotalCompletedStages } from '../utils/storage';
import { WordIllustration } from './WordIllustration';

interface ResultsScreenProps {
  progress: PlayerProgress;
  onResetProgress: () => void;
  onGoStages: () => void;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({
  progress,
  onResetProgress,
  onGoStages,
}) => {
  const [confirmReset, setConfirmReset] = useState(false);

  const completedStagesCount = getTotalCompletedStages(progress);
  const totalAttempts = progress.totalCorrectMatches + progress.totalWrongAttempts;
  const overallAccuracy =
    totalAttempts > 0 ? Math.round((progress.totalCorrectMatches / totalAttempts) * 100) : 0;
  const totalHighScore = Object.values(progress.stageRecords).reduce(
    (sum, rec) => sum + rec.bestScore,
    0
  );

  return (
    <main className="max-w-[1140px] mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl sm:text-4xl text-slate-900">
            나의 한글 낱말 성장 기록
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-1">
            지금까지 얼마나 많은 낱말 짝꿍을 찾았는지 한눈에 확인해 보아요!
          </p>
        </div>

        <button
          type="button"
          onClick={onGoStages}
          className="px-5 py-3 min-h-[46px] bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer self-start sm:self-auto"
        >
          계속 놀이하기
        </button>
      </div>

      {/* 4 Summary Metrics */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-[#E7E2D5] rounded-2xl p-5 shadow-sm">
          <p className="text-sm font-bold text-slate-500">전체 정답률</p>
          <p className="font-display text-4xl text-emerald-600 mt-1.5 tabular-nums">
            {overallAccuracy}%
          </p>
          <p className="text-xs text-slate-500 mt-1 tabular-nums">
            맞힌 횟수 {progress.totalCorrectMatches} · 다시 도전 {progress.totalWrongAttempts}
          </p>
        </div>

        <div className="bg-white border border-[#E7E2D5] rounded-2xl p-5 shadow-sm">
          <p className="text-sm font-bold text-slate-500">완료한 스테이지</p>
          <p className="font-display text-4xl text-orange-600 mt-1.5 tabular-nums">
            {completedStagesCount} <span className="text-xl text-slate-400">/ {STAGES.length}</span>
          </p>
          <p className="text-xs text-slate-500 mt-1">단계별 낱말 정복</p>
        </div>

        <div className="bg-white border border-[#E7E2D5] rounded-2xl p-5 shadow-sm">
          <p className="text-sm font-bold text-slate-500">모은 별 / 최고 콤보</p>
          <p className="font-display text-4xl text-amber-600 mt-1.5 tabular-nums">
            {progress.totalStarsEarned}개
          </p>
          <p className="text-xs text-slate-500 mt-1 tabular-nums">
            최고 연속 콤보 {progress.bestComboEver}회
          </p>
        </div>

        <div className="bg-white border border-[#E7E2D5] rounded-2xl p-5 shadow-sm">
          <p className="text-sm font-bold text-slate-500">누적 최고 점수</p>
          <p className="font-display text-4xl text-sky-700 mt-1.5 tabular-nums">
            {totalHighScore.toLocaleString()}
          </p>
          <p className="text-xs text-slate-500 mt-1 tabular-nums">
            소품 {progress.ownedAccessoryIds.length} / {ACCESSORIES.length}개 보유
          </p>
        </div>
      </section>

      {/* Earned Rewards & Missions */}
      <section className="bg-white border border-[#E7E2D5] rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2.5 mb-4">
          <Trophy className="w-6 h-6 text-amber-500" />
          <h2 className="font-display text-2xl text-slate-900">획득한 보상과 미션</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-[#EFEAE0] rounded-2xl p-4 bg-[#FFFDF7]">
            <p className="font-bold text-base text-slate-800 mb-3 flex items-center gap-1.5">
              <Award className="w-5 h-5 text-orange-500" />
              완료한 특별 미션 ({progress.completedMissionIds.length} / {MISSIONS.length})
            </p>
            <ul className="space-y-2">
              {MISSIONS.map((mission) => {
                const completed = progress.completedMissionIds.includes(mission.id);
                return (
                  <li key={mission.id} className="flex items-center justify-between text-sm">
                    <span className={completed ? 'text-slate-900 font-bold' : 'text-slate-400'}>
                      {mission.title}
                    </span>
                    {completed ? (
                      <span className="inline-flex items-center gap-1 text-emerald-600 font-bold">
                        <CheckCircle2 className="w-4 h-4" /> 달성
                      </span>
                    ) : (
                      <span className="text-slate-400">도전 중</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="border border-[#EFEAE0] rounded-2xl p-4 bg-[#FFFDF7]">
            <p className="font-bold text-base text-slate-800 mb-3 flex items-center gap-1.5">
              <Star className="w-5 h-5 text-amber-500 fill-amber-400" />
              모은 꾸미기 소품 ({progress.ownedAccessoryIds.length} / {ACCESSORIES.length})
            </p>
            {progress.ownedAccessoryIds.length === 0 ? (
              <p className="text-sm text-slate-500">
                아직 꾸미기 소품이 없어요. 캐릭터 꾸미기에서 별로 멋진 소품을 골라보세요!
              </p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {progress.ownedAccessoryIds.map((id) => {
                  const acc = ACCESSORIES.find((a) => a.id === id);
                  if (!acc) return null;
                  return (
                    <span
                      key={id}
                      className="text-sm font-medium text-slate-800 bg-white border border-[#E7E2D5] rounded-xl px-3 py-1.5"
                    >
                      {acc.name}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Learned Word Dictionary Album */}
      <section className="bg-white border border-[#E7E2D5] rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center justify-between gap-2 mb-4">
          <h2 className="font-display text-2xl text-slate-900">내가 익힌 낱말 도감</h2>
          <span className="text-sm font-bold text-slate-500 tabular-nums">
            {progress.learnedWordIds.length} / {WORDS_DICTIONARY.length}개
          </span>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-3">
          {WORDS_DICTIONARY.map((word) => {
            const learned = progress.learnedWordIds.includes(word.id);
            return (
              <div
                key={word.id}
                className={`rounded-2xl border p-2.5 flex flex-col items-center text-center ${
                  learned
                    ? 'bg-[#FFFDF7] border-amber-200'
                    : 'bg-slate-50 border-slate-200 opacity-45 grayscale'
                }`}
              >
                <WordIllustration wordId={word.id} wordLabel={word.word} className="w-11 h-11" />
                <span className="mt-1.5 text-sm font-bold text-slate-900">
                  {learned ? word.word : '???'}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Reset Progress Control (2-step safe confirmation, no window.confirm) */}
      <section className="flex justify-end pt-2">
        {!confirmReset ? (
          <button
            type="button"
            onClick={() => setConfirmReset(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[42px] text-sm font-bold text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>처음부터 새로 기록하기</span>
          </button>
        ) : (
          <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 flex flex-wrap items-center gap-3">
            <span className="text-sm font-bold text-rose-900">
              정말 모든 점수와 별 기록을 지우고 처음부터 시작할까요?
            </span>
            <button
              type="button"
              onClick={() => {
                onResetProgress();
                setConfirmReset(false);
              }}
              className="px-4 py-2 min-h-[40px] bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold rounded-xl cursor-pointer"
            >
              네, 초기화할래요
            </button>
            <button
              type="button"
              onClick={() => setConfirmReset(false)}
              className="px-4 py-2 min-h-[40px] bg-white border border-slate-200 text-slate-700 text-sm font-bold rounded-xl cursor-pointer"
            >
              취소
            </button>
          </div>
        )}
      </section>
    </main>
  );
};
