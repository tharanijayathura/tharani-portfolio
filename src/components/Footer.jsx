import React from 'react';
import { Box, Typography, IconButton, Link, useTheme } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();
  
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        backgroundColor: theme.palette.mode === 'dark' 
          ? 'rgba(10, 25, 47, 0.9)' 
          : 'rgba(245, 247, 250, 0.9)',
        borderTop: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(100, 255, 218, 0.1)' : 'rgba(100, 255, 218, 0.2)'}`,
        textAlign: 'center'
      }}
    >
      {/* Social Links */}
      <Box sx={{ mb: 1 }}>
        <IconButton 
          href="https://github.com/tharanijayathura" 
          target="_blank"
          aria-label="GitHub"
          sx={{ color: theme.palette.text.secondary, '&:hover': { color: theme.palette.primary.main } }}
        >
          <GitHub fontSize="small" />
        </IconButton>
        <IconButton 
          href="https://linkedin.com/in/tharani-jayathura-96235226b/" 
          target="_blank"
          aria-label="LinkedIn"
          sx={{ color: theme.palette.text.secondary, '&:hover': { color: theme.palette.primary.main } }}
        >
          <LinkedIn fontSize="small" />
        </IconButton>
        <IconButton 
          href="mailto:tharanijayathura1@gmail.com" 
          aria-label="Email"
          sx={{ color: theme.palette.text.secondary, '&:hover': { color: theme.palette.primary.main } }}
        >
          <Email fontSize="small" />
        </IconButton>
      </Box>

      {/* Copyright */}
      <Typography 
        variant="body2" 
        sx={{ 
          color: theme.palette.text.secondary,
          fontSize: '0.8rem'
        }}
      >
        © {new Date().getFullYear()} Tharani Jayathura. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;