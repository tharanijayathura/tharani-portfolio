import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Box,
  Typography,
  Paper,
  Divider,
  Container,
  LinearProgress,
  Stack,
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
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

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

  const categories = [
    { key: 'Frontend', icon: <Code sx={{ color: theme.palette.primary.main }} /> },
    { key: 'Backend',  icon: <Terminal sx={{ color: theme.palette.primary.main }} /> },
    { key: 'Database', icon: <Storage sx={{ color: theme.palette.primary.main }} /> },
    { key: 'Design',   icon: <DesignServices sx={{ color: theme.palette.primary.main }} /> },
    { key: 'DevOps',   icon: <Cloud sx={{ color: theme.palette.primary.main }} /> },
  ];

  const variants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box
      id="skills"
      ref={ref}
      sx={{
        // give breathing room after About
        pt: { xs: 6, md: 8 },
        pb: { xs: 8, md: 12 },
        background: theme.palette.gradient.secondary,
        position: 'relative',
        overflow: 'hidden',
        scrollMarginTop: '84px',
      }}
    >
      <Container maxWidth="lg">
        {/* Title */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
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
            My Skills
          </Typography>

          <Divider
            component={motion.div}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ delay: 0.1, duration: 0.5 }}
            sx={{
              width: 88,
              height: 3,
              mx: 'auto',
              background: theme.palette.primary.main,
              borderRadius: 2,
              mb: 1.5
            }}
          />

          {/* Subheading */}
          <Typography
            component={motion.p}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ delay: 0.18, duration: 0.5 }}
            sx={{ color: theme.palette.text.secondary, maxWidth: 760, mx: 'auto' }}
          >
            What I work with across the stack — from clean, accessible UIs to reliable backends and deployment.
          </Typography>
        </Box>

        {/* Auto-fit card grid */}
        <Box
          component={motion.div}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ delay: 0.25, duration: 0.6 }}
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: { xs: 16, md: 20 }, // px units acceptable via sx numeric: theme.spacing
            // convert to spacing scale for consistency:
            // but to keep it simple, use '1.25rem' values
            columnGap: { xs: '1.25rem', md: '1.5rem' },
            rowGap: { xs: '1.25rem', md: '1.5rem' },
          }}
        >
          {categories.map((cat) => {
            const list = skills.filter(s => s.category === cat.key);
            return (
              <Paper
                key={cat.key}
                elevation={0}
                sx={{
                  height: '100%',
                  p: { xs: 3, md: 4 },
                  backgroundColor: theme.palette.background.paper,
                  color: theme.palette.text.primary,
                  backdropFilter: 'blur(10px)',
                  borderRadius: 3,
                  border: '1px solid rgba(100, 255, 218, 0.12)',
                  boxShadow: '0 8px 28px rgba(0, 0, 0, 0.20)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform .25s ease, box-shadow .25s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 16px 44px rgba(25, 118, 210, 0.28)',
                  },
                }}
              >
                {/* Card header */}
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                  {cat.icon}
                  <Typography variant="h6" sx={{ color: theme.palette.primary.main, fontWeight: 700 }}>
                    {cat.key}
                  </Typography>
                </Stack>

                {/* Skills list */}
                <Box sx={{ display: 'grid', rowGap: 1.25 }}>
                  {list.map((skill) => (
                    <Box key={skill.name}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                        <Typography variant="body2">{skill.name}</Typography>
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
                          },
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </Paper>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
