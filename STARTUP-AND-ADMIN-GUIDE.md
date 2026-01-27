# 🚀 STARTUP GUIDE & BECOMING ADMIN

**Complete Step-by-Step Instructions**

---

## 📋 TABLE OF CONTENTS

1. [Prerequisites](#prerequisites)
2. [Start the Server](#start-the-server)
3. [Start the Frontend](#start-the-frontend)
4. [Become an Admin](#become-an-admin)
5. [Test Everything](#test-everything)
6. [Troubleshooting](#troubleshooting)

---

## ✅ PREREQUISITES

### You Need:
- **Node.js** (v16+) - [Download](https://nodejs.org/)
- **MongoDB** (local or Atlas account)
- **Git** (optional)

### Check You Have Them:
```bash
node --version          # Should be v16 or higher
npm --version           # Should come with Node.js
mongod --version        # For local MongoDB (optional)
```

---

## 🔧 SETUP (Do This First, Once)

### Step 1: Install Dependencies

```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../
npm install
```

✅ This installs all packages including the newly added `jsonwebtoken` for JWT auth

### Step 2: Create Environment Files

#### Backend (.env file)

```bash
cd server
```

Create a file named `.env` with these values:

```dotenv
# Server Config
PORT=5000
NODE_ENV=development

# ✅ CRITICAL: Generate JWT Secret
JWT_SECRET=your-random-secret-key-here

# Database
MONGO_URI=mongodb://localhost:27017/learnCode

# URLs
CLIENT_URL=http://localhost:3000

# Google OAuth (get from https://console.cloud.google.com/)
GOOGLE_CLIENT_ID=your_google_client_id_here

# Email (optional - for password reset)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

**⚠️ How to Generate JWT_SECRET:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
Copy the output and paste it as your JWT_SECRET

#### Frontend (.env.local file)

```bash
cd ..  # Go back to root
```

Create a file named `.env.local` with:

```dotenv
REACT_APP_API_URL=http://localhost:5000
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id_here
```

### Step 3: Start MongoDB

**Option A: Local MongoDB**
```bash
# Windows
mongod

# macOS
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

**Option B: MongoDB Atlas (Cloud)**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create account and cluster
3. Get connection string
4. Use it in server/.env as MONGO_URI

---

## 🎬 START THE SERVER

### Terminal 1: Backend Server

```bash
cd server
npm start
```

You should see:
```
🚀  learnCode SERVER STARTED  🚀
---------------------------------
📡  API:       http://localhost:5000
💻  WEBSITE:   http://localhost:3000
🔒  Security:  ⚠️  Development Mode
---------------------------------
```

✅ **Server is running!**

### Terminal 2: Frontend Server

Open a NEW terminal in the project root:

```bash
npm start
```

You should see:
```
Compiled successfully!

Local:            http://localhost:3000
On Your Network:  http://192.168.x.x:3000
```

✅ **Frontend is running!**

---

## 👤 BECOME AN ADMIN

### Method 1: Using Admin Promotion Script (RECOMMENDED)

This is the **safest and easiest** method.

#### Step 1: Sign Up First

1. Go to http://localhost:3000
2. Click **"Sign Up"**
3. Create account with any email (e.g., `admin@example.com`)
4. Complete signup

✅ You're now a regular user

#### Step 2: Run Promotion Script

Open a **NEW terminal** (keep server and frontend running):

```bash
cd server
node scripts/promoteAdmin.js admin@example.com
```

**Replace `admin@example.com` with your actual email**

You should see:
```
📡 Connecting to MongoDB...
🔍 Searching for user: admin@example.com
✅ Success! Your Name (admin@example.com) is now an ADMIN.
```

✅ **You're now an admin!**

#### Step 3: Login Again

1. Logout from the website
2. Login with your admin account
3. You'll now see the **Admin Dashboard** button

---

### Method 2: Direct MongoDB Edit (If Script Doesn't Work)

#### For Local MongoDB:

```bash
# Open MongoDB shell
mongo

# Use the learnCode database
use learnCode

# Find your user
db.users.findOne({ email: "your-email@example.com" })

# Update role to admin
db.users.updateOne(
  { email: "your-email@example.com" },
  { $set: { role: "admin" } }
)

# Verify
db.users.findOne({ email: "your-email@example.com" })
```

You should see `"role" : "admin"` in the output.

#### For MongoDB Atlas (Cloud):

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Select your cluster
3. Click "Collections"
4. Find your database and "users" collection
5. Find your user document
6. Edit it and change `role` from `"user"` to `"admin"`
7. Save

---

### Method 3: Database GUI Tool

If you have a MongoDB GUI like **MongoDB Compass**:

1. Open MongoDB Compass
2. Connect to your database
3. Navigate to: `learnCode` → `users`
4. Find your user document
5. Edit the `role` field: change from `"user"` to `"admin"`
6. Save

---

## ✅ VERIFY YOU'RE ADMIN

### In the Website:

1. Login to http://localhost:3000 with your admin account
2. Look at the navigation bar
3. You should see **"Admin Dashboard"** link
4. Click it to access admin features

### In the Terminal:

When you login, you'll see in the browser console:
```javascript
// Your user object will include a 'token' field:
{
  "_id": "...",
  "email": "admin@example.com",
  "role": "admin",
  "token": "eyJhbGc..." // JWT token
  // ... other fields
}
```

✅ **Token proves you're authenticated!**

---

## 🧪 TEST EVERYTHING

### Test User Authentication

1. **Sign up as regular user** (http://localhost:3000/signup)
2. **Login** with email/password
3. **Check Developer Tools** (F12 → Application → localStorage)
   - Should see `learncode_user` with your info

### Test Admin Features

1. **Become admin** (follow steps above)
2. **Login as admin**
3. **Go to Admin Dashboard**
4. You should see:
   - Total users count
   - Premium users count
   - Global XP
   - User management table
   - Options to promote users, toggle premium, delete users

### Test API Endpoints (Using Postman or cURL)

#### 1. Login (Get JWT Token)

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "name": "Test User",
    "password": "password123"
  }'
```

✅ Response includes `"token": "eyJhbGc..."`

#### 2. Access Protected Route (Using Token)

```bash
curl -X GET http://localhost:5000/api/user/test@example.com \
  -H "Authorization: Bearer eyJhbGc..." \
  -H "Content-Type: application/json"
```

Replace `eyJhbGc...` with your actual token

✅ Response shows your user data

#### 3. Access Admin Route (With Admin Token)

```bash
curl -X GET http://localhost:5000/api/admin/stats \
  -H "Authorization: Bearer admintoken..." \
  -H "Content-Type: application/json"
```

✅ Response shows admin statistics

---

## 🐛 TROUBLESHOOTING

### Server Won't Start

**Error: `Cannot find module 'jsonwebtoken'`**
```bash
cd server
npm install jsonwebtoken
```

**Error: `MONGO_URI is not defined`**
- Check that `server/.env` exists
- Check that `MONGO_URI=...` line is there
- Restart the server

**Error: `Port 5000 is already in use`**
```bash
# Kill process on port 5000
# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# macOS/Linux:
lsof -i :5000
kill -9 <PID>
```

### MongoDB Connection Failed

**Local MongoDB:**
```bash
# Make sure MongoDB is running
mongod

# Verify connection
mongo
> db
# Should show 'test' or similar
```

**MongoDB Atlas:**
- Verify connection string is correct
- Check IP whitelist allows your IP
- Verify username/password are correct

### Admin Script Not Finding User

**Error: `User not found with email`**

1. Make sure you signed up first
2. Use the **exact same email** you signed up with
3. Example:
   ```bash
   # You signed up with: myemail@gmail.com
   # Then run:
   node scripts/promoteAdmin.js myemail@gmail.com
   ```

4. Check MongoDB has the user:
   ```bash
   mongo
   use learnCode
   db.users.find()  # Should list your user
   ```

### Login Not Working

**Error: `Invalid credentials`**
- Make sure you're using the correct password
- If using Google OAuth, make sure `GOOGLE_CLIENT_ID` is set
- Check browser console for error details (F12)

**Error: `No token provided`**
- Clear browser localStorage (F12 → Application → Clear Site Data)
- Logout and login again
- Check that server returned a token

### Admin Dashboard Shows "Access Denied"

1. Make sure you ran the promotion script
2. Logout and login again
3. Clear browser cache (Ctrl+Shift+Del)
4. Check MongoDB that your `role` is `"admin"`

---

## 🚀 NEXT STEPS

Once everything is working locally:

1. **Read [DEPLOYMENT.md](DEPLOYMENT.md)** to deploy to production
2. **Test with real data** - create multiple users, courses, etc.
3. **Review [PRODUCTION-CHECKLIST.md](PRODUCTION-CHECKLIST.md)** before deploying
4. **Setup monitoring** using guides in [DEPLOYMENT.md](DEPLOYMENT.md)

---

## 📞 QUICK REFERENCE

### Common Commands

```bash
# Start everything (from project root)
cd server && npm start      # Terminal 1
npm start                   # Terminal 2 (from root)

# Promote user to admin
cd server && node scripts/promoteAdmin.js email@example.com

# Generate JWT Secret
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Stop servers
Ctrl+C (in each terminal)

# Clear all data (DANGEROUS!)
# mongo
# use learnCode
# db.users.deleteMany({})
# db.courses.deleteMany({})
```

### File Locations

- **Backend code:** `server/index.js`
- **Frontend code:** `src/App.jsx`
- **Admin page:** `src/pages/AdminDashboard.jsx`
- **Authentication:** `src/context/AuthContext.js`
- **Database:** MongoDB (local or Atlas)
- **Config:** `server/.env` and `src/.env.local`

---

## ✨ YOU'RE ALL SET!

Your learnCode platform is now:
- ✅ Running locally
- ✅ Secured with JWT authentication
- ✅ Protected with input validation
- ✅ Rate-limited against attacks
- ✅ Ready for admin management

**Now let's make it awesome!** 🎉

---

## 📖 NEED MORE HELP?

- **[CODE-ANALYSIS-FINDINGS.md](CODE-ANALYSIS-FINDINGS.md)** - All bugs found and how they were fixed
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - How to deploy to production
- **[PRODUCTION-CHECKLIST.md](PRODUCTION-CHECKLIST.md)** - Pre-launch verification
- **[ENV-SETUP.md](ENV-SETUP.md)** - Detailed environment variable guide

