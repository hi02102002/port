import ani from '@/assets/ani.json';
import { useTl } from '@/hooks/use-tl';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import Lottie from 'lottie-react';
import { useEffect, useRef } from 'react';
import Container from '../container';
import Section from './section';

const SplitText = ({
   children,
   className,
}: {
   children: string;
   className?: string;
}) => {
   return children.split('').map((char, index) => {
      return (
         <span key={index} className={cn('inline-block', className)}>
            {char === ' ' ? '\u00A0' : char}
         </span>
      );
   });
};

export const Hero = () => {
   const { timeline } = useTl();
   const roleRef = useRef<HTMLSpanElement>(null);

   useEffect(() => {
      const currentTl = gsap.timeline();

      currentTl?.to(
         roleRef.current,
         {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power4.out',
         },
         '<'
      );

      currentTl?.to(
         '.splitted-text',
         {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.05,
            ease: 'power4.out',
         },
         '<'
      );

      currentTl?.to('.ani-worker', {
         y: 0,
         opacity: 1,
         duration: 0.5,
         ease: 'power4.inOut',
      });

      timeline?.add(currentTl);
   }, [timeline]);

   return (
      <Section className="min-h-svh">
         <Container>
            <span
               className="text-center text-xl block font-medium mb-2 transform translate-y-[100px] opacity-0"
               ref={roleRef}
            >
               Frontend Developer
            </span>
            <h1 className="text-center text-6xl font-semibold italic overflow-hidden pb-2">
               <SplitText className="splitted-text translate-y-[100px] opacity-0">
                  Hoang Huy
               </SplitText>{' '}
            </h1>
            <div className="ani-worker translate-y-[100px] opacity-0">
               <Lottie
                  animationData={ani}
                  loop
                  autoPlay
                  className="max-w-lg mx-auto"
               />
            </div>
         </Container>
      </Section>
   );
};

export default Hero;
