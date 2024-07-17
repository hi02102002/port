import { cn } from '@/lib/utils';
import { HtmlHTMLAttributes, forwardRef } from 'react';

type Props = HtmlHTMLAttributes<HTMLHeadingElement>;

export const H3 = forwardRef<HTMLHeadingElement, Props>(
   ({ className, ...rest }, ref) => {
      return (
         <h3
            {...rest}
            ref={ref}
            className={cn(
               'scroll-m-20 text-2xl font-semibold tracking-tight',
               className
            )}
         />
      );
   }
);
