'use client';

import { normalizeToRange } from '@/utils/normalizeToRange';
import { useEffect, useRef, useState, type MouseEvent } from 'react';

const INIT_STRIPE_POS_Y = -5;
const STRIPE_WIDTH = 10;
const STRIPE_CANVAS_WIDTH = 375;
const STRIPE_CANVAS_HEIGHT = 667;

export const Stripe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvasTransformStyle, setCanvasTransformStyle] = useState<
    string | undefined
  >(undefined);
  const [textTransformStyle, setTextTransformStyle] = useState<
    string | undefined
  >(undefined);

  const handleCanvasMouseMove = (e: MouseEvent) => {
    const startX = (window.innerWidth - STRIPE_CANVAS_WIDTH) / 2;
    const startY = (window.innerHeight - STRIPE_CANVAS_HEIGHT) / 2;
    const x = e.clientX - startX < 0 ? 0 : e.clientX - startX;
    const y = e.clientY - startY < 0 ? 0 : e.clientY - startY;
    const normalizedX = normalizeToRange(x, 0, STRIPE_CANVAS_WIDTH, -1, 1);
    const normalizedY = normalizeToRange(y, 0, STRIPE_CANVAS_HEIGHT, -1, 1);
    const transformStyle = `rotateX(${2 * normalizedX}deg) rotateY(${
      2 * normalizedY
    }deg)`;
    setCanvasTransformStyle(transformStyle);
    setTextTransformStyle(
      `rotateX(${-4 * normalizedX}deg) rotateY(${-4 * normalizedY}deg)`
    );
  };

  const renderStripePattern = () => {
    if (canvasRef.current === null) return;
    const ctx = canvasRef.current.getContext('2d');
    if (ctx === null) return;
    ctx.fillStyle = '#ccc';

    for (let i = 0; i < 50; i++) {
      const y = INIT_STRIPE_POS_Y + 15 * i;
      ctx.fillRect(0, y, 375, STRIPE_WIDTH);
    }
  };

  useEffect(() => {
    renderStripePattern();
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <div
        className="relative w-[375px] h-[667px]"
        style={{ perspective: '100px' }}
      >
        <canvas
          ref={canvasRef}
          className="relative z-10"
          style={{
            transform: canvasTransformStyle,
          }}
          width={STRIPE_CANVAS_WIDTH}
          height={STRIPE_CANVAS_HEIGHT}
          onMouseMove={handleCanvasMouseMove}
          onMouseLeave={() => {
            setCanvasTransformStyle(undefined);
            setTextTransformStyle(undefined);
          }}
        />

        <div
          className="absolute top-0 w-full h-full flex justify-center items-center"
          style={{ perspective: '100px' }}
        >
          <span
            className="text-[300px] text-[#bbb] font-semibold"
            style={{
              transform: textTransformStyle,
            }}
          >
            W
          </span>
        </div>
      </div>
    </div>
  );
};
