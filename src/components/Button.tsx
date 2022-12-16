import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Loading } from './Loading';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  loading?: boolean;
}

export const Button = ({
  children,
  asChild,
  loading,
  className,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'flex items-center justify-center py-3 px-4 h-12 bg-cyan-700 hover:bg-cyan-600 disabled:opacity-60 disabled:bg-cyan-700 transition-colors focus:ring-2 ring-white rounded font-semibold text-white text-sm w-full',
        className
      )}
      {...props}
    >
      {loading ? <Loading /> : children}
    </Comp>
  );
};
