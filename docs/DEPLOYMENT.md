# Deployment Guide for Lawyer of One

## Prerequisites

- Node.js 18+ installed
- Vercel account (recommended) or other hosting platform
- Environment variables configured

## Local Development

1. Install dependencies:
```bash
npm run install:all
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

Create a `.env.local` file in the `frontend` directory with:

```env
# Copy from .env.example and fill in your values
NEXT_PUBLIC_APP_NAME=Lawyer of One
NEXT_PUBLIC_APP_URL=https://lawyerofone.com

# Add your API keys and configuration
```

## Deployment to Vercel

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy!

### Vercel Configuration

The project is already configured for Vercel deployment with:
- Automatic builds on push
- Optimized for Next.js
- Edge runtime support

## Production Build

To test the production build locally:

```bash
npm run build
npm run start
```

## Other Deployment Options

### Netlify
- Use `npm run build` as build command
- Set publish directory to `frontend/.next`

### AWS Amplify
- Connect GitHub repository
- Use default Next.js build settings
- Configure environment variables

### Self-Hosted
- Build the application: `npm run build`
- Use PM2 or similar to run: `pm2 start npm --name "lawyerofone" -- start`
- Set up reverse proxy with Nginx

## Post-Deployment Checklist

- [ ] Verify all environment variables are set
- [ ] Test contact form functionality
- [ ] Check mobile responsiveness
- [ ] Verify SEO meta tags
- [ ] Set up analytics tracking
- [ ] Configure error monitoring (e.g., Sentry)
- [ ] Test page load speed
- [ ] Set up SSL certificate
- [ ] Configure domain DNS

## Monitoring

Consider setting up:
- Google Analytics or Plausible
- Uptime monitoring (UptimeRobot, Pingdom)
- Error tracking (Sentry, LogRocket)
- Performance monitoring (Vercel Analytics) 