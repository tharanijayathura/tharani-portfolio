import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Box, Typography, Grid, Paper, Chip, Divider, Container } from '@mui/material';
import { Code, DataArray, Storage, Terminal } from '@mui/icons-material';

const skills = [
  { name: "C", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "Java", category: "Languages" },
  { name: "JavaScript", category: "Web" },
  { name: "React", category: "Web" },
  { name: "Node.js", category: "Web" },
  { name: "MongoDB", category: "Database" },
  { name: "PHP", category: "Web" },
  { name: "Laravel", category: "Web" },
];

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const categories = [...new Set(skills.map(skill => skill.category))];
  
  const getIcon = (category) => {
    switch(category) {
      case 'Languages': return <Terminal sx={{ color: '#64ffda' }} />;
      case 'Web': return <Code sx={{ color: '#64ffda' }} />;
      case 'Database': return <Storage sx={{ color: '#64ffda' }} />;
      default: return <DataArray sx={{ color: '#64ffda' }} />;
    }
  };

  return (
    <Box
      id="skills"
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
          background: 'radial-gradient(circle at 80% 30%, rgba(25, 118, 210, 0.1) 0%, transparent 70%)',
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
            My Skills
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
          {categories.map((category, catIndex) => (
            <Grid item xs={12} md={6} key={catIndex}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4 },
                    height: '100%',
                    backgroundColor: 'rgba(10, 25, 47, 0.7)',
                    color: '#e1eaff',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: 'rgba(100, 255, 218, 0.1)',
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
                      color: '#64ffda',
                      mb: 3,
                      fontWeight: 'medium'
                    }}
                  >
                    {getIcon(category)}
                    <Box component="span" sx={{ ml: 2 }}>{category}</Box>
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                    {skills
                      .filter(skill => skill.category === category)
                      .map((skill, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Chip 
                            label={skill.name} 
                            sx={{
                              backgroundColor: 'rgba(100, 255, 218, 0.1)',
                              color: '#64ffda',
                              border: '1px solid',
                              borderColor: 'rgba(100, 255, 218, 0.2)',
                              fontSize: '0.9rem',
                              px: 1.5,
                              py: 1.8,
                              '&:hover': {
                                backgroundColor: 'rgba(100, 255, 218, 0.2)',
                              }
                            }}
                          />
                        </motion.div>
                      ))}
                  </Box>
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