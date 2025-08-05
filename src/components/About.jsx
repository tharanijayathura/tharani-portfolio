import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Box,
  Typography,
  Grid,
  Avatar,
  Paper,
  Button,
  Divider,
  Container,
  Chip,
} from '@mui/material';
import { School, Work, Code, SportsCricket } from '@mui/icons-material';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const skills = [
    "JavaScript", "React", "Node.js", "Python", "Java", "MongoDB", "Laravel", "PHP"
  ];

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box
      id="about"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #0a192f 0%, #091829 100%)',
        color: '#e1eaff',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        {/* Title */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            component={motion.h2}
            variants={variants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6 }}
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '2rem', md: '2.5rem' },
              background: 'linear-gradient(90deg, #64ffda, #90caf9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 1,
            }}
          >
            About Me
          </Typography>
          <Divider
            sx={{
              width: 80,
              height: 4,
              mx: 'auto',
              background: 'linear-gradient(90deg, #64ffda, #1976d2)',
              borderRadius: 2,
            }}
          />
        </Box>

        <Grid container spacing={6} alignItems="center">
          {/* Image */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={variants}
              transition={{ delay: 0.3 }}
              style={{ position: 'relative' }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: -16,
                  left: -16,
                  right: -16,
                  bottom: -16,
                  background: 'linear-gradient(135deg, #64ffda, #1976d2)',
                  opacity: 0.2,
                  borderRadius: '50%',
                  filter: 'blur(20px)',
                  zIndex: 0,
                }}
              />
              <Avatar
                alt="Tharani Jayathura"
                src="/images/mypho.jpeg"
                sx={{
                  width: { xs: 200, md: 280 },
                  height: { xs: 200, md: 280 },
                  position: 'relative',
                  zIndex: 1,
                  border: '4px solid rgba(100, 255, 218, 0.3)',
                  boxShadow: '0 12px 40px rgba(100, 255, 218, 0.2)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />
            </motion.div>
          </Grid>

          {/* Text Content */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={variants}
              transition={{ delay: 0.4 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  backgroundColor: 'rgba(10, 25, 47, 0.8)',
                  border: '1px solid rgba(100, 255, 218, 0.15)',
                  borderRadius: 4,
                  backdropFilter: 'blur(12px)',
                }}
              >
                <Typography variant="h4" sx={{ color: '#64ffda', fontWeight: 700, mb: 2 }}>
                  I'm Tharani Jayathura
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: '#cfd8dc', lineHeight: 1.7, mb: 3 }}
                >
                  Passionate IT undergraduate from the University of Moratuwa, specializing in
                  full-stack development and digital problem-solving.
                </Typography>

                {/* Education & Experience */}
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Box display="flex" alignItems="center" mb={1}>
                      <School sx={{ color: '#64ffda', mr: 1 }} />
                      <Typography fontWeight="bold" color="#90caf9">Education</Typography>
                    </Box>
                    <Typography variant="body2" color="#cfd8dc" pl={4}>
                      BSc in IT <br /> University of Moratuwa
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box display="flex" alignItems="center" mb={1}>
                      <Work sx={{ color: '#64ffda', mr: 1 }} />
                      <Typography fontWeight="bold" color="#90caf9">Experience</Typography>
                    </Box>
                    <Typography variant="body2" color="#cfd8dc" pl={4}>
                      Full Stack Developer <br /> MERN & Laravel
                    </Typography>
                  </Grid>
                </Grid>

                {/* Skills */}
                <Box mt={4}>
                  <Box display="flex" alignItems="center" mb={1}>
                    <Code sx={{ color: '#64ffda', mr: 1 }} />
                    <Typography fontWeight="bold" color="#90caf9">Technical Skills</Typography>
                  </Box>
                  <Box display="flex" flexWrap="wrap" gap={1.5} pl={4}>
                    {skills.map((skill, index) => (
                      <Chip
                        key={index}
                        label={skill}
                        sx={{
                          backgroundColor: 'rgba(100, 255, 218, 0.1)',
                          color: '#64ffda',
                          border: '1px solid rgba(100, 255, 218, 0.2)',
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Box>
                </Box>

                {/* Interests */}
                <Box mt={4}>
                  <Box display="flex" alignItems="center" mb={1}>
                    <SportsCricket sx={{ color: '#64ffda', mr: 1 }} />
                    <Typography fontWeight="bold" color="#90caf9">Interests</Typography>
                  </Box>
                  <Typography variant="body2" color="#cfd8dc" pl={4}>
                    Technology • Cricket • Badminton • UI/UX • Problem Solving
                  </Typography>
                </Box>

                {/* Buttons */}
                <Box mt={4} display="flex" gap={2} flexWrap="wrap">
                  <Button
                    href="#contact"
                    variant="contained"
                    sx={{
                      background: 'linear-gradient(90deg, #1976d2, #64ffda)',
                      color: '#0a192f',
                      fontWeight: 'bold',
                      px: 4,
                      py: 1.2,
                      '&:hover': {
                        background: 'linear-gradient(90deg, #1565c0, #52d7c7)',
                        boxShadow: '0 0 12px rgba(100, 255, 218, 0.3)',
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
                      px: 4,
                      py: 1.2,
                      '&:hover': {
                        backgroundColor: 'rgba(100, 255, 218, 0.1)',
                      },
                    }}
                  >
                    View Projects
                  </Button>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
