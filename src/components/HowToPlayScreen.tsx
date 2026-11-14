import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, Play, Sparkles, Star } from 'lucide-react';
import { WordIllustration } from './WordIllustration';

interface HowToPlayScreenProps {
  onBack: () => void;
  onStartGame: () => void;
}

export const HowToPlayScreen: React.FC<HowToPlayScreenProps> = ({ onBack, onStartGame }) => {
  const [demoSelected, setDemoSelected] = useState<'pic' | 'word' | 'both'>('pic');

  const handleDemoClick = (target: 'pic' | 'word') => {
    if (demoSelected === 'both') {
      setDemoSelected(target);
    } else if (demoSelected !== target) {
      setDemoSelected('both');
    } else {
      setDemoSelected(target);
    }
  };

  return (
    <main className="max-w-[1040px] mx-auto px-4 sm:px-6 py-8 sm:py-10">
      <div className="flex items-center justify-between gap-4 mb-6">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] bg-white border border-[#E7E2D5] hover:bg-slate-50 rounded-xl text-base font-bold text-slate-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>돌아가기</span>
        </button>

        <button
          type="button"
          onClick={onStartGame}
          className="inline-flex items-center gap-2 px-6 py-3 min-h-[48px] bg-orange-500 hover:bg-orange-600 text-white font-display text-xl rounded-xl shadow-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          <Play className="w-5 h-5 fill-current" />
          <span>지금 바로 해보기</span>
        </button>
      </div>

      <div className="bg-white border border-[#E7E2D5] rounded-3xl p-6 sm:p-9 shadow-sm">
        <h1 className="font-display text-3xl sm:text-4xl text-slate-900 text-balance">
          어떻게 놀이할까요?
        </h1>
        <p className="text-lg text-slate-600 mt-2">
          그림 카드와 글자 카드를 하나씩 눌러 똑같은 짝꿍을 찾는 쉬운 게임이에요!
        </p>

        {/* Interactive Mini Demo */}
        <div className="mt-6 bg-[#FFF8EB] border border-[#F3E5C8] rounded-2xl p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-display text-xl text-amber-900">미리 연습해 보기</p>
              <p className="text-base text-amber-800 mt-1">
                {demoSelected === 'both'
                  ? '참 잘했어요! 그림과 글자가 똑같은 짝꿍이에요!'
                  : '옆에 있는 글자 카드 "사과"를 눌러 짝꿍을 만들어 보세요.'}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => handleDemoClick('pic')}
                className={`w-28 h-32 rounded-2xl border-2 flex flex-col items-center justify-center gap-2 transition-all cursor-pointer ${
                  demoSelected === 'both'
                    ? 'bg-emerald-50 border-emerald-500 scale-105'
                    : demoSelected === 'pic'
                      ? 'bg-amber-50 border-amber-500'
                      : 'bg-white border-[#E7E2D5]'
                }`}
              >
                <WordIllustration wordId="apple" wordLabel="사과" className="w-16 h-16" />
                <span className="text-xs font-bold text-amber-800">그림 카드</span>
              </button>

              <span className="font-display text-2xl text-slate-400">+</span>

              <button
                type="button"
                onClick={() => handleDemoClick('word')}
                className={`w-28 h-32 rounded-2xl border-2 flex flex-col items-center justify-center gap-2 transition-all cursor-pointer ${
                  demoSelected === 'both'
                    ? 'bg-emerald-50 border-emerald-500 scale-105'
                    : demoSelected === 'word'
                      ? 'bg-sky-50 border-sky-500'
                      : 'bg-white border-[#E7E2D5] hover:border-sky-400'
                }`}
              >
                <span className="font-display text-3xl text-slate-900">사과</span>
                <span className="text-xs font-bold text-sky-800">글자 카드</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Illustrated Steps */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="border border-[#E7E2D5] rounded-2xl p-6 bg-[#FFFDF7] flex gap-4 items-start">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 font-display text-2xl flex items-center justify-center shrink-0">
              1
            </div>
            <div>
              <h2 className="font-display text-2xl text-slate-900">카드를 눌러 확인해요</h2>
              <p className="text-base text-slate-600 mt-1.5 leading-relaxed">
                노란 뒷면 카드를 누르면 <strong>그림</strong>이 나오고, 파란 뒷면 카드를 누르면 <strong>한글 낱말</strong>이 나와요.
              </p>
            </div>
          </div>

          <div className="border border-[#E7E2D5] rounded-2xl p-6 bg-[#FFFDF7] flex gap-4 items-start">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 font-display text-2xl flex items-center justify-center shrink-0">
              2
            </div>
            <div>
              <h2 className="font-display text-2xl text-slate-900">그림과 글자 짝 맞추기</h2>
              <p className="text-base text-slate-600 mt-1.5 leading-relaxed">
                그림과 낱말이 같으면 <span className="inline-flex items-center gap-1 font-bold text-emerald-700"><CheckCircle2 className="w-4 h-4" />짝꿍 성공!</span> 틀려도 괜찮아요. 다시 천천히 찾아보아요.
              </p>
            </div>
          </div>

          <div className="border border-[#E7E2D5] rounded-2xl p-6 bg-[#FFFDF7] flex gap-4 items-start">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-800 font-display text-2xl flex items-center justify-center shrink-0">
              3
            </div>
            <div>
              <h2 className="font-display text-2xl text-slate-900">연속 정답 콤보 보너스</h2>
              <p className="text-base text-slate-600 mt-1.5 leading-relaxed">
                틀리지 않고 계속 맞히면 <span className="inline-flex items-center gap-1 font-bold text-orange-600"><Sparkles className="w-4 h-4" />콤보 반짝임</span>과 함께 점수가 쑥쑥 올라가요!
              </p>
            </div>
          </div>

          <div className="border border-[#E7E2D5] rounded-2xl p-6 bg-[#FFFDF7] flex gap-4 items-start">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-800 font-display text-2xl flex items-center justify-center shrink-0">
              4
            </div>
            <div>
              <h2 className="font-display text-2xl text-slate-900">별을 모아 캐릭터 꾸미기</h2>
              <p className="text-base text-slate-600 mt-1.5 leading-relaxed">
                스테이지를 깨고 <span className="inline-flex items-center gap-1 font-bold text-amber-600"><Star className="w-4 h-4 fill-amber-400" />별 3개</span>에 도전해 보세요! 모은 별로 모자와 안경을 살 수 있어요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
