import clsx from 'clsx';
import { CircleNotch } from 'phosphor-react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
}

export const Loading = ({ size = 'sm' }: LoadingProps) => {
  return (
    <div
      className={clsx(
        'flex items-center justify-center gap-2 overflow-hidden',
        {
          'w-6 h-6': size === 'sm',
          'w-10 h-10': size === 'md',
          'w-16 h-16': size === 'lg'
        }
      )}
    >
      <CircleNotch
        weight="bold"
        className={clsx('animate-spin', {
          'w-4 h-4': size === 'sm',
          'w-8 h-8': size === 'md',
          'w-14 h-14': size === 'lg'
        })}
      />
    </div>
  );
};
