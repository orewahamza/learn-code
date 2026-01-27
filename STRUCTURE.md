# learnCode App Structure - Quick Reference

## ✅ Complete File Structure

```
teck-stack/
├── public/
│   └── index.html                    ✅ HTML template with SEO
├── src/
│   ├── pages/
│   │   ├── Home.jsx                  ✅ Landing page
│   │   ├── Courses.jsx               ✅ All courses with search
│   │   ├── LearningPath.jsx          ✅ Learning path wrapper
│   │   ├── Quiz.jsx                  ✅ Interactive quiz
│   │   ├── Login.jsx                 ✅ Login with validation
│   │   ├── Signup.jsx                ✅ Signup with password strength
│   │   ├── Roadmaps.jsx              ✅ Career roadmaps
│   │   ├── Premium.jsx               ✅ Premium subscription
│   │   ├── Profile.jsx               ✅ User profile
│   │   ├── Settings.jsx              ✅ Settings page
│   │   └── NotFound.jsx              ✅ 404 page
│   ├── App.jsx                       ✅ Main app with routing
│   ├── Layout.jsx                    ✅ Sidebar layout
│   ├── LearningPath.jsx              ✅ Learning path component
│   ├── index.js                      ✅ Entry point
│   └── index.css                     ✅ Global styles
├── package.json                      ✅ Dependencies
├── tailwind.config.js                ✅ Tailwind config
├── README-SETUP.md                   ✅ Full documentation
└── STRUCTURE.md                      ✅ This file
```

## 🎯 Routes Configured

| Route              | Component    | Description                      |
| ------------------ | ------------ | -------------------------------- |
| `/`                | Home         | Landing page with hero & courses |
| `/courses`         | Courses      | All courses with search/filter   |
| `/learn/:courseId` | LearningPath | Duolingo-style learning path     |
| `/quiz/:lessonId`  | Quiz         | Interactive quiz                 |
| `/roadmaps`        | Roadmaps     | Career learning paths            |
| `/premium`         | Premium      | Premium subscription             |
| `/profile`         | Profile      | User profile & stats             |
| `/settings`        | Settings     | Settings page                    |
| `/login`           | Login        | Login page (public)              |
| `/signup`          | Signup       | Signup page (public)             |
| `*`                | NotFound     | 404 page                         |

## 🎨 Design System Applied

✅ **Colors**: Exact hex codes from screenshot
✅ **Typography**: Inter font, weights 400-900
✅ **Borders**: 8px-32px border radius
✅ **Shadows**: Glow effects on buttons
✅ **Icons**: Lucide React only
✅ **Spacing**: Consistent padding/margins

## 📱 Sidebar Navigation

**Main Navigation:**

- Home (/)
- Courses (/courses)
- Roadmaps (/roadmaps)
- Premium (/premium) - Red highlight

**Bottom Navigation:**

- Profile (/profile)
- Settings (/settings)
- Logout

**User Profile Card:**

- Avatar with initial
- Name & streak
- XP counter

## 🚀 Quick Start Commands

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 🎓 Learning Path Features

**Three States:**

1. **Completed** - Red gradient, stars, XP
2. **Current** - Blue gradient, pulsing, "Start" button
3. **Locked** - Greyed out, lock icon

**Header:**

- Language icon
- Progress bar with shimmer
- XP counter

**Layout:**

- Alternating left/right nodes
- Central gradient path line
- Trophy at the end

## 🧩 Component Hierarchy

```
App
└── Router
    ├── Login (public)
    ├── Signup (public)
    └── Layout (protected)
        ├── Sidebar
        │   ├── Logo
        │   ├── User Profile Card
        │   ├── Navigation Links
        │   └── Bottom Navigation
        └── Outlet (page content)
            ├── Home
            ├── Courses
            ├── LearningPath
            ├── Quiz
            ├── Roadmaps
            ├── Premium
            ├── Profile
            ├── Settings
            └── NotFound
```

## 🔐 Authentication Flow

1. User visits protected route
2. Check `isAuthenticated` (currently mock)
3. If false → redirect to `/login`
4. If true → show Layout with Sidebar
5. Login/Signup → set auth state → redirect to `/`

## 📊 State Management

Currently using **React useState** in components.

**User State** (Layout.jsx):

- name, email, xp, streak

**Learning Path State** (LearningPath.jsx):

- levels array with status, stars, xp

**Quiz State** (Quiz.jsx):

- currentQuestion, score, answers

## 🎯 Next Steps

1. **Install & Run:**

   ```bash
   npm install
   npm start
   ```

2. **Test Navigation:**
   - Click sidebar links
   - Test mobile menu
   - Try all routes

3. **Customize:**
   - Update course data
   - Add real authentication
   - Connect to backend API

4. **Deploy:**
   - Build: `npm run build`
   - Deploy to Vercel/Netlify

## 📝 Notes

- All components use learnCode design system
- Mobile responsive with hamburger menu
- Protected routes with auth wrapper
- SEO-optimized with meta tags
- Accessible with semantic HTML

---

**Status: ✅ COMPLETE - Ready to run!**
