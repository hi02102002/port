import { TimelineContext } from '@/contexts/timeline.ctx';
import { useContext } from 'react';

export const useTl = () => {
   const ctx = useContext(TimelineContext);

   if (!ctx) {
      throw new Error('useTimeline must be used within a TimelineProvider');
   }

   return ctx;
};
