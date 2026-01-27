# learnCode - Gamified Coding Learning Platform

A beautiful, gamified coding learning platform built with React, Tailwind CSS, and React Router. Inspired by Duolingo's engaging learning experience, adapted for programming education.

## 🎨 Design System

This project follows a strict design system extracted from the original learnCode home page:

### Colors

- **Background**: Pure Black (#000000)
- **Primary Red**: #EF4444 → #DC2626
- **Blue Accent**: #3B82F6 → #60A5FA
- **Purple Accent**: #A855F7 → #9333EA
- **Success Green**: #10B981
- **Text Primary**: #FFFFFF
- **Text Secondary**: #9CA3AF
- **Text Tertiary**: #6B7280
- **Card Background**: #1a1a1a
- **Border**: #2D2D2D

### Typography

- **Font Family**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700, 800, 900

### Spacing & Borders

- **Border Radius**: 8px - 32px
- **Shadows**: Glow effects on interactive elements
- **Spacing**: Generous, modern layout

## 📁 Project Structure

```
teck-stack/
├── src/
│   ├── pages/
│   │   ├── Home.jsx              # Landing page with hero & courses
│   │   ├── Courses.jsx           # All courses with search/filter
│   │   ├── LearningPath.jsx      # Duolingo-style learning path
│   │   ├── Quiz.jsx              # Interactive quiz component
│   │   ├── Login.jsx             # Login page
│   │   ├── Signup.jsx            # Signup page with validation
│   │   ├── Roadmaps.jsx          # Career roadmaps
│   │   ├── Premium.jsx           # Premium subscription
│   │   ├── Profile.jsx           # User profile
│   │   ├── Settings.jsx          # Settings page
│   │   └── NotFound.jsx          # 404 page
│   ├── App.jsx                   # Main app with routing
│   ├── Layout.jsx                # Layout with sidebar
│   ├── LearningPath.jsx          # Learning path component
│   ├── index.js                  # Entry point
│   └── index.css                 # Global styles
├── public/
│   └── index.html
├── package.json
├── tailwind.config.js
└── README-SETUP.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. **Install dependencies:**

```bash
npm install
```

2. **Start the development server:**

```bash
npm start
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 🎯 Features

### ✅ Implemented

1. **Authentication**
   - Login page with form validation
   - Signup page with password strength indicator
   - Social login UI (Google, GitHub)
   - Protected routes

2. **Navigation**
   - Responsive sidebar with user profile
   - Mobile hamburger menu
   - Active route highlighting
   - XP and streak display

3. **Pages**
   - **Home**: Hero section, stats, featured courses
   - **Courses**: Search, filter, course cards
   - **Learning Path**: Duolingo-style vertical path with 3 states
   - **Quiz**: Interactive quiz with scoring
   - **Roadmaps**: Career learning paths
   - **Premium**: Subscription page
   - **Profile**: User stats and info
   - **Settings**: Settings navigation

4. **Learning Path Component**
   - ✅ Completed levels (red, stars, XP)
   - ✅ Current level (blue, pulsing, "Start" button)
   - ✅ Locked levels (greyed out, lock icon)
   - ✅ Sticky progress header
   - ✅ Animated progress bar
   - ✅ Alternating left/right layout

5. **Quiz Component**
   - Multiple choice questions
   - Code snippet support
   - Answer validation
   - Explanations
   - Score tracking
   - Results screen

## 🎨 Design Consistency

All components strictly follow the extracted design system:

- No new colors introduced
- Consistent button styling
- Matching shadows and glows
- Same border radius values
- Inter font throughout
- Lucide React icons only

## 📱 Responsive Design

- Mobile-first approach
- Hamburger menu on mobile
- Responsive grids
- Touch-friendly buttons
- Optimized layouts for all screen sizes

## 🔧 Customization

### Update Course Data

Edit `src/pages/Home.jsx` or `src/pages/Courses.jsx`:

```jsx
const courses = [
  {
    id: "your-course-id",
    title: "Your Course",
    description: "Description",
    level: "beginner", // or 'intermediate', 'advanced'
    // ... more fields
  },
];
```

### Update Learning Path

Edit `src/LearningPath.jsx`:

```jsx
const [levels, setLevels] = useState([
  {
    id: 1,
    title: "Your Level",
    status: "completed", // or 'current', 'locked'
    stars: 3,
    xp: 50,
  },
  // ... more levels
]);
```

### Add New Routes

1. Create page component in `src/pages/`
2. Import in `src/App.jsx`
3. Add route:

```jsx
<Route path="/your-path" element={<YourComponent />} />
```

4. Add to sidebar in `src/Layout.jsx`:

```jsx
const navItems = [
  // ...
  { path: "/your-path", icon: YourIcon, label: "Your Label" },
];
```

## 🎓 Learning Path States

### Completed

- Red gradient background
- 1-3 stars based on performance
- XP badge
- Clickable to review

### Current

- Blue gradient background
- 110% scale
- Pulsing animation
- "Start Level" button
- Blue glow effect

### Locked

- Dark background
- 50% opacity
- Lock icon
- Not clickable

## 🔐 Authentication

Currently uses mock authentication. To integrate real auth:

1. Replace `isAuthenticated` in `App.jsx`
2. Implement login/signup logic in respective pages
3. Add token storage (localStorage/cookies)
4. Connect to your backend API

## 📊 State Management

Currently uses React useState. For larger apps, consider:

- Redux Toolkit
- Zustand
- React Context API

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag and drop the build folder to Netlify
```

### GitHub Pages

```bash
npm install --save-dev gh-pages
# Add to package.json:
# "homepage": "https://yourusername.github.io/teck-stack"
# "predeploy": "npm run build"
# "deploy": "gh-pages -d build"
npm run deploy
```

## 🐛 Troubleshooting

### Module not found errors

```bash
npm install
```

### Tailwind styles not working

Make sure `tailwind.config.js` is in the root directory and includes the correct content paths.

### Icons not showing

```bash
npm install lucide-react
```

## 📝 TODO / Future Enhancements

- [ ] Backend API integration
- [ ] Real authentication with JWT
- [ ] Database for user progress
- [ ] Actual quiz content
- [ ] Code editor integration
- [ ] Achievement system
- [ ] Leaderboards
- [ ] Social features
- [ ] Dark/Light mode toggle
- [ ] Internationalization (i18n)
- [ ] Analytics integration
- [ ] Email notifications
- [ ] Payment integration for Premium

## 🤝 Contributing

This is a personal project, but feel free to fork and customize!

## 📄 License

MIT License - feel free to use for your own projects

## 🙏 Acknowledgments

- Design inspired by Duolingo and modern learning platforms
- Icons by Lucide React
- Fonts by Google Fonts (Inter)

---

**Built with ❤️ using React, Tailwind CSS, and the learnCode design system**
