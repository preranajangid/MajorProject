import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  Typography,
  Box,
  Button,
  CircularProgress,
  Card,
  CardContent,
  CardMedia,
  Alert,
} from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

const Dashboard = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
      setPrediction(null);
      setError('');
    }
  };

  const handlePredict = async () => {
    if (!selectedImage) {
      setError('Please select an image first');
      return;
    }

    setLoading(true);
    setError('');

    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      const response = await axios.post('http://localhost:5000/api/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });
      setPrediction(response.data);
    } catch (error) {
      setError('Error predicting pest. Please try again.');
      console.error('Prediction error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" component="h1" color="primary">
            Pest Prediction Dashboard
          </Typography>
          <Button variant="outlined" color="primary" onClick={handleLogout}>
            Logout
          </Button>
        </Box>

        <Paper elevation={3} sx={{ p: 3, mb: 4, background: 'rgba(255,255,255,0.9)', border: '2px solid #43cea2' }}>
          <Typography variant="h6" gutterBottom>
            Upload Pest Image
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <Button
              variant="contained"
              component="label"
              sx={{ width: 'fit-content' }}
            >
              Choose Image
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImageSelect}
              />
            </Button>

            {previewUrl && (
              <Card sx={{ maxWidth: 400, width: '100%' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={previewUrl}
                  alt="Selected pest"
                  sx={{ objectFit: 'contain' }}
                />
              </Card>
            )}

            <Button
              variant="contained"
              color="primary"
              onClick={handlePredict}
              disabled={!selectedImage || loading}
              sx={{ width: 'fit-content' }}
            >
              {loading ? <CircularProgress size={24} /> : 'Predict Pest'}
            </Button>
          </Box>

          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}

          {prediction && (
            <Card sx={{ mt: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Prediction Results
                </Typography>
                <Typography variant="body1">
                  Pest Type: {prediction.prediction}
                </Typography>
                <Typography variant="body1">
                  Confidence: {(prediction.confidence * 100).toFixed(2)}%
                </Typography>
              </CardContent>
            </Card>
          )}
        </Paper>
      </Box>
    </Container>
  );
};

export default Dashboard; 