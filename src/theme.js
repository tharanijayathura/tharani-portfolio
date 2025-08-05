import { createTheme } from '@mui/material/styles';

const getTheme = () =>
  createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#64ffda',
        contrastText: '#0a192f',
      },
      secondary: {
        main: '#26c6da',
      },
      background: {
        default: '#0a192f',
        paper: '#1e2a3a',
      },
      text: {
        primary: '#ffffff',
        secondary: '#b3c0d0',
      },
      gradient: {
        primary: 'linear-gradient(135deg, #64ffda 0%, #2196f3 100%)',
        secondary: 'linear-gradient(135deg, #0a192f 0%, #1e2a3a 100%)',
      },
    },

    typography: {
      fontFamily: '"Calibre", "Inter", "San Francisco", "SF Pro Text", -apple-system, sans-serif',
      h1: {
        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
        fontWeight: 800,
        lineHeight: 1.2,
        letterSpacing: '-0.05em',
      },
      h2: {
        fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
        fontWeight: 700,
        lineHeight: 1.3,
      },
      h3: {
        fontSize: 'clamp(1.5rem, 2.5vw, 1.8rem)',
        fontWeight: 600,
      },
      body1: {
        fontSize: '1.1rem',
        lineHeight: 1.6,
      },
    },

    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '4px',
            textTransform: 'none',
            fontWeight: 600,
            letterSpacing: '0.05em',
            transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
          },
        },
      },
    },
  });

export default getTheme;
