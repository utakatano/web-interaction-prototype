'use client';

import { useEffect, useState } from 'react';

const FIRST_SLIDE_POSITION_Z = -10000;
const SECOND_SLIDE_POSITION_Z = -20000;
const THIRD_SLIDE_POSITION_Z = -30000;
const FOURTH_SLIDE_POSITION_Z = -40000;

export const Perspective = () => {
  const [offsetZ, setOffsetZ] = useState(0);

  const getSlidePosition = (basePosition: number) => {
    return offsetZ + basePosition >= 0 ? 0 : offsetZ + basePosition;
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const value = e.deltaY * 30;
      setOffsetZ((prev) => (prev + value < 0 ? 0 : prev + value));
    };

    document.addEventListener('wheel', handleWheel);
    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div
      className="relative w-full h-[100svh]"
      style={{ perspective: '100px' }}
    >
      <div
        className="absolute top-0 w-full h-[100svh] flex justify-center items-center bg-[#FFB7C5]"
        style={{
          transform: `translateZ(${getSlidePosition(
            FIRST_SLIDE_POSITION_Z
          )}px)`,
        }}
      >
        <span className="text-[100px]">🌸</span>
      </div>

      <div
        className="absolute top-0 w-full h-[100svh] flex justify-center items-center bg-[#5CACEE]"
        style={{
          opacity: getSlidePosition(FIRST_SLIDE_POSITION_Z) === 0 ? 1 : 0,
          transform: `translateZ(${getSlidePosition(
            SECOND_SLIDE_POSITION_Z
          )}px)`,
        }}
      >
        <span className="text-[100px]">⛱️</span>
      </div>

      <div
        className="absolute top-0 w-full h-[100svh] flex justify-center items-center bg-[#E07A5F]"
        style={{
          opacity: getSlidePosition(SECOND_SLIDE_POSITION_Z) === 0 ? 1 : 0,
          transform: `translateZ(${getSlidePosition(
            THIRD_SLIDE_POSITION_Z
          )}px)`,
        }}
      >
        <span className="text-[100px]">🍁</span>
      </div>

      <div
        className="absolute top-0 w-full h-[100svh] flex justify-center items-center bg-[#2C3E50]"
        style={{
          opacity: getSlidePosition(SECOND_SLIDE_POSITION_Z) === 0 ? 1 : 0,
          transform: `translateZ(${getSlidePosition(
            THIRD_SLIDE_POSITION_Z
          )}px)`,
        }}
      >
        <span className="text-[100px]">❄️</span>
      </div>

      <div
        className="absolute top-0 w-full h-[100svh] flex justify-center items-center bg-white"
        style={{
          opacity: getSlidePosition(THIRD_SLIDE_POSITION_Z) === 0 ? 1 : 0,
          transform: `translateZ(${getSlidePosition(
            FOURTH_SLIDE_POSITION_Z
          )}px)`,
        }}
      ></div>
    </div>
  );
};
