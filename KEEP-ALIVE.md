# MetaMeal Keep-Alive Setup Guide

## Current Keep-Alive Methods

### 1. GitHub Actions (Already Configured ✅)
- **File**: `.github/workflows/keep-alive.yml`
- **Frequency**: Every 14 minutes
- **Status**: Active
- **URL Monitored**: https://metameal-backend.onrender.com/health

### 2. UptimeRobot (Free External Monitor)
1. Go to [uptimerobot.com](https://uptimerobot.com)
2. Create free account
3. Add new monitor:
   - **Monitor Type**: HTTP(s)
   - **URL**: `https://metameal-backend.onrender.com/health`
   - **Monitoring Interval**: 5 minutes (free tier)
   - **Monitor Name**: MetaMeal Backend

### 3. Cron Job Alternative
If you have a server/VPS, add this cron job:
```bash
*/10 * * * * curl -f https://metameal-backend.onrender.com/health > /dev/null 2>&1
```

### 4. Browser Bookmark (Manual)
Create a bookmark with this URL for manual pinging:
```
https://metameal-backend.onrender.com/health
```

## Render Service Status
- **Service**: srv-d2un7fur433s73efmpig  
- **URL**: https://metameal-backend.onrender.com
- **Sleep Time**: 15 minutes of inactivity
- **Wake Time**: ~30 seconds

## Upgrade Options
- **Render Starter Plan**: $7/month for 24/7 uptime
- **Benefits**: No sleep, faster performance, custom domains

## Testing Keep-Alive
Monitor your service at: https://dashboard.render.com/web/srv-d2un7fur433s73efmpig
