const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');

// Health check endpoint to test ML service connection
router.get('/health', async (req, res) => {
  try {
    const fetch = await import('node-fetch').then(mod => mod.default);
    
    const response = await fetch('http://localhost:5001/health', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error(`ML service responded with status: ${response.status}`);
    }

    const data = await response.json();
    res.json({ 
      status: 'healthy',
      ml_service: data
    });
  } catch (error) {
    console.error('ML service health check error:', error);
    res.status(500).json({ 
      status: 'unhealthy',
      error: 'ML service is not available',
      details: error.message 
    });
  }
});

// Proxy route to ML service for workout predictions
router.post('/predict-workout', protect, async (req, res) => {
  try {
    const fetch = await import('node-fetch').then(mod => mod.default);
    
    // Add user ID from auth middleware to request body
    const requestData = {
      ...req.body,
      user_id: req.user?._id || req.body.user_id
    };

    console.log('ML Request Data:', requestData);
    
    const response = await fetch('http://localhost:5001/predict-workout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('ML service error response:', errorData);
      throw new Error(errorData.error || `ML service responded with status: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('ML service error:', error);
    res.status(500).json({ 
      error: 'Failed to get workout recommendations',
      details: error.message 
    });
  }
});

router.post('/workout-suggestions', protect, async (req, res) => {
  try {
    const fetch = await import('node-fetch').then(mod => mod.default);
    
    const response = await fetch('http://localhost:5001/workout-suggestions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body)
    });

    if (!response.ok) {
      throw new Error(`ML service responded with status: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('ML service error:', error);
    res.status(500).json({ 
      error: 'Failed to get workout suggestions',
      details: error.message 
    });
  }
});

// Health check for ML service
router.get('/health', async (req, res) => {
  try {
    const fetch = await import('node-fetch').then(mod => mod.default);
    
    const response = await fetch('http://localhost:5001/health');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('ML service health check error:', error);
    res.status(500).json({ 
      error: 'ML service unavailable',
      details: error.message 
    });
  }
});

module.exports = router;
