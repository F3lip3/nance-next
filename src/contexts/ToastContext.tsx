import * as ToastPrimitive from '@radix-ui/react-toast';
import { createContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Toast, ToastProps } from '../components/Toast';

type AddToastProps = Pick<
  ToastProps,
  'message' | 'description' | 'action' | 'variant' | 'showClose'
>;

interface ToastProviderProps {
  children: React.ReactNode;
}

export interface ToastContextData {
  addToast: (toast: AddToastProps) => void;
}

export const ToastContext = createContext<ToastContextData>(
  {} as ToastContextData
);

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [queue, setQueue] = useState<ToastProps[]>([]);

  const addToast = (toast: AddToastProps) => {
    setQueue(current => [...current, { ...toast, code: uuid() }]);
  };

  const onClose = (code: string) => {
    setQueue(current => current.filter(x => x.code !== code));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      <ToastPrimitive.Provider swipeDirection="right">
        {children}
        {queue.map(item => (
          <Toast key={item.code} onClose={onClose} {...item} />
        ))}
        <ToastPrimitive.Viewport className="fixed bottom-0 right-0 flex flex-col p-6 gap-3 w-1/4 max-w-full m-0 list-none z-50 outline-none" />
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  );
};
