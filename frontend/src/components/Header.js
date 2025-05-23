import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => (
  <AppBar position="static" sx={{
    background: 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
  }}>
    <Toolbar>
      <Typography variant="h4" sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: 2, color: '#fff' }}>
        🐛 Agri Pest Predictor
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header; 