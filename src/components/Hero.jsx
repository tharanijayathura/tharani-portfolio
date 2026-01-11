import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Box, Typography, Button, Container, useTheme } from '@mui/material';
import { Typewriter } from 'react-simple-typewriter';

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
          background: theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, rgba(10, 25, 47, 0.9), rgba(10, 25, 47, 0.6))'
            : 'linear-gradient(135deg, rgba(245, 247, 250, 0.85), rgba(232, 236, 241, 0.7))',
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
            color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : theme.palette.text.primary,
            fontWeight: 700,
            mb: 3,
          }}
        >
  <Typewriter
    words={[
      'I build things for the web.',
      'I develop full-stack applications.',
      'I create modern user interfaces.',
      'I solve complex problems.',
    ]}
    loop={0}             // play once; use Infinity to loop forever
    cursor
    cursorStyle="|"
    typeSpeed={50}       // typing speed
    deleteSpeed={5}     // speed at which previous text disappears
    delaySpeed={1500}    // pause before next phrase
  />
</Typography>


          <Typography
            component={motion.p}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            variant="body1"
            sx={{
              color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : theme.palette.text.primary,
              maxWidth: '600px',
              mb: 4,
              lineHeight: 1.6,
            }}
          >
            I’m an IT undergraduate at the University of Moratuwa who loves crafting meaningful digital experiences. I focus on writing clean, maintainable code while designing products that are intuitive, accessible, and user-friendly.
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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          sx={{
            position: 'relative',
            width: { xs: '78%', sm: '56%', md: '360px' },
            height: { xs: '78%', sm: '56%', md: '360px' },
            maxWidth: '100%',
            mt: { xs: 6, md: 0 },
            borderRadius: '24px',
            overflow: 'visible',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              inset: '-10px',
              borderRadius: '28px',
              background: theme.palette.gradient.primary,
              opacity: 0.35,
              filter: 'blur(18px)',
              zIndex: -2,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              inset: '-4px',
              borderRadius: '26px',
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary?.main || '#90caf9'})`,
              opacity: 0.9,
              zIndex: -1,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              borderRadius: '24px',
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, rgba(10, 25, 47, 0.55), rgba(10, 25, 47, 0.25))'
                : 'linear-gradient(135deg, rgba(245, 247, 250, 0.75), rgba(232, 236, 241, 0.55))',
              filter: 'blur(10px)',
              zIndex: -1,
            }}
          />
          <Box
            component="img"
            src="/images/DSC_8895.JPG"
            alt="Tharani Jayathura portrait"
            loading="eager"
            fetchpriority="high"
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '20px',
              objectFit: 'cover',
              objectPosition: '50% 40%',
              border: `2px solid ${theme.palette.primary.main}66`,
              boxShadow: `0 18px 45px ${theme.palette.primary.main}33`,
              backgroundColor: theme.palette.mode === 'dark' ? '#0a192f' : '#ffffff',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
