import { cn } from '@/lib/utils';
import { HtmlHTMLAttributes, forwardRef } from 'react';

type Props = HtmlHTMLAttributes<HTMLParagraphElement>;

export const Paragraph = forwardRef<HTMLParagraphElement, Props>(
   ({ className, ...rest }, ref) => {
      return (
         <p
            {...rest}
            ref={ref}
            className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
         />
      );
   }
);
