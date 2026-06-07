import { cn } from '@/lib/utils/cn';

interface AvatarProps {
  src?: string | null;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  fallback?: string;
}

export function Avatar({ src, alt = '', size = 'md', className, fallback }: AvatarProps) {
  const sizes = { sm: 'w-8 h-8', md: 'w-10 h-10', lg: 'w-14 h-14', xl: 'w-20 h-20' };

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={cn('rounded-full object-cover', sizes[size], className)}
      />
    );
  }

  return (
    <div
      className={cn(
        'rounded-full bg-accent/20 flex items-center justify-center text-accent font-semibold',
        sizes[size],
        className
      )}
    >
      {fallback ? fallback.charAt(0).toUpperCase() : '?'}
    </div>
  );
}
