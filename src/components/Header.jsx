import BellaIcon from './BellaIcon';

const Header = ({ isLoaded }) => {
  return (
    <header className="p-6 md:p-8">
      <div 
        className="flex items-center justify-center transform transition-all duration-1000"
        style={{
          animation: isLoaded ? 'fadeInUp 1.2s ease-out forwards' : 'none',
          animationDelay: '0.3s',
          opacity: isLoaded ? 1 : 0
        }}
      >
        <div className="relative">
          <BellaIcon 
            size={48} 
            className="text-stone-400 hover:text-stone-500 transition-colors duration-500 hover:drop-shadow-lg" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-200/20 to-rose-200/20 rounded-full blur-xl opacity-0 hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
        </div>
        <h1 className="ml-4 text-2xl md:text-3xl font-light tracking-wide text-stone-800 relative">
          Bella Otér
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-300 to-amber-300 group-hover:w-full transition-all duration-700"></div>
        </h1>
      </div>
    </header>
  );
};

export default Header;