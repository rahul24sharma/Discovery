const Footer = ({ isLoaded }) => {
    return (
      <footer className="p-6 md:p-8 text-center relative">
        <div 
          className="space-y-2 transform transition-all duration-1000"
          style={{
            animation: isLoaded ? 'fadeInUp 1s ease-out forwards' : 'none',
            animationDelay: '1s',
            opacity: isLoaded ? 1 : 0
          }}
        >
          <p className="text-stone-500 text-sm font-light relative">
            Crafted with intention for your body's wisdom
            <span className="absolute -top-1 -right-2 text-xs opacity-60 animate-pulse" style={{animationDelay: '2s'}}>✨</span>
          </p>
          <div className="flex justify-center space-x-4 text-xs text-stone-400">
            <span className="hover:text-stone-500 transition-colors cursor-default">•</span>
            <span className="hover:text-stone-500 transition-colors cursor-default">Sustainable</span>
            <span className="hover:text-stone-500 transition-colors cursor-default">•</span>
            <span className="hover:text-stone-500 transition-colors cursor-default">Ethically Made</span>
            <span className="hover:text-stone-500 transition-colors cursor-default">•</span>
            <span className="hover:text-stone-500 transition-colors cursor-default">Body Positive</span>
            <span className="hover:text-stone-500 transition-colors cursor-default">•</span>
          </div>
        </div>
        
        
        <div className="absolute top-4 left-8 w-1 h-1 bg-rose-200 rounded-full opacity-30 animate-bounce" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-8 right-12 w-0.5 h-0.5 bg-amber-200 rounded-full opacity-40 animate-bounce" style={{animationDelay: '4s'}}></div>
      </footer>
    );
  };
  
  export default Footer;