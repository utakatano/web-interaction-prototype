import { BaseCardItem } from '@/features/routes/card/components/BaseCardItem';

export default function CardPage() {
  return (
    <div className="max-w-[600px] mx-auto my-[80px]">
      <div className="mx-4 space-y-10">
        <section className="space-y-4">
          <h2 className="text-black text-center font-medium break-keep max-w-[380px] mx-auto">
            Shadows on the inside make the button look dented,
            <wbr />
            the button is pressed and emphasized.
          </h2>

          <BaseCardItem className="active:shadow-inner">
            <div className="flex justify-center items-center h-[140px]">
              <span className="text-[36px]">👆</span>
            </div>
          </BaseCardItem>
        </section>

        <section className="space-y-4">
          <h2 className="text-black text-center font-medium break-keep">
            If the shadow widens,
            <wbr />
            the button appears to be attached to the mouse.
          </h2>

          <BaseCardItem className="active:shadow-xl">
            <div className="flex justify-center items-center h-[140px]">
              <span className="text-[36px]">🧲</span>
            </div>
          </BaseCardItem>
        </section>

        <section className="space-y-4">
          <h2 className="text-black text-center font-medium break-keep">
            Rotating could suggest a sense of depth.
          </h2>

          <div
            style={{ transformStyle: 'preserve-3d', perspective: '600px' }}
            className="relative flip"
          >
            <div className="front transition">
              <BaseCardItem>
                <div className="flex justify-center items-center h-[140px]">
                  <span className="text-[36px]">👊</span>
                </div>
              </BaseCardItem>
            </div>
            <div className="absolute top-0 w-full z-10 back transition delay-500">
              <BaseCardItem className="!bg-[#333]" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
