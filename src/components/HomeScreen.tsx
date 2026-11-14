import React from 'react';
import { BookOpen, Map, Play, Sparkles, Trophy, Volume2, VolumeX, Music } from 'lucide-react';
import { CHARACTERS } from '../data/customization';
import { STAGES } from '../data/stages';
import { GameScreen, PlayerProgress } from '../types/game';
import { getAvailableStars, getTotalCompletedStages } from '../utils/storage';
import { MascotCharacter } from './MascotCharacter';
import { WordIllustration } from './WordIllustration';

interface HomeScreenProps {
  progress: PlayerProgress;
  onStartNextStage: () => void;
  onNavigate: (screen: GameScreen) => void;
  onToggleSound: () => void;
  onToggleBgm: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  progress,
  onStartNextStage,
  onNavigate,
  onToggleSound,
  onToggleBgm,
}) => {
  const completedCount = getTotalCompletedStages(progress);
  const availableStars = getAvailableStars(progress);
  const activeChar = CHARACTERS.find((c) => c.id === progress.equippedCharacter) ?? CHARACTERS[0];
  const nextStage = STAGES.find((s) => s.id === progress.unlockedStageId) ?? STAGES[0];

  return (
    <main className="max-w-[1140px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Main Hero Grid */}
      <section className="bg-white border border-[#E7E2D5] rounded-3xl p-6 sm:p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Title & Primary Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-sm sm:text-base font-medium text-slate-600 flex flex-wrap items-center gap-2">
              <span>초등학교 1학년 한글 놀이</span>
              <span aria-hidden="true">·</span>
              <span>총 12단계 63개 낱말</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.18] text-slate-900 text-balance">
              그림과 글자가 만나는
              <br />
              <span className="text-orange-500">신나는 낱말 짝꿍 게임</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
              {activeChar.name}와 함께 카드를 뒤집어 그림과 한글 낱말의 짝을 찾아보세요.
              별을 모으면 멋진 모자와 안경도 선물할 수 있어요!
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={onStartNextStage}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 min-h-[56px] bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white font-display text-2xl rounded-2xl shadow-md shadow-orange-500/20 transition-all whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                <Play className="w-6 h-6 fill-current" />
                <span>{nextStage.id}단계 시작하기</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('STAGES')}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 min-h-[56px] bg-[#F1EDE2] hover:bg-[#E7E2D5] text-slate-800 font-bold text-lg rounded-2xl transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                <Map className="w-5 h-5 text-emerald-600" />
                <span>스테이지 고르기</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('HOW_TO_PLAY')}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 min-h-[56px] bg-white border border-[#E2DDD0] hover:bg-slate-50 text-slate-700 font-bold text-lg rounded-2xl transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                <BookOpen className="w-5 h-5 text-sky-600" />
                <span>게임 방법</span>
              </button>
            </div>

            {/* Audio Quick Controls */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onToggleSound}
                aria-pressed={progress.soundEnabled}
                className={`inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl border text-sm font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  progress.soundEnabled
                    ? 'bg-sky-50 border-sky-200 text-sky-800 hover:bg-sky-100'
                    : 'bg-slate-100 border-slate-200 text-slate-500 hover:bg-slate-200'
                }`}
              >
                {progress.soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                <span>효과음 {progress.soundEnabled ? '켜짐' : '꺼짐'}</span>
              </button>

              <button
                type="button"
                onClick={onToggleBgm}
                aria-pressed={progress.bgmEnabled}
                className={`inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl border text-sm font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  progress.bgmEnabled
                    ? 'bg-amber-50 border-amber-200 text-amber-800 hover:bg-amber-100'
                    : 'bg-slate-100 border-slate-200 text-slate-500 hover:bg-slate-200'
                }`}
              >
                <Music className="w-4 h-4" />
                <span>배경음악 {progress.bgmEnabled ? '켜짐' : '꺼짐'}</span>
              </button>
            </div>
          </div>

          {/* Right: Mascot Character & Card Preview */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center bg-[#FFF8EB] border border-[#F3E5C8] rounded-3xl p-6 sm:p-8">
            <MascotCharacter
              characterId={progress.equippedCharacter}
              hatId={progress.equippedAccessories.hat}
              faceId={progress.equippedAccessories.face}
              neckId={progress.equippedAccessories.neck}
              mood="happy"
              sizeClass="w-48 h-48 sm:w-56 sm:h-56"
            />
            <div className="text-center mt-2">
              <p className="font-display text-2xl text-slate-900">{activeChar.name}</p>
              <p className="text-sm text-slate-600 mt-1">{activeChar.description}</p>
            </div>

            <div className="mt-5 flex items-center gap-3 w-full justify-center">
              <button
                type="button"
                onClick={() => onNavigate('CUSTOMIZE')}
                className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] bg-white hover:bg-amber-50 border border-amber-200 rounded-xl text-sm font-bold text-amber-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>캐릭터 꾸미기 ({availableStars}별)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Strip & Sample Word Pair Preview */}
      <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border border-[#E7E2D5] rounded-2xl p-5 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">완료한 스테이지</p>
            <p className="font-display text-3xl text-slate-900 mt-1 tabular-nums">
              {completedCount} <span className="text-lg font-sans text-slate-500">/ {STAGES.length}</span>
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('STAGES')}
            className="px-4 py-2 min-h-[44px] text-sm font-bold text-orange-600 hover:bg-orange-50 rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            목록 보기
          </button>
        </div>

        <div className="bg-white border border-[#E7E2D5] rounded-2xl p-5 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">모은 별 / 사용 가능</p>
            <p className="font-display text-3xl text-amber-600 mt-1 tabular-nums">
              {progress.totalStarsEarned}개 <span className="text-base font-sans text-slate-500">({availableStars}별 보유)</span>
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('CUSTOMIZE')}
            className="px-4 py-2 min-h-[44px] text-sm font-bold text-amber-700 hover:bg-amber-50 rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            상점 가기
          </button>
        </div>

        <div className="bg-white border border-[#E7E2D5] rounded-2xl p-5 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">오늘의 짝꿍 미리보기</p>
            <div className="flex items-center gap-3 mt-1.5">
              <WordIllustration wordId="apple" wordLabel="사과" className="w-10 h-10" />
              <span className="text-slate-400 font-bold">=</span>
              <span className="font-display text-2xl text-sky-700">사과</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('RESULTS')}
            className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[44px] text-sm font-bold text-slate-700 hover:bg-slate-100 rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Trophy className="w-4 h-4 text-emerald-600" />
            <span>내 기록</span>
          </button>
        </div>
      </section>
    </main>
  );
};
