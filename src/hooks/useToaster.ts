import { useContext } from 'react';
import { ToasterContext } from '../context/toasterContext';

export const useToaster = () => {
  const context = useContext(ToasterContext);

  const toaster = {
    success: (title: string, content: string, duration = 3000) => {
      const id = Math.random().toString(36).substr(2, 9);
      context?.addToast({
        id,
        type: 'success',
        position: 'top',
        align: 'right',
        title,
        content,
        duration,
      });

      setTimeout(() => {
        context?.removeToast(id);
      }, duration);
    },
  };

  if (!context) {
    throw new Error('useToaster must be used within a ToasterProvider');
  }

  return { toaster };
};
