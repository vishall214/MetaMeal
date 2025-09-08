// Keep-Alive Service for MetaMeal Backend
// This runs in the browser to ping the backend periodically

class BackendKeepAlive {
  constructor(apiUrl = 'https://metameal-backend.onrender.com') {
    this.apiUrl = apiUrl;
    this.pingInterval = 13 * 60 * 1000; // 13 minutes in milliseconds
    this.isActive = false;
  }

  async ping() {
    try {
      const response = await fetch(`${this.apiUrl}/health`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        console.log('✅ Backend keep-alive ping successful');
      } else {
        console.log('⚠️ Backend responded but not healthy');
      }
    } catch (error) {
      console.log('❌ Backend keep-alive ping failed:', error.message);
    }
  }

  start() {
    if (this.isActive) return;
    
    console.log('🚀 Starting backend keep-alive service...');
    this.isActive = true;
    
    // Immediate ping
    this.ping();
    
    // Set up interval
    this.intervalId = setInterval(() => {
      this.ping();
    }, this.pingInterval);
  }

  stop() {
    if (!this.isActive) return;
    
    console.log('⏹️ Stopping backend keep-alive service...');
    this.isActive = false;
    
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

// Auto-start when page loads (only in production)
if (window.location.hostname !== 'localhost') {
  const keepAlive = new BackendKeepAlive();
  
  // Start when page loads
  document.addEventListener('DOMContentLoaded', () => {
    keepAlive.start();
  });
  
  // Stop when page unloads
  window.addEventListener('beforeunload', () => {
    keepAlive.stop();
  });
  
  // Make available globally for manual control
  window.BackendKeepAlive = keepAlive;
}

export default BackendKeepAlive;
