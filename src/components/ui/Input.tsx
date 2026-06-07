import { cn } from '@/lib/utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export function Input({ className, label, error, id, icon, ...props }: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-text-secondary">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            {icon}
          </div>
        )}
        <input
          id={id}
          className={cn(
            'w-full px-4 py-3 bg-surface border border-border text-text-primary rounded-xl placeholder-text-muted',
            'focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200',
            icon && 'pl-10',
            error && 'border-error focus:border-error focus:ring-error',
            className
          )}
          {...props}
        />
      </div>
      {error && <p className="text-sm text-error">{error}</p>}
    </div>
  );
}
