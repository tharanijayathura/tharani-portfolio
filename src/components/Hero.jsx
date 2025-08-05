import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Box, Typography, Button, Container, useTheme } from '@mui/material';

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: 10,
      }}
    >
      {/* 🔹 Background Video */}
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

      {/* 🔹 Dark Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(10, 25, 47, 0.9), rgba(10, 25, 47, 0.6))',
          zIndex: 1,
        }}
      />

      {/* 🔹 Light Animated Circle */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          background: `radial-gradient(circle at center, ${theme.palette.primary.main} 0%, transparent 70%)`,
          zIndex: 1,
        }}
      />

      {/* 🔹 Foreground Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 6,
        }}
      >
        {/* Left Text */}
        <Box sx={{ maxWidth: { md: '60%' } }}>
          <Typography
            variant="h6"
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            sx={{
              color: theme.palette.primary.main,
              mb: 2,
              fontFamily: '"SF Mono", "Fira Code", "Fira Mono", monospace',
            }}
          >
            Hi, my name is
          </Typography>

          <Typography
            variant="h1"
            component={motion.h1}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            sx={{
              fontWeight: 800,
              mb: 2,
              background: 'linear-gradient(90deg, #64ffda, #90caf9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Tharani Jayathura.
          </Typography>

          <Typography
            variant="h2"
            component={motion.h2}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            sx={{
              color: theme.palette.text.secondary,
              fontWeight: 700,
              mb: 3,
            }}
          >
            <TypeAnimation
              sequence={[
                'I build things for the web.',
                1500,
                'I develop full-stack applications.',
                1500,
                'I create modern user interfaces.',
                1500,
                'I solve complex problems.',
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </Typography>

          <Typography
            component={motion.p}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: '600px',
              mb: 4,
              lineHeight: 1.6,
            }}
          >
            I'm a software engineer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at University of Moratuwa.
          </Typography>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}
          >
            <Button
              variant="contained"
              href="#contact"
              sx={{
                background: theme.palette.gradient.primary,
                color: '#0a192f',
                fontWeight: 'bold',
                px: 4,
                py: 1.5,
                '&:hover': {
                  boxShadow: `0 0 20px ${theme.palette.primary.main}80`,
                },
              }}
            >
              Get In Touch
            </Button>
            <Button
              variant="outlined"
              href="#projects"
              sx={{
                color: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
                px: 4,
                py: 1.5,
                '&:hover': {
                  backgroundColor: 'rgba(100, 255, 218, 0.1)',
                },
              }}
            >
              View My Work
            </Button>
          </Box>
        </Box>

        {/* Right Profile Image */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          sx={{
            position: 'relative',
            width: { xs: '70%', sm: '50%', md: '350px' },
            height: { xs: '70%', sm: '50%', md: '350px' },
            maxWidth: '100%',
            mt: { xs: 6, md: 0 },
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: '50%',
              background: theme.palette.gradient.primary,
              opacity: 0.2,
              filter: 'blur(30px)',
              zIndex: -1,
            }}
          />
          <Box
            component="img"
            src="/images/pro.jpeg"
            alt="Profile"
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover',
              border: `3px solid ${theme.palette.primary.main}`,
              boxShadow: `0 0 30px ${theme.palette.primary.main}40`,
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
