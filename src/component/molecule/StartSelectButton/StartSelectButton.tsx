import { StartSelectButtonProps } from './StartSelectButton.type';
import { Button } from '@/component/atom/Button';

export const baseId = 'molecule-start-select-button';

export const StartSelectButton: React.FC<StartSelectButtonProps> = ({ isAnimation }) => (
  <>
    <div className='flex gap-x-8'>
      <div key='button-select-box'>
        <Button
          key='button-select'
          variant='ellipse'
          disabled={isAnimation}
          onClick={() => console.log('click select')}
          className='relative text-gray-900 after:absolute after:-bottom-6 after:left-1/2 after:-translate-x-1/2 after:text-gray-700 after:content-["Select"]'
        />
      </div>

      <div key='button-start-box'>
        <Button
          key='button-start'
          variant='ellipse'
          disabled={isAnimation}
          onClick={() => console.log('click start')}
          className='relative text-gray-900 after:absolute after:-bottom-6 after:left-1/2 after:-translate-x-1/2 after:text-gray-700 after:content-["Start"]'
        />
      </div>
    </div>
  </>
);
