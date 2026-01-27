# ✅ PRODUCTION DEPLOYMENT CHECKLIST

Use this checklist to ensure your app is fully production-ready before deploying.

---

## 🔒 Security Checks

### Credentials & Secrets
- [ ] `.env` file is in `.gitignore` (never committed)
- [ ] `.env.example` exists with PLACEHOLDER values only
- [ ] No real API keys in git history
- [ ] Real credentials only in production platform secrets
- [ ] MongoDB password is strong (20+ characters)
- [ ] Google OAuth has production credentials created
- [ ] Email service credentials are secure

### Code Security
- [ ] No `console.log()` statements with sensitive data
- [ ] No hardcoded URLs (all use environment variables)
- [ ] No test credentials in code
- [ ] All API endpoints validate input (Joi validation added)
- [ ] Database queries are parameterized (prevent SQL injection)
- [ ] CORS configured to specific domain, not `*`

### HTTPS & SSL
- [ ] SSL certificate obtained (Let's Encrypt or provider)
- [ ] HTTPS forced (redirect HTTP → HTTPS)
- [ ] No mixed content warnings
- [ ] Security headers set (helmet.js added)
- [ ] Rate limiting enabled

---

## 🗄️ Database Checks

### MongoDB Setup
- [ ] MongoDB Atlas cluster created and secured
- [ ] Database user created with strong password
- [ ] IP whitelist configured (your server IP)
- [ ] Backups enabled (automatic snapshots)
- [ ] Database indexes created for common queries
- [ ] `MONGO_URI` points to production database
- [ ] Connection string uses `retryWrites=true`

### Data Safety
- [ ] Backup strategy documented
- [ ] Database credentials NOT in git
- [ ] Production database separate from development
- [ ] Regular backups tested & verified

---

## 🖥️ Backend Checks

### Environment Configuration
- [ ] `NODE_ENV=production`
- [ ] `PORT` configured (usually 5000 or 3000)
- [ ] `CLIENT_URL` matches frontend domain exactly
- [ ] `MONGO_URI` is MongoDB Atlas connection
- [ ] All required environment variables set
- [ ] No default/fallback values for production settings

### Dependencies
- [ ] `npm install` completed without errors
- [ ] No vulnerable packages (`npm audit`)
- [ ] Production packages installed:
  - [ ] helmet (security headers)
  - [ ] express-rate-limit (rate limiting)
  - [ ] joi (validation)
- [ ] `package-lock.json` is committed

### API Endpoints
- [ ] All endpoints have error handling
- [ ] Input validation implemented (Joi schemas)
- [ ] Rate limiting applied to sensitive endpoints
- [ ] CORS restricted to production domain
- [ ] Health check endpoint working (`/health`)
- [ ] No test/debug endpoints exposed

### Logging & Monitoring
- [ ] Server logs to console/file for debugging
- [ ] Error tracking setup (optional: Sentry)
- [ ] Performance monitoring setup (optional)
- [ ] Database query logging (if needed)

### Email Service
- [ ] Email service credentials configured
- [ ] Email templates use `CLIENT_URL` from env
- [ ] Password reset emails work
- [ ] Welcome emails work
- [ ] Bounce handling configured (if applicable)

---

## 🎨 Frontend Checks

### Build & Optimization
- [ ] Production build created (`npm run build`)
- [ ] Build size optimized (< 500KB gzipped)
- [ ] No console.log statements in production build
- [ ] Source maps excluded from production
- [ ] Assets properly cached/minified

### Environment Variables
- [ ] `REACT_APP_API_URL` points to production backend
- [ ] `REACT_APP_GOOGLE_CLIENT_ID` is production credential
- [ ] `.env.production` or `.env.local` created from `.env.example`
- [ ] No hardcoded API URLs in code
- [ ] Environment variables don't include secrets

### Features
- [ ] Google OAuth login works
- [ ] Email/password signup works
- [ ] Protected routes require authentication
- [ ] API calls use correct base URL
- [ ] All pages load without errors
- [ ] Responsive design works on mobile

### Security
- [ ] No API keys exposed in frontend code
- [ ] CORS requests only to your API domain
- [ ] Local storage doesn't contain sensitive data
- [ ] Password inputs are masked
- [ ] No sensitive data in local storage/cookies

### Performance
- [ ] Images optimized
- [ ] Code splitting implemented
- [ ] Lazy loading for routes
- [ ] API calls are throttled/debounced

---

## 🌐 Domain & Hosting Checks

### Domain Setup
- [ ] Domain registered and DNS configured
- [ ] DNS records point to correct servers
- [ ] Subdomains configured:
  - [ ] `api.yourdomain.com` → Backend
  - [ ] `yourdomain.com` → Frontend
- [ ] DNS TTL set appropriately (300-3600 seconds)
- [ ] Domain renewal auto-enabled

### SSL/HTTPS
- [ ] SSL certificate installed and valid
- [ ] Certificate auto-renewal configured
- [ ] HTTPS works without warnings
- [ ] Mixed content errors resolved
- [ ] HSTS header configured

### Backend Hosting
- [ ] Application server running
- [ ] Process manager configured (PM2/Heroku/etc)
- [ ] Server restarts on failure
- [ ] Logs accessible for debugging
- [ ] Startup scripts configured

### Frontend Hosting
- [ ] Build deployed to hosting service
- [ ] Static assets cached appropriately
- [ ] Fallback to index.html for SPA routing
- [ ] CDN configured (optional but recommended)
- [ ] Gzip compression enabled

---

## 🧪 Testing Checks

### Functionality Tests
- [ ] User registration & login work
- [ ] Course enrollment works
- [ ] Quiz submission works
- [ ] Progress tracking saves correctly
- [ ] Profile page loads with correct data
- [ ] Admin dashboard accessible (if admin user)
- [ ] Premium features work

### Integration Tests
- [ ] Frontend successfully calls backend
- [ ] Database queries return correct data
- [ ] Email notifications send correctly
- [ ] Google OAuth integration works
- [ ] File uploads work (if applicable)

### Performance Tests
- [ ] Frontend loads in < 3 seconds
- [ ] API responses < 500ms
- [ ] Database queries optimized
- [ ] No N+1 queries
- [ ] Images optimized/compressed

### Security Tests
- [ ] Login required for protected pages
- [ ] Users can't access others' data
- [ ] Admin endpoints require authentication
- [ ] Rate limiting blocks excessive requests
- [ ] CORS prevents unauthorized access

---

## 📊 Monitoring & Analytics (Optional)

### Setup Monitoring
- [ ] Error tracking service setup (Sentry, Rollbar)
- [ ] Performance monitoring setup (New Relic, DataDog)
- [ ] Log aggregation setup (ELK, Papertrail)
- [ ] Uptime monitoring configured
- [ ] Alerts configured for errors/downtime

### Analytics (Optional)
- [ ] Google Analytics configured
- [ ] User behavior tracking setup
- [ ] Goal/conversion tracking
- [ ] Custom events for important actions

---

## 📋 Documentation

- [ ] README.md updated for production
- [ ] DEPLOYMENT.md completed
- [ ] ENV-SETUP.md completed
- [ ] API documentation created/updated
- [ ] Database schema documented
- [ ] Deployment runbook created

---

## 👥 Team Handoff

- [ ] Admin credentials secured & documented
- [ ] Emergency contact list created
- [ ] On-call procedure documented
- [ ] Backup/restore procedure tested
- [ ] Team has access to:
  - [ ] Git repository
  - [ ] Hosting dashboard
  - [ ] Database access
  - [ ] Domain registrar
  - [ ] Email service
  - [ ] Monitoring tools

---

## 🚀 Final Deployment Steps

### 48 Hours Before Launch
- [ ] Final security audit
- [ ] Performance test under load
- [ ] Backup current/previous version
- [ ] Test rollback procedure
- [ ] Brief team on launch procedure

### 24 Hours Before Launch
- [ ] Verify all environment variables one more time
- [ ] Test complete user flow
- [ ] Final health check
- [ ] Staging environment matches production

### Launch Day
- [ ] Disable analytics/notifications during rollout
- [ ] Deploy backend first, verify it's running
- [ ] Deploy frontend, verify it loads
- [ ] Test 3-5 complete user flows
- [ ] Monitor logs for errors
- [ ] Enable notifications/analytics once stable
- [ ] Communicate status to team

### Post-Launch
- [ ] Monitor logs for 24 hours
- [ ] Check error tracking service
- [ ] Verify backups are running
- [ ] Thank team & celebrate! 🎉

---

## 📞 Critical Information to Have Ready

**Backend Deployment:**
- API URL: `https://api.yourdomain.com`
- Server: `[Platform: Heroku/Railway/DO/AWS/etc]`
- Process: `[Logs/Restart commands]`

**Frontend Deployment:**
- Site URL: `https://yourdomain.com`
- Hosting: `[Platform: Vercel/Netlify/DO/etc]`
- Build command: `npm run build`

**Database:**
- Connection: `MongoDB Atlas`
- Cluster: `learnCode-prod`
- Backup: `[Frequency & method]`

**Monitoring:**
- Error tracking: `[Sentry/etc]`
- Uptime: `[UptimeRobot/etc]`
- Logs: `[CloudWatch/Papertrail/etc]`

---

## ⚠️ Emergency Procedures

### If Backend is Down
1. Check health endpoint: `https://api.yourdomain.com/health`
2. Check logs: `[Platform specific command]`
3. Restart server: `[Platform specific command]`
4. Rollback if needed: `[Git rollback procedure]`

### If Database is Down
1. Check MongoDB Atlas dashboard
2. Check IP whitelist
3. Try reconnecting
4. Restore from backup if corrupted

### If Frontend is Down
1. Check hosting platform status
2. Check build logs
3. Verify environment variables
4. Rollback to previous version

### If Users Can't Login
1. Check backend is running
2. Check database connectivity
3. Check Google OAuth credentials
4. Check CORS configuration

---

## ✅ Sign-Off Checklist

- [ ] All items above completed
- [ ] Team reviewed and approved
- [ ] Stakeholders informed
- [ ] Backup verified
- [ ] Monitoring configured
- [ ] **READY TO DEPLOY** ✅

---

**Deployment Date:** _______________  
**Deployed By:** _______________  
**Verification Date:** _______________  
**Verified By:** _______________  

---

Good luck with your deployment! 🚀
