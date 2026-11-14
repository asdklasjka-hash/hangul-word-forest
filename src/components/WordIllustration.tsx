import React from 'react';
import { renderIllustrationGroupA } from './illustrationsGroupA';
import { renderIllustrationGroupB } from './illustrationsGroupB';

interface WordIllustrationProps {
  wordId: string;
  wordLabel: string;
  className?: string;
}

export const WordIllustration: React.FC<WordIllustrationProps> = ({
  wordId,
  wordLabel,
  className = 'w-20 h-20',
}) => {
  const graphic = renderIllustrationGroupA(wordId) ?? renderIllustrationGroupB(wordId);

  if (!graphic) {
    return (
      <div
        className={`${className} rounded-2xl bg-amber-100 flex items-center justify-center text-amber-800 font-display text-2xl`}
        aria-label={wordLabel}
      >
        {wordLabel[0]}
      </div>
    );
  }

  return (
    <div className={className} role="img" aria-label={`${wordLabel} 그림`}>
      {graphic}
    </div>
  );
};
