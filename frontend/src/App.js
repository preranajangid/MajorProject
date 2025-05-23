import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import { Box } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#43cea2', // Vibrant green-teal
    },
    secondary: {
      main: '#ff5e62', // Vibrant coral
    },
    background: {
      default: 'linear-gradient(135deg, #f8ffae 0%, #43cea2 100%)',
      paper: '#fff',
    },
  },
  typography: {
    fontFamily: 'Poppins, Roboto, Helvetica, Arial, sans-serif',
    h1: { fontWeight: 800, color: '#185a9d' },
    h2: { fontWeight: 700, color: '#43cea2' },
    h4: { fontWeight: 700, color: '#185a9d' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 700,
          background: 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)',
          color: '#fff',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 6px 24px rgba(67,206,162,0.15)',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
        },
      },
    },
  },
});

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8ffae 0%, #43cea2 100%)' }}>
        <Header />
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Router>
        </AuthProvider>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
