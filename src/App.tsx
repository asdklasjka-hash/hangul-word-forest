import { useEffect, useState } from 'react';
import { CustomizeScreen } from './components/CustomizeScreen';
import { GameBoardScreen } from './components/GameBoardScreen';
import { HomeScreen } from './components/HomeScreen';
import { HowToPlayScreen } from './components/HowToPlayScreen';
import { ResultsScreen } from './components/ResultsScreen';
import { StageClearScreen } from './components/StageClearScreen';
import { StageSelectScreen } from './components/StageSelectScreen';
import { TopNav } from './components/TopNav';
import { CHARACTERS, MISSIONS } from './data/customization';
import { STAGES } from './data/stages';
import {
  AccessoryItem,
  AccessorySlot,
  CharacterId,
  GameScreen,
  PlayMode,
  PlayerProgress,
  StageConfig,
  StageResult,
} from './types/game';
import { soundEngine } from './utils/sound';
import { loadProgress, resetProgressStorage, saveProgress } from './utils/storage';

export default function App() {
  const [progress, setProgress] = useState<PlayerProgress>(() => loadProgress());
  const [screen, setScreen] = useState<GameScreen>('HOME');
  const [activeStage, setActiveStage] = useState<StageConfig>(STAGES[0]);
  const [lastResult, setLastResult] = useState<StageResult | null>(null);
  const [playInstanceKey, setPlayInstanceKey] = useState(0);

  // Sync audio preferences and persist progress
  useEffect(() => {
    soundEngine.setSoundEnabled(progress.soundEnabled);
    soundEngine.setBgmEnabled(progress.bgmEnabled);
    saveProgress(progress);
  }, [progress]);

  // Stop BGM on unmount
  useEffect(() => {
    return () => {
      soundEngine.stopBgmLoop();
    };
  }, []);

  const handleFirstInteraction = () => {
    soundEngine.unlock();
  };

  const handleToggleSound = () => {
    soundEngine.unlock();
    setProgress((prev) => ({
      ...prev,
      soundEnabled: !prev.soundEnabled,
    }));
  };

  const handleToggleBgm = () => {
    soundEngine.unlock();
    setProgress((prev) => ({
      ...prev,
      bgmEnabled: !prev.bgmEnabled,
    }));
  };

  const handleChangePlayMode = (mode: PlayMode) => {
    soundEngine.playSelect();
    setProgress((prev) => ({
      ...prev,
      preferredPlayMode: mode,
    }));
  };

  const startStage = (stage: StageConfig) => {
    soundEngine.playSelect();
    setActiveStage(stage);
    setPlayInstanceKey((k) => k + 1);
    setScreen('PLAYING');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuickStart = () => {
    const targetStage =
      STAGES.find((s) => s.id === progress.unlockedStageId) ?? STAGES[0];
    startStage(targetStage);
  };

  const handleNavigate = (nextScreen: GameScreen) => {
    soundEngine.playSelect();
    setScreen(nextScreen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStageComplete = (
    partial: Omit<
      StageResult,
      'newlyCompletedMissions' | 'newlyUnlockedCharacterId' | 'newStarsAdded'
    >
  ) => {
    const stageConfig = STAGES.find((s) => s.id === partial.stageId) ?? STAGES[0];

    setProgress((prev) => {
      const prevRecord = prev.stageRecords[partial.stageId];
      const prevStars = prevRecord?.stars ?? 0;
      const newStarsFromStage = Math.max(0, partial.starsEarned - prevStars);
      const isFirstClear = (prevRecord?.completedCount ?? 0) === 0;

      const updatedRecords = {
        ...prev.stageRecords,
        [partial.stageId]: {
          stars: Math.max(prevStars, partial.starsEarned),
          bestScore: Math.max(prevRecord?.bestScore ?? 0, partial.score),
          bestTimeSec:
            prevRecord && prevRecord.bestTimeSec > 0
              ? Math.min(prevRecord.bestTimeSec, partial.elapsedSec)
              : partial.elapsedSec,
          completedCount: (prevRecord?.completedCount ?? 0) + 1,
        },
      };

      // Check missions
      const newlyCompletedMissions: string[] = [];
      let missionBonusStars = 0;

      const checkAndAddMission = (missionId: string, condition: boolean) => {
        if (condition && !prev.completedMissionIds.includes(missionId)) {
          newlyCompletedMissions.push(missionId);
          const def = MISSIONS.find((m) => m.id === missionId);
          if (def) missionBonusStars += def.rewardStars;
        }
      };

      checkAndAddMission(
        'mission_speed_clear',
        partial.elapsedSec <= stageConfig.targetTimeSec
      );
      checkAndAddMission('mission_combo_5', partial.maxCombo >= 5);
      checkAndAddMission('mission_fruit_master', partial.stageId === 1);
      checkAndAddMission(
        'mission_animal_master',
        (updatedRecords[2]?.completedCount ?? 0) > 0 &&
          (updatedRecords[5]?.completedCount ?? 0) > 0
      );
      checkAndAddMission('mission_vehicle_master', partial.stageId === 4);
      checkAndAddMission('mission_all_clear', partial.stageId === 12);

      // Check character unlocks
      let newlyUnlockedCharacterId: string | null = null;
      if (isFirstClear) {
        const unlockedChar = CHARACTERS.find(
          (c) => c.unlockStageId === partial.stageId
        );
        if (unlockedChar) {
          newlyUnlockedCharacterId = unlockedChar.id;
        }
      }

      const mergedLearnedWords = Array.from(
        new Set([...prev.learnedWordIds, ...stageConfig.wordIds])
      );

      const totalNewStarsAdded = newStarsFromStage + missionBonusStars;

      setLastResult({
        ...partial,
        newStarsAdded: totalNewStarsAdded,
        newlyCompletedMissions,
        newlyUnlockedCharacterId,
      });

      return {
        ...prev,
        unlockedStageId: Math.min(
          STAGES.length,
          Math.max(prev.unlockedStageId, partial.stageId + 1)
        ),
        totalStarsEarned: prev.totalStarsEarned + totalNewStarsAdded,
        stageRecords: updatedRecords,
        totalCorrectMatches: prev.totalCorrectMatches + partial.correctMatches,
        totalWrongAttempts: prev.totalWrongAttempts + partial.wrongAttempts,
        bestComboEver: Math.max(prev.bestComboEver, partial.maxCombo),
        learnedWordIds: mergedLearnedWords,
        completedMissionIds: [
          ...prev.completedMissionIds,
          ...newlyCompletedMissions,
        ],
      };
    });

    setScreen('STAGE_CLEAR');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCharacter = (charId: CharacterId) => {
    soundEngine.playSelect();
    setProgress((prev) => ({
      ...prev,
      equippedCharacter: charId,
    }));
  };

  const handleBuyAccessory = (item: AccessoryItem) => {
    setProgress((prev) => {
      const available = prev.totalStarsEarned - prev.spentStars;
      if (prev.ownedAccessoryIds.includes(item.id) || available < item.costStars) {
        return prev;
      }
      soundEngine.playPurchase();
      return {
        ...prev,
        spentStars: prev.spentStars + item.costStars,
        ownedAccessoryIds: [...prev.ownedAccessoryIds, item.id],
        equippedAccessories: {
          ...prev.equippedAccessories,
          [item.slot]: item.id,
        },
      };
    });
  };

  const handleToggleAccessory = (slot: AccessorySlot, itemId: string | null) => {
    soundEngine.playSelect();
    setProgress((prev) => ({
      ...prev,
      equippedAccessories: {
        ...prev.equippedAccessories,
        [slot]: itemId,
      },
    }));
  };

  const handleResetProgress = () => {
    soundEngine.playSelect();
    const fresh = resetProgressStorage();
    setProgress(fresh);
    setActiveStage(STAGES[0]);
    setLastResult(null);
    setScreen('HOME');
  };

  return (
    <div
      onPointerDown={handleFirstInteraction}
      className="min-h-screen flex flex-col bg-[#FFFDF7] text-slate-900"
    >
      <TopNav
        currentScreen={screen}
        onNavigate={handleNavigate}
        onQuickStart={handleQuickStart}
      />

      <div className="flex-1">
        {screen === 'HOME' && (
          <HomeScreen
            progress={progress}
            onStartNextStage={handleQuickStart}
            onNavigate={handleNavigate}
            onToggleSound={handleToggleSound}
            onToggleBgm={handleToggleBgm}
          />
        )}

        {screen === 'HOW_TO_PLAY' && (
          <HowToPlayScreen
            onBack={() => handleNavigate('HOME')}
            onStartGame={handleQuickStart}
          />
        )}

        {screen === 'STAGES' && (
          <StageSelectScreen
            progress={progress}
            onSelectStage={startStage}
            onChangePlayMode={handleChangePlayMode}
          />
        )}

        {screen === 'PLAYING' && (
          <GameBoardScreen
            key={`${activeStage.id}-${playInstanceKey}-${progress.preferredPlayMode}`}
            stage={activeStage}
            playMode={progress.preferredPlayMode}
            soundEnabled={progress.soundEnabled}
            bgmEnabled={progress.bgmEnabled}
            onToggleSound={handleToggleSound}
            onToggleBgm={handleToggleBgm}
            onStageComplete={handleStageComplete}
          />
        )}

        {screen === 'STAGE_CLEAR' && lastResult && (
          <StageClearScreen
            result={lastResult}
            progress={progress}
            onNextStage={() => {
              const next = STAGES.find((s) => s.id === lastResult.stageId + 1);
              if (next) startStage(next);
            }}
            onReplay={() => startStage(activeStage)}
            onNavigate={handleNavigate}
          />
        )}

        {screen === 'CUSTOMIZE' && (
          <CustomizeScreen
            progress={progress}
            onSelectCharacter={handleSelectCharacter}
            onBuyAccessory={handleBuyAccessory}
            onToggleAccessory={handleToggleAccessory}
          />
        )}

        {screen === 'RESULTS' && (
          <ResultsScreen
            progress={progress}
            onResetProgress={handleResetProgress}
            onGoStages={() => handleNavigate('STAGES')}
          />
        )}
      </div>

      <footer className="border-t border-[#EAE4D7] py-5 px-4 text-center text-sm text-slate-500">
        <span>한글 낱말 짝꿍 숲 · 초등학교 1학년 낱말 학습 카드 게임</span>
      </footer>
    </div>
  );
}
