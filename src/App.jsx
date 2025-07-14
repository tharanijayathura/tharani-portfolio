// src/App.jsx
import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import getTheme from './theme';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme: mode } = useTheme(); // 'light' or 'dark'
  const theme = getTheme(mode); // Create MUI theme with selected mode

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
