import { useEffect, useState } from 'react';

export const useMousePos = () => {
   const [mousePos, setMousePos] = useState<{
      x: number;
      y: number;
   }>({ x: 0, y: 0 });

   useEffect(() => {
      const updateMousePos = (e: MouseEvent) => {
         setMousePos({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener('mousemove', updateMousePos);
      return () => window.removeEventListener('mousemove', updateMousePos);
   }, []);

   return [mousePos, setMousePos] as const;
};
