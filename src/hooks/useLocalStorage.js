import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log('Error reading localStorage:', error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log('Error setting localStorage:', error);
    }
  };

  return [storedValue, setValue];
};

export const useWelcomeBack = () => {
  const [welcomeData, setWelcomeData] = useState(null);
  
  useEffect(() => {
    const lastSelection = localStorage.getItem('bellaOterSelection');
    const lastSelectionTime = localStorage.getItem('bellaOterLastSelection');
    
    console.log('Welcome check:', { lastSelection, lastSelectionTime }); 
    
    if (lastSelection && lastSelectionTime) {
      const timeSinceSelection = Date.now() - parseInt(lastSelectionTime);
      const timeAgo = getTimeAgo(timeSinceSelection);
      
      const welcomeInfo = {
        show: true,
        selection: lastSelection,
        timeAgo: timeAgo
      };
      
      console.log('Setting welcome data:', welcomeInfo); 
      setWelcomeData(welcomeInfo);
      
      const timer = setTimeout(() => {
        console.log('Hiding welcome message'); 
        setWelcomeData(prev => prev ? { ...prev, show: false } : null);
      }, 2500);
      
      return () => clearTimeout(timer);
    } else {
      console.log('No previous selection found'); 
    }
  }, []);
  
  return welcomeData;
};

const getTimeAgo = (milliseconds) => {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  return 'just now';
};