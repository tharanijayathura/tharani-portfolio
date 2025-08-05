import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Divider,
  Container,
  LinearProgress,
  useTheme
} from '@mui/material';
import {
  Code,
  Terminal,
  Storage,
  DesignServices,
  Cloud
} from '@mui/icons-material';

const Skills = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const skills = [
    { name: "JavaScript", category: "Frontend", level: 90 },
    { name: "React", category: "Frontend", level: 85 },
    { name: "Node.js", category: "Backend", level: 80 },
    { name: "Python", category: "Backend", level: 75 },
    { name: "Java", category: "Backend", level: 70 },
    { name: "MongoDB", category: "Database", level: 80 },
    { name: "Laravel", category: "Backend", level: 75 },
    { name: "PHP", category: "Backend", level: 70 },
    { name: "Figma", category: "Design", level: 65 },
    { name: "AWS", category: "DevOps", level: 60 },
    { name: "Docker", category: "DevOps", level: 65 },
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  const getIcon = (category) => {
    switch(category) {
      case 'Frontend': return <Code sx={{ color: theme.palette.primary.main }} />;
      case 'Backend': return <Terminal sx={{ color: theme.palette.primary.main }} />;
      case 'Database': return <Storage sx={{ color: theme.palette.primary.main }} />;
      case 'Design': return <DesignServices sx={{ color: theme.palette.primary.main }} />;
      case 'DevOps': return <Cloud sx={{ color: theme.palette.primary.main }} />;
      default: return null;
    }
  };

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box
      id="skills"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        background: theme.palette.gradient.secondary,
        position: 'relative',
        overflow: 'hidden'
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
            My Skills
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
              background: theme.palette.primary.main,
              borderRadius: 2,
            }}
          />
        </Box>

        <Grid container spacing={4}>
          {categories.map((category, catIndex) => (
            <Grid item xs={12} md={6} key={catIndex}>
              <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                transition={{ delay: 0.3 + catIndex * 0.1, duration: 0.6 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4 },
                    backgroundColor: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                    backdropFilter: 'blur(10px)',
                    borderRadius: 4,
                    border: '1px solid rgba(100, 255, 218, 0.1)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 12px 40px rgba(25, 118, 210, 0.3)',
                    }
                  }}
                >
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: theme.palette.primary.main,
                      mb: 3,
                      fontWeight: 'medium'
                    }}
                  >
                    {getIcon(category)}
                    <Box component="span" sx={{ ml: 2 }}>{category}</Box>
                  </Typography>

                  {skills.filter(skill => skill.category === category).map((skill, i) => (
                    <Box key={i} sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                        <Typography variant="body2">
                          {skill.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: theme.palette.primary.main }}>
                          {skill.level}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 6,
                          borderRadius: 3,
                          backgroundColor: 'rgba(100, 255, 218, 0.1)',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 3,
                            background: theme.palette.gradient.primary,
                          }
                        }}
                      />
                    </Box>
                  ))}
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
