'use client';

import { useEffect, useRef } from 'react';

const INIT_PATTERN_Y = -5;
const STRIPE_WIDTH = 10;

export const Stripe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const renderStripePattern = () => {
    if (canvasRef.current === null) return;
    const ctx = canvasRef.current.getContext('2d');
    if (ctx === null) return;
    ctx.fillStyle = '#ccc';

    for (let i = 0; i < 50; i++) {
      const y = INIT_PATTERN_Y + 15 * i;
      ctx.fillRect(0, y, 375, STRIPE_WIDTH);
    }
  };

  useEffect(() => {
    renderStripePattern();
  }, []);

  return (
    <div
      className="flex justify-center items-center h-full"
      style={{ perspective: '100px' }}
    >
      <div className="relative w-[375px] h-[667px]">
        <canvas
          ref={canvasRef}
          className="relative z-10"
          width={375}
          height={667}
          onMouseMove={(e) => {
            console.log(e.clientX, e.clientY);
          }}
        />

        <div className="absolute top-0 w-full h-full flex justify-center items-center">
          <span
            className="text-[300px] text-[#bbb] font-semibold"
            style={{
              transform: `translateZ(-100px}px)`,
            }}
          >
            W
          </span>
        </div>
      </div>
    </div>
  );
};
