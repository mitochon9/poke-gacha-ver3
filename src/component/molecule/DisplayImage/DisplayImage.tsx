import { DisplayImageProps } from './DisplayImage.type';
import { ImageAtom } from '@/component/atom/ImageAtom';

export const baseId = 'molecule-display-image';

export const DisplayImage: React.FC<DisplayImageProps> = () => (
  <>
    <div className='flex items-end justify-center'>
      <div key={`${baseId}-red-box`} className='-mr-4'>
        <ImageAtom
          key={`${baseId}-red`}
          src='/red.png'
          alt='メインビジュアル'
          width={100}
          height={100}
        />
      </div>
      <div key={`${baseId}-hitokage-box`} className='-mb-2 -ml-4'>
        <ImageAtom
          key={`${baseId}-hitokage`}
          src='/hitokage.png'
          alt='メインビジュアル'
          width={80}
          height={80}
        />
      </div>
    </div>
  </>
);
