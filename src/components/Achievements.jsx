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
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { motion } from "framer-motion";

// Example data (replace with your medals & certs)
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
    category: "Sports — Long Jump, Volleyball,Relay, 100m",
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
    id: "a4",
    title: "Colours Award - 2025",
    org: "Sri Lankan University Games (SLUG)",
    year: "2025",
    category: "Elle",
    place: "",
    photo: "images/colours25.jpg",
  },
      {
    id: "a4",
    title: "Full Stack Mobile and Web Development",
    org: "Udemy",
    year: "2025",
    category: "Academic",
    place: "",
    photo: "images/udemy cer.PNG",
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
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? awards : awards.slice(0, 3);

  const variants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };

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
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
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
            }}
          />
        </Box>

        {/* Grid */}
        <Grid container spacing={3} justifyContent="center">
          {displayed.map((a) => (
            <Grid key={a.id} item xs={12} sm={6} md={4}>
              <Paper elevation={0} sx={cardSx}>
                <Stack spacing={1.5}>
                  <Avatar
                    variant="rounded"
                    src={a.photo}
                    alt={a.title}
                    sx={{
                      width: "100%",
                      height: 160,
                      borderRadius: 2,
                      border: "1px solid rgba(144,202,249,.25)",
                    }}
                  />
                  <Stack direction="row" spacing={1} alignItems="center">
                    <EmojiEventsIcon sx={{ color: "#64ffda" }} />
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 700, color: "#e6f1ff" }}
                    >
                      {a.title}
                    </Typography>
                  </Stack>
                  <Typography sx={{ opacity: 0.9 }}>{a.org}</Typography>
                  <Typography sx={{ opacity: 0.7 }}>{a.year}</Typography>
                  <Chip
                    label={`${a.category} • ${a.place}`}
                    size="small"
                    sx={{
                      bgcolor: "rgba(100,255,218,.08)",
                      color: "#a7ffeb",
                      border: "1px solid rgba(100,255,218,.30)",
                      alignSelf: "flex-start",
                    }}
                  />
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Show More button */}
        {awards.length > 3 && (
          <Stack direction="row" justifyContent="center" mt={5}>
            <Button
              variant="outlined"
              onClick={() => setShowAll((prev) => !prev)}
              sx={{
                color: "#a7ffeb",
                borderColor: "rgba(100,255,218,.45)",
                "&:hover": { backgroundColor: "rgba(100,255,218,.08)" },
              }}
            >
              {showAll ? "Show Less" : "Show More"}
            </Button>
          </Stack>
        )}
      </Container>
    </Box>
  );
}
