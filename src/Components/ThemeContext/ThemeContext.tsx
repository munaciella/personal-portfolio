import './ThemeContext.css'
import React, { createContext, useState, useContext } from 'react';

type Theme = 'light' | 'dark';
interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
}

interface ThemeProviderProps {
    children: React.ReactNode;
  }

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
  };

  // Theme provider component
  export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = () => {
      setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };

// import React, { createContext, useContext, useState } from 'react';

// type ThemeContextType = {
//   theme: string;
//   toggleTheme: () => void;
// };

// export const ThemeContext = 
// createContext<ThemeContextType>({
//     theme: 'light',
//     toggleTheme: () => {},
// })

// export const useTheme = () => {
//     return useContext(ThemeContext)
// }
