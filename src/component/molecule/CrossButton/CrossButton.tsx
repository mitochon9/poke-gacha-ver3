import { CrossButtonProps } from './CrossButton.type';
import { Button } from '@/component/atom/Button';

export const baseId = 'molecule-cross-button';

export const CrossButton: React.FC<CrossButtonProps> = ({ isAnimation }) => (
  <>
    <div className='grid w-[96px] grid-cols-3 grid-rows-3'>
      {/* 上段 */}
      <Button
        key={`${baseId}-up`}
        disabled={isAnimation}
        variant='square'
        onClick={() => console.log('click up')}
        className='col-start-2 row-start-1'
      >
        ▲
      </Button>

      {/* 中段 */}
      <Button
        key={`${baseId}-left`}
        disabled={isAnimation}
        variant='square'
        onClick={() => console.log('click left')}
        className='col-start-1 row-start-2'
      >
        ◀
      </Button>

      <div key={`${baseId}-center`} className='square col-start-2 row-start-2 text-center'>
        ●
      </div>

      <Button
        key={`${baseId}-right`}
        disabled={isAnimation}
        variant='square'
        onClick={() => console.log('click right')}
        className='col-start-3 row-start-2'
      >
        ▶
      </Button>

      {/* 下段 */}
      <Button
        key={`${baseId}-down`}
        disabled={isAnimation}
        variant='square'
        onClick={() => console.log('click down')}
        className='col-start-2 row-start-3'
      >
        ▼
      </Button>
    </div>
  </>
);
