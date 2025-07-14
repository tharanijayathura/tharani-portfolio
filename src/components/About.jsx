import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Box, Typography, Grid, Avatar, Paper, Button, Divider, Container, Chip } from '@mui/material';
import { School, Work, Code, SportsCricket, SportsTennis } from '@mui/icons-material';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skills = [
    { name: "C", icon: <Code fontSize="small" /> },
    { name: "Python", icon: <Code fontSize="small" /> },
    { name: "Java", icon: <Code fontSize="small" /> },
    { name: "JavaScript", icon: <Code fontSize="small" /> },
    { name: "React", icon: <Code fontSize="small" /> },
    { name: "Node.js", icon: <Code fontSize="small" /> },
    { name: "MongoDB", icon: <Code fontSize="small" /> },
    { name: "PHP", icon: <Code fontSize="small" /> },
    { name: "Laravel", icon: <Code fontSize="small" /> },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: '#0a192f',
        color: '#e1eaff',
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 20% 50%, rgba(25, 118, 210, 0.1) 0%, transparent 70%)',
          zIndex: 0,
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              background: 'linear-gradient(90deg, #64ffda, #90caf9)', // Teal to light blue gradient
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
              fontSize: { xs: '2rem', md: '2.5rem' },
              mb: 2,
            }}
          >
            About Me
          </Typography>
          <Divider
            sx={{
              width: 80,
              height: 4,
              mx: 'auto',
              mb: 6,
              background: 'linear-gradient(90deg, #64ffda, #1976d2)',
              borderRadius: 2,
            }}
          />
        </motion.div>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
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
                  opacity: 0.15,
                  borderRadius: '50%',
                  filter: 'blur(20px)',
                  zIndex: 0,
                  animation: 'pulse 6s ease-in-out infinite',
                  '@keyframes pulse': {
                    '0%, 100%': { opacity: 0.15 },
                    '50%': { opacity: 0.25 },
                  }
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
            </motion.div>
          </Grid>

          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  backgroundColor: 'rgba(10, 25, 47, 0.7)',
                  color: '#e1eaff',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  border: '1px solid',
                  borderColor: 'rgba(100, 255, 218, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                }}
              >
                <Typography 
                  variant="h4" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 'bold', 
                    color: '#64ffda',
                    mb: 3,
                  }}
                >
                  I'm Tharani Jayathura
                </Typography>
                
                <Typography 
                  paragraph 
                  sx={{ 
                    color: '#cfd8dc', 
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                    mb: 3,
                  }}
                >
                  A passionate IT undergraduate from University of Moratuwa specializing in creating 
                  innovative digital solutions that bridge technology and real-world needs.
                </Typography>

                <Grid container spacing={3} sx={{ mb: 3 }}>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                      <School color="primary" sx={{ mr: 1.5, color: '#64ffda' }} />
                      <Typography variant="subtitle1" sx={{ color: '#90caf9', fontWeight: 'medium' }}>
                        Education
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: '#cfd8dc', pl: 4.5 }}>
                      BSc in Information Technology
                      <br />
                      University of Moratuwa
                    </Typography>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                      <Work color="primary" sx={{ mr: 1.5, color: '#64ffda' }} />
                      <Typography variant="subtitle1" sx={{ color: '#90caf9', fontWeight: 'medium' }}>
                        Experience
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: '#cfd8dc', pl: 4.5 }}>
                      Full Stack Developer
                      <br />
                      MERN & Laravel Specialist
                    </Typography>
                  </Grid>
                </Grid>

                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                    <Code color="primary" sx={{ mr: 1.5, color: '#64ffda' }} />
                    <Typography variant="subtitle1" sx={{ color: '#90caf9', fontWeight: 'medium' }}>
                      Technical Skills
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, pl: 4.5 }}>
                    {skills.map((skill, index) => (
                      <Chip
                        key={index}
                        label={skill.name}
                        icon={skill.icon}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(100, 255, 218, 0.1)',
                          color: '#64ffda',
                          border: '1px solid',
                          borderColor: 'rgba(100, 255, 218, 0.2)',
                          '& .MuiChip-icon': {
                            color: '#64ffda',
                            opacity: 0.8,
                          }
                        }}
                      />
                    ))}
                  </Box>
                </Box>

                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                    <SportsCricket color="primary" sx={{ mr: 1.5, color: '#64ffda' }} />
                    <Typography variant="subtitle1" sx={{ color: '#90caf9', fontWeight: 'medium' }}>
                      Interests
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: '#cfd8dc', pl: 4.5 }}>
                    Technology Enthusiast • Cricket • Badminton • Problem Solving
                  </Typography>
                </Box>

                <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
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
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;