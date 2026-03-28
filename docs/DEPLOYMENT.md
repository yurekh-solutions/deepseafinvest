# Deployment Guide

## Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] MongoDB database accessible
- [ ] Admin user created
- [ ] Build succeeds locally (`npm run build`)
- [ ] Type checking passes (`npm run type-check`)
- [ ] Linting passes (`npm run lint`)
- [ ] Test on production-like environment

## Environment Variables

Ensure these are set in your deployment platform:

```env
MONGODB_URI=mongodb+srv://...
JWT_SECRET=your-production-secret
ADMIN_USERNAME=admin
ADMIN_PASSWORD_HASH=$2a$10$...
WHATSAPP_NUMBER=919136242706
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Vercel Deployment (Recommended)

### Initial Setup

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Configure project:
   - Framework Preset: Next.js
   - Root Directory: `deepsea-finvest`
   - Build Command: `npm run build`
   - Output Directory: `.next`

### Environment Variables

Add all required environment variables in Vercel dashboard:
1. Go to Project Settings
2. Navigate to Environment Variables
3. Add each variable
4. Redeploy

### Custom Domain

1. Go to Project Settings > Domains
2. Add your custom domain
3. Configure DNS records as instructed
4. Wait for SSL certificate provisioning

## Railway Deployment

1. Install Railway CLI: `npm i -g @railway/cli`
2. Login: `railway login`
3. Initialize: `railway init`
4. Add environment variables: `railway variables`
5. Deploy: `railway up`

## AWS Amplify

1. Connect GitHub repository
2. Configure build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - cd deepsea-finvest
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: deepsea-finvest/.next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```
3. Add environment variables
4. Deploy

## Docker Deployment

### Dockerfile

```dockerfile
FROM node:20-alpine AS base

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

### Build and Run

```bash
docker build -t deepsea-finvest .
docker run -p 3000:3000 --env-file .env deepsea-finvest
```

## Post-Deployment

1. Verify all pages load correctly
2. Test contact form submission
3. Test admin login
4. Check MongoDB connection
5. Monitor error logs
6. Set up monitoring (Sentry, LogRocket)
7. Configure analytics (Google Analytics)

## Monitoring

### Recommended Tools
- **Vercel Analytics**: Built-in performance monitoring
- **Sentry**: Error tracking
- **LogRocket**: Session replay
- **Google Analytics**: User analytics

## Backup Strategy

1. Regular MongoDB backups
2. Code versioning with Git
3. Environment variable documentation
4. Database migration scripts

## Rollback Procedure

### Vercel
1. Go to Deployments
2. Find previous working deployment
3. Click "Promote to Production"

### Manual
1. Revert Git commit: `git revert HEAD`
2. Push: `git push`
3. Redeploy

## Performance Optimization

- Enable CDN caching
- Optimize images
- Enable compression
- Use Redis for caching (optional)
- Monitor Core Web Vitals

## Security Checklist

- [ ] HTTPS enabled
- [ ] Environment variables secured
- [ ] Database access restricted
- [ ] Rate limiting configured
- [ ] Security headers enabled
- [ ] Regular dependency updates
- [ ] MongoDB authentication enabled
- [ ] Strong JWT secret
