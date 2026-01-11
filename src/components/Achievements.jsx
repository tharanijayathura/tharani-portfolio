import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  Chip,
  Divider,
  Avatar,
  Button,
  Collapse,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { motion } from "framer-motion";

// All 6 awards
const awards = [
  {
    id: "a1",
    title: "Colours Award - 2023",
    org: "Sri Lankan University Games (SLUG)",
    year: "2023",
    category: "Elle",
    place: "",
    photo: "images/colours 1.jpeg",
  },
  {
    id: "a2",
    title: "School Athletics Meet",
    org: "Inter-School Athletics",
    year: "2012-2018",
    category: "Sports — Long Jump, Volleyball, Relay, 100m",
    place: " ",
    photo: "images/school meet.jpeg",
  },
  {
    id: "a3",
    title: "Art Competition – 2nd Place",
    org: "Fashion Bug Art Contest 😁",
    year: "2014",
    category: "Art",
    place: "Silver",
    photo: "/images/fb.jpeg",
  },
  {
    id: "a4",
    title: "English Language Proficiency",
    org: "NIBM",
    year: "2022",
    category: "Academic",
    place: "Merit",
    photo: "images/nibm.jpeg",
  },
  {
    id: "a5",
    title: "Colours Award - 2025",
    org: "Sri Lankan University Games (SLUG)",
    year: "2025",
    category: "Elle",
    place: "",
    photo: "images/colours25.jpg",
  },
  {
    id: "a6",
    title: "Full Stack Mobile and Web Development",
    org: "Udemy",
    year: "2025",
    category: "Academic",
    place: "",
    photo: "images/udemy cer.PNG",
  },
  {
    id: "a7",
    title: "Player of the Series - Women's Category",
    org: "Fit Sixes 2K25",
    year: "2025",
    category: "Sports — Cricket",
    place: "🏆",
    photo: "images/fit-sixes.jpg",
  },
];

const cardSx = {
  p: 2.5,
  bgcolor: "rgba(10,25,47,.65)",
  border: "1px solid rgba(100,255,218,.16)",
  borderRadius: 3,
  backdropFilter: "blur(8px)",
  transition: "all .25s ease",
  height: "100%",
  "&:hover": {
    transform: "translateY(-6px)",
    borderColor: "rgba(144,202,249,.35)",
    boxShadow: "0 10px 30px rgba(100,255,218,.08)",
  },
};

export default function Awards() {
  const [open, setOpen] = useState(false);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box
      id="awards"
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(180deg, #0a192f 0%, #0b1d3b 100%)",
        borderTop: "1px solid rgba(100,255,218,.12)",
      }}
    >
      <Container maxWidth="lg">
        {/* Topic + Toggle */}
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <Typography
            variant="h2"
            component={motion.h2}
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.6 }}
            sx={{
              display: "inline-block",
              background: "linear-gradient(90deg, #64ffda, #90caf9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
              fontFamily:
                '"Calibre","Inter","San Francisco","SF Pro Text",-apple-system,sans-serif',
              mb: 2,
            }}
          >
            Awards & Certifications
          </Typography>

          <Divider
            component={motion.div}
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ delay: 0.2, duration: 0.6 }}
            sx={{
              width: 88,
              height: 3,
              mx: "auto",
              background: "linear-gradient(90deg, #64ffda, #90caf9)",
              borderRadius: 2,
              mb: 3,
            }}
          />

          <Button
            variant="contained"
            onClick={() => setOpen((prev) => !prev)}
            sx={{
              background: 'rgba(10, 25, 47, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(100, 255, 218, 0.4)',
              color: '#64ffda',
              fontWeight: 700,
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(100, 255, 218, 0.2)',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'rgba(10, 25, 47, 0.85)',
                boxShadow: '0 12px 40px rgba(100, 255, 218, 0.35)',
                border: '1px solid rgba(100, 255, 218, 0.6)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            {open ? "Hide Awards" : "See Awards & Certifications"}
          </Button>
        </Box>

        {/* Collapsible content */}
        <Collapse in={open} timeout={600} unmountOnExit>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1 }}>
            {awards.map((a, index) => (
              <Grid key={a.id} item xs={12} sm={6} md={4}>
                <motion.div
                  initial="hidden"
                  animate={open ? "visible" : "hidden"}
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.9 },
                    visible: { opacity: 1, y: 0, scale: 1 }
                  }}
                  transition={{ 
                    delay: index * 0.1, 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  style={{ height: '100%' }}
                >
                  <Paper 
                    elevation={0} 
                    sx={{
                      ...cardSx,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      cursor: 'pointer',
                    }}
                  >
                    <Stack spacing={1.5} sx={{ height: '100%' }}>
                      <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: 2 }}>
                        <Avatar
                          variant="rounded"
                          src={a.photo}
                          alt={a.title}
                          sx={{
                            width: "100%",
                            height: { xs: 180, sm: 200 },
                            borderRadius: 2,
                            border: "2px solid rgba(144,202,249,.3)",
                            transition: 'transform 0.4s ease',
                            '&:hover': {
                              transform: 'scale(1.05)',
                            },
                          }}
                        />
                        {a.place && (
                          <Box
                            sx={{
                              position: 'absolute',
                              top: 8,
                              right: 8,
                              fontSize: '2rem',
                              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                            }}
                          >
                            {a.place}
                          </Box>
                        )}
                      </Box>
                      <Stack direction="row" spacing={1} alignItems="flex-start">
                        <EmojiEventsIcon sx={{ color: "#64ffda", mt: 0.5 }} />
                        <Typography
                          variant="subtitle1"
                          sx={{ 
                            fontWeight: 700, 
                            color: "#e6f1ff",
                            fontSize: { xs: '0.95rem', sm: '1rem' },
                            lineHeight: 1.3,
                          }}
                        >
                          {a.title}
                        </Typography>
                      </Stack>
                      <Typography 
                        sx={{ 
                          opacity: 0.9,
                          fontSize: { xs: '0.85rem', sm: '0.9rem' },
                          fontWeight: 500,
                        }}
                      >
                        {a.org}
                      </Typography>
                      <Typography 
                        sx={{ 
                          opacity: 0.7,
                          fontSize: { xs: '0.8rem', sm: '0.85rem' },
                        }}
                      >
                        {a.year}
                      </Typography>
                      <Box sx={{ mt: 'auto' }}>
                        <Chip
                          label={`${a.category}${a.place && !a.place.includes('🏆') ? ` • ${a.place}` : ""}`}
                          size="small"
                          sx={{
                            bgcolor: "rgba(100,255,218,.12)",
                            color: "#a7ffeb",
                            border: "1px solid rgba(100,255,218,.35)",
                            alignSelf: "flex-start",
                            fontWeight: 600,
                            fontSize: { xs: '0.7rem', sm: '0.75rem' },
                            '&:hover': {
                              bgcolor: "rgba(100,255,218,.2)",
                              borderColor: "rgba(100,255,218,.5)",
                            },
                            transition: 'all 0.3s ease',
                          }}
                        />
                      </Box>
                    </Stack>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Collapse>
      </Container>
    </Box>
  );
}
