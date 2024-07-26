import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import Container from './container';

const NAV_ITEMS = ['home', 'about', 'projects', 'contact'];

const Header = () => {
   const logoRef = useRef<HTMLSpanElement>(null);

   useEffect(() => {
      gsap.fromTo(
         logoRef.current,
         {
            opacity: 0,
            y: 20,
         },
         {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power4.out',
         }
      );

      gsap.fromTo(
         '.nav-item',
         {
            opacity: 0,
            y: 20,
         },
         {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power4.out',
         }
      );
   }, []);

   return (
      <header className="flex items-center h-16 fixed top-0 left-0 bg-background right-0 z-50">
         <Container>
            <div className="flex items-center justify-between">
               <span
                  className="font-medium text-lg cursor-pointer opacity-0 transform translate-y-5"
                  ref={logoRef}
               >
                  tyleo
               </span>

               <ul className="flex items-center gap-4">
                  {NAV_ITEMS.map((item, index) => {
                     return (
                        <li
                           key={index}
                           className="font-medium for-hover cursor-pointer nav-item transform opacity-0 translate-y-5"
                        >
                           {item}
                        </li>
                     );
                  })}
               </ul>
            </div>
         </Container>
      </header>
   );
};

export default Header;
