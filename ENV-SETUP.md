# 🔐 Environment Setup Quick Reference

This file explains what each environment variable does and where to get it.

---

## Frontend Environment Variables (`.env.local`)

### `REACT_APP_API_URL`
**What it is:** URL where your backend API is hosted

**Development:**
```
http://localhost:5000
```

**Production:** Change this when deploying!
```
https://api.yourdomain.com
https://api-subdomain.herokuapp.com
https://your-railway-app.railway.app
```

**Where to get it:** 
- Depends on where you host your backend
- See DEPLOYMENT.md for hosting options

---

### `REACT_APP_GOOGLE_CLIENT_ID`
**What it is:** Google OAuth 2.0 credentials for login

**How to get:**
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. Enable Google+ API
4. Go to Credentials → Create OAuth 2.0 Web Application
5. Add Authorized Redirect URIs:
   - `http://localhost:3000` (for development)
   - `https://yourdomain.com` (for production)
6. Copy the Client ID

**Note:** You should have DIFFERENT Client IDs for development and production!

---

## Backend Environment Variables (`server/.env`)

### `PORT`
**Default:** `5000`
**What it is:** Port where backend server runs
**Change when:** Rarely needed, only if port is already in use

---

### `NODE_ENV`
**Development:** `development`
**Production:** `production`
**What it is:** Determines if app runs in dev or production mode
**Change when:** Deploying to production (IMPORTANT!)

---

### `MONGO_URI`
**What it is:** MongoDB database connection string

**Local Development:**
```
mongodb://localhost:27017/learnCode
```

**MongoDB Atlas (Cloud - Recommended for Production):**
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/learnCode?retryWrites=true&w=majority
```

**How to get MongoDB Atlas URL:**
1. Sign up at [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. Create a free cluster
3. Click "Connect"
4. Choose "Connect your application"
5. Copy the connection string
6. Replace `<username>` and `<password>`
7. Replace `myFirstDatabase` with `learnCode`

**Example:**
```
mongodb+srv://admin:MySecurePass123@cluster0.tqtl6q6.mongodb.net/learnCode?retryWrites=true&w=majority
```

---

### `CLIENT_URL`
**What it is:** Where your frontend is hosted (for CORS and email links)

**Development:**
```
http://localhost:3000
```

**Production:** CHANGE THIS!
```
https://yourdomain.com
https://www.yourdomain.com
https://learncode-app.vercel.app
```

**Important:** 
- Must match your frontend URL exactly
- Used for CORS (cross-origin requests)
- Used in email links sent to users
- MUST use HTTPS in production

---

### `GOOGLE_CLIENT_ID`
**Same as frontend**, but on backend

**How to get:** Same process as frontend Client ID
- Create at [Google Cloud Console](https://console.cloud.google.com)
- Can be same ID if server trusts it, or different

---

## Email Service Variables (Optional but Recommended)

### `EMAIL_HOST`
**What it is:** SMTP server address for sending emails

**Options:**
- Gmail: `smtp.gmail.com`
- SendGrid: `smtp.sendgrid.net`
- AWS SES: `email-smtp.region.amazonaws.com`
- Your email provider's SMTP server

### `EMAIL_PORT`
**What it is:** SMTP port number

**Most common:**
- `587` (for TLS encryption - most common)
- `465` (for SSL encryption)
- `25` (older, less common)

### `EMAIL_USER`
**What it is:** Email address to send from

**Gmail:**
```
your-email@gmail.com
```

**SendGrid:**
```
apikey
```

### `EMAIL_PASS`
**What it is:** Password or API key for email service

**Gmail:**
1. Enable 2-Factor Authentication
2. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Generate "App Password" for Mail
4. Copy the 16-character password

**SendGrid:**
1. Go to Settings → API Keys
2. Create new API key
3. Copy the key starting with `SG.`

**Example:**
```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=noreply@yourdomain.com
EMAIL_PASS=abcd efgh ijkl mnop
```

---

## Rate Limiting (Optional)

### `RATE_LIMIT_WINDOW_MS`
**Default:** `900000` (15 minutes)
**What it is:** Time window for rate limit

### `RATE_LIMIT_MAX_REQUESTS`
**Default:** `100`
**What it is:** Max requests per IP per window

**Example:** 100 requests per 15 minutes per IP

---

## How to Set Environment Variables

### Development (`.env` files)

**Backend (`server/.env`):**
```bash
cd server
cp .env.example .env
nano .env  # or use any text editor
# Paste your values, save
```

**Frontend (`.env.local`):**
```bash
cp .env.example .env.local
nano .env.local
# Paste your values, save
```

### Production (Different Platforms)

**Heroku:**
```bash
heroku config:set MONGO_URI="your_uri" --app learncode-api
heroku config:set CLIENT_URL="https://yourdomain.com" --app learncode-api
```

**Railway:**
- Dashboard → Variables (GUI interface)
- Add each variable in the form

**Vercel/Netlify:**
- Project Settings → Environment Variables
- Add from dashboard

**Custom Server:**
- Edit `.env` directly
- Or use PM2 `.env` integration

---

## 🔑 Security Reminders

1. **NEVER commit `.env` files to git**
   - Make sure `.gitignore` includes `.env` and `.env.local`
   - Use `.env.example` as template

2. **Use `.env.example` to track what variables are needed**
   - Don't include real values
   - Team members copy and fill in their own

3. **Production passwords are sensitive**
   - Use strong passwords (20+ characters)
   - Store in secure platform secrets
   - Rotate periodically

4. **Google OAuth has different credentials per environment**
   - Development: one Client ID
   - Production: different Client ID with production domain

5. **API URLs must use HTTPS in production**
   - Update `REACT_APP_API_URL` when deploying
   - Browser will block non-HTTPS mixed content

---

## ✅ Quick Checklist Before Deploying

- [ ] `.env` files created from `.env.example`
- [ ] `MONGO_URI` is MongoDB Atlas URI (not localhost)
- [ ] `CLIENT_URL` matches your production domain
- [ ] `NODE_ENV=production` on backend
- [ ] `REACT_APP_API_URL` points to production backend
- [ ] Google OAuth Client IDs set for production domain
- [ ] Email service configured (optional but recommended)
- [ ] `.env` files NOT in git
- [ ] `.env.example` is in git with placeholder values
- [ ] Tested locally before deploying

---

## 🆘 Common Issues

**"Cannot GET /" on frontend**
- Check `REACT_APP_API_URL` is correct
- Backend server is running

**"Cannot connect to MongoDB"**
- Check `MONGO_URI` is correct
- IP address whitelisted in MongoDB Atlas
- Database credentials are right

**"CORS error"**
- Check `CLIENT_URL` is exact domain
- Frontend and backend both running
- Check CORS configuration in server

**"Emails not sending"**
- Check `EMAIL_USER` and `EMAIL_PASS` are correct
- Gmail: used App Password, not regular password
- SendGrid: used API key with `SG.` prefix
- Check firewall allows port 587

**"Google login not working"**
- OAuth Client ID wrong for production domain
- Authorized redirect URIs missing production domain
- Clear browser cookies/cache and try again

---

For detailed deployment instructions, see **DEPLOYMENT.md**
