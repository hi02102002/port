import ani from '@/assets/ani.json';
import { useTl } from '@/hooks/use-tl';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import Lottie from 'lottie-react';
import { useEffect } from 'react';
import Container from '../container';
import { Button } from '../ui/button';
import AvailableToWork from './available-work';
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

   useEffect(() => {
      const currentTl = gsap.timeline();

      currentTl?.to('.splitted-text', {
         y: 0,
         opacity: 1,
         duration: 0.5,
         stagger: 0.05,
         ease: 'power4.inOut',
      });

      currentTl?.to('.info-desc', {
         y: 0,
         opacity: 1,
         duration: 0.5,
         ease: 'power4.inOut',
      });

      currentTl.to('.btn-cv', {
         y: 0,
         opacity: 1,
         duration: 0.5,
         ease: 'power4.inOut',
      });

      currentTl?.to('.ani-worker', {
         y: 0,
         opacity: 1,
         duration: 0.5,
         ease: 'power4.inOut',
      });

      timeline?.add(currentTl);
   }, [timeline]);

   return (
      <Section className="min-h-svh py-0 flex items-center justify-center">
         <Container>
            <div className="flex flex-col justify-center items-center h-full gap-4">
               <h1
                  className="text-center text-9xl font-semibold italic pb-2 for-hover inline-block mx-auto"
                  style={{
                     clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                  }}
               >
                  <SplitText className="splitted-text translate-y-[100px] opacity-0">
                     Hoang
                  </SplitText>{' '}
                  <SplitText className="splitted-text translate-y-[100px] opacity-0">
                     Huy
                  </SplitText>{' '}
               </h1>
               <p className="max-w-lg text-center info-desc translate-y-10 transform opacity-0">
                  I'm a Frontend Developer with a passion for creating beautiful
                  and functional user interfaces. I always looking for new
                  opportunities to learn and grow.
               </p>
               <AvailableToWork />
               <Button className="btn-cv translate-y-10 transform opacity-0">
                  Download CV
               </Button>
               <div className="ani-worker translate-y-[100px] opacity-0">
                  <Lottie
                     animationData={ani}
                     loop
                     autoPlay
                     className="max-w-lg mx-auto"
                  />
               </div>
            </div>
         </Container>
      </Section>
   );
};

export default Hero;
