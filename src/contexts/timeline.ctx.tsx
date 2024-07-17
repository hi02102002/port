import gsap from 'gsap';
import { createContext, useLayoutEffect, useState } from 'react';

export type TimelineContext = {
   timeline: gsap.core.Timeline | null;
   loaderFinished: boolean;
   setLoaderFinished?: (finished: boolean) => void;
};

export const TimelineContext = createContext<TimelineContext>(
   {} as TimelineContext
);

export const TimelineProvider = ({
   children,
}: {
   children: React.ReactNode;
}) => {
   const [loaderFinished, setLoaderFinished] = useState(false);
   const [timeline, setTimeline] = useState<gsap.core.Timeline | null>(null);

   useLayoutEffect(() => {
      const ctx = gsap.context(() => {
         const tl = gsap.timeline();

         setTimeline(tl);
      });

      return () => {
         ctx.revert();
      };
   }, []);

   return (
      <TimelineContext.Provider
         value={{
            timeline,
            loaderFinished,
            setLoaderFinished,
         }}
      >
         {children}
      </TimelineContext.Provider>
   );
};
