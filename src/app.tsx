import { useTl } from '@/hooks/use-tl';
import { Hero, Loader, Memories } from './components/sections';

const App = () => {
   const { loaderFinished } = useTl();

   return (
      <>
         {loaderFinished ? (
            <>
               <Hero />
               <Memories />
            </>
         ) : (
            <Loader />
         )}
      </>
   );
};

export default App;
