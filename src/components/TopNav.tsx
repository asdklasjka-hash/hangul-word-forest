import React from 'react';
import { GameScreen } from '../types/game';

interface TopNavProps {
  currentScreen: GameScreen;
  onNavigate: (screen: GameScreen) => void;
  onQuickStart: () => void;
}

const NAV_ITEMS: { screen: GameScreen; label: string }[] = [
  { screen: 'HOME', label: '처음으로' },
  { screen: 'HOW_TO_PLAY', label: '게임 방법' },
  { screen: 'STAGES', label: '스테이지' },
  { screen: 'CUSTOMIZE', label: '캐릭터 꾸미기' },
  { screen: 'RESULTS', label: '내 기록' },
];

export const TopNav: React.FC<TopNavProps> = ({
  currentScreen,
  onNavigate,
  onQuickStart,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-[#FFFDF7]/95 backdrop-blur-sm border-b border-[#E7E2D5]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4 md:gap-8">
        {/* Zone 1: Brand Title */}
        <button
          type="button"
          onClick={() => onNavigate('HOME')}
          className="font-display text-xl sm:text-2xl tracking-tight text-slate-900 hover:text-orange-600 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 rounded-md cursor-pointer"
        >
          한글 낱말 숲
        </button>

        {/* Zone 2: Navigation Links */}
        <nav aria-label="주 메뉴" className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => {
            const isActive =
              currentScreen === item.screen ||
              (item.screen === 'STAGES' && (currentScreen === 'PLAYING' || currentScreen === 'STAGE_CLEAR'));
            return (
              <button
                key={item.screen}
                type="button"
                onClick={() => onNavigate(item.screen)}
                className={`py-1.5 text-base font-medium transition-colors whitespace-nowrap shrink-0 border-b-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 ${
                  isActive
                    ? 'text-orange-600 border-orange-500 font-bold'
                    : 'text-slate-600 border-transparent hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center shrink-0">
          {currentScreen === 'PLAYING' ? (
            <button
              type="button"
              onClick={() => onNavigate('STAGES')}
              className="px-4 py-2 min-h-[44px] text-sm sm:text-base font-bold text-slate-700 bg-[#F1EDE2] hover:bg-[#E7E2D5] rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              스테이지 목록
            </button>
          ) : (
            <button
              type="button"
              onClick={onQuickStart}
              className="px-5 py-2.5 min-h-[44px] text-sm sm:text-base font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-xl shadow-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              바로 놀이하기
            </button>
          )}
        </div>
      </div>

      {/* Mobile Navigation Bar */}
      <nav
        aria-label="모바일 메뉴"
        className="flex md:hidden items-center justify-around border-t border-[#EFEAE0] px-2 py-1.5 overflow-x-auto"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = currentScreen === item.screen;
          return (
            <button
              key={item.screen}
              type="button"
              onClick={() => onNavigate(item.screen)}
              className={`px-2.5 py-1.5 text-sm font-medium whitespace-nowrap shrink-0 rounded-lg transition-colors cursor-pointer ${
                isActive ? 'text-orange-600 font-bold bg-orange-50' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </header>
  );
};
