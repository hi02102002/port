import { cn } from '@/lib/utils';
import { HtmlHTMLAttributes, forwardRef } from 'react';

type Props = HtmlHTMLAttributes<HTMLDivElement>;

const Section = forwardRef<HTMLDivElement, Props>(
   ({ className, ...rest }, ref) => {
      return <section {...rest} ref={ref} className={cn('py-44', className)} />;
   }
);

export default Section;
