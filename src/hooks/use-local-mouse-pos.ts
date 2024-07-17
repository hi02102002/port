import { useCallback, useEffect, useRef, useState } from 'react';

export const useLocalMousePos = () => {
   const ref = useRef<HTMLDivElement | null>(null);
   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

   const handleMouseMove = useCallback((e: MouseEvent) => {
      if (ref.current) {
         const rect = ref.current.getBoundingClientRect();

         setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
         });
      }
   }, []);

   useEffect(() => {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
   }, [handleMouseMove]);

   return [ref, mousePos] as const;
};
