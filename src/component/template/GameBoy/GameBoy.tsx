import { useState } from 'react';
import { GameBoyProps } from './GameBoy.type';
import { ButtonSet } from '@/component/organism/ButtonSet';
import { Display } from '@/component/organism/Display';

export const baseId = 'template-game-boy';

export const GameBoy: React.FC<GameBoyProps> = () => {
  const [isAnimation, setIsAnimation] = useState<boolean>(false);

  const volumeHole = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    value: '',
  }));

  return (
    <>
      <div className='flex w-96 justify-center rounded-xl bg-red px-4 pt-6 shadow-xl drop-shadow-xl'>
        <div key={`${baseId}-game-boy-container`}>
          <div key={`${baseId}-display-box`}>
            <Display key={`${baseId}-display`} />
          </div>

          <div key={`${baseId}-button-set-box`} className='mt-4 mb-12'>
            <ButtonSet
              key={`${baseId}-button-set`}
              isAnimation={isAnimation}
              volumeHole={volumeHole}
            />
          </div>
        </div>
      </div>
    </>
  );
};
