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
              bgcolor: "#64ffda",
              color: "#0a192f",
              fontWeight: 700,
              px: 3,
              "&:hover": { bgcolor: "#52e0c4" },
            }}
          >
            {open ? "Hide Awards" : "Show Awards & Certifications"}
          </Button>
        </Box>

        {/* Collapsible content */}
        <Collapse in={open} timeout={400} unmountOnExit>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1 }}>
            {awards.map((a) => (
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
                      label={`${a.category}${a.place ? ` • ${a.place}` : ""}`}
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
        </Collapse>
      </Container>
    </Box>
  );
}
