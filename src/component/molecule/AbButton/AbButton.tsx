import PropTypes from 'prop-types';
import { AbButtonProps } from '.';
import { Button } from '@/component/atom/Button';
import { ButtonA, ButtonB } from '@/component/atom/Button/Button.stories';

export const baseId = 'molecule-ab-button';

export const AbButton: React.FC<AbButtonProps> = ({ isAnimation }) => {
  const disabled = isAnimation;
  return (
    <>
      <div className='flex gap-x-4'>
        <div key='button-B-box' className='mt-4'>
          <Button
            key='button-B'
            disabled={disabled}
            variant='rounded'
            onClick={() => alert('click B')}
          >
            B
          </Button>
        </div>

        <div key='button-A-box'>
          <Button
            key='button-A'
            disabled={disabled}
            variant='rounded'
            onClick={() => alert('click A')}
          >
            A
          </Button>
        </div>
      </div>
    </>
  );
};

AbButton.propTypes = {
  isAnimation: PropTypes.bool.isRequired,
};
