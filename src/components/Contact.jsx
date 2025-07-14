import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Paper,
  Grid,
  IconButton,
  Divider,
  Link,
  Container
} from '@mui/material';
import {
  Send as SendIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Subject as SubjectIcon,
  Message as MessageIcon,
  Close as CloseIcon,
  LocationOn,
  Phone,
  LinkedIn,
  GitHub,
  Twitter
} from '@mui/icons-material';

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <Box id="contact" sx={{ py: 8, bgcolor: '#0a192f', color: '#e1eaff' }}>
      <Container maxWidth="lg">
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
              background: 'linear-gradient(45deg, #90caf9, #1976d2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold'
            }}
          >
            Get In Touch
          </Typography>
          <Divider
            sx={{
              width: 80,
              height: 4,
              mx: 'auto',
              mb: 4,
              bgcolor: '#1976d2',
              opacity: 0.8,
              borderRadius: 2
            }}
          />
        </motion.div>

        <Grid container spacing={4}>
          {/* Contact Info */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                bgcolor: 'rgba(25, 118, 210, 0.1)',
                backdropFilter: 'blur(8px)',
                borderRadius: 4,
                border: '1px solid rgba(100,255,218,0.2)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: { md: 300 }
              }}
            >
              <Box>
                <Typography variant="h5" gutterBottom sx={{ color: '#90caf9', fontWeight: 'bold' }}>
                  Contact Information
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <EmailIcon sx={{ mr: 2, color: '#64ffda' }} />
                  <Link href="mailto:tharani@example.com" underline="hover" color="#e1eaff">
                    tharani@example.com
                  </Link>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationOn sx={{ mr: 2, color: '#64ffda' }} />
                  <Typography sx={{ color: '#fff' }}>Matara, Sri Lanka</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Phone sx={{ mr: 2, color: '#64ffda' }} />
                  <Typography sx={{ color: '#fff' }}>+94 712599785</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* Follow Me */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                bgcolor: 'rgba(25, 118, 210, 0.1)',
                backdropFilter: 'blur(8px)',
                borderRadius: 4,
                border: '1px solid rgba(100,255,218,0.2)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: { md: 300 }
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ color: '#90caf9', fontWeight: 'bold' }}>
                Follow Me
              </Typography>
              <Box sx={{ display: 'flex', gap: 3 }}>
                <IconButton href="#" target="_blank" sx={{ color: '#64ffda' }}>
                  <LinkedIn sx={{ fontSize: 40 }} />
                </IconButton>
                <IconButton href="#" target="_blank" sx={{ color: '#64ffda' }}>
                  <GitHub sx={{ fontSize: 40 }} />
                </IconButton>
                <IconButton href="#" target="_blank" sx={{ color: '#64ffda' }}>
                  <Twitter sx={{ fontSize: 40 }} />
                </IconButton>
              </Box>
            </Paper>
          </Grid>

          {/* Message Form Full Width */}
          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  backgroundColor: 'rgba(10, 25, 47, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(100, 255, 218, 0.1)',
                  position: 'relative'
                }}
              >
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(10, 25, 47, 0.9)',
                      zIndex: 10,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <IconButton onClick={() => setIsSubmitted(false)} sx={{ color: '#64ffda' }}>
                      <CloseIcon />
                    </IconButton>
                    <Avatar sx={{ bgcolor: 'transparent', border: '2px solid #64ffda', mb: 3 }}>
                      <SendIcon sx={{ color: '#64ffda' }} />
                    </Avatar>
                    <Typography variant="h6" sx={{ color: '#64ffda' }}>Message Sent!</Typography>
                    <Typography sx={{ color: '#cfd8dc' }}>Thanks! I’ll get back to you soon.</Typography>
                  </motion.div>
                )}

                <Typography variant="h5" gutterBottom sx={{ color: '#90caf9', fontWeight: 'bold' }}>
                  Send Me a Message
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth name="name" label="Your Name" value={formData.name} onChange={handleChange} variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth name="email" label="Your Email" value={formData.email} onChange={handleChange} variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth name="subject" label="Subject" value={formData.subject} onChange={handleChange} variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth name="message" label="Message" value={formData.message} onChange={handleChange} variant="outlined" multiline rows={4} />
                    </Grid>
                    <Grid item xs={12}>
                      <Button type="submit" variant="contained" fullWidth endIcon={<SendIcon />} sx={{
                        mt: 2,
                        backgroundImage: 'linear-gradient(90deg, #1976d2, #64ffda)',
                        color: '#0a192f',
                        fontWeight: 'bold',
                        '&:hover': {
                          backgroundImage: 'linear-gradient(90deg, #1565c0, #52d7c7)',
                          boxShadow: '0 0 10px rgba(100, 255, 218, 0.3)'
                        }
                      }}>
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
