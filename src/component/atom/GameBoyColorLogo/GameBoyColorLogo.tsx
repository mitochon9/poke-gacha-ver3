export const baseId = 'atom-game-boy-color-logo';

export const GameBoyColorLogo: React.FC = () => (
  <>
    <div className='text-gray-200 flex text-2xl font-bold italic'>
      <span key={`${baseId}-game-boy`} className='mr-2'>
        GAME BOY
      </span>
      <div key={`${baseId}-color-box`} className='mt-1 font-kalam'>
        <span key={`${baseId}-c`} className='text-[#FB4E8B]'>
          C
        </span>
        <span key={`${baseId}-o-1`} className='text-[#AE97F1]'>
          O
        </span>
        <span key={`${baseId}-l`} className='text-[#BBE880]'>
          L
        </span>
        <span key={`${baseId}-o-2`} className='text-[#FAEB67]'>
          O
        </span>
        <span key={`${baseId}-r`} className='text-[#8CD0FF]'>
          R
        </span>
      </div>
    </div>
  </>
);
