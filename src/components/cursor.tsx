import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const Cursor = () => {
   const cursorRef = useRef<HTMLDivElement>(null);

   const isTouchDevice = () => {
      return 'ontouchstart' in window || navigator.maxTouchPoints;
   };

   useEffect(() => {
      if (!cursorRef.current || isTouchDevice()) return;

      const cursor = cursorRef.current;
      const handleMouseMove = (e: MouseEvent) => {
         const { target, x, y } = e;

         const isHovering = (target as HTMLElement).closest('.for-hover');

         gsap.to(cursor, {
            x: x - cursor.clientWidth / 2,
            y: y - cursor.clientHeight / 2,
            duration: 0.7,
            ease: 'power4',
            transform: `scale(${isHovering ? 1.5 : 1})`,
         });
      };

      const handelMouseLeave = () => {
         gsap.to(cursor, {
            opacity: 0,
            duration: 0.7,
         });
      };

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseleave', handelMouseLeave);

      return () => {
         window.removeEventListener('mousemove', handleMouseMove);
         window.removeEventListener('mouseleave', handelMouseLeave);
      };
   }, []);

   if (isTouchDevice()) return null;

   return (
      <div
         ref={cursorRef}
         className="fixed w-8 h-8 bg-white mix-blend-difference rounded-full pointer-events-none  z-[99999]"
      />
   );
};

export default Cursor;
