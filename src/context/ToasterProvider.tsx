import type { ReactNode } from 'react';
import { useContext, useState } from 'react';
import { ToasterContext, Toasts } from './toasterContext';

export const ToastsCard = ({ toasts }: { toasts: Toasts[] }) => {
  return (
    <div className="toasts-container">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`toast toast-${toast.type}`}
        >
          <h3>{toast.title}</h3>
          <p>{toast.content}</p>
        </div>
      ))}
    </div>
  );
};

export const ToastsContainer = () => {
  const { toasts } = useContext(ToasterContext);

  return (
    <div className="toast-container toast-position-${toast.position} toast-align-${toast.align}">
      {toasts.map((toast) => (
        <ToastsCard
          key={toast.id}
          toasts={toasts}
        />
      ))}
    </div>
  );
};

export const ToasterProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toasts[]>([]);

  const addToast = (toast: Toasts) => {
    setToasts((prevToasts) => [...prevToasts, toast]);
  };

  const removeToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToasterContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToasterContext.Provider>
  );
};
