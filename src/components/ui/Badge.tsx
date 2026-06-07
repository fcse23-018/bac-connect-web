import { cn } from '@/lib/utils/cn';

interface BadgeProps {
  variant?: 'accent' | 'success' | 'warning' | 'error' | 'default';
  className?: string;
  children: React.ReactNode;
}

export function Badge({ variant = 'default', className, children }: BadgeProps) {
  const variants = {
    accent: 'bg-accent/20 text-accent',
    success: 'bg-success/20 text-success',
    warning: 'bg-warning/20 text-warning',
    error: 'bg-error/20 text-error',
    default: 'bg-surface-light text-text-secondary',
  };

  return (
    <span className={cn('px-3 py-1 text-xs font-medium rounded-full', variants[variant], className)}>
      {children}
    </span>
  );
}
