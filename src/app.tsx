import { useTl } from '@/hooks/use-tl';
import Cursor from './components/cursor';
import Header from './components/header';
import { Hero, Loader, Memories } from './components/sections';

const App = () => {
   const { loaderFinished } = useTl();

   return (
      <>
         <Cursor />
         {loaderFinished ? (
            <>
               <Header />
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
