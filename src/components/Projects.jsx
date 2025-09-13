import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Box, Typography, Grid, Card, CardContent, CardActions,
  Button, Divider, Container, Chip, IconButton, useTheme
} from '@mui/material';
import { GitHub, OpenInNew, ArrowRightAlt } from '@mui/icons-material';

const projects = [
  {
    title: "Visitor Management System",
    description: "A full-stack web system (React.js, Node.js/Express.js, MongoDB) that streamlines visitor management with online pre-registration, host approvals, and automated email confirmations. Security staff verify check-in/out via unique codes, while admins manage visitor logs, reports, and analytics (live stats, peak hours, feedback). Role-based access ensures security, efficiency, and accountability across the university.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "Socket.IO"],
    link: "https://github.com/ThisaraJayasooriya/UoM-VMS-frontend.git",
    demo: "https://vms-demo.com",
    image: "/images/image.png"
  },
  {
    title: "School Management System",
    description: "Feature-rich Laravel e-commerce solution with product management, shopping cart, payment gateway integration, and admin dashboard for complete business operations management.",
    technologies: ["Laravel", "MySQL", "Bootstrap", "jQuery", "Stripe API"],
    link: "https://github.com/tharanijayathura/ecommerce",
    demo: "https://ecommerce-demo.com",
    image: "/images/ecommerce-screenshot.jpg"
  },
  {
    title: "Task Management App",
    description: "Productivity application built with React and Firebase for real-time task management, team collaboration, and progress tracking with drag-and-drop functionality.",
    technologies: ["React", "Firebase", "Material-UI", "Redux"],
    link: "https://github.com/tharanijayathura/task-manager",
    demo: "https://taskmanager-demo.com",
    image: "/images/taskmanager-screenshot.jpg"
  },
  {
    title: "Weather Dashboard",
    description: "Interactive weather application providing current conditions and forecasts using data from the OpenWeather API with location detection and historical data visualization.",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js", "Geolocation API"],
    link: "https://github.com/tharanijayathura/weather-app",
    demo: "https://weather-demo.com",
    image: "/images/weather-screenshot.jpg"
  },
];

const Projects = () => {
  const theme = useTheme();

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box
      id="projects"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        background: theme.palette.gradient.secondary,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            component={motion.h2}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6 }}
            sx={{
              display: 'inline-block',
              background: theme.palette.gradient.primary,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
              mb: 2,
            }}
          >
            Featured Projects
          </Typography>
          <Divider
            component={motion.div}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ delay: 0.2, duration: 0.6 }}
            sx={{
              width: 80,
              height: 4,
              mx: 'auto',
              background: theme.palette.gradient.primary,
              borderRadius: 2,
            }}
          />
        </Box>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} key={index}>
              <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    backgroundColor:
                      theme.palette.mode === 'dark'
                        ? 'rgba(17, 34, 64, 0.7)'
                        : 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 4,
                    border: `1px solid ${theme.palette.primary.main}1A`, // 10% opacity
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 12px 40px rgba(25, 118, 210, 0.3)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: '100%', md: '50%' },
                      minHeight: { xs: '200px', md: 'auto' },
                      overflow: 'hidden',
                      position: 'relative',
                    }}
                  >
                    <Box
                      component="img"
                      src={project.image}
                      alt={project.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        transition: 'transform 0.5s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: theme.palette.gradient.secondary,
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&:hover': {
                          opacity: 1,
                        },
                      }}
                    >
                      <Button
                        variant="outlined"
                        href={project.demo}
                        target="_blank"
                        endIcon={<ArrowRightAlt />}
                        sx={{
                          color: theme.palette.primary.main,
                          borderColor: theme.palette.primary.main,
                          '&:hover': {
                            backgroundColor: `${theme.palette.primary.main}1A`,
                          },
                        }}
                      >
                        View Live
                      </Button>
                    </Box>
                  </Box>
                  <CardContent
                    sx={{
                      width: { xs: '100%', md: '50%' },
                      p: { xs: 3, md: 4 },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{
                          color: theme.palette.primary.main,
                          fontWeight: 'medium',
                          mb: 2,
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: theme.palette.text.secondary,
                          mb: 3,
                          lineHeight: 1.6,
                        }}
                      >
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                        {project.technologies.map((tech, i) => (
                          <Chip
                            key={i}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: `${theme.palette.primary.main}1A`,
                              color: theme.palette.primary.main,
                              border: `1px solid ${theme.palette.primary.main}33`,
                              '& .MuiChip-label': {
                                fontSize: '0.8rem',
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                    <CardActions sx={{ p: 0 }}>
                      <IconButton
                        href={project.link}
                        target="_blank"
                        sx={{
                          color: theme.palette.primary.main,
                          '&:hover': {
                            backgroundColor: `${theme.palette.primary.main}1A`,
                          },
                        }}
                      >
                        <GitHub />
                      </IconButton>
                      <IconButton
                        href={project.demo}
                        target="_blank"
                        sx={{
                          color: theme.palette.primary.main,
                          '&:hover': {
                            backgroundColor: `${theme.palette.primary.main}1A`,
                          },
                        }}
                      >
                        <OpenInNew />
                      </IconButton>
                    </CardActions>
                  </CardContent>
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
