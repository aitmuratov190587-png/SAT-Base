import { HTMLAttributes } from 'react';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'rectangular' | 'circular' | 'text';
  width?: string | number;
  height?: string | number;
}

/**
 * Cosmo Notebook Skeleton
 * - Warm paper monochromatic placeholder shimmer matching --color-paper-2
 * - No spinning circular spinners; provides structural layout hints
 */
export function Skeleton({
  variant = 'rectangular',
  width,
  height,
  className = '',
  style,
  ...props
}: SkeletonProps) {
  const variantStyles = {
    rectangular: 'rounded-[var(--radius-sm)] min-h-[40px]',
    circular: 'rounded-full shrink-0',
    text: 'rounded-[4px] h-4',
  };

  const dynamicStyles = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    ...style,
  };

  return (
    <div
      aria-hidden="true"
      className={`skeleton-shimmer ${variantStyles[variant]} ${className}`}
      style={dynamicStyles}
      {...props}
    />
  );
}

export default Skeleton;
