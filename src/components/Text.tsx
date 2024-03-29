import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface TextProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export const Text = ({
  size = 'md',
  children,
  className,
  asChild
}: TextProps) => {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      className={clsx(
        'text-gray-100 font-sans antialiased',
        {
          'text-xs': size === 'xs',
          'text-sm': size === 'sm',
          'text-md': size === 'md',
          'text-lg': size === 'lg',
          'text-2xl': size === 'xl'
        },
        className
      )}
    >
      {children}
    </Comp>
  );
};
