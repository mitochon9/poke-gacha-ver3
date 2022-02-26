import PropTypes from 'prop-types';
import { AbButtonProps } from '.';
import { Button } from '@/component/atom/Button';

export const baseId = 'molecule-ab-button';

export const AbButton: React.FC<AbButtonProps> = ({ isAnimation }) => {
  return (
    <>
      <div className='flex gap-x-4'>
        <div key='button-B-box' className='mt-4'>
          <Button
            key='button-B'
            disabled={isAnimation}
            variant='rounded'
            onClick={() => console.log('click B')}
          >
            B
          </Button>
        </div>

        <div key='button-A-box'>
          <Button
            key='button-A'
            disabled={isAnimation}
            variant='rounded'
            onClick={() => console.log('click A')}
          >
            A
          </Button>
        </div>
      </div>
    </>
  );
};

AbButton.propTypes = {
  isAnimation: PropTypes.bool,
};
