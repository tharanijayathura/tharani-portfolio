import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  Avatar,
  Divider,
  Chip,
  Button,
  Collapse,
} from "@mui/material";
import { motion } from "framer-motion";

const activities = [
  {
    id: "h1",
    title: "Badminton",
    sub: "Cardio + reflex training disguised as fun.",
    photo: "images/badminton.jpg",
    tags: ["Doubles menace", "Drop shots"],
  },
  {
    id: "h2",
    title: "Cricket",
    sub: "All-rounder in spirit, benchwarmer in stats.",
    photo: "images/cricket.jpg",
    tags: ["Street cricket", "Night matches"],
  },
  {
    id: "h3",
    title: "Elle",
    sub: "Sri Lankan bat-and-ball chaos. I love it.",
    photo: "images/ell.jpeg",
    tags: ["Fast runs", "Team spirit"],
  },
  {
    id: "h4",
    title: "Volleyball",
    sub: "Set. Spike. Celebrate like I won the World Cup.",
    photo: "images/vol.jpeg",
    tags: ["Blocks", "Team captain vibes"],
  },
  {
    id: "h5",
    title: "Hiking",
    sub: "Climb first, ask quad muscles later.",
    photo: "images/hike.jpg",
    tags: ["Sunrise chaser", "Leech survivor"],
  },
  {
    id: "h6",
    title: "Drawing",
    sub: "I draw cats that look suspiciously like lions.",
    photo: "images/art.jpeg",
    tags: ["Sketchbook", "Crayons pro"],
  },
];

const cardSx = {
  p: 3,
  height: "100%",
  bgcolor: "rgba(10,25,47,.6)",
  border: "1px solid rgba(100,255,218,.16)",
  borderRadius: 3,
  transition: "all .25s ease",
  "&:hover": {
    transform: "translateY(-6px)",
    borderColor: "rgba(144,202,249,.35)",
  },
};

export default function ExtraActivities() {
  const [open, setOpen] = useState(false);

  const variants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };

  return (
    <Box
      id="extra-activities"
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(180deg, #0a192f 0%, #0a192f 100%)",
        borderTop: "1px solid rgba(100,255,218,.12)",
      }}
    >
      <Container maxWidth="lg">
        {/* Heading + Toggle */}
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
            Hobbies & Interests
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
            {open ? "Hide Hobbies" : "Show Hobbies & Interests"}
          </Button>
        </Box>

        {/* Collapsible content */}
        <Collapse in={open} timeout={400} unmountOnExit>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1 }}>
            {activities.map((a) => (
              <Grid key={a.id} item xs={12} sm={6} md={4}>
                <Paper elevation={0} sx={cardSx}>
                  <Stack spacing={1.5} alignItems="center" textAlign="center">
                    {a.photo && (
                      <Avatar
                        variant="rounded"
                        src={a.photo}
                        alt={a.title}
                        sx={{
                          width: "100%",
                          height: 180,
                          borderRadius: 2,
                          border: "1px solid rgba(144,202,249,.25)",
                          mb: 0.5,
                        }}
                      />
                    )}
                    <Typography variant="h6" sx={{ color: "#e6f1ff", fontWeight: 700 }}>
                      {a.title}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.85 }}>
                      {a.sub}
                    </Typography>

                    <Stack
                      direction="row"
                      spacing={1}
                      flexWrap="wrap"
                      justifyContent="center"
                    >
                      {(a.tags || []).map((t) => (
                        <Chip
                          key={t}
                          label={t}
                          size="small"
                          sx={{
                            bgcolor: "rgba(100,255,218,.08)",
                            color: "#a7ffeb",
                            border: "1px solid rgba(100,255,218,.30)",
                          }}
                        />
                      ))}
                    </Stack>
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
