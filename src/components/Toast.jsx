import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { FaCheckCircle, FaInfoCircle, FaTimes } from 'react-icons/fa';

const Toast = () => {
  const { toast, closeToast } = useCart();

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      closeToast();
    }, 3500);

    return () => clearTimeout(timer);
  }, [toast, closeToast]);

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full animate-bounce-in shadow-warm">
      <div className="bg-bakery-surface border border-bakery-border rounded-2xl p-4 shadow-xl flex items-center gap-3">
        <div className="shrink-0 text-bakery-accent text-xl">
          {toast.type === 'info' ? <FaInfoCircle /> : <FaCheckCircle />}
        </div>
        <div className="flex-1 text-sm font-medium text-bakery-primary">
          {toast.message}
        </div>
        <button
          onClick={closeToast}
          className="text-bakery-muted hover:text-bakery-primary p-1 rounded-lg transition-colors"
          aria-label="Close notification"
        >
          <FaTimes className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
