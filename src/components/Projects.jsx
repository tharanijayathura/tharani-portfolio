import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Box, Typography, Grid, Card, CardContent, CardActions, Button, Divider, Container, Chip } from '@mui/material';
import { GitHub, OpenInNew } from '@mui/icons-material';

const projects = [
  {
    title: "Visitor Management System",
    description: "A MERN stack web application for secure visitor entry and tracking with real-time notifications and reporting.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://github.com/tharanijayathura/vms",
    image: "/images/image.png"
  },
  {
    title: "Laravel Web App",
    description: "A PHP-based project built with Laravel for dynamic data-driven application handling with admin dashboard.",
    technologies: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
    link: "https://github.com/tharanijayathura/laravel-project",
    image: "/images/1.PNG"
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <Box
      id="projects"
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
          background: 'radial-gradient(circle at 20% 70%, rgba(25, 118, 210, 0.1) 0%, transparent 70%)',
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
              background: 'linear-gradient(90deg, #64ffda, #90caf9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
              fontSize: { xs: '2rem', md: '2.5rem' },
              mb: 2,
            }}
          >
            My Projects
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

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'rgba(10, 25, 47, 0.7)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: 'rgba(100, 255, 218, 0.1)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 12px 40px rgba(25, 118, 210, 0.3)',
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      width: '100%',
                      height: 200,
                      objectFit: 'cover',
                      borderTopLeftRadius: 4,
                      borderTopRightRadius: 4,
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography 
                      gutterBottom 
                      variant="h5" 
                      component="div"
                      sx={{ 
                        color: '#64ffda',
                        fontWeight: 'medium'
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: '#cfd8dc',
                        mb: 3,
                        lineHeight: 1.6
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.technologies.map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(100, 255, 218, 0.1)',
                            color: '#64ffda',
                            border: '1px solid',
                            borderColor: 'rgba(100, 255, 218, 0.2)',
                            '& .MuiChip-label': {
                              fontSize: '0.8rem',
                            }
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions sx={{ p: 2 }}>
                    <Button
                      size="small"
                      startIcon={<GitHub />}
                      href={project.link}
                      target="_blank"
                      sx={{
                        color: '#64ffda',
                        borderColor: '#64ffda',
                        '&:hover': {
                          backgroundColor: 'rgba(100, 255, 218, 0.1)',
                        }
                      }}
                    >
                      View Code
                    </Button>
                    <Button
                      size="small"
                      startIcon={<OpenInNew />}
                      href={project.link}
                      target="_blank"
                      sx={{
                        color: '#64ffda',
                        borderColor: '#64ffda',
                        '&:hover': {
                          backgroundColor: 'rgba(100, 255, 218, 0.1)',
                        }
                      }}
                    >
                      Live Demo
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;