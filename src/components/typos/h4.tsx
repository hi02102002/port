import { cn } from '@/lib/utils';
import { HtmlHTMLAttributes, forwardRef } from 'react';

type Props = HtmlHTMLAttributes<HTMLHeadingElement>;

export const H4 = forwardRef<HTMLHeadingElement, Props>(
   ({ className, ...rest }, ref) => {
      return (
         <h4
            {...rest}
            ref={ref}
            className={cn(
               'scroll-m-20 text-lg font-semibold tracking-tight',
               className
            )}
         />
      );
   }
);
