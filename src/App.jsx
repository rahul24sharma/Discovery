import React, { useState, useEffect } from 'react';
// import Layout from './components/Layout/Layout';
import Header from './components/header';
import Footer from './components/Footer';
import WelcomeToast from './components/WelcomeToast';
import LoadingScreen from './components/LoadingScreen';
import Layout from './components/Layout';

import QuestionView from './components/QuestionView';
import ProductResult from './components/ProductResult';
import { useLocalStorage, useWelcomeBack } from './hooks/useLocalStorage';
import { products } from './data/products';
import "./App.css"

function App() {
  const [selectedOption, setSelectedOption] = useLocalStorage('bellaOterSelection', null);
  const [isLoaded, setIsLoaded] = useState(false);
  const welcomeData = useWelcomeBack();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    localStorage.setItem('bellaOterLastSelection', Date.now().toString());
  };

  const handleStartOver = () => {
    setSelectedOption(null);
  };

  return (
    <Layout>
      <WelcomeToast welcomeData={welcomeData} />
      
      {!isLoaded && <LoadingScreen />}
      
      <Header isLoaded={isLoaded} />
      
      <main className="flex-1 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-2xl mx-auto">
          <div 
            className="relative min-h-[600px] md:min-h-[500px] flex items-center justify-center rounded-3xl transition-all duration-1000"
            style={{
              background: selectedOption ? 
                `linear-gradient(135deg, ${products[selectedOption]?.bgColor}20, transparent)` : 
                'transparent'
            }}
          >
            {!selectedOption ? (
              <QuestionView 
                onOptionSelect={handleOptionSelect}
                isLoaded={isLoaded}
              />
            ) : (
              <ProductResult 
                selectedOption={selectedOption}
                onStartOver={handleStartOver}
              />
            )}
          </div>
        </div>
      </main>
      
      <Footer isLoaded={isLoaded} onStartOver={handleStartOver} />
    </Layout>
  );
}

export default App;