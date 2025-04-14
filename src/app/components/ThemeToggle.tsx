'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, setTheme, isDesktop } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Only render component after client-side hydration
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Don't render anything during SSR or if on mobile
  if (!mounted || !isDesktop) return null;
  
  return (
    <div className="fixed top-5 right-5 z-50">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded-full transition-colors duration-300 ${
          theme === 'standard' 
            ? 'bg-gray-800 text-white hover:bg-gray-700' 
            : theme === 'detective'
              ? 'bg-[#343434] text-[#ffd700] border border-[#ffd700] hover:bg-[#454545]'
              : 'bg-[#1a1a1a] text-[#00ff00] border border-[#00ff00] hover:bg-[#2a2a2a]'
        }`}
      >
        {theme === 'standard' 
          ? 'Experience' 
          : theme === 'detective'
            ? 'Case Files'
            : 'Terminal'
        }
      </button>
      
      {isOpen && (
        <div className="absolute top-12 right-0 bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden">
          <button 
            onClick={() => { setTheme('standard'); setIsOpen(false); }}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Standard
          </button>
          <button 
            onClick={() => { setTheme('detective'); setIsOpen(false); }}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Detective
          </button>
          <button 
            onClick={() => { setTheme('terminal'); setIsOpen(false); }}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Terminal
          </button>
        </div>
      )}
    </div>
  );
} 