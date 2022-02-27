import { DisplayTitleProps } from './DisplayTitle.type';

export const baseId = 'molecule-display-title';

export const DisplayTitle: React.FC<DisplayTitleProps> = () => (
  <>
    <div className='text-center font-dot'>
      <h1 key={`${baseId}-title`} className='scale-y-125 text-2xl font-extrabold'>
        ポケットモンスター
      </h1>
      <p key={`${baseId}-subtitle`} className='mt-1 text-sm font-bold tracking-widest'>
        POCKET MONSTERS
      </p>
      <p key={`${baseId}-version`} className='mt-1 text-xs font-bold'>
        Red Version
      </p>
      <p key={`${baseId}-guidance-1`} className='flash text-xs'>
        Press A button
      </p>
      <p key={`${baseId}-guidance-2`} className='text-[8px]'>
        セレクトボタンでモンスター図鑑へ
      </p>
    </div>
  </>
);
