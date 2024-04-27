import { createContext } from 'react';

export type Toasts = {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  position: 'top' | 'bottom';
  align: 'left' | 'center' | 'right';
  title: string;
  content: string;
  duration: number;
};

type ToasterContextType = {
  toasts: Toasts[];
  addToast: (toast: Toasts) => void;
  removeToast: (id: string) => void;
};

export const ToasterContext = createContext<ToasterContextType>({
  toasts: [],
  addToast: () => {},
  removeToast: () => {},
});
