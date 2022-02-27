import { useCallback, useEffect, useState } from 'react';

export const Speaker: React.FC = () => {
  const [volumeHole, setVolumeHole] = useState<string[]>([]);

  const createVolumeHole = useCallback(() => {
    for (let index = 0; index < 60; index++) {
      setVolumeHole((volumeHole) => [...volumeHole, '']);
    }
  }, []);

  useEffect(() => {
    createVolumeHole();
  }, [createVolumeHole]);

  return (
    <>
      <div key='volume-hole-box' className='grid h-20 w-20 grid-cols-8 grid-rows-[8] gap-[2px]'>
        {volumeHole.map((item, index) => (
          <div
            key={index}
            className={`h-1 w-1 rounded-full bg-gray-800 ${
              index === 0 || index === 54
                ? // 左上角、左下角の場合
                  'col-start-2'
                : index === 5 || index === 59
                ? // 右上角、左下角の場合
                  'col-span-2'
                : // それ以外
                  'col-span-1'
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
};
