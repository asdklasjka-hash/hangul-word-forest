export type GameScreen =
  | 'HOME'
  | 'HOW_TO_PLAY'
  | 'STAGES'
  | 'PLAYING'
  | 'STAGE_CLEAR'
  | 'CUSTOMIZE'
  | 'RESULTS';

export type PlayMode = 'flip' | 'open';

export type WordTheme =
  | '과일'
  | '반려동물'
  | '학교'
  | '탈것'
  | '동물원'
  | '간식'
  | '자연'
  | '동네'
  | '옷과물건'
  | '바다'
  | '몸과마음'
  | '종합축제';

export interface WordItem {
  id: string;
  word: string;
  theme: WordTheme;
  hint: string;
  accentColor: string;
}

export interface StageConfig {
  id: number;
  title: string;
  subtitle: string;
  theme: WordTheme;
  pairCount: 3 | 4 | 6 | 8;
  difficultyLabel: '쉬움' | '보통' | '도전' | '마스터';
  targetTimeSec: number;
  threeStarTimeSec: number;
  wordIds: string[];
  missionText: string;
}

export interface GameCard {
  uid: string;
  wordId: string;
  word: string;
  type: 'picture' | 'word';
  theme: WordTheme;
  accentColor: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface StageRecord {
  stars: number; // 0 to 3
  bestScore: number;
  bestTimeSec: number;
  completedCount: number;
}

export interface StageResult {
  stageId: number;
  score: number;
  baseScore: number;
  comboBonus: number;
  timeBonus: number;
  starsEarned: number;
  newStarsAdded: number;
  elapsedSec: number;
  correctMatches: number;
  wrongAttempts: number;
  maxCombo: number;
  accuracyPercent: number;
  newlyCompletedMissions: string[];
  newlyUnlockedCharacterId: string | null;
}

export type CharacterId = 'tori' | 'bori' | 'luna';

export interface CharacterOption {
  id: CharacterId;
  name: string;
  species: string;
  description: string;
  unlockStageId: number; // 0 means unlocked from start
}

export type AccessorySlot = 'hat' | 'face' | 'neck';

export interface AccessoryItem {
  id: string;
  name: string;
  slot: AccessorySlot;
  costStars: number;
  description: string;
  color: string;
}

export interface MissionDefinition {
  id: string;
  title: string;
  description: string;
  rewardStars: number;
  category: 'time' | 'combo' | 'theme';
}

export interface PlayerProgress {
  unlockedStageId: number;
  totalStarsEarned: number;
  spentStars: number;
  stageRecords: Record<number, StageRecord>;
  totalCorrectMatches: number;
  totalWrongAttempts: number;
  bestComboEver: number;
  learnedWordIds: string[];
  completedMissionIds: string[];
  ownedAccessoryIds: string[];
  equippedCharacter: CharacterId;
  equippedAccessories: {
    hat: string | null;
    face: string | null;
    neck: string | null;
  };
  soundEnabled: boolean;
  bgmEnabled: boolean;
  preferredPlayMode: PlayMode;
}
