import React, { useState, createContext, useContext, useEffect } from 'react';
import { ThemeProvider as MUIThemeProvider, createTheme, CssBaseline } from '@mui/material';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [scroll, setScroll] = useState(false);

  const toggleTheme = () => setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const themeConfig = createTheme({
    palette: {
      mode: theme,
      background: {
        default: theme === 'light' ? '#ffffff' : '#0D0D0D',
        paper: theme === 'light' ? '#f5f5f5' : '#0D0D0D',
      },
      text: {
        primary: theme === 'light' ? '#0D0D0D' : '#fff',
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme, scroll }}>
      <MUIThemeProvider theme={themeConfig}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
