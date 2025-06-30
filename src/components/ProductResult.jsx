import React, { useState, useEffect } from 'react';
import { products } from '../data/products';

const ProductResult = ({ selectedOption, onStartOver }) => {
  const [showContent, setShowContent] = useState(false);
  const product = products[selectedOption];

  useEffect(() => {
    setTimeout(() => setShowContent(true), 150);
  }, [selectedOption]);

  if (!product) return null;

  return (
    <div className={`text-center space-y-6 transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      
      <div className="relative">
        <div className={`w-full h-64 md:h-72 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center shadow-lg mb-4`}>
          
          {/* Simple background dots */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/20 animate-pulse"></div>
            <div className="absolute bottom-6 right-4 w-8 h-8 rounded-full bg-white/15 animate-pulse"></div>
          </div>
          
          {/* Main product display */}
          <div className="relative flex flex-col items-center space-y-3">
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-2xl bg-white/30 backdrop-blur-sm flex items-center justify-center shadow-md">
              <div className="text-5xl md:text-6xl">
                {getProductIcon(selectedOption)}
              </div>
            </div>
            
            {/* Simple floating dots */}
            <div className="flex space-x-4">
              <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Product info */}
      <div className="space-y-4">
        
        {/* Title section */}
        <div className="space-y-2">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-xl">{product.icon}</span>
            <p className="text-xs font-semibold text-stone-600 uppercase tracking-wide">
              {product.archetype}
            </p>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-light text-stone-800">
            {product.product}
          </h3>
        </div>

        {/* Description */}
        <p className="text-stone-600 max-w-md mx-auto text-base md:text-lg">
          {product.description}
        </p>

        {/* Fabric info */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/70 border border-stone-200">
          <div className="w-2 h-2 bg-stone-500 rounded-full mr-2"></div>
          <span className="text-sm font-medium text-stone-700">
            {product.fabric}
          </span>
        </div>

        {/* Mood */}
        <p className="text-stone-500 text-sm italic">
          {product.mood}
        </p>
      </div>

      {/* Buttons */}
      <div className="space-y-3 pt-4">
        <button className="bg-stone-800 hover:bg-stone-900 text-white px-8 py-3 rounded-full font-medium transition-colors">
          Explore This Style
        </button>
        
        <div>
          <button
            onClick={onStartOver}
            className="text-white hover:text-stone-700 text-sm"
          >
            Start Over
          </button>
        </div>
      </div>
    </div>
  );
};

// Simple helper function
function getProductIcon(option) {
  const icons = {
    grounding: '🧘‍♀️',
    softness: '🤗', 
    energy: '💃',
    freedom: '🕊️'
  };
  return icons[option] || '👗';
}

export default ProductResult;