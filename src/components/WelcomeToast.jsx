import { useEffect } from 'react';
import toast from 'react-hot-toast';

const WelcomeToast = ({ welcomeData }) => {
  useEffect(() => {
    if (welcomeData && welcomeData.show) {
      toast.custom((t) => (
        <div 
          className={`glass-morphism px-4 py-3 md:px-6 md:py-4 rounded-2xl shadow-xl border border-stone-200/50 max-w-xs md:max-w-sm bg-white/95 mx-auto transform transition-all duration-500 ${
            t.visible ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <div className="text-center space-y-1 md:space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-rose-400 text-base md:text-lg">✨</span>
              <p className="text-stone-700 text-xs md:text-sm font-medium">
                Welcome back, beautiful soul
              </p>
              <span className="text-rose-400 text-base md:text-lg">✨</span>
            </div>
            <p className="text-stone-500 text-xs">
              Last time you craved <span className="font-medium text-stone-600 capitalize">{welcomeData.selection}</span>
            </p>
            <p className="text-stone-400 text-xs italic">
              {welcomeData.timeAgo}
            </p>
          </div>
          
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-300/50 rounded-full animate-ping"></div>
          <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-rose-300/50 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      ), {
        position: 'top-center',
        duration: 2500,
      });
    }
  }, [welcomeData]);

  return null;
};

export default WelcomeToast;