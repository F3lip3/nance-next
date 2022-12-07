import * as ToastPrimitive from '@radix-ui/react-toast';
import clsx from 'clsx';
import { Button } from './Button';

export interface ToastProps {
  code: string;
  message: string;
  description?: string;
  action?: string;
  showClose?: boolean;
  variant?: 'error' | 'info' | 'success';
  onAction?: (code: string) => void;
}

type InnerToastProps = ToastProps & {
  onClose: (code: string) => void;
};

export const Toast = ({
  code,
  message,
  description,
  action,
  variant = 'success',
  showClose = true,
  onAction,
  onClose
}: InnerToastProps) => {
  const handleAction = () => {
    if (onAction) onAction(code);
  };

  const handleClose = () => {
    onClose(code);
  };

  return (
    <ToastPrimitive.Root
      onOpenChange={handleClose}
      className={clsx(
        'grid grid-areas-toast grid-cols-toast grid-rows-toast rounded p-3 min-h-fit text-white',
        {
          'bg-chestnut-600': variant === 'error',
          'bg-cyan-700': variant === 'info',
          'bg-green-400': variant === 'success'
        }
      )}
    >
      <ToastPrimitive.Title className="grid-in-title text-sm text-white font-medium antialiased">
        {message}
      </ToastPrimitive.Title>
      {!!description && (
        <ToastPrimitive.Description className="grid-in-description text-xs text-gray-100 font-normal leading-snug m-0 antialiased">
          {description}
        </ToastPrimitive.Description>
      )}
      {!!action && (
        <ToastPrimitive.Action
          className="grid-in-action"
          altText={`Execute ${action} action`}
          asChild
        >
          <Button
            type="button"
            className={clsx('h-8 text-xs text-gray-100 opacity-80', {
              'bg-chestnut-600': variant === 'error',
              'bg-cyan-700': variant === 'info',
              'bg-green-400': variant === 'success'
            })}
            onClick={handleAction}
          >
            {action}
          </Button>
        </ToastPrimitive.Action>
      )}
      {showClose && <ToastPrimitive.Close />}
    </ToastPrimitive.Root>
  );
};
