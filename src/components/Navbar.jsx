// ✅ Cleaned and Polished Navbar.jsx (No numbers, softer link color)
import React, { useState, useEffect } from 'react';
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
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  LightMode,
  DarkMode,
  Menu,
  Close,
} from '@mui/icons-material';


const Navbar = () => {
  
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:900px)');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 10);
  });

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Work', href: '#projects' },
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
        backgroundColor: scrolled ? 'rgba(10, 25, 47, 0.85)' : 'transparent',
        transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
        borderBottom: scrolled ? '1px solid rgba(100, 255, 218, 0.1)' : 'none',
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
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
        </motion.div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {navItems.map((item, index) => (
              <motion.div key={index} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  href={item.href}
                  sx={{
                    color: '#cfd8dc',
                    fontWeight: 400,
                    fontSize: '0.95rem',
                    textTransform: 'none',
                    minWidth: 'unset',
                    px: 1.5,
                    py: 0.5,
                    '&:hover': {
                      color: '#64ffda',
                      background: 'transparent',
                    },
                  }}
                >
                  {item.name}
                </Button>
              </motion.div>
            ))}

            <Divider
              orientation="vertical"
              flexItem
              sx={{ height: 24, borderColor: 'rgba(100, 255, 218, 0.3)', mx: 1 }}
            />

            <IconButton
              href="https://github.com/tharanijayathura"
              target="_blank"
              sx={{ color: '#cfd8dc', '&:hover': { color: '#64ffda' } }}
            >
              <GitHub fontSize="small" />
            </IconButton>

            <IconButton
              href="https://www.linkedin.com/in/tharani-jayathura-96235226b/"
              target="_blank"
              sx={{ color: '#cfd8dc', '&:hover': { color: '#64ffda' } }}
            >
              <LinkedIn fontSize="small" />
            </IconButton>


            <Button
              variant="outlined"
              href="/resume.pdf"
              target="_blank"
              sx={{
                ml: 2,
                color: '#64ffda',
                borderColor: '#64ffda',
                '&:hover': {
                  backgroundColor: 'rgba(100, 255, 218, 0.1)',
                  borderColor: '#64ffda',
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
              sx={{ color: '#cfd8dc', '&:hover': { color: '#64ffda' } }}
            >
              {mobileOpen ? <Close /> : <Menu />}
            </IconButton>

            <motion.div
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
                  <motion.div
                    key={index}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: mobileOpen ? 0 : 20, opacity: mobileOpen ? 1 : 0 }}
                    transition={{ delay: index * 0.1, type: 'spring', stiffness: 300 }}
                  >
                    <Button
                      href={item.href}
                      onClick={handleDrawerToggle}
                      sx={{
                        color: '#cfd8dc',
                        fontSize: '1.1rem',
                        justifyContent: 'flex-end',
                        '&:hover': { color: '#64ffda' },
                      }}
                    >
                      {item.name}
                    </Button>
                  </motion.div>
                ))}
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mb: 4 }}>
                <IconButton href="https://github.com/tharanijayathura" target="_blank" sx={{ color: '#cfd8dc' }}>
                  <GitHub />
                </IconButton>
                <IconButton
                  href="https://www.linkedin.com/in/tharani-jayathura-96235226b/"
                  target="_blank"
                  sx={{ color: '#cfd8dc' }}
                >
                  <LinkedIn />
                </IconButton>
              </Box>

              <Button
                variant="outlined"
                href="public\resume.pdf"
                target="_blank"
                fullWidth
                sx={{
                  color: '#64ffda',
                  borderColor: '#64ffda',
                  '&:hover': {
                    backgroundColor: 'rgba(100, 255, 218, 0.1)',
                  },
                }}
              >
                Resume
              </Button>
            </motion.div>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
