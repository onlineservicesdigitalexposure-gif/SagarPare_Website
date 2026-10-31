import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

const SectionTitle = ({ children, subtitle, className, centered = true }: SectionTitleProps) => {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="flex justify-center mt-4">
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
      </div>
    </div>
  );
};

export default SectionTitle;
