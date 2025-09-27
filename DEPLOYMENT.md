# Deployment Guide

This guide covers multiple deployment options for the IELTS Institute Homepage.

## 🚀 Quick Deploy Options

### 1. Vercel (Frontend) + Railway (Backend) - Recommended

#### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set build command: `cd client && npm run build`
3. Set output directory: `client/build`
4. Add environment variables:
   - `REACT_APP_API_URL`: Your Railway backend URL

#### Backend (Railway)
1. Connect your GitHub repository to Railway
2. Set root directory: `server`
3. Railway will automatically detect Node.js and deploy

### 2. Netlify (Frontend) + Heroku (Backend)

#### Frontend (Netlify)
1. Connect GitHub repository
2. Set build command: `cd client && npm run build`
3. Set publish directory: `client/build`
4. Add environment variables in Netlify dashboard

#### Backend (Heroku)
1. Create Heroku app
2. Connect GitHub repository
3. Set buildpack: `heroku/nodejs`
4. Add environment variables in Heroku dashboard

### 3. Docker Deployment

#### Local Development
```bash
docker-compose up -d
```

#### Production
```bash
docker build -t ielts-institute .
docker run -p 3000:3000 -p 5000:5000 ielts-institute
```

## 🔧 Environment Variables

### Frontend (.env)
```
REACT_APP_API_URL=https://your-backend-url.com
```

### Backend (.env)
```
NODE_ENV=production
PORT=5000
CORS_ORIGIN=https://your-frontend-url.com
```

## 📊 CI/CD Pipeline

The project includes GitHub Actions workflows:

- **CI Pipeline**: Runs tests, linting, and security scans
- **Frontend Deploy**: Automatically deploys to Vercel on push to main
- **Backend Deploy**: Automatically deploys to Railway on push to main

### Required Secrets

Add these secrets to your GitHub repository:

#### For Vercel Deployment:
- `VERCEL_TOKEN`: Your Vercel API token
- `VERCEL_ORG_ID`: Your Vercel organization ID
- `VERCEL_PROJECT_ID`: Your Vercel project ID

#### For Railway Deployment:
- `RAILWAY_TOKEN`: Your Railway API token

## 🌐 Domain Configuration

### Custom Domain Setup

1. **Frontend (Vercel)**:
   - Add custom domain in Vercel dashboard
   - Update DNS records as instructed

2. **Backend (Railway)**:
   - Add custom domain in Railway dashboard
   - Update CORS settings to include your frontend domain

## 📈 Monitoring & Analytics

### Performance Monitoring
- Vercel Analytics (built-in)
- Railway Metrics (built-in)
- Custom monitoring with tools like Sentry

### Health Checks
- Frontend: `https://your-domain.com/`
- Backend: `https://your-api-domain.com/api/health`

## 🔒 Security Considerations

1. **Environment Variables**: Never commit sensitive data
2. **CORS Configuration**: Restrict to your frontend domain
3. **HTTPS**: Always use HTTPS in production
4. **Rate Limiting**: Implement rate limiting on API endpoints
5. **Security Headers**: Configure security headers

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**:
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Check for TypeScript/ESLint errors

2. **CORS Errors**:
   - Verify CORS_ORIGIN environment variable
   - Check backend CORS configuration

3. **Environment Variables**:
   - Ensure all required variables are set
   - Check variable names and values

### Debug Commands

```bash
# Check build locally
npm run build

# Test production build
npm run start

# Check Docker build
docker build -t ielts-institute .

# View logs
docker-compose logs -f
```

## 📝 Deployment Checklist

- [ ] All tests passing
- [ ] Environment variables configured
- [ ] CORS settings updated
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] Health checks responding
- [ ] Performance monitoring setup
- [ ] Error tracking configured

## 🔄 Rollback Strategy

1. **Vercel**: Use deployment history to rollback
2. **Railway**: Use deployment history to rollback
3. **Docker**: Use previous image tags
4. **Git**: Revert to previous commit and redeploy

## 📞 Support

For deployment issues:
1. Check GitHub Actions logs
2. Review platform-specific logs
3. Verify environment configuration
4. Test locally first
