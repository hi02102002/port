import '@/styles/index.css';
import ReactDOM from 'react-dom/client';
import App from './app';
import { TimelineProvider } from './contexts/timeline.ctx';

ReactDOM.createRoot(document.getElementById('root')!).render(
   <TimelineProvider>
      <App />
   </TimelineProvider>
);
