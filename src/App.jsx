import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import getTheme from './theme';
import Achievements from "./components/Achievements";
import Stats from "./components/Stats";

function App() {
  const theme = getTheme(); // No need to toggle theme

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Stats />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
