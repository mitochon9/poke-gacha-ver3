export const baseId = 'atom-power-supply';

export const PowerSupply: React.FC = () => (
  <>
    <div className='flex items-center'>
      <div key={`${baseId}-power`} className='h-2 w-2 rounded-full bg-red'></div>

      <div
        key={`${baseId}-1`}
        className='-ml-2 h-4 w-4 rounded-full border-2 border-y-transparent border-l-transparent border-r-gray-800'
      ></div>

      <div
        key={`${baseId}-2`}
        className='-ml-2 h-4 w-4 rounded-full border-2 border-y-transparent border-l-transparent border-r-gray-800'
      ></div>
      <div
        key={`${baseId}-3`}
        className='-ml-2 h-4 w-4 rounded-full border-2 border-y-transparent border-l-transparent border-r-gray-800'
      ></div>
    </div>

    <div className='mt-1 text-[6px] italic text-gray-800'>POWER</div>
  </>
);
