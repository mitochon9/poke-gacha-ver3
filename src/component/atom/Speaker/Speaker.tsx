import { useCallback, useEffect, useState } from 'react';

export type SpeakerProps = {
  volumeHole: {
    id: number;
    value: string;
  }[];
};

export const Speaker: React.FC<SpeakerProps> = ({ volumeHole }) => {
  return (
    <>
      <div key='volume-hole-box' className='grid h-16 w-16 grid-cols-8 grid-rows-[8] gap-[2px]'>
        {volumeHole.map((item, index) => (
          <div
            key={item.id}
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
            {item.value}
          </div>
        ))}
      </div>
    </>
  );
};
