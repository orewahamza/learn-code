# ⚡ QUICK REFERENCE CARD

Print this or save it as a bookmark. Everything you need to deploy, on one page.

---

## 🚀 DEPLOYMENT IN 5 STEPS

### Step 1: Install New Packages
```bash
cd server && npm install && cd ..
```

### Step 2: Create .env Files
```bash
# Backend
cp server/.env.example server/.env
# Edit server/.env with production values

# Frontend
cp .env.example .env.local
# Edit .env.local with production values
```

### Step 3: Deploy Backend
```bash
# Choose your host:
# Heroku: heroku create your-app && heroku config:set ... && git push heroku main
# Railway: Connect GitHub, add env vars, auto-deploys
# Custom: PM2 + Nginx + Let's Encrypt
```

### Step 4: Deploy Frontend
```bash
npm run build
# Upload to Vercel/Netlify or your host
```

### Step 5: Configure DNS
```
yourdomain.com     → Frontend URL
api.yourdomain.com → Backend URL
```

---

## 🔑 Environment Variables Cheat Sheet

| Variable | Dev | Production | Get From |
|----------|-----|------------|----------|
| `REACT_APP_API_URL` | http://localhost:5000 | https://api.yourdomain.com | Your backend host |
| `REACT_APP_GOOGLE_CLIENT_ID` | dev_id | prod_id | Google Cloud Console |
| `NODE_ENV` | development | production | Hardcode it |
| `MONGO_URI` | mongodb://localhost | mongodb+srv://... | MongoDB Atlas |
| `CLIENT_URL` | http://localhost:3000 | https://yourdomain.com | Your domain |
| `GOOGLE_CLIENT_ID` | dev_id | prod_id | Google Cloud Console |
| `EMAIL_HOST` | smtp.gmail.com | smtp.gmail.com | Your email service |
| `EMAIL_USER` | your-email@gmail.com | your-email@gmail.com | Your email |
| `EMAIL_PASS` | app-password | app-password | Gmail App Passwords |
| `PORT` | 5000 | 5000 | Usually same |

---

## 📍 Where Files Go

```
After Deployment:

🌐 Frontend Files
   └─→ yourdomain.com
       ├─ index.html (built)
       ├─ js/main.xxx.js (minified)
       └─ assets/ (images, etc)

🖥️ Backend Server
   └─→ api.yourdomain.com
       ├─ /health (check this)
       ├─ /api/auth/login
       ├─ /api/courses
       └─ /api/... (all endpoints)

🗄️ Database
   └─→ MongoDB Atlas Cloud
       └─ learnCode Database
           ├─ users
           ├─ courses
           ├─ quizzes
           └─ activities
```

---

## 🆘 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| API calls failing | Check `REACT_APP_API_URL` in .env.local |
| Backend won't start | Check `MONGO_URI` - test connection |
| Google login fails | Verify OAuth Client ID is for production domain |
| Emails not sending | Check `EMAIL_USER`, `EMAIL_PASS` are correct |
| Can't connect to DB | MongoDB Atlas → Network Access → whitelist IP |
| CORS error | Check `CLIENT_URL` matches exactly |
| 404 on subdomain | Check DNS records are set correctly |
| No HTTPS | Get SSL cert with Let's Encrypt or provider |

---

## 📚 Documentation Files

| File | Purpose | Read When |
|------|---------|-----------|
| `PRODUCTION-READY.md` | Overview of changes | First! Explains everything |
| `DEPLOYMENT.md` | How to deploy | Ready to deploy |
| `ENV-SETUP.md` | What env vars mean | Setting up variables |
| `PRODUCTION-CHECKLIST.md` | Things to check | Before going live |
| `VISUAL-GUIDE.md` | Pictures & diagrams | Need visual explanation |
| This file | Quick reference | Need quick info |

---

## ✅ Pre-Deployment Checklist (Condensed)

### Code Ready?
- [ ] All features working locally
- [ ] No console errors in dev tools
- [ ] `.env` added to `.gitignore`
- [ ] No hardcoded URLs remaining

### Credentials Gathered?
- [ ] MongoDB Atlas URI
- [ ] Google OAuth Client ID (production)
- [ ] Email service credentials
- [ ] Domain name registered

### Files Prepared?
- [ ] `server/.env` created with real values
- [ ] `.env.local` created with real values
- [ ] `npm install` run in server/
- [ ] Tested locally one more time

### Ready to Deploy?
- [ ] Read `DEPLOYMENT.md`
- [ ] Picked hosting provider
- [ ] Created accounts on all platforms
- [ ] Have admin access to all services

---

## 🎯 Hosting Quick Links

| Provider | Backend | Frontend | Database | Cost |
|----------|---------|----------|----------|------|
| **Heroku** | ✅ | ❌ | ❌ | $7+ |
| **Railway** | ✅ | ⚠️ | ❌ | $5-10 |
| **Vercel** | ❌ | ✅ | ❌ | Free |
| **Netlify** | ❌ | ✅ | ❌ | Free |
| **MongoDB Atlas** | ❌ | ❌ | ✅ | Free |
| **DigitalOcean** | ✅ | ✅ | ❌ | $5+ |
| **AWS** | ✅ | ✅ | ✅ | $1-50+ |

**Recommended Stack:** Heroku (backend) + Vercel (frontend) + MongoDB Atlas (database)

---

## 🔐 Security Checklist (Condensed)

- [ ] `.env` NOT committed to git
- [ ] `.env.example` has placeholder values only
- [ ] HTTPS enabled (SSL certificate)
- [ ] `NODE_ENV=production` on backend
- [ ] `REACT_APP_API_URL` points to HTTPS
- [ ] Rate limiting enabled
- [ ] CORS restricted to your domain
- [ ] Database backups configured
- [ ] Admin passwords are strong
- [ ] No API keys in frontend code

---

## 📞 Support Resources

**If Something Breaks:**
1. Check the error message in logs
2. Google: `[error message] [platform name]`
3. Check relevant doc file above
4. Check platform's status page
5. Ask in developer community (Reddit r/webdev, etc)

**Useful Commands:**

```bash
# Test backend
curl https://api.yourdomain.com/health

# Check backend logs (Heroku)
heroku logs --tail

# Check frontend build
npm run build

# Test database connection
mongosh "your_mongodb_uri"

# Clear DNS cache (Windows)
ipconfig /flushdns
```

---

## 🎓 Key Concepts

**Environment Variables:**
Values that change between development and production, stored securely outside code.

**API URL:**
Where frontend calls backend. Changes: localhost (dev) → yourdomain.com (prod).

**CORS:**
Allows frontend on yourdomain.com to call backend on api.yourdomain.com.

**MongoDB Atlas:**
Cloud database. More secure than local MongoDB.

**SSL/HTTPS:**
Encrypts data in transit. Required for production.

**Rate Limiting:**
Blocks spam. Limits: 100 requests per IP per 15 minutes.

**OAuth:**
Login with Google. Need different credentials for dev vs prod.

---

## 🚀 Go-Live Workflow

```
1. Backup everything
2. Deploy backend
3. Test backend at /health
4. Deploy frontend
5. Test complete flow
6. Update DNS records
7. Wait 15 min - 24 hours
8. Test on production domain
9. Monitor logs for 24 hours
10. Celebrate! 🎉
```

---

## 💡 Pro Tips

1. **Deploy backend FIRST** - Never frontend first!
2. **Test on localhost** - Use production credentials locally
3. **Keep credentials safe** - Use platform secret managers
4. **Monitor logs** - Check immediately after deploying
5. **Automate deploys** - Connect GitHub for auto-deploy
6. **Backup database** - Always have backups
7. **Set up alerts** - Get notified if something breaks
8. **Document everything** - Future you will thank present you

---

## 📋 Next Steps

1. ✅ You have secure configuration ← YOU ARE HERE
2. → Read `DEPLOYMENT.md` (30 min)
3. → Set up accounts (1 hour)
4. → Deploy backend (15 min)
5. → Deploy frontend (15 min)
6. → Configure DNS (1 min, wait 15 min - 24 hours)
7. → Test everything (30 min)
8. → Go live! 🎉

---

**Status:** ✅ Production Ready
**Version:** 1.0
**Last Updated:** January 26, 2026
**Estimated Deployment Time:** 3-4 hours

Good luck! 🚀
