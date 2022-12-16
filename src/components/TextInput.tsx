import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps {
  children: ReactNode;
  error?: string;
}

export interface TextInputIconProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
}

const TextInputRoot = ({ children, error }: TextInputRootProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div
        className={clsx(
          'flex items-center gap-3 py-4 px-3 rounded bg-gray-800 min-h-12 w-full outline-none',
          {
            'focus-within:ring-2 ring-cyan-600': !error,
            'ring-2 ring-chestnut-600': !!error
          }
        )}
      >
        {children}
      </div>
      {!!error && (
        <div className="text-xs text-chestnut-600 -mt-2 antialiased">
          {error}
        </div>
      )}
    </div>
  );
};

const TextInputIcon = ({ children, size = 'md' }: TextInputIconProps) => {
  return (
    <Slot
      className={clsx('text-gray-400', {
        'w-4 h-4': size === 'sm',
        'w-8 h-8': size === 'md',
        'w-12 h-12 pr-4': size === 'lg'
      })}
    >
      {children}
    </Slot>
  );
};

const TextInputComponent = forwardRef<HTMLInputElement, TextInputProps>(
  ({ size = 'md', ...props }, ref) => {
    return (
      <input
        className={clsx(
          'bg-transparent flex-1 text-gray-100 placeholder:text-gray-400 outline-none',
          {
            'text-xs': size === 'sm',
            'text-sm': size === 'md',
            'text-xl px-4': size === 'lg'
          }
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

TextInputRoot.displayName = 'TextInput.Root';
TextInputIcon.displayName = 'TextInput.Icon';
TextInputComponent.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputComponent,
  Icon: TextInputIcon
};
