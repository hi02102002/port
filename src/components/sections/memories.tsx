import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import Container from '../container';
import { H2, ParagraphMuted } from '../typos';
import Section from './section';

const MAX_IMAGES = 75;

const IMAGES = Array.from({ length: MAX_IMAGES }, (_, i) => ({
   src: `/images/memories/image-${i}.jpg`,
   alt: `Image ${i}`,
})).filter((_, i) => i !== 0);

const THRESHOLD = 100;

const calcDistance = (x1: number, y1: number, x2: number, y2: number) => {
   return Math.hypot(x2 - x1, y2 - y1);
};

export const Memories = () => {
   const ref = useRef<HTMLDivElement>(null);
   const [mouseStopped, setMouseStopped] = useState(false);
   const mouseStoppedTimeout = useRef<NodeJS.Timeout | null>(null);
   const [mouseLeft, setMouseLeft] = useState(false);

   const activeImage = (
      image: HTMLElement,
      x: number,
      y: number,
      zIndex = 1
   ) => {
      image.style.left = `${x}px`;
      image.style.top = `${y}px`;
      image.setAttribute('data-active', 'true');

      const tl = gsap.timeline();

      tl.to(image, {
         opacity: 1,
         scale: 1.1,
         duration: 0.1,
         rotate: Math.random() * 30,
         zIndex,
      });

      tl.to(image, {
         scale: 1,
         rotate: Math.random() * 20,
      });
   };

   const inactiveImage = (image: HTMLElement) => {
      gsap.to(image, {
         opacity: 0,
         duration: 1,
      });
      image.setAttribute('data-active', 'false');
   };

   useGSAP(() => {
      let globalIndex = 0;
      let zIndex = 1;
      const lastPosition = { x: 0, y: 0 };
      const images = document.querySelectorAll('.image-wrapper');

      const handleMouseMove = (e: MouseEvent) => {
         const { clientX, clientY } = e;
         const react = ref.current?.getBoundingClientRect();
         const x = clientX - react!.left;
         const y = clientY - react!.top;

         const lead = images[globalIndex % images.length] as HTMLElement;
         const tail = images[(globalIndex - 10) % images.length] as HTMLElement;

         const distance = calcDistance(lastPosition.x, lastPosition.y, x, y);

         if (distance < THRESHOLD) return;

         activeImage(lead, x, y, zIndex);

         lastPosition.x = x;
         lastPosition.y = y;

         if (tail) {
            inactiveImage(tail);
         }

         globalIndex++;
         zIndex++;

         if (mouseStoppedTimeout.current) {
            clearTimeout(mouseStoppedTimeout.current);
            setMouseStopped(false);
         }

         mouseStoppedTimeout.current = setTimeout(() => {
            setMouseStopped(true);
         }, 500);
      };

      const handleMouseLeave = () => {
         setMouseLeft(true);
      };

      ref.current?.addEventListener('mousemove', handleMouseMove);
      ref.current?.addEventListener('mouseleave', handleMouseLeave);

      return () => {
         ref.current?.removeEventListener('mousemove', handleMouseMove);
         ref.current?.removeEventListener('mouseleave', handleMouseLeave);
      };
   }, []);

   useEffect(() => {
      if (!mouseStopped && !mouseLeft) return;
      const timeouts: NodeJS.Timeout[] = [];

      const images = document.querySelectorAll('.image-wrapper');

      images.forEach((image, i) => {
         if (image.getAttribute('data-active') === 'true') {
            const timeout = setTimeout(() => {
               inactiveImage(image as HTMLElement);
            }, i * 50);

            timeouts.push(timeout);
         }
      });

      return () => {
         timeouts.forEach((timeout) => {
            clearTimeout(timeout);
         });
      };
   }, [mouseLeft, mouseStopped]);

   return (
      <Section
         className="select-none relative overflow-hidden bg-cover bg-center bg-no-repeat text-white not-rendered-cursor"
         ref={ref}
         style={{
            backgroundImage: 'url(/images/hero.jpg)',
         }}
      >
         <Container>
            <div>
               <H2 className="text-center">Memories</H2>
               <ParagraphMuted className="text-center text-muted text-base">
                  This is a placeholder for the memories section. It has a many
                  my memories and stories.
               </ParagraphMuted>
            </div>
            {IMAGES.map((image, i) => {
               return (
                  <div
                     className="border-4 border-white absolute flex items-center justify-center shadow-sm image-wrapper opacity-0 pointer-events-none  scale-75 rounded flex-col pb-4 bg-white"
                     key={i}
                     data-active="false"
                  >
                     <img
                        src={image.src}
                        alt={image.alt}
                        className="max-w-40 max-h-40 object-contain  w-full h-full rounded-t"
                     />
                  </div>
               );
            })}
         </Container>
      </Section>
   );
};

export default Memories;
