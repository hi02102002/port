import { cn } from '@/lib/utils';
import { HtmlHTMLAttributes, forwardRef } from 'react';

type Props = HtmlHTMLAttributes<HTMLHeadingElement>;

export const H1 = forwardRef<HTMLHeadingElement, Props>(
   ({ className, ...rest }, ref) => {
      return (
         <h1
            {...rest}
            ref={ref}
            className={cn(
               'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl',
               className
            )}
         />
      );
   }
);
