import { forwardRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BookPageProps {
  children: ReactNode;
  className?: string;
  runningHead?: string;
  folio?: string | number;
  variant?: 'paper' | 'cover' | 'plain';
}

export const BookPage = forwardRef<HTMLDivElement, BookPageProps>(
  ({ children, className, runningHead, folio, variant = 'paper' }, ref) => {
    const numericFolio = typeof folio === 'number' ? folio : undefined;
    const pageSide = numericFolio ? (numericFolio % 2 === 0 ? 'verso' : 'recto') : undefined;

    return (
      <div
        ref={ref}
        data-page-side={pageSide}
        data-trim-size="160x230mm"
        className={cn(
          'book-page print-page-real relative overflow-hidden select-text',
          variant === 'paper' && 'bg-[hsl(var(--paper))] text-[hsl(var(--paper-ink))]',
          variant === 'cover' && 'bg-[hsl(var(--book-purple))] text-[hsl(var(--paper))]',
          variant === 'plain' && 'bg-[hsl(var(--paper))] text-[hsl(var(--paper-ink))]',
        )}
      >
        {variant === 'paper' && (
          <>
            <div className="print-safe-area absolute pointer-events-none" aria-hidden="true" />
            {/* running head */}
            {runningHead && (
              <div className="absolute top-4 left-0 right-0 px-8 flex items-center justify-between text-[10px] tracking-[0.25em] uppercase text-[hsl(var(--paper-muted))] font-sans">
                <span>{runningHead}</span>
                {folio && <span className="text-[hsl(var(--book-gold))]">{folio}</span>}
              </div>
            )}
            {/* thin gold rule under running head */}
            {runningHead && (
              <div className="absolute top-8 left-8 right-8 h-px bg-[hsl(var(--book-gold))]/40" />
            )}
            {/* folio bottom center */}
            {folio && !runningHead && (
              <div className="absolute bottom-3 left-0 right-0 text-center text-[10px] text-[hsl(var(--paper-muted))] font-serif">
                {folio}
              </div>
            )}
          </>
        )}
        <div className={cn('book-page-content h-full w-full', className)}>{children}</div>
      </div>
    );
  }
);

BookPage.displayName = 'BookPage';
