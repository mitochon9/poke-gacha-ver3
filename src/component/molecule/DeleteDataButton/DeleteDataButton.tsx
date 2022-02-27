import { DeleteDataButtonProps } from './DeleteDataButton.type';
import { Button } from '@/component/atom/Button';

export const baseId = 'molecule-delete-data-button';

export const DeleteDataButton: React.FC<DeleteDataButtonProps> = () => (
  <>
    <div className='flex flex-col'>
      <Button
        key={`${baseId}-button`}
        onClick={() => console.log('click delete')}
        className='relative w-16 rounded-md border text-[8px] text-gray-800 before:absolute before:-top-3 before:left-1/2 before:-translate-x-1/2 before:content-["PressStart"]'
      >
        データ削除
      </Button>
    </div>
  </>
);
