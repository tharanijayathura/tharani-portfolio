// ✅ Cleaned and Polished Navbar.jsx (No numbers, softer link color)
import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Divider,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Menu,
  Close,
  LightMode,
  DarkMode,
} from '@mui/icons-material';


const MotionDiv = motion.div; // Reuse single motion.div reference to appease lint rule
const Navbar = ({ mode, toggleTheme }) => {
  const theme = useTheme();
  
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:900px)');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 10);
  });

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#awards' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        backgroundColor: scrolled 
          ? (mode === 'dark' ? 'rgba(10, 25, 47, 0.85)' : 'rgba(255, 255, 255, 0.85)')
          : 'transparent',
        transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
        borderBottom: scrolled ? `1px solid ${mode === 'dark' ? 'rgba(100, 255, 218, 0.1)' : 'rgba(100, 255, 218, 0.2)'}` : 'none',
        py: 1,
      }}
    >
      <Toolbar
        sx={{
          maxWidth: '1200px',
          mx: 'auto',
          width: '100%',
          px: { xs: 2, md: 4 },
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <MotionDiv whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Typography
            variant="h6"
            component="a"
            href="#home"
            sx={{
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #64ffda, #90caf9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '1.3rem', sm: '1.5rem' },
              letterSpacing: '0.05em',
              textDecoration: 'none',
            }}
          >
            Tharani Jayathura
          </Typography>
        </MotionDiv>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {navItems.map((item, index) => (
              <MotionDiv key={index} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  href={item.href}
                  sx={{
                    color: mode === 'dark' ? theme.palette.text.secondary : theme.palette.text.primary,
                    fontWeight: 400,
                    fontSize: '0.95rem',
                    textTransform: 'none',
                    minWidth: 'unset',
                    px: 1.5,
                    py: 0.5,
                    '&:hover': {
                      color: theme.palette.primary.main,
                      background: 'transparent',
                    },
                  }}
                >
                  {item.name}
                </Button>
                </MotionDiv>
            ))}

            <Divider
              orientation="vertical"
              flexItem
              sx={{ height: 24, borderColor: 'rgba(100, 255, 218, 0.3)', mx: 1 }}
            />

            <IconButton
              href="https://github.com/tharanijayathura"
              target="_blank"
              sx={{ color: mode === 'dark' ? theme.palette.text.secondary : theme.palette.text.primary, '&:hover': { color: theme.palette.primary.main } }}
            >
              <GitHub fontSize="small" />
            </IconButton>

            <IconButton
              href="https://www.linkedin.com/in/tharani-jayathura-96235226b/"
              target="_blank"
              sx={{ color: mode === 'dark' ? theme.palette.text.secondary : theme.palette.text.primary, '&:hover': { color: theme.palette.primary.main } }}
            >
              <LinkedIn fontSize="small" />
            </IconButton>

            <IconButton
              onClick={toggleTheme}
              sx={{ 
                color: mode === 'dark' ? theme.palette.text.secondary : theme.palette.text.primary, 
                '&:hover': { 
                  color: theme.palette.primary.main,
                  transform: 'rotate(180deg)',
                },
                transition: 'all 0.3s ease',
              }}
              aria-label="Toggle theme"
            >
              {mode === 'dark' ? <LightMode fontSize="small" /> : <DarkMode fontSize="small" />}
            </IconButton>

            <Button
              variant="outlined"
              href="/resume.pdf"
              target="_blank"
              sx={{
                ml: 2,
                color: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: `${theme.palette.primary.main}1A`,
                  borderColor: theme.palette.primary.main,
                },
              }}
            >
              Resume
            </Button>
          </Box>
        )}

        {/* Mobile Navigation */}
        {isMobile && (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ color: mode === 'dark' ? theme.palette.text.secondary : theme.palette.text.primary, '&:hover': { color: theme.palette.primary.main } }}
            >
              {mobileOpen ? <Close /> : <Menu />}
            </IconButton>

            <MotionDiv
              initial={{ opacity: 0, x: '100%' }}
              animate={{
                opacity: mobileOpen ? 1 : 0,
                x: mobileOpen ? 0 : '100%',
                display: mobileOpen ? 'block' : 'none',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: 'min(75vw, 400px)',
                height: '100vh',
                backgroundColor: 'rgba(10, 25, 47, 0.95)',
                backdropFilter: 'blur(10px)',
                padding: '2rem',
                zIndex: 999,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                boxShadow: '-10px 0px 30px -15px rgba(2, 12, 27, 0.7)',
              }}
            >
              <Box
                component="nav"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  gap: 2,
                  mb: 4,
                }}
              >
                {navItems.map((item, index) => (
                  <MotionDiv
                    key={index}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: mobileOpen ? 0 : 20, opacity: mobileOpen ? 1 : 0 }}
                    transition={{ delay: index * 0.1, type: 'spring', stiffness: 300 }}
                  >
                    <Button
                      href={item.href}
                      onClick={handleDrawerToggle}
                      sx={{
                        color: mode === 'dark' ? theme.palette.text.secondary : theme.palette.text.primary,
                        fontSize: '1.1rem',
                        justifyContent: 'flex-end',
                        '&:hover': { color: theme.palette.primary.main },
                      }}
                    >
                      {item.name}
                    </Button>
                    </MotionDiv>
                ))}
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mb: 4 }}>
                <IconButton href="https://github.com/tharanijayathura" target="_blank" sx={{ color: mode === 'dark' ? theme.palette.text.secondary : theme.palette.text.primary, '&:hover': { color: theme.palette.primary.main } }}>
                  <GitHub />
                </IconButton>
                <IconButton
                  href="https://www.linkedin.com/in/tharani-jayathura-96235226b/"
                  target="_blank"
                  sx={{ color: mode === 'dark' ? theme.palette.text.secondary : theme.palette.text.primary, '&:hover': { color: theme.palette.primary.main } }}
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  onClick={toggleTheme}
                  sx={{ 
                    color: mode === 'dark' ? theme.palette.text.secondary : theme.palette.text.primary, 
                    '&:hover': { 
                      color: theme.palette.primary.main,
                      transform: 'rotate(180deg)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                  aria-label="Toggle theme"
                >
                  {mode === 'dark' ? <LightMode /> : <DarkMode />}
                </IconButton>
              </Box>

              <Button
                variant="outlined"
                href="/resume.pdf"
                target="_blank"
                fullWidth
                sx={{
                  color: theme.palette.primary.main,
                  borderColor: theme.palette.primary.main,
                  '&:hover': {
                    backgroundColor: `${theme.palette.primary.main}1A`,
                  },
                }}
              >
                Resume
              </Button>
            </MotionDiv>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
