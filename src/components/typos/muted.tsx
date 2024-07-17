import { cn } from '@/lib/utils';
import { HtmlHTMLAttributes, forwardRef } from 'react';

type Props = HtmlHTMLAttributes<HTMLParagraphElement>;

export const ParagraphMuted = forwardRef<HTMLParagraphElement, Props>(
   ({ className, ...rest }, ref) => {
      return (
         <p
            {...rest}
            ref={ref}
            className={cn('text-sm text-muted-foreground', className)}
         />
      );
   }
);
