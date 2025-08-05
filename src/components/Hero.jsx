// ✅ SUPER MODERNIZED Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import Particles from './Particles';

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        bgcolor: '#0a192f',
        color: '#e1eaff',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <Particles />
      <Box
        component="video"
        src="/images/vd.mp4"
        autoPlay
        muted
        loop
        playsInline
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(10, 25, 47, 0.9) 0%, rgba(10, 25, 47, 0.7) 100%)',
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 'bold',
                  background: 'linear-gradient(90deg, #64ffda, #90caf9)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: { xs: '2.5rem', md: '3rem' },
                  mb: 2,
                }}
              >
                Hi, I'm Tharani
              </Typography>

              <Typography variant="h5" sx={{ mb: 3, color: '#cfd8dc' }}>
                <TypeAnimation
                  sequence={[
                    'IT Undergraduate',
                    1500,
                    'Full Stack Developer',
                    1500,
                    'MERN Specialist',
                    1500,
                    'Problem Solver',
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ color: '#64ffda' }}
                  repeat={Infinity}
                />
              </Typography>

              <Typography
                sx={{
                  mb: 4,
                  color: '#cfd8dc',
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                  maxWidth: 500,
                }}
              >
                Undergraduate at the University of Moratuwa – Faculty of Information Technology.
                Passionate about creating innovative digital solutions that bridge technology and real-world needs.
              </Typography>

              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant="contained"
                  href="#contact"
                  sx={{
                    px: 4,
                    py: 1.5,
                    backgroundImage: 'linear-gradient(90deg, #1976d2, #64ffda)',
                    color: '#0a192f',
                    fontWeight: 'bold',
                    borderRadius: 2,
                    '&:hover': {
                      backgroundImage: 'linear-gradient(90deg, #1565c0, #52d7c7)',
                      boxShadow: '0 0 20px rgba(100, 255, 218, 0.3)',
                    },
                  }}
                >
                  Contact Me
                </Button>
                <Button
                  variant="outlined"
                  href="#projects"
                  sx={{
                    px: 4,
                    py: 1.5,
                    color: '#64ffda',
                    borderColor: '#64ffda',
                    fontWeight: 'bold',
                    borderRadius: 2,
                    '&:hover': {
                      backgroundColor: 'rgba(100, 255, 218, 0.1)',
                      borderColor: '#64ffda',
                    },
                  }}
                >
                  View Projects
                </Button>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: 200, md: 280 },
                  height: { xs: 200, md: 280 },
                  mx: 'auto',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: -12,
                    left: -12,
                    right: -12,
                    bottom: -12,
                    background: 'linear-gradient(135deg, #64ffda, #1976d2)',
                    opacity: 0.2,
                    borderRadius: '50%',
                    filter: 'blur(18px)',
                    animation: 'pulse 6s ease-in-out infinite',
                  }}
                />
                <Box
                  component="img"
                  src="/images/pro.jpeg"
                  alt="Tharani Jayathura"
                  sx={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    position: 'relative',
                    zIndex: 1,
                    boxShadow: '0 8px 32px rgba(25, 118, 210, 0.3)',
                    border: '4px solid rgba(100, 255, 218, 0.3)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 12px 40px rgba(25, 118, 210, 0.4)',
                    },
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
