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
  Container,
  Snackbar,
  Alert
} from '@mui/material';
import {
  Send as SendIcon,
  LocationOn,
  Phone,
  Email,
  LinkedIn,
  GitHub,
  Twitter,
  Close as CloseIcon
} from '@mui/icons-material';

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Here you would typically send the form data to your backend
      // For demo purposes, we'll simulate a successful submission
      setSnackbarMessage('Message sent successfully!');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSnackbarMessage('Failed to send message. Please try again.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box
      id="contact"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 50% 100%, rgba(25, 118, 210, 0.05) 0%, transparent 70%)',
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
              background: 'linear-gradient(90deg, #64ffda, #90caf9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
              mb: 2,
            }}
          >
            Get In Touch
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
              background: 'linear-gradient(90deg, #64ffda, #1976d2)',
              borderRadius: 2,
            }}
          />
        </Box>

        <Grid container spacing={4}>
          {/* Contact Info */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  height: '100%',
                  backgroundColor: 'rgba(17, 34, 64, 0.7)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  border: '1px solid rgba(100, 255, 218, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ color: '#64ffda', fontWeight: 'bold', mb: 3 }}>
                  Contact Information
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Email sx={{ mr: 2, color: '#64ffda', fontSize: '2rem' }} />
                  <Box>
                    <Typography variant="body2" sx={{ color: '#8892b0', fontWeight: 'medium' }}>
                      Email
                    </Typography>
                    <Link 
                      href="mailto:tharani@example.com" 
                      underline="hover" 
                      sx={{ 
                        color: '#e6f1ff',
                        '&:hover': {
                          color: '#64ffda',
                        }
                      }}
                    >
                      tharanijayathura1@gmail.com
                    </Link>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <LocationOn sx={{ mr: 2, color: '#64ffda', fontSize: '2rem' }} />
                  <Box>
                    <Typography variant="body2" sx={{ color: '#8892b0', fontWeight: 'medium' }}>
                      Location
                    </Typography>
                    <Typography sx={{ color: '#e6f1ff' }}>Matara, Sri Lanka</Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Phone sx={{ mr: 2, color: '#64ffda', fontSize: '2rem' }} />
                  <Box>
                    <Typography variant="body2" sx={{ color: '#8892b0', fontWeight: 'medium' }}>
                      Phone
                    </Typography>
                    <Typography sx={{ color: '#e6f1ff' }}>+94 712599785</Typography>
                  </Box>
                </Box>
                
                <Box sx={{ mt: 4 }}>
                  <Typography variant="body2" sx={{ color: '#8892b0', mb: 2 }}>
                    Connect with me on social media:
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <IconButton 
                      href="https://www.linkedin.com/in/tharani-jayathura-96235226b/" 
                      target="_blank"
                      sx={{ 
                        color: '#e6f1ff',
                        backgroundColor: 'rgba(100, 255, 218, 0.1)',
                        '&:hover': { 
                          color: '#64ffda',
                          backgroundColor: 'rgba(100, 255, 218, 0.2)',
                        },
                      }}
                    >
                      <LinkedIn />
                    </IconButton>
                    <IconButton 
                      href="https://github.com/tharanijayathura" 
                      target="_blank"
                      sx={{ 
                        color: '#e6f1ff',
                        backgroundColor: 'rgba(100, 255, 218, 0.1)',
                        '&:hover': { 
                          color: '#64ffda',
                          backgroundColor: 'rgba(100, 255, 218, 0.2)',
                        },
                      }}
                    >
                      <GitHub />
                    </IconButton>
                    <IconButton 
                      href="https://x.com/mwgtharani" 
                      target="_blank"
                      sx={{ 
                        color: '#e6f1ff',
                        backgroundColor: 'rgba(100, 255, 218, 0.1)',
                        '&:hover': { 
                          color: '#64ffda',
                          backgroundColor: 'rgba(100, 255, 218, 0.2)',
                        },
                      }}
                    >
                      <Twitter />
                    </IconButton>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  height: '100%',
                  backgroundColor: 'rgba(17, 34, 64, 0.7)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  border: '1px solid rgba(100, 255, 218, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ color: '#64ffda', fontWeight: 'bold', mb: 3 }}>
                  Send Me a Message
                </Typography>

                <Box component="form" onSubmit={handleSubmit} noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        name="name"
                        label="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        variant="outlined"
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(100, 255, 218, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: '#64ffda',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#64ffda',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: '#8892b0',
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: '#64ffda',
                          },
                        }}
                        InputProps={{
                          style: { color: '#e6f1ff' },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        name="email"
                        label="Your Email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        variant="outlined"
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(100, 255, 218, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: '#64ffda',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#64ffda',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: '#8892b0',
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: '#64ffda',
                          },
                        }}
                        InputProps={{
                          style: { color: '#e6f1ff' },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        name="subject"
                        label="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        variant="outlined"
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(100, 255, 218, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: '#64ffda',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#64ffda',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: '#8892b0',
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: '#64ffda',
                          },
                        }}
                        InputProps={{
                          style: { color: '#e6f1ff' },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        name="message"
                        label="Message"
                        value={formData.message}
                        onChange={handleChange}
                        variant="outlined"
                        multiline
                        rows={6}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(100, 255, 218, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: '#64ffda',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#64ffda',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: '#8892b0',
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: '#64ffda',
                          },
                        }}
                        InputProps={{
                          style: { color: '#e6f1ff' },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        size="large"
                        endIcon={<SendIcon />}
                        sx={{
                          mt: 2,
                          background: 'linear-gradient(90deg, #1976d2, #64ffda)',
                          color: '#0a192f',
                          fontWeight: 'bold',
                          py: 1.5,
                          '&:hover': {
                            background: 'linear-gradient(90deg, #1565c0, #52d7c7)',
                            boxShadow: '0 0 20px rgba(100, 255, 218, 0.3)',
                          },
                        }}
                      >
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

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ 
            width: '100%',
            backgroundColor: snackbarSeverity === 'success' ? 'rgba(100, 255, 218, 0.2)' : 'rgba(255, 82, 82, 0.2)',
            color: '#e6f1ff',
            border: snackbarSeverity === 'success' ? '1px solid rgba(100, 255, 218, 0.3)' : '1px solid rgba(255, 82, 82, 0.3)',
            backdropFilter: 'blur(10px)',
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;