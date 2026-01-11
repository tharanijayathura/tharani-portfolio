import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Box,
  Typography,
  Paper,
  Divider,
  Container,
  Stack,
  useTheme,
  Chip
} from '@mui/material';
import {
  Code,
  Terminal,
  Storage,
  DesignServices,
  Cloud,
  PhoneAndroid,
  BugReport,
  Layers
} from '@mui/icons-material';

const Skills = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  const skills = [
    { name: "JavaScript", category: "Frontend", experience: "Advanced", icon: "⚡" },
    { name: "React", category: "Frontend", experience: "Advanced", icon: "⚛️" },
    { name: "HTML5", category: "Frontend", experience: "Advanced", icon: "🧡" },
    { name: "CSS3", category: "Frontend", experience: "Advanced", icon: "💙" },
    { name: "Material UI", category: "Frontend", experience: "Advanced", icon: "🎯" },
    { name: "Framer Motion", category: "Frontend", experience: "Advanced", icon: "🎞️" },
    { name: "Responsive UI Design", category: "Frontend", experience: "Advanced", icon: "📱" },
    { name: "UX-focused Components", category: "Frontend", experience: "Advanced", icon: "🧭" },
    { name: "React Native", category: "Mobile", experience: "Intermediate", icon: "📱" },
    { name: "TypeScript", category: "Frontend", experience: "Intermediate", icon: "📘" },
    { name: "Node.js", category: "Backend", experience: "Advanced", icon: "🟢" },
    { name: "Express.js", category: "Backend", experience: "Advanced", icon: "🚀" },
    { name: "Python", category: "Backend", experience: "Intermediate", icon: "🐍" },
    { name: "Java", category: "Backend", experience: "Intermediate", icon: "☕" },
    { name: "C", category: "Backend", experience: "Intermediate", icon: "💻" },
    { name: "Spring Boot", category: "Backend", experience: "Intermediate", icon: "🌱" },
    { name: "MongoDB", category: "Database", experience: "Advanced", icon: "🍃" },
    { name: "PostgreSQL", category: "Database", experience: "Intermediate", icon: "🐘" },
    { name: "MySQL", category: "Database", experience: "Intermediate", icon: "🗄️" },
    { name: "Laravel", category: "Backend", experience: "Intermediate", icon: "🔴" },
    { name: "PHP", category: "Backend", experience: "Intermediate", icon: "🐘" },
    { name: "Blazor", category: "Frontend", experience: "Beginner", icon: "💎" },
    { name: ".NET", category: "Backend", experience: "Beginner", icon: "🔷" },
    { name: "Figma", category: "Design", experience: "Intermediate", icon: "🎨" },
    { name: "Canva", category: "Design", experience: "Intermediate", icon: "🖼️" },
    { name: "AWS", category: "DevOps", experience: "Beginner", icon: "☁️" },
    { name: "Docker", category: "DevOps", experience: "Beginner", icon: "🐳" },
    { name: "Git", category: "Tools", experience: "Advanced", icon: "🔀" },
    { name: "GitHub", category: "Tools", experience: "Advanced", icon: "🐙" },
    { name: "Vercel", category: "Tools", experience: "Intermediate", icon: "▲" },
    { name: "VS Code", category: "Tools", experience: "Advanced", icon: "📝" },
    { name: "REST APIs", category: "Backend", experience: "Advanced", icon: "🌐" },
    { name: "JWT", category: "Backend", experience: "Advanced", icon: "🔐" },
    { name: "MERN Stack", category: "Full-Stack", experience: "Advanced", icon: "🧩" },
    { name: "CRUD Operations", category: "Full-Stack", experience: "Advanced", icon: "✏️" },
    { name: "Role-based Access", category: "Full-Stack", experience: "Advanced", icon: "🛡️" },
    { name: "Manual Testing", category: "Testing", experience: "Advanced", icon: "🔍" },
    { name: "Test Case Writing", category: "Testing", experience: "Advanced", icon: "🧾" },
    { name: "API Testing", category: "Testing", experience: "Advanced", icon: "🧪" },
    { name: "Postman", category: "Testing", experience: "Advanced", icon: "📬" },
  ];

  const categories = [
    { key: 'Frontend', icon: <Code sx={{ color: theme.palette.primary.main }} /> },
    { key: 'Backend',  icon: <Terminal sx={{ color: theme.palette.primary.main }} /> },
    { key: 'Mobile', icon: <PhoneAndroid sx={{ color: theme.palette.primary.main }} /> },
    { key: 'Database', icon: <Storage sx={{ color: theme.palette.primary.main }} /> },
    { key: 'Design',   icon: <DesignServices sx={{ color: theme.palette.primary.main }} /> },
    { key: 'DevOps',   icon: <Cloud sx={{ color: theme.palette.primary.main }} /> },
    { key: 'Full-Stack',   icon: <Layers sx={{ color: theme.palette.primary.main }} /> },
    { key: 'Testing',   icon: <BugReport sx={{ color: theme.palette.primary.main }} /> },
    { key: 'Tools',   icon: <Terminal sx={{ color: theme.palette.primary.main }} /> },
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
        pt: { xs: 6, md: 6 },
        pb: { xs: 6, md: 8 },
        background: theme.palette.gradient.secondary,
        position: 'relative',
        overflow: 'hidden',
        scrollMarginTop: '84px',
      }}
    >
      <Container maxWidth="lg">
        {/* Title */}
        <Box sx={{ textAlign: 'center', mb: { xs: 3, md: 4 } }}>
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
            sx={{ 
              color: theme.palette.text.secondary, 
              maxWidth: 760, 
              mx: 'auto',
              fontSize: { xs: '0.875rem', sm: '0.9rem' },
              mb: 0
            }}
          >
            What I work with across the stack — from clean, accessible UIs to reliable backends and deployment.
          </Typography>
        </Box>

        {/* Optimized card grid - cards size to content */}
        <Box
          component={motion.div}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ delay: 0.25, duration: 0.6 }}
          sx={{
            display: 'grid',
            gridTemplateColumns: { 
              xs: '1fr', 
              sm: 'repeat(2, 1fr)', 
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)'
            },
            gap: { xs: 1.5, sm: 1.5, md: 1.5 },
            alignItems: 'stretch',
          }}
        >
          {categories.map((cat) => {
            const list = skills.filter(s => s.category === cat.key);
            const skillCount = list.length;
            // Backend has many skills, others are smaller
            const isLargeCategory = skillCount > 5;
            
            return (
              <Paper
                key={cat.key}
                elevation={0}
                sx={{
                  p: { xs: 1.75, sm: 2, md: 2 },
                  backgroundColor: theme.palette.background.paper,
                  color: theme.palette.text.primary,
                  backdropFilter: 'blur(10px)',
                  borderRadius: 2,
                  border: '1px solid rgba(100, 255, 218, 0.12)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  minHeight: { md: '320px' },
                  transition: 'transform .25s ease, box-shadow .25s ease',
                  gridColumn: { 
                    lg: isLargeCategory ? 'span 2' : 'span 1' 
                  },
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(25, 118, 210, 0.25)',
                  },
                }}
              >
                {/* Card header */}
                <Stack direction="row" spacing={0.75} alignItems="center" sx={{ mb: 1.25 }}>
                  {cat.icon}
                  <Typography variant="subtitle2" sx={{ color: theme.palette.primary.main, fontWeight: 700, fontSize: { xs: '0.875rem', sm: '0.9rem' } }}>
                    {cat.key}
                  </Typography>
                </Stack>

                {/* Skills list - compact grid for larger categories */}
                <Box sx={{ 
                  display: 'grid', 
                  rowGap: 0.75,
                  gridTemplateColumns: isLargeCategory ? { lg: 'repeat(2, 1fr)' } : '1fr',
                  columnGap: isLargeCategory ? 0.75 : 0,
                  flex: 1,
                  alignContent: 'start',
                }}>
                  {list.map((skill, idx) => {
                    const experienceColors = {
                      'Advanced': { bg: 'rgba(100, 255, 218, 0.15)', border: 'rgba(100, 255, 218, 0.4)', text: '#64ffda' },
                      'Intermediate': { bg: 'rgba(144, 202, 249, 0.15)', border: 'rgba(144, 202, 249, 0.4)', text: '#90caf9' },
                      'Beginner': { bg: 'rgba(255, 193, 7, 0.15)', border: 'rgba(255, 193, 7, 0.4)', text: '#ffc107' },
                    };
                    const expColor = experienceColors[skill.experience] || experienceColors['Beginner'];
                    
                    return (
                      <motion.div
                        key={skill.name}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 }
                        }}
                        transition={{ delay: 0.1 + idx * 0.05, duration: 0.4 }}
                        whileHover={{ scale: 1.02, x: 4 }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            p: { xs: 0.75, sm: 0.875 },
                            borderRadius: 1.25,
                            backgroundColor: expColor.bg,
                            border: `1px solid ${expColor.border}`,
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            '&:hover': {
                              backgroundColor: expColor.bg.replace('0.15', '0.25'),
                              transform: 'translateX(2px)',
                            },
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 0.75 }, flex: 1, minWidth: 0 }}>
                            <Typography variant="body2" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' }, flexShrink: 0 }}>
                              {skill.icon}
                            </Typography>
                            <Typography 
                              variant="body2" 
                              sx={{ 
                                fontWeight: 600,
                                color: theme.palette.text.primary,
                                fontSize: { xs: '0.7rem', sm: '0.75rem' },
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                              }}
                            >
                              {skill.name}
                            </Typography>
                          </Box>
                          <Chip
                            label={skill.experience}
                            size="small"
                            sx={{
                              backgroundColor: expColor.bg,
                              color: expColor.text,
                              border: `1px solid ${expColor.border}`,
                              fontWeight: 600,
                              fontSize: { xs: '0.6rem', sm: '0.65rem' },
                              height: { xs: 18, sm: 20 },
                              flexShrink: 0,
                              ml: 0.5,
                              '& .MuiChip-label': {
                                padding: { xs: '0 4px', sm: '0 6px' },
                                lineHeight: 1.2,
                              },
                            }}
                          />
                        </Box>
                      </motion.div>
                    );
                  })}
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
