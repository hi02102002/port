import { GREETINGS } from '@/constants';
import { useTl } from '@/hooks/use-tl';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

export const Loader = () => {
   const spanRefs = useRef<HTMLSpanElement[]>([]);
   const { timeline, setLoaderFinished } = useTl();
   const [currentIdx, setCurrentIdx] = useState(0);

   useEffect(() => {
      if (!timeline) return;

      if (!spanRefs.current[currentIdx]) return;

      let timer: NodeJS.Timeout | null = null;

      const currentTl = gsap.timeline();

      currentTl.fromTo(
         spanRefs.current[currentIdx],
         {
            opacity: 0,
            y: '100%',
         },
         {
            opacity: 1,
            duration: 0.3,
            onComplete: () => {
               currentTl.to(spanRefs.current[currentIdx], {
                  opacity: 0,
                  duration: 0.3,
               });
               timer = setTimeout(() => {
                  setCurrentIdx((prev) => {
                     return prev + 1;
                  });
               }, 300);
            },
            y: '0%',
            ease: 'power4.out',
         }
      );

      if (currentIdx === GREETINGS.length - 1) {
         timer = setTimeout(() => {
            currentTl.to('.loader', {
               opacity: 0,
               y: '-100%',
               duration: 0.5,
               onComplete: () => {
                  setLoaderFinished?.(true);
               },
            });
         }, 300);
      }

      timeline.add(currentTl);

      return () => {
         if (timer) clearTimeout(timer);
      };
   }, [currentIdx, setLoaderFinished, timeline]);

   return (
      <div className="min-h-svh flex items-center justify-center bg-stone-900 text-white overflow-hidden loader">
         <div className="flex flex-col">
            {GREETINGS.map((greeting, i) => {
               return (
                  <span
                     key={`${greeting}-${i}`}
                     ref={(el) => {
                        if (el) spanRefs.current[i] = el;
                     }}
                     className={cn(
                        'text-lg font-semibold italic overflow-hidden',
                        {
                           hidden: i !== currentIdx,
                        }
                     )}
                  >
                     {greeting}
                  </span>
               );
            })}
         </div>
      </div>
   );
};

export default Loader;
