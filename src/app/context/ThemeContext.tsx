'use client';

import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Define the available themes
type Theme = 'standard' | 'detective' | 'terminal';

// Define the context type
interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDesktop: boolean;
}

// Create the context with undefined as default
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider component that wraps the app
export function ThemeProvider({ children }: { children: ReactNode }) {
  // Initialize with server-safe defaults
  const [theme, setTheme] = useState<Theme>('standard');
  const [isDesktop, setIsDesktop] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Effect to handle initialization after component mounts
  useEffect(() => {
    // Set mounted to true to indicate we're now on the client
    setMounted(true);
    
    // Check if device is desktop
    const desktop = window.innerWidth >= 900;
    setIsDesktop(desktop);
    
    // Get saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && desktop) {
      setTheme(savedTheme);
    } else if (!desktop) {
      // Ensure standard theme on mobile
      setTheme('standard');
    }
    
    // Set up resize listener
    const handleResize = () => {
      const isDesktopNow = window.innerWidth >= 900;
      setIsDesktop(isDesktopNow);
      
      // Switch to standard theme if resized to mobile
      if (!isDesktopNow && theme !== 'standard') {
        setTheme('standard');
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array since this should only run once on mount
  
  // Separate effect to update localStorage when theme changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);
  
  // Create the context value
  const contextValue = {
    theme,
    setTheme,
    isDesktop
  };
  
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use the theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
}