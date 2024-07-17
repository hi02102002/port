import { cn } from '@/lib/utils';
import { HtmlHTMLAttributes, forwardRef } from 'react';

type Props = HtmlHTMLAttributes<HTMLHeadingElement>;

export const H2 = forwardRef<HTMLHeadingElement, Props>(
   ({ className, ...rest }, ref) => {
      return (
         <h2
            {...rest}
            ref={ref}
            className={cn(
               'scroll-m-20 first-line:text-2xl font-semibold tracking-tight',
               className
            )}
         />
      );
   }
);
