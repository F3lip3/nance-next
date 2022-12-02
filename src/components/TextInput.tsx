import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps {
  children: ReactNode;
  error?: string;
}

export interface TextInputIconProps {
  children: ReactNode;
}

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

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

const TextInputIcon = ({ children }: TextInputIconProps) => {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
};

const TextInputComponent = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    return (
      <input
        className="bg-transparent flex-1 text-gray-100 text-sm placeholder:text-gray-400 outline-none"
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
