import React from 'react';
import { motion } from 'framer-motion';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Divider } from '@mui/material';
import { GitHub, LinkedIn, LightMode, DarkMode } from '@mui/icons-material';
import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backdropFilter: 'blur(10px)',
          background: 'linear-gradient(90deg, rgba(10,25,47,0.95) 0%, rgba(21,101,192,0.85) 100%)',
          borderBottom: '1px solid rgba(100, 255, 218, 0.2)',
          py: 1,
        }}
      >
        <Toolbar sx={{ 
          maxWidth: 'lg', 
          mx: 'auto', 
          width: '100%',
          px: { xs: 3, md: 6 },
          justifyContent: 'space-between',
          gap: 4
        }}>
          {/* Name with more spacing */}
          <Box sx={{ flex: 1, minWidth: 180 }}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 'bold',
                  background: 'linear-gradient(90deg, #64ffda, #90caf9)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  whiteSpace: 'nowrap',
                  fontSize: { xs: '1.2rem', sm: '1.3rem' },
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                }}
              >
                Tharani Jayathura
              </Typography>
            </motion.div>
          </Box>

          {/* Navigation items with proper spacing */}
          <Box sx={{ 
            display: { xs: 'none', md: 'flex' }, 
            alignItems: 'center',
            flex: 2,
            justifyContent: 'center',
            gap: 1
          }}>
            {navItems.map((item, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  href={item.href}
                  sx={{
                    color: '#e1eaff',
                    fontWeight: 'medium',
                    fontSize: '0.95rem',
                    textTransform: 'none',
                    minWidth: 'unset',
                    px: 2.5,
                    py: 1,
                    borderRadius: 2,
                    '&:hover': {
                      background: 'rgba(100, 255, 218, 0.1)',
                      color: '#64ffda',
                    },
                  }}
                >
                  {item.name}
                </Button>
              </motion.div>
            ))}
          </Box>

          {/* Icons with spacing */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            flex: 1,
            justifyContent: 'flex-end',
            gap: 1,
            minWidth: 120
          }}>
            <Divider 
              orientation="vertical" 
              flexItem 
              sx={{ 
                height: 28, 
                borderColor: 'rgba(100, 255, 218, 0.3)',
                display: { xs: 'none', sm: 'block' } 
              }} 
            />

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconButton 
                href="https://github.com/tharanijayathura" 
                target="_blank" 
                sx={{ 
                  color: '#e1eaff',
                  '&:hover': { 
                    color: '#64ffda',
                    background: 'rgba(100, 255, 218, 0.1)',
                  },
                }}
              >
                <GitHub fontSize="small" />
              </IconButton>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconButton 
                href="https://www.linkedin.com/in/tharani-jayathura-96235226b/" 
                target="_blank"
                sx={{ 
                  color: '#e1eaff',
                  '&:hover': { 
                    color: '#64ffda',
                    background: 'rgba(100, 255, 218, 0.1)',
                  },
                }}
              >
                <LinkedIn fontSize="small" />
              </IconButton>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconButton 
                onClick={toggleTheme} 
                sx={{ 
                  color: '#e1eaff',
                  '&:hover': { 
                    color: '#64ffda',
                    background: 'rgba(100, 255, 218, 0.1)',
                  },
                }}
              >
                {theme === 'dark' ? (
                  <LightMode fontSize="small" />
                ) : (
                  <DarkMode fontSize="small" />
                )}
              </IconButton>
            </motion.div>
          </Box>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
};

export default Navbar;