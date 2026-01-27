# Learning Path Component - learnCode

A beautiful, gamified learning path component built with React and Tailwind CSS, following the exact design system from your learnCode platform.

## 🎨 Design System Compliance

This component strictly adheres to the extracted design system:

- **Colors**: Pure black backgrounds, red primary (#EF4444), blue/purple accents
- **Typography**: Inter font family with proper weights (400-900)
- **Shadows**: Glow effects matching the home page
- **Border Radius**: 8px-32px rounded corners
- **Spacing**: Consistent with the original design

## 📁 Files Created

1. **LearningPath.jsx** - Main React component (for use in React projects)
2. **tailwind.config.js** - Tailwind configuration with custom colors and animations
3. **learning-path-demo.html** - Standalone demo (open directly in browser)

## 🚀 Quick Start

### Option 1: View Demo Immediately

Simply open `learning-path-demo.html` in your browser to see the component in action!

### Option 2: Use in React Project

1. **Install dependencies:**

```bash
npm install lucide-react
npm install -D tailwindcss
```

2. **Copy the Tailwind config:**
   Use the provided `tailwind.config.js` or merge it with your existing config.

3. **Import and use the component:**

```jsx
import LearningPath from "./LearningPath";

function App() {
  return <LearningPath />;
}
```

## 🎯 Features

### Three Level States:

1. **Completed** (Red gradient)
   - Shows 1-3 stars based on performance
   - Displays earned XP
   - Clickable to review

2. **Current** (Blue gradient, pulsing)
   - Larger scale (110%)
   - Pulsing animation
   - "Start Level" button
   - Blue glow effect

3. **Locked** (Greyed out, 50% opacity)
   - Lock icon
   - Not clickable
   - Reduced visual prominence

### UI Components:

- **Sticky Progress Header** with:
  - Language icon/flag
  - Course title and level progress
  - XP counter with lightning icon
  - Animated progress bar with shimmer effect

- **Vertical Path**:
  - Gradient central line (red → purple → blue)
  - Alternating left/right node layout
  - Smooth transitions and hover effects

- **Level Cards**:
  - Title and level number
  - Star rating (for completed)
  - XP earned badge
  - Interactive hover states

## 🎨 Customization

### Change Course Data:

Edit the `levels` state in the component:

```jsx
const [levels, setLevels] = useState([
  {
    id: 1,
    title: "Your Level Name",
    status: "completed", // or 'current' or 'locked'
    stars: 3, // 0-3
    xp: 50,
  },
  // ... more levels
]);
```

### Change Language/Course:

Update the header section:

```jsx
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#60A5FA]...">
  Py {/* Change to your language icon */}
</div>
<h1 className="text-xl font-bold">Python Mastery</h1> {/* Change title */}
```

### Adjust Total XP:

```jsx
const totalXP = 500; // Change this value
```

## 📱 Responsive Design

The component is fully responsive:

- Mobile: Stacked layout with smaller nodes
- Tablet: Optimized spacing
- Desktop: Full alternating layout

## 🎭 Animations

- **Pulse effect** on current level (3s cycle)
- **Shimmer effect** on progress bar
- **Hover scale** on interactive elements
- **Smooth transitions** on all state changes

## 🎨 Color Reference

```css
Primary Red: #EF4444 → #DC2626
Blue Accent: #3B82F6 → #60A5FA
Purple Accent: #A855F7
Background: #000000
Card Background: #1a1a1a
Border: #2D2D2D
Text Primary: #FFFFFF
Text Secondary: #9CA3AF
Text Tertiary: #6B7280
```

## 🔧 Integration Tips

1. **With React Router**: Add navigation in `handleLevelClick`
2. **With State Management**: Connect to Redux/Context for level data
3. **With Backend**: Fetch level progress from API
4. **With Analytics**: Track level starts/completions

## 📦 Dependencies

- React 18+
- Tailwind CSS 3+
- lucide-react (for icons)

## 🎯 Next Steps

Consider adding:

- Level completion animations
- Sound effects on interactions
- Achievement badges
- Leaderboard integration
- Daily streak counter
- Practice mode toggle

## 💡 Tips

- The component uses `lucide-react` icons - make sure to install it
- All colors are from your design system - don't add new ones
- The sticky header scrolls with the page
- Mobile users see a simplified layout

---

Built with ❤️ following the learnCode design system
