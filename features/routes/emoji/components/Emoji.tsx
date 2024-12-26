'use client';

import { normalizeToRange } from '@/utils/normalizeToRange';
import { useState, type MouseEvent } from 'react';

export const Emoji = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    const normalizedX = normalizeToRange(x, 0, window.innerWidth, -1, 1);
    const normalizedY = normalizeToRange(y, 0, window.innerHeight, -1, 1);
    setPosition({ x: normalizedX, y: normalizedY });
  };

  const getTransformStyle = (value: number) => {
    return {
      transform: `translateX(${value * position.x}px) translateY(${
        value * position.y
      }px) rotateX(${value * position.x}deg) rotateY(${value * position.y}deg)`,
    };
  };

  return (
    <div
      className="flex justify-center items-center h-full cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
    >
      <div className="relative" style={{ perspective: '100px' }}>
        <span className="absolute top-0 left-0 text-[300px]">😇</span>

        <span
          className="absolute top-0 left-0 inline-block text-[300px]"
          style={getTransformStyle(4)}
        >
          😇
        </span>

        <span
          className="absolute top-0 left-0 inline-block text-[300px]"
          style={getTransformStyle(8)}
        >
          😇
        </span>

        <span
          className="absolute top-0 left-0 inline-block text-[300px]"
          style={getTransformStyle(12)}
        >
          😇
        </span>

        <span
          className="inline-block text-[300px]"
          style={getTransformStyle(16)}
        >
          😇
        </span>
      </div>
    </div>
  );
};
