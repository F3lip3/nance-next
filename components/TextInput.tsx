import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps {
  children: ReactNode;
}

const TextInputRoot = ({ children }: TextInputRootProps) => {
  return (
    <div
      className={clsx(
        'flex items-center gap-3 py-4 px-3 rounded bg-gray-800 h-12 w-full outline-none focus-within:ring-2 ring-cyan-600'
      )}
    >
      {children}
    </div>
  );
};

TextInputRoot.displayName = 'TextInput.Root';

export interface TextInputIconProps {
  children: ReactNode;
}

const TextInputIcon = ({ children }: TextInputIconProps) => {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
};

TextInputIcon.displayName = 'TextInput.Icon';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInputComponent = (props: TextInputProps) => {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-sm placeholder:text-gray-400 outline-none"
      {...props}
    />
  );
};

TextInputComponent.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputComponent,
  Icon: TextInputIcon
};
