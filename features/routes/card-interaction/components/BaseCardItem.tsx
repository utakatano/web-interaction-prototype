import clsx from 'clsx';
import type { ReactNode } from 'react';

type BaseCardItemProps = {
  className?: string | string[];
  children?: ReactNode;
};

export const BaseCardItem = ({ className, children }: BaseCardItemProps) => {
  return (
    <div
      className={clsx(
        'min-h-[140px] bg-white cursor-pointer',
        'shadow-md rounded-lg outline outline-[#f3f3f3] transition',
        className
      )}
    >
      {children}
    </div>
  );
};
