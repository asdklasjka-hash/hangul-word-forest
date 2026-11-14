import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  CheckCircle2,
  Eye,
  Flame,
  Lightbulb,
  Music,
  RotateCcw,
  Sparkles,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { WORDS_MAP } from '../data/words';
import { GameCard, PlayMode, StageConfig, StageResult } from '../types/game';
import { soundEngine } from '../utils/sound';
import { buildStageDeck, formatSeconds, isMatchingPair } from '../utils/storage';
import { WordIllustration } from './WordIllustration';

interface GameBoardScreenProps {
  stage: StageConfig;
  playMode: PlayMode;
  soundEnabled: boolean;
  bgmEnabled: boolean;
  onToggleSound: () => void;
  onToggleBgm: () => void;
  onStageComplete: (result: Omit<StageResult, 'newlyCompletedMissions' | 'newlyUnlockedCharacterId' | 'newStarsAdded'>) => void;
}

export const GameBoardScreen: React.FC<GameBoardScreenProps> = ({
  stage,
  playMode,
  soundEnabled,
  bgmEnabled,
  onToggleSound,
  onToggleBgm,
  onStageComplete,
}) => {
  const [cards, setCards] = useState<GameCard[]>(() => buildStageDeck(stage, true));
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [mismatchIds, setMismatchIds] = useState<string[]>([]);
  const [matchedWordIds, setMatchedWordIds] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [comboBonusTotal, setComboBonusTotal] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [elapsedSec, setElapsedSec] = useState(0);
  const [isPeeking, setIsPeeking] = useState(playMode === 'flip');
  const [isResolving, setIsResolving] = useState(false);
  const [hintsLeft, setHintsLeft] = useState(3);
  const [feedback, setFeedback] = useState<{
    type: 'neutral' | 'success' | 'retry' | 'combo';
    message: string;
  }>({
    type: 'neutral',
    message:
      playMode === 'flip'
        ? '카드 위치를 잠깐 기억해 보아요!'
        : '그림 카드와 알맞은 글자 카드를 하나씩 눌러 짝을 맞춰요!',
  });

  const timersRef = useRef<number[]>([]);
  const stageFinishedRef = useRef(false);

  const clearAllTimers = useCallback(() => {
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
  }, []);

  const addTimeout = useCallback((fn: () => void, ms: number) => {
    const id = window.setTimeout(fn, ms);
    timersRef.current.push(id);
    return id;
  }, []);

  const startNewRound = useCallback(() => {
    clearAllTimers();
    stageFinishedRef.current = false;
    const initialDeck = buildStageDeck(stage, true);
    setCards(initialDeck);
    setSelectedIds([]);
    setMismatchIds([]);
    setMatchedWordIds([]);
    setScore(0);
    setComboBonusTotal(0);
    setCombo(0);
    setMaxCombo(0);
    setWrongAttempts(0);
    setElapsedSec(0);
    setIsResolving(false);
    setHintsLeft(3);

    if (playMode === 'flip') {
      setIsPeeking(true);
      setFeedback({
        type: 'neutral',
        message: '잠깐! 카드 그림과 글자 위치를 기억해 보아요!',
      });
      addTimeout(() => {
        setCards((prev) =>
          prev.map((c) => (c.isMatched ? c : { ...c, isFlipped: false }))
        );
        setIsPeeking(false);
        setFeedback({
          type: 'neutral',
          message: '노란 카드(그림)와 파란 카드(글자)를 눌러 짝을 찾아보세요!',
        });
      }, 1700);
    } else {
      setIsPeeking(false);
      setFeedback({
        type: 'neutral',
        message: '그림 카드와 알맞은 글자 카드를 하나씩 눌러 짝을 맞춰요!',
      });
    }
  }, [addTimeout, clearAllTimers, playMode, stage]);

  // Initialize or reset whenever stage or playMode changes
  useEffect(() => {
    startNewRound();
    return () => {
      clearAllTimers();
    };
  }, [startNewRound, clearAllTimers]);

  // Timer tick (runs while playing, pauses during initial peek or after win)
  useEffect(() => {
    if (isPeeking || stageFinishedRef.current) return;
    const interval = window.setInterval(() => {
      if (!stageFinishedRef.current) {
        setElapsedSec((prev) => prev + 1);
      }
    }, 1000);
    return () => window.clearInterval(interval);
  }, [isPeeking]);

  const handleSkipPeek = () => {
    if (!isPeeking) return;
    clearAllTimers();
    setCards((prev) => prev.map((c) => (c.isMatched ? c : { ...c, isFlipped: false })));
    setIsPeeking(false);
    setFeedback({
      type: 'neutral',
      message: '노란 카드(그림)와 파란 카드(글자)를 눌러 짝을 찾아보세요!',
    });
  };

  const handleUseHint = () => {
    if (hintsLeft <= 0 || isPeeking || isResolving || stageFinishedRef.current) return;
    soundEngine.playSelect();
    setHintsLeft((prev) => prev - 1);

    if (playMode === 'flip') {
      setIsPeeking(true);
      setSelectedIds([]);
      setCards((prev) => prev.map((c) => ({ ...c, isFlipped: true })));
      setFeedback({
        type: 'neutral',
        message: '힌트! 카드 위치를 다시 한 번 살펴보아요!',
      });
      addTimeout(() => {
        setCards((prev) =>
          prev.map((c) => (c.isMatched ? c : { ...c, isFlipped: false }))
        );
        setIsPeeking(false);
        setFeedback({
          type: 'neutral',
          message: '이제 짝꿍을 찾아볼까요?',
        });
      }, 1500);
    } else {
      // Open mode hint: highlight one unmatched pair briefly
      const unmatched = cards.find((c) => !c.isMatched);
      if (unmatched) {
        setFeedback({
          type: 'neutral',
          message: `힌트! ‘${unmatched.word}’ 그림과 글자를 찾아보세요! (${WORDS_MAP[unmatched.wordId]?.hint ?? ''})`,
        });
        soundEngine.speakWord(unmatched.word);
      }
    }
  };

  const handleCardClick = (clicked: GameCard) => {
    if (stageFinishedRef.current || isPeeking || isResolving || clicked.isMatched) return;
    if (selectedIds.includes(clicked.uid)) return;

    soundEngine.playSelect();
    if (clicked.type === 'word') {
      soundEngine.speakWord(clicked.word);
    }

    // Flip card face-up in flip mode
    if (playMode === 'flip') {
      setCards((prev) =>
        prev.map((c) => (c.uid === clicked.uid ? { ...c, isFlipped: true } : c))
      );
    }

    if (selectedIds.length === 0) {
      setSelectedIds([clicked.uid]);
      setFeedback({
        type: 'neutral',
        message:
          clicked.type === 'picture'
            ? '그림 카드를 골랐어요! 같은 뜻의 글자 카드를 찾아보세요.'
            : `‘${clicked.word}’ 글자를 골랐어요! 알맞은 그림 카드를 찾아보세요.`,
      });
      return;
    }

    // Second card selected
    const firstCard = cards.find((c) => c.uid === selectedIds[0]);
    if (!firstCard) return;

    const nextSelected = [firstCard.uid, clicked.uid];
    setSelectedIds(nextSelected);
    setIsResolving(true);

    if (isMatchingPair(firstCard, clicked)) {
      const nextCombo = combo + 1;
      const nextMaxCombo = Math.max(maxCombo, nextCombo);
      const addedComboBonus = nextCombo >= 2 ? (nextCombo - 1) * 30 : 0;
      const addedScore = 100 + addedComboBonus;
      const newScore = score + addedScore;
      const newComboBonusTotal = comboBonusTotal + addedComboBonus;
      const newMatchedList = [...matchedWordIds, clicked.wordId];

      setCombo(nextCombo);
      setMaxCombo(nextMaxCombo);
      setScore(newScore);
      setComboBonusTotal(newComboBonusTotal);
      setMatchedWordIds(newMatchedList);

      if (nextCombo >= 2) {
        soundEngine.playCombo(nextCombo);
        setFeedback({
          type: 'combo',
          message: `${nextCombo}연속 콤보! ‘${clicked.word}’ 짝꿍 성공 (+${addedScore}점)`,
        });
      } else {
        soundEngine.playMatch();
        setFeedback({
          type: 'success',
          message: `참 잘했어요! ‘${clicked.word}’ 짝꿍을 찾았어요 (+${addedScore}점)`,
        });
      }

      if (clicked.type === 'picture') {
        soundEngine.speakWord(clicked.word);
      }

      addTimeout(() => {
        setCards((prev) =>
          prev.map((c) =>
            c.uid === firstCard.uid || c.uid === clicked.uid
              ? { ...c, isMatched: true, isFlipped: true }
              : c
          )
        );
        setSelectedIds([]);
        setIsResolving(false);

        if (newMatchedList.length === stage.pairCount) {
          stageFinishedRef.current = true;
          soundEngine.playFanfare();

          const timeRemaining = Math.max(0, stage.targetTimeSec - elapsedSec);
          const timeBonus = timeRemaining * 5;
          const totalScore = newScore + timeBonus;
          const totalAttempts = stage.pairCount + wrongAttempts;
          const accuracyPercent = Math.round((stage.pairCount / Math.max(1, totalAttempts)) * 100);

          let starsEarned = 1;
          if (elapsedSec <= stage.threeStarTimeSec && wrongAttempts <= 2) {
            starsEarned = 3;
          } else if (elapsedSec <= stage.targetTimeSec && wrongAttempts <= 4) {
            starsEarned = 2;
          } else if (wrongAttempts <= 1) {
            starsEarned = 3;
          } else if (wrongAttempts <= 3) {
            starsEarned = 2;
          }

          addTimeout(() => {
            onStageComplete({
              stageId: stage.id,
              score: totalScore,
              baseScore: stage.pairCount * 100,
              comboBonus: newComboBonusTotal,
              timeBonus,
              starsEarned,
              elapsedSec,
              correctMatches: stage.pairCount,
              wrongAttempts,
              maxCombo: nextMaxCombo,
              accuracyPercent,
            });
          }, 650);
        }
      }, 420);
    } else {
      // Mismatch
      setCombo(0);
      setWrongAttempts((prev) => prev + 1);
      setMismatchIds(nextSelected);
      soundEngine.playMismatch();

      const reasonHint =
        firstCard.type === clicked.type
          ? firstCard.type === 'picture'
            ? '둘 다 그림 카드예요! 그림 하나와 글자 하나를 골라 보아요.'
            : '둘 다 글자 카드예요! 그림 하나와 글자 하나를 골라 보아요.'
          : '아쉬워요! 그림과 글자가 조금 달라요. 다시 찾아볼까요?';

      setFeedback({
        type: 'retry',
        message: reasonHint,
      });

      addTimeout(() => {
        if (playMode === 'flip') {
          setCards((prev) =>
            prev.map((c) =>
              c.uid === firstCard.uid || c.uid === clicked.uid
                ? { ...c, isFlipped: false }
                : c
            )
          );
        }
        setSelectedIds([]);
        setMismatchIds([]);
        setIsResolving(false);
      }, 850);
    }
  };

  // Grid columns tailored to pair count
  const gridClass = useMemo(() => {
    switch (stage.pairCount) {
      case 3:
        return 'grid-cols-2 sm:grid-cols-3 max-w-[780px]';
      case 4:
        return 'grid-cols-2 sm:grid-cols-4 max-w-[920px]';
      case 6:
        return 'grid-cols-3 sm:grid-cols-4 max-w-[940px]';
      case 8:
      default:
        return 'grid-cols-4 max-w-[940px]';
    }
  }, [stage.pairCount]);

  return (
    <main className="max-w-[1140px] mx-auto px-4 sm:px-6 py-5 sm:py-7 space-y-5">
      {/* Top Game HUD */}
      <section
        aria-label="게임 상태 표시줄"
        className="bg-white border border-[#E7E2D5] rounded-2xl p-4 sm:px-6 flex flex-wrap items-center justify-between gap-4 shadow-sm"
      >
        {/* Left: Stage Info */}
        <div>
          <div className="text-xs sm:text-sm font-bold text-slate-500 flex items-center gap-1.5">
            <span className="text-orange-600">{stage.id}단계</span>
            <span aria-hidden="true">·</span>
            <span>{stage.theme}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">
              {matchedWordIds.length} / {stage.pairCount}쌍 완료
            </span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl text-slate-900 mt-0.5">
            {stage.title}
          </h1>
        </div>

        {/* Center: Score, Timer, Combo */}
        <div className="flex flex-wrap items-center gap-5 sm:gap-7">
          <div>
            <p className="text-xs font-bold text-slate-500">점수</p>
            <p className="font-display text-2xl sm:text-3xl text-slate-900 tabular-nums">
              {score.toLocaleString()}
            </p>
          </div>

          <div>
            <p className="text-xs font-bold text-slate-500">걸린 시간</p>
            <p className="font-display text-2xl sm:text-3xl text-sky-700 tabular-nums">
              {formatSeconds(elapsedSec)}
              <span className="text-sm font-sans font-medium text-slate-400 ml-1">
                / {formatSeconds(stage.targetTimeSec)}
              </span>
            </p>
          </div>

          <div>
            <p className="text-xs font-bold text-slate-500">연속 콤보</p>
            <p
              className={`font-display text-2xl sm:text-3xl tabular-nums flex items-center gap-1 ${
                combo >= 2 ? 'text-orange-500' : 'text-slate-700'
              }`}
            >
              {combo >= 2 && <Flame className="w-6 h-6 fill-orange-400 text-orange-500" />}
              <span>{combo}콤보</span>
            </p>
          </div>
        </div>

        {/* Right: Utility Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleUseHint}
            disabled={hintsLeft <= 0 || isPeeking}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[44px] bg-amber-50 hover:bg-amber-100 disabled:opacity-45 border border-amber-200 text-amber-900 font-bold text-sm rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer disabled:cursor-not-allowed"
          >
            <Lightbulb className="w-4 h-4 text-amber-600" />
            <span>힌트 ({hintsLeft})</span>
          </button>

          <button
            type="button"
            onClick={onToggleSound}
            aria-label={soundEnabled ? '효과음 끄기' : '효과음 켜기'}
            title={soundEnabled ? '효과음 끄기' : '효과음 켜기'}
            className={`p-2.5 min-w-[44px] min-h-[44px] rounded-xl border flex items-center justify-center transition-colors cursor-pointer ${
              soundEnabled
                ? 'bg-sky-50 border-sky-200 text-sky-700 hover:bg-sky-100'
                : 'bg-slate-100 border-slate-200 text-slate-400'
            }`}
          >
            {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
          </button>

          <button
            type="button"
            onClick={onToggleBgm}
            aria-label={bgmEnabled ? '배경음악 끄기' : '배경음악 켜기'}
            title={bgmEnabled ? '배경음악 끄기' : '배경음악 켜기'}
            className={`p-2.5 min-w-[44px] min-h-[44px] rounded-xl border flex items-center justify-center transition-colors cursor-pointer ${
              bgmEnabled
                ? 'bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100'
                : 'bg-slate-100 border-slate-200 text-slate-400'
            }`}
          >
            <Music className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={startNewRound}
            aria-label="게임 다시 시작"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[44px] bg-[#F1EDE2] hover:bg-[#E7E2D5] text-slate-800 font-bold text-sm rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>다시 시작</span>
          </button>
        </div>
      </section>

      {/* Feedback Banner */}
      <div
        role="status"
        aria-live="polite"
        className={`rounded-2xl border px-5 py-3.5 flex flex-wrap items-center justify-between gap-3 transition-colors ${
          feedback.type === 'combo'
            ? 'bg-amber-50 border-amber-300 text-amber-950'
            : feedback.type === 'success'
              ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
              : feedback.type === 'retry'
                ? 'bg-rose-50 border-rose-200 text-rose-900'
                : 'bg-white border-[#E7E2D5] text-slate-800'
        }`}
      >
        <div className="flex items-center gap-2.5 text-base sm:text-lg font-bold">
          {feedback.type === 'combo' && <Sparkles className="w-5 h-5 text-orange-500 shrink-0" />}
          {feedback.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
          <span>{feedback.message}</span>
        </div>

        {isPeeking && (
          <button
            type="button"
            onClick={handleSkipPeek}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 min-h-[38px] bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold rounded-xl whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Eye className="w-4 h-4" />
            <span>바로 시작하기</span>
          </button>
        )}
      </div>

      {/* Card Grid Arena */}
      <section aria-label="낱말 카드 게임판" className="flex justify-center">
        <div className={`grid ${gridClass} gap-3.5 sm:gap-4 w-full`}>
          {cards.map((card) => {
            const isSelected = selectedIds.includes(card.uid);
            const isMismatched = mismatchIds.includes(card.uid);
            const showFront = card.isFlipped || card.isMatched || playMode === 'open';
            const isPicture = card.type === 'picture';

            return (
              <button
                key={card.uid}
                type="button"
                onClick={() => handleCardClick(card)}
                disabled={card.isMatched}
                aria-label={
                  showFront
                    ? isPicture
                      ? `${card.word} 그림 카드`
                      : `${card.word} 글자 카드`
                    : isPicture
                      ? '뒤집힌 그림 카드'
                      : '뒤집힌 글자 카드'
                }
                className={`perspective-1000 group relative aspect-[4/4.3] min-h-[112px] sm:min-h-[136px] rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 ${
                  card.isMatched ? 'cursor-default' : 'cursor-pointer'
                } ${isMismatched ? 'animate-gentle-shake' : ''} ${
                  card.isMatched ? 'animate-pop-celebrate' : ''
                }`}
              >
                <div
                  className={`transform-style-3d relative w-full h-full transition-transform duration-300 ${
                    showFront ? 'rotate-y-180' : 'group-hover:-translate-y-1'
                  }`}
                >
                  {/* Card Back (Face Down) */}
                  <div
                    className={`backface-hidden absolute inset-0 rounded-2xl border-2 flex flex-col items-center justify-center p-3 shadow-sm ${
                      isPicture
                        ? 'bg-[#FEF3C7] border-[#F59E0B] text-amber-900'
                        : 'bg-[#E0F2FE] border-[#0284C7] text-sky-900'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center font-display text-2xl sm:text-3xl ${
                        isPicture ? 'bg-amber-200/70' : 'bg-sky-200/70'
                      }`}
                    >
                      {isPicture ? '?' : '가'}
                    </div>
                    <span className="mt-2 font-bold text-sm sm:text-base">
                      {isPicture ? '그림 카드' : '글자 카드'}
                    </span>
                  </div>

                  {/* Card Front (Face Up) */}
                  <div
                    className={`backface-hidden rotate-y-180 absolute inset-0 rounded-2xl border-2 flex flex-col items-center justify-between p-3 sm:p-4 shadow-sm transition-colors ${
                      card.isMatched
                        ? 'bg-emerald-50/90 border-emerald-400 opacity-75'
                        : isMismatched
                          ? 'bg-rose-50 border-rose-400'
                          : isSelected
                            ? 'bg-orange-50 border-orange-500 ring-4 ring-orange-200'
                            : isPicture
                              ? 'bg-white border-amber-300 hover:border-amber-500'
                              : 'bg-white border-sky-300 hover:border-sky-500'
                    }`}
                  >
                    {/* Top small type label */}
                    <div className="w-full flex items-center justify-between text-xs font-bold">
                      <span className={isPicture ? 'text-amber-700' : 'text-sky-700'}>
                        {isPicture ? '그림' : '글자'}
                      </span>
                      {card.isMatched && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      )}
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 flex items-center justify-center w-full">
                      {isPicture ? (
                        <WordIllustration
                          wordId={card.wordId}
                          wordLabel={card.word}
                          className="w-16 h-16 sm:w-22 sm:h-22"
                        />
                      ) : (
                        <span className="font-bold text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight text-center break-keep">
                          {card.word}
                        </span>
                      )}
                    </div>

                    {/* Subtle bottom spacer for visual balance */}
                    <div className="h-3" aria-hidden="true" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Matched Pairs Ordered Gallery */}
      <section
        aria-label="찾은 낱말 짝꿍 모음"
        className="bg-white border border-[#E7E2D5] rounded-2xl p-4 sm:p-5"
      >
        <div className="flex items-center justify-between gap-2 mb-3">
          <h2 className="font-display text-xl text-slate-900">우리가 찾은 낱말 짝꿍</h2>
          <span className="text-sm font-bold text-slate-500 tabular-nums">
            {matchedWordIds.length} / {stage.pairCount}쌍
          </span>
        </div>

        {matchedWordIds.length === 0 ? (
          <p className="text-sm sm:text-base text-slate-500 py-2">
            짝꿍을 찾으면 이곳에 그림과 글자가 나란히 모여요!
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {matchedWordIds.map((wordId) => {
              const item = WORDS_MAP[wordId];
              if (!item) return null;
              return (
                <div
                  key={wordId}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200 animate-pop-celebrate"
                >
                  <WordIllustration
                    wordId={item.id}
                    wordLabel={item.word}
                    className="w-11 h-11 shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="font-bold text-lg text-slate-900 truncate">{item.word}</p>
                    <p className="text-xs text-emerald-700 font-medium">짝꿍 완성</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
};
