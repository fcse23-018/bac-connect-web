import { cn } from '@/lib/utils/cn';

interface CardProps {
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  children: React.ReactNode;
}

export function Card({ className, hover, gradient, children }: CardProps) {
  return (
    <div
      className={cn(
        'bg-surface border border-border rounded-2xl p-6',
        hover && 'transition-all duration-300 hover:border-accent/30 hover:shadow-glow hover:-translate-y-1',
        gradient && 'gradient-border',
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('flex items-center gap-3 mb-4', className)}>{children}</div>;
}

export function CardContent({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={className}>{children}</div>;
}

export function CardFooter({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('flex items-center gap-3 mt-4 pt-4 border-t border-border', className)}>{children}</div>;
}
