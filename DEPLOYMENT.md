# 🚀 DEPLOYMENT GUIDE - learnCode Platform

This guide walks you through deploying learnCode from local development to production.

---

## 📋 Table of Contents
1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Local Testing](#local-testing)
3. [Backend Deployment](#backend-deployment)
4. [Frontend Deployment](#frontend-deployment)
5. [Environment Variables](#environment-variables)
6. [Database Setup](#database-setup)
7. [Domain & SSL](#domain--ssl)
8. [Post-Deployment](#post-deployment)

---

## ✅ Pre-Deployment Checklist

- [ ] Node.js v16+ installed
- [ ] npm/yarn installed
- [ ] Git initialized and `.env` added to `.gitignore`
- [ ] All environment variables documented in `.env.example`
- [ ] Database backup strategy in place
- [ ] Domain name registered and DNS configured
- [ ] SSL certificate ready (or planned with Let's Encrypt)
- [ ] Email service credentials obtained
- [ ] Google OAuth credentials created

---

## 🧪 Local Testing (Before Deploying)

### 1. Install Dependencies
```bash
cd "d:/web dev/teck-stack"
npm install

cd server
npm install
cd ..
```

### 2. Create Local `.env` Files

**Backend (`server/.env`)**
```bash
cd server
cp .env.example .env
# Edit .env with your local values
```

**Frontend (`.env.local`)**
```bash
cp .env.example .env.local
# Edit .env.local with your local values
```

### 3. Test Backend
```bash
cd server
npm run dev
# Should see: ✅ Connected to MongoDB
# Should see: 🚀 learnCode SERVER STARTED
```

### 4. Test Frontend (New Terminal)
```bash
npm start
# Should open http://localhost:3000
```

### 5. Test Key Features
- [ ] Google login works
- [ ] Email/password signup works
- [ ] Course enrollment works
- [ ] Quiz submission works
- [ ] Profile page loads with XP/stats

---

## 🖥️ Backend Deployment

### Option A: Heroku (Easiest)

#### 1. Create Heroku Account
- Go to [heroku.com](https://www.heroku.com)
- Sign up and install Heroku CLI

#### 2. Login & Create App
```bash
heroku login
heroku create learncode-api
```

#### 3. Set Environment Variables on Heroku
```bash
heroku config:set NODE_ENV=production --app learncode-api
heroku config:set MONGO_URI="your_mongodb_atlas_uri" --app learncode-api
heroku config:set CLIENT_URL="https://yourdomain.com" --app learncode-api
heroku config:set GOOGLE_CLIENT_ID="your_google_client_id" --app learncode-api
heroku config:set EMAIL_HOST="smtp.gmail.com" --app learncode-api
heroku config:set EMAIL_PORT="587" --app learncode-api
heroku config:set EMAIL_USER="your-email@gmail.com" --app learncode-api
heroku config:set EMAIL_PASS="your-app-password" --app learncode-api
```

#### 4. Deploy
```bash
git push heroku main
# Or: git push heroku development:main (if on different branch)
```

#### 5. View Logs
```bash
heroku logs --tail --app learncode-api
```

Your API will be at: `https://learncode-api.herokuapp.com`

---

### Option B: Railway (Faster Alternative)

#### 1. Create Railway Account
- Go to [railway.app](https://railway.app)
- Sign up and login

#### 2. Create New Project
- Click "New Project"
- Select "GitHub Repo" or "Deploy from GitHub"
- Connect your repository

#### 3. Add MongoDB Service
- Click "Add Service"
- Select "MongoDB"
- Copy connection string

#### 4. Add Environment Variables
In Railway dashboard, add:
- `NODE_ENV` = `production`
- `MONGO_URI` = (from MongoDB service)
- `CLIENT_URL` = `https://yourdomain.com`
- `GOOGLE_CLIENT_ID` = your client ID
- `EMAIL_*` = email service credentials

#### 5. Deploy
- Railway auto-deploys from git push
- Your API will be at: `https://learncode-api-xxx.railway.app`

---

### Option C: DigitalOcean / AWS / Linode (Full Control)

#### 1. Create Server Instance
- Create a Ubuntu 20.04 LTS droplet/instance
- SSH into the server

#### 2. Install Dependencies
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install nodejs npm -y
sudo apt install git -y
```

#### 3. Clone Repository
```bash
git clone https://github.com/yourusername/learncode.git
cd learncode/server
npm install
```

#### 4. Create `.env` File
```bash
nano .env
# Paste your production environment variables
```

#### 5. Setup PM2 (Process Manager)
```bash
npm install -g pm2
pm2 start index.js --name "learncode-api"
pm2 startup
pm2 save
```

#### 6. Setup Nginx Reverse Proxy
```bash
sudo apt install nginx -y

# Create Nginx config
sudo nano /etc/nginx/sites-available/learncode

# Add this configuration:
server {
    listen 80;
    server_name api.yourdomain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}

# Enable the site
sudo ln -s /etc/nginx/sites-available/learncode /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### 7. Setup HTTPS with Let's Encrypt
```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d api.yourdomain.com
```

Your API will be at: `https://api.yourdomain.com`

---

## 🎨 Frontend Deployment

### Option A: Vercel (Recommended for React)

#### 1. Install Vercel CLI
```bash
npm install -g vercel
```

#### 2. Login to Vercel
```bash
vercel login
```

#### 3. Deploy
```bash
vercel --prod
# Follow the prompts
```

#### 4. Add Environment Variables in Vercel Dashboard
- Go to [vercel.com](https://vercel.com)
- Select your project
- Settings → Environment Variables
- Add:
  - `REACT_APP_API_URL` = `https://your-api-domain.com`
  - `REACT_APP_GOOGLE_CLIENT_ID` = your client ID

Your site will be at: `https://learncode-XXX.vercel.app` or your custom domain

---

### Option B: Netlify

#### 1. Connect GitHub
- Go to [netlify.com](https://netlify.com)
- Click "New site from Git"
- Select your GitHub repository

#### 2. Configure Build
- Build command: `npm run build`
- Publish directory: `build`

#### 3. Add Environment Variables
- Settings → Build & Deploy → Environment
- Add same variables as Vercel

Your site will auto-deploy on every git push!

---

### Option C: DigitalOcean App Platform (Easiest Self-Hosted)

#### 1. Upload to GitHub
Make sure your code is on GitHub

#### 2. Create App on DigitalOcean
- Login to [DigitalOcean](https://digitalocean.com)
- Click "Create" → "App"
- Connect your GitHub repo
- Choose the `master` or `main` branch

#### 3. Configure Build
- Build command: `npm run build`
- Output dir: `build`

#### 4. Add Environment Variables
- App Spec → Edit:
```yaml
envs:
  - key: REACT_APP_API_URL
    value: https://api.yourdomain.com
  - key: REACT_APP_GOOGLE_CLIENT_ID
    value: your_google_client_id
```

#### 5. Deploy
- Click "Deploy"
- Gets HTTPS automatically

Your site will be at: `https://learncode-xxx.ondigitalocean.app` or custom domain

---

## 🔐 Environment Variables

### Backend (`server/.env` in Production)

```env
# Server Config
PORT=5000
NODE_ENV=production

# Database (MongoDB Atlas)
# Sign up at https://www.mongodb.com/cloud/atlas
# Create a cluster and get your connection string
MONGO_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/learnCode?retryWrites=true&w=majority

# Frontend URL (for CORS and email links)
CLIENT_URL=https://yourdomain.com

# Google OAuth
# Create at: https://console.cloud.google.com
# Create a NEW set of OAuth credentials for production!
# Add production domain to authorized origins
GOOGLE_CLIENT_ID=xxx.apps.googleusercontent.com

# Email Service (Choose one)
# Option 1: Gmail (Recommended)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password  # NOT regular password!

# Option 2: SendGrid
# EMAIL_HOST=smtp.sendgrid.net
# EMAIL_PORT=587
# EMAIL_USER=apikey
# EMAIL_PASS=SG.xxxxx

# Option 3: AWS SES, Mailgun, etc.

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# Optional: API Domain for email links
API_DOMAIN=api.yourdomain.com
```

### Frontend (`.env.local` or `.env.production` in Production)

```env
# API Configuration - CRITICAL!
# Must point to your production backend
REACT_APP_API_URL=https://api.yourdomain.com

# Google OAuth
# Use the SAME Client ID if production domain is authorized
REACT_APP_GOOGLE_CLIENT_ID=xxx.apps.googleusercontent.com
```

---

## 🗄️ Database Setup

### MongoDB Atlas (Recommended)

#### 1. Create Account
- Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
- Sign up with email

#### 2. Create Cluster
- Click "Create Deployment"
- Choose "M0" (Free tier) or your preferred plan
- Select your region close to your server

#### 3. Get Connection String
- Click "Connect"
- Choose "Connect your application"
- Copy the connection string
- Replace `<username>`, `<password>` with your credentials
- Replace `myFirstDatabase` with `learnCode`

Example:
```
mongodb+srv://admin:SecurePass123@cluster0.tqtl6q6.mongodb.net/learnCode?retryWrites=true&w=majority
```

#### 4. IP Whitelist
- In MongoDB Atlas, go to Network Access
- Click "Add IP Address"
- Add:
  - `0.0.0.0/0` (allows all - for testing)
  - Or specific IP of your server (more secure)

#### 5. Set in Backend `.env`
```env
MONGO_URI=your_connection_string_here
```

---

## 🌐 Domain & SSL

### 1. Register Domain
- Namecheap, GoDaddy, Cloudflare, etc.
- Example: `learncode.com`, `learn-code.io`

### 2. Point DNS to Your Server

**If using Heroku/Railway/Vercel:**
- They provide DNS records to add
- Add CNAME records in your domain registrar

**If using custom server:**
- Add A record pointing to your server's IP
- Example:
  ```
  A record: @ → 157.245.XXX.XXX (your server IP)
  ```

### 3. Setup Subdomains
```
learncode.com         → Frontend (your React app)
api.learncode.com     → Backend (your Node API)
```

Add these CNAME/A records:
```
learncode.com      → your-frontend-host
api.learncode.com  → your-backend-host
```

### 4. Get SSL Certificate

**Using Let's Encrypt (Free):**
```bash
# On your server
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d learncode.com -d api.learncode.com
```

**Or use Cloudflare (Free tier):**
- Add your domain to Cloudflare
- Enable "Full" SSL
- Change your DNS to Cloudflare nameservers

---

## 📧 Email Service Setup

### Option A: Gmail (Easiest)

1. Enable 2-Factor Authentication on your Google account
2. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Generate "App Password" for Mail
4. Use this in `.env`:
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=16-character-app-password
   ```

### Option B: SendGrid (Better for High Volume)

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Create API key
3. Use in `.env`:
   ```env
   EMAIL_HOST=smtp.sendgrid.net
   EMAIL_PORT=587
   EMAIL_USER=apikey
   EMAIL_PASS=SG.xxxxxxxxxxx
   ```

### Option C: AWS SES

1. Verify email in [AWS SES Console](https://console.aws.amazon.com/ses)
2. Create SMTP credentials
3. Use in `.env`

---

## 🔑 Google OAuth Setup (Production)

### 1. Create Separate OAuth Credentials for Production

- Go to [Google Cloud Console](https://console.cloud.google.com)
- Project → Create Project → `learnCode Production`
- Enable Google+ API
- Go to Credentials → Create OAuth 2.0 Web Application

### 2. Authorized Redirect URIs
Add these:
```
https://learncode.com
https://learncode.com/
https://api.yourdomain.com
https://yourdomain.com/login
```

### 3. Get Client ID & Secret
- Copy Client ID
- Use in both `.env` files:
  ```env
  REACT_APP_GOOGLE_CLIENT_ID=xxx.apps.googleusercontent.com
  GOOGLE_CLIENT_ID=xxx.apps.googleusercontent.com
  ```

### 4. Important!
- Don't share Client Secret (only use on server)
- Create separate credentials for production vs development
- Update authorized URIs for your production domain

---

## 📋 Post-Deployment

### 1. Verify Everything Works

```bash
# Test backend health check
curl https://api.yourdomain.com/health

# Test frontend loads
curl https://yourdomain.com
```

### 2. Database Backup Strategy

**MongoDB Atlas:**
- Automatic backups are included
- Go to MongoDB Atlas → Backup & Restore
- Enable automatic backups

**Manual backups:**
```bash
mongobackup --uri "mongodb+srv://user:pass@cluster0.xxxxx.mongodb.net/learnCode"
```

### 3. Monitoring & Logging

**Backend errors:**
```bash
# If using PM2
pm2 logs learncode-api

# If using Heroku
heroku logs --tail

# If using Railway
railway logs
```

### 4. Security Checklist

- [ ] `NODE_ENV=production` on backend
- [ ] All `localhost` references removed
- [ ] `.env` file added to `.gitignore`
- [ ] Sensitive credentials not in git history
- [ ] HTTPS/SSL enabled
- [ ] Rate limiting active
- [ ] CORS restricted to your domain
- [ ] Database has strong passwords
- [ ] Google OAuth credentials for production domain only

### 5. Performance Optimization

**Frontend:**
```bash
npm run build
# Check bundle size
npm install -g webpack-bundle-analyzer
```

**Backend:**
- Add database indexes
- Enable caching headers
- Use CDN for static assets

### 6. Continuous Deployment (Optional)

**Setup auto-deploy with GitHub:**
- Connect GitHub to Vercel/Netlify/Railway
- Every git push to `main` auto-deploys
- Set up staging branch for testing

---

## 🔍 Troubleshooting

### Backend not connecting to database
```bash
# Check connection string
# Check IP whitelist in MongoDB Atlas
# Test locally with same connection string
```

### Frontend API calls failing (CORS error)
```bash
# Check CLIENT_URL matches frontend domain
# Check CORS origin in server/index.js
# Verify backend is running
```

### Email not sending
```bash
# Check EMAIL_HOST, EMAIL_USER, EMAIL_PASS are correct
# Check Gmail App Password (not regular password)
# Check firewall allows port 587
```

### Google OAuth not working
```bash
# Verify OAuth Client ID is for production
# Check authorized redirect URIs include your domain
# Clear browser cookies and retry
```

---

## 🎯 Summary

**Quick Deployment Path:**
1. ✅ Set up MongoDB Atlas (get connection string)
2. ✅ Create Heroku/Railway app (deploy backend)
3. ✅ Register domain + SSL (Let's Encrypt or Cloudflare)
4. ✅ Create Google OAuth production credentials
5. ✅ Deploy frontend to Vercel/Netlify
6. ✅ Update `.env` files with production URLs
7. ✅ Test everything works
8. ✅ Setup monitoring & backups

**Total Time: 1-2 hours**

---

## 📞 Support

If stuck:
1. Check logs on your hosting platform
2. Verify all environment variables are set correctly
3. Test backend locally with production `.env`
4. Check database connectivity
5. Review security headers and CORS settings

Good luck! 🚀
