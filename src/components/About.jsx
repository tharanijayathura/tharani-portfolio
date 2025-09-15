import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Box,
  Typography,
  Avatar,
  Paper,
  Button,
  Divider,
  Container,
  Chip,
  Stack,
} from '@mui/material';
import { School, Work, Code, SportsCricket } from '@mui/icons-material';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const skills = [
    "JavaScript", "React", "Node.js", "Python", "Java", "MongoDB", "Laravel", "PHP"
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <Box
      id="about"
      ref={ref}
      sx={{
        position: 'relative',
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #0a192f 0%, #091829 100%)',
        color: '#e1eaff',
        overflow: 'hidden',
      }}
    >
      {/* soft background orbs */}
      <Box sx={{
        position: 'absolute', inset: -200, pointerEvents: 'none',
        background: 'radial-gradient(600px circle at 15% 20%, rgba(100,255,218,.08), transparent 60%), radial-gradient(700px circle at 85% 80%, rgba(144,202,249,.08), transparent 60%)'
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        {/* Title */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h2"
            component={motion.h2}
            initial="hidden"
            animate="visible"
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            sx={{
              display: "inline-block",
              background: "linear-gradient(90deg, #64ffda, #90caf9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
              fontFamily:
                '"Calibre","Inter","San Francisco","SF Pro Text",-apple-system,sans-serif',
              mb: 2
            }}
          >
            About Me
          </Typography>
          <Divider
            sx={{
              width: 90,
              height: 3,
              mx: 'auto',
              background: 'linear-gradient(90deg, #64ffda, #1976d2)',
              borderRadius: 2,
            }}
          />
        </Box>

        {/* 2-column layout: image left | card right */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '5fr 7fr' },
            gap: { xs: 4, md: 6 },
            alignItems: 'center',
          }}
        >
          {/* Image block (LEFT) */}
          <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              transition={{ delay: 0.1, duration: 0.5 }}
              style={{ position: 'relative' }}
            >
              {/* glow ring */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: -18,
                  borderRadius: '9999px',
                  background:
                    'conic-gradient(from 180deg at 50% 50%, rgba(100,255,218,.25), rgba(25,118,210,.25), rgba(100,255,218,.25))',
                  filter: 'blur(10px)',
                  opacity: 0.8,
                }}
              />
              <Avatar
                alt="Tharani Jayathura"
                src="/images/mypho.jpeg"
                sx={{
                  width: { xs: 220, md: 280 },
                  height: { xs: 220, md: 280 },
                  border: '3px solid rgba(100,255,218,.4)',
                  boxShadow: '0 20px 50px rgba(0,0,0,.35)',
                  position: 'relative',
                }}
              />
            </motion.div>
          </Box>

          {/* Text card (RIGHT) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ width: '100%' }}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                backgroundColor: 'rgba(12, 28, 48, 0.88)',
                border: '1px solid rgba(100, 255, 218, 0.15)',
                borderRadius: 3,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* left accent bar */}
              <Box sx={{
                position: 'absolute',
                top: 0, left: 0, bottom: 0, width: 6,
                background: 'linear-gradient(#64ffda, #1976d2)'
              }} />

              <Typography variant="h4" sx={{ color: '#64ffda', fontWeight: 800, mb: 1 }}>
                I'm Tharani Jayathura
              </Typography>
              <Typography variant="body1" sx={{ color: '#cfd8dc', lineHeight: 1.75, mb: 3, maxWidth: 720 }}>
                Passionate IT undergraduate at the University of Moratuwa, focused on building
                accessible, human‑centered products with clean code and strong UX.
              </Typography>

              {/* two mini columns */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                  gap: 2.5,
                  mb: 3,
                }}
              >
                <Stack spacing={0.5}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <School sx={{ color: '#64ffda' }} />
                    <Typography fontWeight={700} color="#90caf9">Education</Typography>
                  </Stack>
                  <Typography variant="body2" color="#cfd8dc" sx={{ pl: 4 }}>
                    BSc in IT & Management <br /> University of Moratuwa
                  </Typography>
                </Stack>

                <Stack spacing={0.5}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Work sx={{ color: '#64ffda' }} />
                    <Typography fontWeight={700} color="#90caf9">Experience</Typography>
                  </Stack>
                  <Typography variant="body2" color="#cfd8dc" sx={{ pl: 4 }}>
                    Full‑Stack Developer <br /> MERN & Laravel
                  </Typography>
                </Stack>
              </Box>

              {/* skills chips */}
              <Stack spacing={1.2} sx={{ mb: 3 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Code sx={{ color: '#64ffda' }} />
                  <Typography fontWeight={700} color="#90caf9">Technical Skills</Typography>
                </Stack>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.1, pl: 4 }}>
                  {skills.map((s) => (
                    <Chip
                      key={s}
                      label={s}
                      sx={{
                        backgroundColor: 'rgba(100,255,218,.10)',
                        color: '#64ffda',
                        border: '1px solid rgba(100,255,218,.25)',
                        fontWeight: 600,
                      }}
                    />
                  ))}
                </Box>
              </Stack>

              {/* interests */}
              <Stack spacing={1.2} sx={{ mb: 3 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <SportsCricket sx={{ color: '#64ffda' }} />
                  <Typography fontWeight={700} color="#90caf9">Interests</Typography>
                </Stack>
                <Typography variant="body2" color="#cfd8dc" sx={{ pl: 4 }}>
                  Technology • Cricket • Badminton • UI/UX • Problem Solving
                </Typography>
              </Stack>

              {/* actions */}
              <Stack direction="row" spacing={2} flexWrap="wrap">
                <Button
                  href="#contact"
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(90deg, #1976d2, #64ffda)',
                    color: '#0a192f',
                    fontWeight: 800,
                    px: 3.5, py: 1.15,
                    '&:hover': {
                      background: 'linear-gradient(90deg, #1565c0, #52d7c7)',
                      boxShadow: '0 0 14px rgba(100,255,218,.35)',
                    },
                  }}
                >
                  Contact Me
                </Button>
                <Button
                  href="#projects"
                  variant="outlined"
                  sx={{
                    color: '#64ffda',
                    borderColor: '#64ffda',
                    fontWeight: 700,
                    px: 3.5, py: 1.15,
                    '&:hover': { backgroundColor: 'rgba(100,255,218,.10)' },
                  }}
                >
                  View Projects
                </Button>
              </Stack>
            </Paper>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
