import React from 'react';
import { AlertTriangle, XCircle, RefreshCcw, WifiOff } from 'lucide-react';

// Error Alert Component
export const ErrorAlert = ({ message, onRetry, onDismiss, type = 'error' }) => {
  const styles = {
    error: 'bg-[#EF4444]/10 border-[#EF4444]/30 text-[#EF4444]',
    warning: 'bg-[#F59E0B]/10 border-[#F59E0B]/30 text-[#F59E0B]',
    info: 'bg-[#3B82F6]/10 border-[#3B82F6]/30 text-[#3B82F6]'
  };

  const icons = {
    error: XCircle,
    warning: AlertTriangle,
    info: AlertTriangle
  };

  const Icon = icons[type];

  return (
    <div className={`rounded-xl p-4 border ${styles[type]} flex items-start gap-3 animate-in fade-in slide-in-from-top-3 duration-300`}>
      <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium">{message}</p>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        {onRetry && (
          <button
            onClick={onRetry}
            className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
            title="Retry"
          >
            <RefreshCcw className="w-4 h-4" />
          </button>
        )}
        {onDismiss && (
          <button
            onClick={onDismiss}
            className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
            title="Dismiss"
          >
            <XCircle className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

// Offline Alert Component
export const OfflineAlert = () => (
  <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-[#1a1a1a] border border-[#2D2D2D] rounded-xl p-4 shadow-2xl z-50 flex items-center gap-3 animate-in slide-in-from-bottom-4 duration-300">
    <div className="w-10 h-10 rounded-full bg-[#EF4444]/10 flex items-center justify-center flex-shrink-0">
      <WifiOff className="w-5 h-5 text-[#EF4444]" />
    </div>
    <div>
      <p className="font-bold text-white text-sm">You're Offline</p>
      <p className="text-xs text-[#6B7280]">Some features may be unavailable</p>
    </div>
  </div>
);

// Toast Notification Component
export const Toast = ({ message, type = 'info', onClose }) => {
  const styles = {
    success: 'bg-[#10B981] text-white',
    error: 'bg-[#EF4444] text-white',
    warning: 'bg-[#F59E0B] text-white',
    info: 'bg-[#3B82F6] text-white'
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed bottom-4 right-4 ${styles[type]} px-6 py-3 rounded-xl shadow-2xl font-bold text-sm flex items-center gap-3 animate-in slide-in-from-bottom-4 duration-300 z-50`}>
      {message}
      {onClose && (
        <button onClick={onClose} className="hover:opacity-70 transition-opacity">
          <XCircle className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

// Loading Spinner Component
export const LoadingSpinner = ({ size = 'md', text }) => {
  const sizes = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className={`${sizes[size]} border-2 border-[#2D2D2D] border-t-[#EF4444] rounded-full animate-spin`}></div>
      {text && <p className="text-sm text-[#6B7280]">{text}</p>}
    </div>
  );
};

// Empty State Component
export const EmptyState = ({ icon: Icon, title, description, action }) => (
  <div className="flex flex-col items-center justify-center py-16 text-center">
    {Icon && (
      <div className="w-20 h-20 rounded-full bg-[#1a1a1a] border border-[#2D2D2D] flex items-center justify-center mb-6">
        <Icon className="w-10 h-10 text-[#2D2D2D]" />
      </div>
    )}
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-[#6B7280] max-w-md mb-6">{description}</p>
    {action}
  </div>
);

// API Error Handler Helper
export const handleApiError = (error, setError) => {
  console.error('API Error:', error);
  
  if (!navigator.onLine) {
    setError('You appear to be offline. Please check your internet connection.');
    return;
  }
  
  if (error.name === 'TypeError' && error.message.includes('fetch')) {
    setError('Cannot connect to server. Please make sure the backend is running.');
    return;
  }
  
  if (error.response) {
    setError(error.response.data?.message || 'Something went wrong. Please try again.');
    return;
  }
  
  setError(error.message || 'An unexpected error occurred. Please try again.');
};

export default { ErrorAlert, OfflineAlert, Toast, LoadingSpinner, EmptyState, handleApiError };
