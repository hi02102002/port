const AvailableToWork = () => {
   return (
      <div className="flex items-center gap-2 text-sm bg-muted p-1 rounded px-2">
         <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
         </span>
         <span>Available to work</span>
      </div>
   );
};

export default AvailableToWork;
