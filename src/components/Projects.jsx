import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Box, Typography, Grid, Card, CardContent, CardActions,
  Button, Divider, Container, Chip, IconButton, useTheme, Badge, useMediaQuery
} from '@mui/material';
import { GitHub, OpenInNew, ArrowRightAlt, PhoneAndroid, Web, Build } from '@mui/icons-material';

const projects = [
  {
    title: "Lost and Found Hub",
    description: "A React Native mobile application designed to help people recover lost items and return found items to their owners. Features include real-time notifications, image uploads, location-based search, category filtering, and secure messaging between users. The app uses geolocation services to help users find items in their vicinity and includes a reward system to encourage community participation.",
    technologies: ["React Native", "Expo", "Firebase", "React Navigation", "AsyncStorage", "Image Picker", "Geolocation API"],
    link: "https://github.com/tharanijayathura/lost-and-found-hub",
    demo: "https://github.com/tharanijayathura/lost-and-found-hub",
    image: "/images/mobile app.webp",
    featured: true,
    type: "Mobile App"
  },
  {
    title: "Visitor Management System",
    description: "A full-stack web system (React.js, Node.js/Express.js, MongoDB) that streamlines visitor management with online pre-registration, host approvals, and automated email confirmations. Security staff verify check-in/out via unique codes, while admins manage visitor logs, reports, and analytics (live stats, peak hours, feedback). Role-based access ensures security, efficiency, and accountability across the university.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "Socket.IO"],
    link: "https://github.com/ThisaraJayasooriya/UoM-VMS-frontend.git",
    demo: "https://lnkd.in/gVxRae8T",
    image: "/images/vms home.png",
    featured: true,
    type: "Web Application"
  },
  {
    title: "Smart Kitchen - AI-Powered Kitchen Management System",
    description: "Developed a full-stack application reducing household food waste through AI-powered inventory tracking, recipe suggestions, and automated meal planning. Integrated OpenAI API for intelligent recommendations and implemented real-time expiry alerts. Features include barcode scanning, smart shopping lists, and personalized meal suggestions based on available ingredients.",
    technologies: ["React", "TypeScript", "Material-UI", "Spring Boot", "PostgreSQL", "OpenAI API", "JWT Authentication", "REST APIs"],
    link: "https://github.com/tharanijayathura/Kitchen-Assistant",
    demo: "https://github.com/tharanijayathura/Kitchen-Assistant",
    image: "/images/kitchen.PNG",
    featured: true,
    type: "Web Application",
    status: "Ongoing"
  },
  {
    title: "Jayathura LifeCare",
    description: "A comprehensive web-based system designed to digitize pharmacy services for Sri Lanka. The platform enables patients to upload prescriptions, order OTC medicines, and track deliveries in real time. Pharmacists can verify prescriptions, manage stock, generate bills, and notify patients if medicines are unavailable. Admins oversee users, delivery settings, and reports. Features include chronic patient auto-refill reminders, optional audio dosage instructions, and dual notifications (in-app + email).",
    technologies: ["React.js", "Node.js/Express.js", "MongoDB", "REST APIs", "JWT Authentication", "Cloud Storage", "Email/SMS Notification APIs", "Payment Gateway Integration"],
    link: "https://github.com/tharanijayathura/jayathura-lifecare",
    demo: "https://github.com/tharanijayathura/jayathura-lifecare",
    image: "/images/lifecare.png",
    featured: true,
    type: "Web Application",
    status: "Ongoing"
  },
  {
    title: "GameStore Web App",
    description: "Blazor-based game collection manager with animated UI and full CRUD operations. Features include game categorization, search/filter, user authentication, and responsive design for seamless browsing and management of game libraries. Includes wishlist functionality, game rating system, and detailed game information pages.",
    technologies: ["Blazor", ".NET 9.0", "C#", "CSS3", "Bootstrap"],
    link: "https://github.com/tharanijayathura/GameStore-Blazor",
    demo: "https://github.com/tharanijayathura/GameStore-Blazor",
    image: "/images/gamestore.png",
    type: "Web Application",
    status: "Ongoing"
  },
  {
    title: "School Management System",
    description: "A comprehensive school management system to manage students, teachers, and courses. Managed student and teacher records and course information with a CRUD-based system. Implemented database integration with MySQL and backend logic using PHP (Laravel). Focused on building a functional and easy-to-use application with role-based access control.",
    technologies: ["Laravel", "MySQL", "Bootstrap", "jQuery", "Stripe API"],
    link: "https://github.com/tharanijayathura/myfirstapp.git",
    demo: "https://github.com/tharanijayathura/myfirstapp",
    image: "/images/1.PNG",
    type: "Web Application"
  },
  {
    title: "Automated Liquid Dispenser - Hardware Project",
    description: "An innovative hardware project that automates liquid dispensing. The system allows a user to place a liquid gallon on a tray, enter the desired amount, and have the machine automatically dispense the liquid. Sensors detect the gallon's position, and the dispensing arm adjusts accordingly. The system calculates the dispensed volume and generates a bill automatically.",
    technologies: ["Arduino", "Sensor Integration", "Hardware Programming"],
    link: "https://www.linkedin.com/posts/tharani-jayathura-96235226b_automated-liquid-dispensing-machine-activity-7371569228782563328-7pZf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEIUu9oB0hgHg09wDIieTv564EN9ZCibxvA",
    demo: "https://youtube.com/shorts/501CNpDux3g?si=e7Q4mdIZYPvM7nLB",
    image: "/images/harware pro.png",
    type: "Hardware Project"
  }
];

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
          {projects.map((project, index) => {
            const getTypeIcon = () => {
              if (project.type === "Mobile App") return <PhoneAndroid sx={{ fontSize: 18 }} />;
              if (project.type === "Hardware Project") return <Build sx={{ fontSize: 18 }} />;
              return <Web sx={{ fontSize: 18 }} />;
            };

            return (
            <Grid 
              item 
              xs={12} 
              sm={project.featured ? 6 : 12}
              md={project.featured ? 6 : 6}
              lg={project.featured ? 6 : 4}
              key={index}
            >
              <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.01 }}
                style={{ height: '100%' }}
              >
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor:
                      theme.palette.mode === 'dark'
                        ? project.featured 
                          ? 'rgba(17, 34, 64, 0.85)'
                          : 'rgba(17, 34, 64, 0.7)'
                        : 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 4,
                    border: project.featured 
                      ? `2px solid ${theme.palette.primary.main}4D`
                      : `1px solid ${theme.palette.primary.main}1A`,
                    boxShadow: project.featured 
                      ? '0 12px 48px rgba(25, 118, 210, 0.25)'
                      : '0 8px 32px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': project.featured ? {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: theme.palette.gradient.primary,
                      zIndex: 1,
                    } : {},
                    '&:hover': {
                      boxShadow: project.featured 
                        ? '0 16px 56px rgba(25, 118, 210, 0.4)'
                        : '0 12px 40px rgba(25, 118, 210, 0.3)',
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ width: '100%', height: '100%' }}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        height: { xs: '250px', sm: '280px', md: '240px', lg: '260px' },
                        overflow: 'hidden',
                        position: 'relative',
                        borderRadius: '16px 16px 0 0',
                        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Box
                        component="img"
                        src={project.image}
                        alt={project.title}
                        onError={(e) => {
                          e.target.src = '/images/image.png'; // Fallback image
                        }}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                          display: 'block',
                          padding: { xs: '12px', sm: '16px', md: '20px' },
                          boxSizing: 'border-box',
                        }}
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: `linear-gradient(135deg, ${theme.palette.primary.main}CC, ${theme.palette.secondary?.main || '#90caf9'}CC)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backdropFilter: 'blur(2px)',
                        }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant="contained"
                            href={project.demo}
                            target="_blank"
                            endIcon={<ArrowRightAlt />}
                            sx={{
                              background: theme.palette.mode === 'dark' ? '#0a192f' : '#fff',
                              color: theme.palette.primary.main,
                              fontWeight: 700,
                              px: 3,
                              py: 1.5,
                              borderRadius: 2,
                              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                              '&:hover': {
                                background: theme.palette.mode === 'dark' ? '#112240' : '#f5f5f5',
                                boxShadow: '0 6px 24px rgba(0, 0, 0, 0.4)',
                              },
                            }}
                          >
                            View Live Demo
                          </Button>
                        </motion.div>
                      </motion.div>
                    </Box>
                  </motion.div>
                  <CardContent
                    sx={{
                      width: '100%',
                      p: { xs: 2.5, sm: 3, md: 3 },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: 2,
                      flex: 1,
                    }}
                  >
                    <Box sx={{ flex: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1.5, flexWrap: 'wrap', flexDirection: { xs: 'column', sm: 'row' } }}>
                        <Typography
                          variant="h6"
                          sx={{
                            color: theme.palette.primary.main,
                            fontWeight: 'bold',
                            fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.15rem' },
                            lineHeight: 1.3,
                            flex: 1,
                            minWidth: { xs: '100%', sm: '200px' },
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
                          {project.featured && (
                            <Chip
                              label="Featured"
                              size="small"
                              sx={{
                                backgroundColor: theme.palette.primary.main,
                                color: theme.palette.mode === 'dark' ? '#0a192f' : '#fff',
                                fontSize: '0.7rem',
                                fontWeight: 700,
                                height: 24,
                              }}
                            />
                          )}
                          {project.status && (
                            <Chip
                              label={project.status}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(255, 193, 7, 0.2)',
                                color: '#ffc107',
                                border: '1px solid rgba(255, 193, 7, 0.4)',
                                fontWeight: 600,
                                fontSize: '0.7rem',
                                height: 24,
                              }}
                            />
                          )}
                          {project.type && (
                            <Chip
                              icon={getTypeIcon()}
                              label={project.type}
                              size="small"
                              sx={{
                                backgroundColor: `${theme.palette.primary.main}1A`,
                                color: theme.palette.primary.main,
                                border: `1px solid ${theme.palette.primary.main}33`,
                                fontWeight: 600,
                                fontSize: '0.7rem',
                                height: 24,
                              }}
                            />
                          )}
                        </Box>
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{
                          color: theme.palette.text.secondary,
                          mb: 2,
                          lineHeight: 1.6,
                          fontSize: { xs: '0.875rem', sm: '0.875rem', md: '0.875rem' },
                          textAlign: 'left',
                          display: '-webkit-box',
                          WebkitLineClamp: { xs: 4, sm: 5, md: 4 },
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 0.5, sm: 0.75 }, mb: 2 }}>
                        {project.technologies.slice(0, 5).map((tech, i) => (
                          <Chip
                            key={i}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: `${theme.palette.primary.main}1A`,
                              color: theme.palette.primary.main,
                              border: `1px solid ${theme.palette.primary.main}33`,
                              '& .MuiChip-label': {
                                fontSize: { xs: '0.7rem', sm: '0.75rem' },
                                padding: { xs: '0 8px', sm: '0 10px' },
                              },
                              height: { xs: 24, sm: 26 },
                            }}
                          />
                        ))}
                        {project.technologies.length > 5 && (
                          <Chip
                            label={`+${project.technologies.length - 5}`}
                            size="small"
                            sx={{
                              backgroundColor: `${theme.palette.primary.main}1A`,
                              color: theme.palette.primary.main,
                              border: `1px solid ${theme.palette.primary.main}33`,
                              '& .MuiChip-label': {
                                fontSize: { xs: '0.7rem', sm: '0.75rem' },
                              },
                              height: { xs: 24, sm: 26 },
                            }}
                          />
                        )}
                      </Box>
                    </Box>
                    <CardActions sx={{ p: 0, gap: { xs: 1.5, sm: 2 }, flexWrap: 'wrap', mt: 'auto' }}>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          href={project.link}
                          target="_blank"
                          startIcon={<GitHub />}
                          variant="outlined"
                          size={isMobile ? "medium" : "small"}
                          sx={{
                            color: theme.palette.primary.main,
                            borderColor: theme.palette.primary.main,
                            minWidth: { xs: 'calc(50% - 8px)', sm: 'auto' },
                            fontSize: { xs: '0.85rem', sm: '0.875rem' },
                            py: { xs: 1.25, sm: 0.625 },
                            px: { xs: 2, sm: 2.5 },
                            '&:hover': {
                              backgroundColor: `${theme.palette.primary.main}1A`,
                              borderColor: theme.palette.primary.main,
                              transform: 'translateY(-2px)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          Code
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          href={project.demo}
                          target="_blank"
                          startIcon={<OpenInNew />}
                          variant="contained"
                          size={isMobile ? "medium" : "small"}
                          sx={{
                            background: theme.palette.gradient.primary,
                            color: theme.palette.mode === 'dark' ? '#0a192f' : '#fff',
                            fontWeight: 600,
                            minWidth: { xs: 'calc(50% - 8px)', sm: 'auto' },
                            fontSize: { xs: '0.85rem', sm: '0.875rem' },
                            py: { xs: 1.25, sm: 0.625 },
                            px: { xs: 2, sm: 2.5 },
                            '&:hover': {
                              background: theme.palette.gradient.primary,
                              opacity: 0.9,
                              transform: 'translateY(-2px)',
                              boxShadow: `0 4px 12px ${theme.palette.primary.main}4D`,
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          Demo
                        </Button>
                      </motion.div>
                    </CardActions>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
