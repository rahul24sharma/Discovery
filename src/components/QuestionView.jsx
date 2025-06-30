import React from 'react';
import { products } from '../data/products';
import { getStaggerDelay } from '../utils/animations';

const QuestionView = ({ onOptionSelect, isLoaded }) => {
  const options = Object.keys(products);

  return (
    <div className="text-center space-y-8 transform transition-all duration-700">
      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-light text-stone-900 leading-tight">  
            What does your body
            <br />
            <span className="text-rose-500 italic font-normal">crave</span> today?  
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-stone-300 to-transparent mx-auto"></div>
          <p className="text-stone-600 text-lg md:text-xl font-light">  
            Listen to your inner wisdom
          </p>
        </div>
      </div>

      <div className="space-y-4 max-w-md md:max-w-lg mx-auto">
        {options.map((key, index) => (
          <OptionButton
            key={key}
            option={key}
            product={products[key]}
            onClick={() => onOptionSelect(key)}
            delay={getStaggerDelay(index, 150)}
            isLoaded={isLoaded}
          />
        ))}
      </div>

      <p className="text-stone-500 text-sm font-light mt-8">  
        Choose what resonates with you right now
      </p>
    </div>
  );
};

const OptionButton = ({ option, product, onClick, delay, isLoaded }) => {
  const animationStyle = isLoaded ? {
    animationName: 'fadeInUp',
    animationDuration: '0.8s',
    animationFillMode: 'forwards',
    animationDelay: `${delay}ms`,
    animationTimingFunction: 'ease-out'
  } : {};

  return (
    <button
      onClick={onClick}
      className="option-card group w-full relative"
      style={{
        opacity: isLoaded ? 1 : 0,
        ...animationStyle
      }}
    >
      <div className="flex items-center justify-between p-3 md:p-4">
        <div className="flex flex-col items-start space-y-1">
          <span className="text-lg md:text-xl font-medium text-white capitalize group-hover:text-black transition-colors">  {/* Changed from text-stone-800 to text-stone-900 and hover to black */}
            {option}
          </span>
          <span className="text-sm md:text-base text-stone-700 group-hover:text-stone-800 transition-colors">  {/* Changed from text-stone-600 to text-stone-700 */}
            {product.mood}
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <span className="text-2xl md:text-3xl option-icon group-hover:scale-110 transition-transform duration-500">
            {product.icon}
          </span>
          <div 
            className="option-color w-10 h-10 md:w-12 md:h-12 rounded-full opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 shadow-sm relative overflow-hidden"
            style={{ 
              background: `linear-gradient(135deg, ${product.bgColor}, ${product.bgColor}80)` 
            }}
          >
            <div className="w-full h-full rounded-full bg-white/30 relative">
              <div className="absolute top-1 left-1 w-1 h-1 bg-white/50 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-1 right-1 w-0.5 h-0.5 bg-white/40 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Magical particle effects */}
      <div className="magic-particles"></div>
      
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
        {/* Magical sparkles */}
        <div className="absolute top-2 right-4 w-1 h-1 bg-amber-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-700" style={{animationDelay: '0.2s'}}></div>
        <div className="absolute bottom-3 left-6 w-0.5 h-0.5 bg-rose-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-700" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 left-3 w-0.5 h-0.5 bg-blue-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-700" style={{animationDelay: '0.8s'}}></div>
      </div>
    </button>
  );
};

export default QuestionView;