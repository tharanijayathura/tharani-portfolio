import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Box, Typography, Button, Container, Divider } from '@mui/material';
import Particles from './Particles';
import { Code, School, Work } from '@mui/icons-material';

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: 4,
        color: '#e1eaff',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 20% 50%, rgba(25, 118, 210, 0.1) 0%, transparent 70%)',
          zIndex: 1,
        }
      }}
    >
      {/* Background Video */}
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

      {/* Dark Overlay */}
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

      {/* Foreground Content */}
      <Particles />
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Circular Profile Image with glow effect */}
          <Box
            sx={{
              position: 'relative',
              display: 'inline-block',
              mb: 4,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: -8,
                left: -8,
                right: -8,
                bottom: -8,
                background: 'linear-gradient(135deg, #64ffda, #1976d2)',
                opacity: 0.2,
                borderRadius: '50%',
                filter: 'blur(12px)',
                zIndex: 0,
                animation: 'pulse 6s ease-in-out infinite',
                '@keyframes pulse': {
                  '0%, 100%': { opacity: 0.2 },
                  '50%': { opacity: 0.3 },
                }
              }}
            />
            <Box
              component="img"
              src="/images/pro.jpeg"
              alt="Tharani Jayathura"
              sx={{
                width: 200,
                height: 200,
                borderRadius: '50%',
                position: 'relative',
                zIndex: 1,
                boxShadow: '0 8px 32px rgba(25, 118, 210, 0.3)',
                border: '4px solid',
                borderColor: 'rgba(100, 255, 218, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: '0 12px 40px rgba(25, 118, 210, 0.4)',
                }
              }}
            />
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              mb: 2,
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #64ffda, #90caf9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2.5rem', md: '3rem' },
            }}
          >
            Hi, I'm Tharani
          </Typography>
          
          <Divider
            sx={{
              width: 80,
              height: 4,
              mx: 'auto',
              mb: 3,
              background: 'linear-gradient(90deg, #64ffda, #1976d2)',
              borderRadius: 2,
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Typography variant="h4" component="div" sx={{ mb: 3, color: '#cfd8dc' }}>
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Typography 
            variant="body1" 
            sx={{ 
              maxWidth: 'md', 
              mx: 'auto', 
              mb: 4,
              color: '#cfd8dc',
              fontSize: '1.1rem',
              lineHeight: 1.7,
            }}
          >
            Undergraduate at the University of Moratuwa – Faculty of Information Technology.
            Passionate about creating innovative digital solutions that bridge technology and real-world needs.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 2 }}>
            <Button
              variant="contained"
              href="#contact"
              sx={{
                px: 4,
                py: 1.5,
                backgroundColor: 'transparent',
                backgroundImage: 'linear-gradient(90deg, #1976d2, #64ffda)',
                color: '#0a192f',
                fontWeight: 'bold',
                borderRadius: 2,
                boxShadow: 'none',
                '&:hover': {
                  boxShadow: '0 0 20px rgba(100, 255, 218, 0.3)',
                  backgroundImage: 'linear-gradient(90deg, #1565c0, #52d7c7)',
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
      </Container>
    </Box>
  );
};

export default Hero;