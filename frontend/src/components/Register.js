import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const response = await axios.post('/api/register', { username, password });
      setSuccess('Registration successful! Redirecting to login...');
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <Card sx={{ maxWidth: 400, margin: 'auto', mt: 8, background: 'rgba(255,255,255,0.95)', border: '2px solid #ff5e62' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Register
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}
        <form onSubmit={handleRegister}>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2, background: 'linear-gradient(90deg, #ff9966 0%, #ff5e62 100%)', color: '#fff', fontWeight: 700 }}>
            Register
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Register; 