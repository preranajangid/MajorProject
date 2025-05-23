import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box sx={{
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    background: 'linear-gradient(90deg, #ff9966 0%, #ff5e62 100%)',
    color: '#fff',
    py: 1,
    textAlign: 'center',
    zIndex: 1201
  }}>
    <Typography variant="body2">
      © {new Date().getFullYear()} Agri Pest Predictor. All rights reserved.
    </Typography>
  </Box>
);

export default Footer; 