# MetaMeal Deployment Configuration

## Live URLs
- **Frontend (Vercel)**: https://meta-meal.vercel.app
- **Backend (Render)**: https://metameal-backend.onrender.com
- **API Endpoint**: https://metameal-backend.onrender.com/api

## Service Details
- **Vercel Project ID**: prj_TxVOjMO7oOdGe2QEW1vh10NXMnV2
- **Render Service ID**: srv-d2un7fur433s73efmpig

## Environment Variables Setup

### Vercel (Frontend)
Add this environment variable in Vercel Dashboard:
```
REACT_APP_API_URL=https://metameal-backend.onrender.com/api
```

### Render (Backend) 
Add these environment variables in Render Dashboard:
```
NODE_ENV=production
MONGODB_URI=mongodb+srv://vishalnyapathi214:5QgwpkLnDSoxkdvf@maindb.mx4soxz.mongodb.net/main?retryWrites=true&w=majority&appName=MainDB
JWT_SECRET=your_super_secure_jwt_secret_change_this_123456789
JWT_EXPIRE=30d
CORS_ORIGIN=https://meta-meal.vercel.app
PORT=5002
```

## Deployment Steps
1. Push changes to GitHub (done automatically)
2. Vercel will auto-deploy from GitHub
3. Render will auto-deploy from GitHub
4. Update CORS_ORIGIN with your actual Vercel URL once you have it

## Testing
1. Visit your Vercel URL
2. Test user registration/login
3. Check browser console for any API errors
4. Verify database connections work

## Security Note
Change CORS_ORIGIN from "*" to your specific Vercel URL once deployment is complete for better security.
