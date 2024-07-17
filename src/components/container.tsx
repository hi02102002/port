import { cn } from '@/lib/utils';
import { HtmlHTMLAttributes, forwardRef } from 'react';

type Props = HtmlHTMLAttributes<HTMLDivElement>;

export const Container = forwardRef<HTMLDivElement, Props>(
   ({ className, ...rest }, ref) => {
      return (
         <div
            {...rest}
            ref={ref}
            className={cn('mx-auto max-w-[1236px] px-4 w-full', className)}
         />
      );
   }
);

export default Container;
