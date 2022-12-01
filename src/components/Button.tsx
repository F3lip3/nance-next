import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

export const Button = ({
  children,
  asChild,
  className,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'py-3 px-4 bg-cyan-700 hover:bg-cyan-600 transition-colors focus:ring-2 ring-white rounded font-semibold text-white text-sm w-full',
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};
