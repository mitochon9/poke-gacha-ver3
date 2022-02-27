import { DisplayProps } from './Display.type';
import { DisplayFooter } from '@/component/atom/DisplayFooter';
import { GameBoyColorLogo } from '@/component/atom/GameBoyColorLogo';
import { PowerSupply } from '@/component/atom/PowerSupply';
import { DeleteDataButton } from '@/component/molecule/DeleteDataButton';
import { DisplayImage } from '@/component/molecule/DisplayImage';
import { DisplayTitle } from '@/component/molecule/DisplayTitle';

export const baseId = 'organism-display';

export const Display: React.FC<DisplayProps> = () => (
  <>
    <div className='relative h-80 w-80 rounded-2xl border-x-[48px] border-b-[48px] border-t-[36px] border-gray-900'>
      <div key={`${baseId}-title-box`}>
        <DisplayTitle key={`${baseId}-title`} />
      </div>

      <div key={`${baseId}-image-box`}>
        <DisplayImage key={`${baseId}-image`} />
      </div>

      <div key={`${baseId}-footer-box`} className='absolute bottom-0 w-full'>
        <DisplayFooter key={`${baseId}-footer`} />
      </div>

      <div key={`${baseId}-delete-button-box`} className='absolute right-0 bottom-0'>
        <DeleteDataButton key={`${baseId}-delete-button`} />
      </div>

      <div key={`${baseId}-power-supply-box`} className='absolute top-12 -left-10'>
        <PowerSupply key={`${baseId}-power-supply`} />
      </div>

      <div
        key={`${baseId}-game-boy-logo-box`}
        className='absolute -bottom-11 left-1/2 flex w-full -translate-x-1/2 justify-center'
      >
        <GameBoyColorLogo key={`${baseId}-game-boy-logo`} />
      </div>
    </div>
  </>
);
