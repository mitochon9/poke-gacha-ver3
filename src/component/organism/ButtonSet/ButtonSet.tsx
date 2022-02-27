import { ButtonSetProps } from './ButtonSet.type';
import { NintendoLogo } from '@/component/atom/NintendoLogo';
import { Speaker } from '@/component/atom/Speaker';
import { AbButton } from '@/component/molecule/AbButton';
import { CrossButton } from '@/component/molecule/CrossButton';
import { StartSelectButton } from '@/component/molecule/StartSelectButton';

export const baseId = 'organism-button-set';

export const ButtonSet: React.FC<ButtonSetProps> = ({ isAnimation, volumeHole }) => (
  <>
    <div className='relative w-80'>
      <div key={`${baseId}-nintendo-logo-box`} className='text-center'>
        <NintendoLogo key={`${baseId}-nintendo-logo`} />
      </div>

      <div key={`${baseId}-cross-ab-button-box`} className='mt-4 flex items-center justify-between'>
        <div key={`${baseId}-cross-button-box`}>
          <CrossButton isAnimation={isAnimation} key={`${baseId}-cross-button`} />
        </div>

        <div key={`${baseId}-ab-button-box`}>
          <AbButton key={`${baseId}-ab-button`} />
        </div>
      </div>

      <div
        key={`${baseId}-start-select-button-box`}
        className='mt-10 flex justify-center text-center'
      >
        <StartSelectButton isAnimation={isAnimation} key={`${baseId}-start-select-button`} />
      </div>

      <div key={`${baseId}-speaker-box`} className='absolute right-0 -bottom-4 -rotate-12'>
        <Speaker volumeHole={volumeHole} key={`${baseId}-speaker`} />
      </div>
    </div>
  </>
);
