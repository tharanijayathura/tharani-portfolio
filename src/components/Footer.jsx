import React from 'react';
import { Box, Typography, IconButton, Link } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        backgroundColor: 'rgba(10, 25, 47, 0.9)',
        borderTop: '1px solid rgba(100, 255, 218, 0.1)',
        textAlign: 'center'
      }}
    >
      {/* Social Links */}
      <Box sx={{ mb: 1 }}>
        <IconButton 
          href="https://github.com/tharanijayathura" 
          target="_blank"
          aria-label="GitHub"
          sx={{ color: '#8892b0', '&:hover': { color: '#64ffda' } }}
        >
          <GitHub fontSize="small" />
        </IconButton>
        <IconButton 
          href="https://linkedin.com/in/tharani-jayathura-96235226b/" 
          target="_blank"
          aria-label="LinkedIn"
          sx={{ color: '#8892b0', '&:hover': { color: '#64ffda' } }}
        >
          <LinkedIn fontSize="small" />
        </IconButton>
        <IconButton 
          href="mailto:tharani@example.com" 
          aria-label="Email"
          sx={{ color: '#8892b0', '&:hover': { color: '#64ffda' } }}
        >
          <Email fontSize="small" />
        </IconButton>
      </Box>

      {/* Copyright */}
      <Typography 
        variant="body2" 
        sx={{ 
          color: '#8892b0',
          fontSize: '0.8rem'
        }}
      >
        © {new Date().getFullYear()} Tharani Jayathura. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;