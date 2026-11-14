import { STAGES } from '../data/stages';
import { WORDS_MAP } from '../data/words';
import { GameCard, PlayerProgress, StageConfig } from '../types/game';

const STORAGE_KEY = 'hangul_word_forest_progress_v1';

export const DEFAULT_PROGRESS: PlayerProgress = {
  unlockedStageId: 1,
  totalStarsEarned: 0,
  spentStars: 0,
  stageRecords: {},
  totalCorrectMatches: 0,
  totalWrongAttempts: 0,
  bestComboEver: 0,
  learnedWordIds: [],
  completedMissionIds: [],
  ownedAccessoryIds: [],
  equippedCharacter: 'tori',
  equippedAccessories: {
    hat: null,
    face: null,
    neck: null,
  },
  soundEnabled: true,
  bgmEnabled: true,
  preferredPlayMode: 'flip',
};

export function loadProgress(): PlayerProgress {
  if (typeof window === 'undefined') return DEFAULT_PROGRESS;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw) as Partial<PlayerProgress>;
    return {
      ...DEFAULT_PROGRESS,
      ...parsed,
      equippedAccessories: {
        ...DEFAULT_PROGRESS.equippedAccessories,
        ...(parsed.equippedAccessories ?? {}),
      },
      stageRecords: parsed.stageRecords ?? {},
      learnedWordIds: Array.isArray(parsed.learnedWordIds) ? parsed.learnedWordIds : [],
      completedMissionIds: Array.isArray(parsed.completedMissionIds) ? parsed.completedMissionIds : [],
      ownedAccessoryIds: Array.isArray(parsed.ownedAccessoryIds) ? parsed.ownedAccessoryIds : [],
    };
  } catch {
    return DEFAULT_PROGRESS;
  }
}

export function saveProgress(progress: PlayerProgress): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Ignore storage quota errors
  }
}

export function resetProgressStorage(): PlayerProgress {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(STORAGE_KEY);
  }
  return { ...DEFAULT_PROGRESS };
}

export function getAvailableStars(progress: PlayerProgress): number {
  return Math.max(0, progress.totalStarsEarned - progress.spentStars);
}

/**
 * Fisher-Yates 셔플을 사용하여 중복 없이 정확한 그림-글자 카드 쌍을 생성합니다.
 */
export function buildStageDeck(stage: StageConfig, startFaceUp: boolean): GameCard[] {
  const uniqueWordIds = Array.from(new Set(stage.wordIds));
  const cards: GameCard[] = [];

  uniqueWordIds.forEach((wordId) => {
    const item = WORDS_MAP[wordId];
    if (!item) return;

    cards.push({
      uid: `${stage.id}-${wordId}-picture`,
      wordId: item.id,
      word: item.word,
      type: 'picture',
      theme: item.theme,
      accentColor: item.accentColor,
      isFlipped: startFaceUp,
      isMatched: false,
    });

    cards.push({
      uid: `${stage.id}-${wordId}-word`,
      wordId: item.id,
      word: item.word,
      type: 'word',
      theme: item.theme,
      accentColor: item.accentColor,
      isFlipped: startFaceUp,
      isMatched: false,
    });
  });

  // Fisher-Yates shuffle
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  return cards;
}

/**
 * 두 카드가 정확한 짝인지 데이터 기반으로 검증합니다.
 * - 서로 다른 카드(uid가 다름)
 * - 같은 낱말 ID(wordId 일치)
 * - 하나는 그림 카드, 하나는 글자 카드(type이 다름)
 */
export function isMatchingPair(cardA: GameCard, cardB: GameCard): boolean {
  return (
    cardA.uid !== cardB.uid &&
    cardA.wordId === cardB.wordId &&
    cardA.type !== cardB.type
  );
}

export function formatSeconds(sec: number): string {
  const mins = Math.floor(sec / 60);
  const secs = sec % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export function getTotalCompletedStages(progress: PlayerProgress): number {
  return STAGES.filter((s) => (progress.stageRecords[s.id]?.completedCount ?? 0) > 0).length;
}
