const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5002;

// Basic middleware
app.use(cors({
  origin: '*',
  credentials: true
}));

app.use(express.json());

// Test routes
app.get('/', (req, res) => {
  res.json({
    message: 'MetaMeal Backend is running!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    port: PORT
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/test', (req, res) => {
  res.json({
    message: 'API is working!',
    endpoint: '/api/test'
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Test server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;
