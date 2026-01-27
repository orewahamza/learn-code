# learnCode - Full Flow Test Guide

## Test Flow: Sign up → Enroll → Learn → Quiz → Check XP

Follow these steps to manually test the complete user flow:

---

## 1. SIGN UP (http://localhost:3000/signup)

**Steps:**

1. Open your browser and go to `http://localhost:3000/signup`
2. Fill in the form:
   - **Name:** Test User
   - **Email:** testuser@example.com
   - **Password:** TestPass123!
3. Click "Create Account" button
4. Wait for redirect

**Expected Result:**

- User is created in MongoDB
- Redirected to homepage or dashboard
- User should see their name in the sidebar

---

## 2. ENROLL IN A COURSE (http://localhost:3000/courses)

**Steps:**

1. Go to Courses page (`http://localhost:3000/courses`)
2. Browse available courses
3. Click on any FREE course (e.g., "JavaScript Mastery")
4. On the course page, click "Start Course" button

**Expected Result:**

- Loading spinner shows during enrollment
- If offline, error alert appears with retry option
- On success, navigate to learning path
- Course appears in sidebar under "Learning Path"

---

## 3. LEARN CONTENT (http://localhost:3000/learn/{courseId})

**Steps:**

1. You should be on the learning path page
2. Click on a lesson (e.g., "Lesson 1")
3. You'll see study resources organized by category:
   - Documentation & Guides
   - Interactive Tutorials
   - Video Courses
   - Practice & Challenges
4. Browse the external resources
5. Click "Take Quiz" button when ready

**Expected Result:**

- Learning content page loads with curated resources
- Resources are clickable and open in new tabs
- "Take Quiz" button is visible and functional

---

## 4. TAKE QUIZ (http://localhost:3000/quiz/{lessonId}?course={courseId})

**Steps:**

1. Answer the quiz questions (5 random questions from the bank)
2. Click an answer option to select it
3. Click "Check Answer" to verify
4. Click "Next" to proceed
5. Complete all 5 questions

**Expected Result:**

- Progress bar updates as you answer
- Correct answers show green highlight
- Wrong answers show red highlight
- Explanation appears after checking each answer

---

## 5. CHECK XP (Results & Profile)

**After Quiz Completion:**

1. See your final score percentage
2. If passed (≥70%): See "Level Complete!" and XP earned
3. If failed (<70%): See "Keep Practicing!" with retry option

**Check Profile (http://localhost:3000/profile):**

1. Navigate to Profile page
2. Verify your stats:
   - Total XP increased
   - Level progress updated
   - Day streak maintained
   - Quizzes Passed count increased (if passed)
   - Enrolled courses shown with progress

**Expected XP Rewards:**

- First quiz pass: +50 XP
- Retry quiz pass: +10 XP
- Lesson completion: +25 XP
- Course completion: +200 XP bonus

---

## Error Handling Tests

### Test Offline Behavior:

1. Disconnect internet
2. Try to enroll in a course or view profile
3. **Expected:** "You appear to be offline" alert appears at bottom
4. Reconnect internet
5. **Expected:** Offline alert disappears

### Test API Failure:

1. Stop the backend server (Ctrl+C in server terminal)
2. Try to enroll or view stats
3. **Expected:** User-friendly error alert with "Retry" button
4. Restart server and click Retry
5. **Expected:** Action completes successfully

---

## Quick Checklist

- [ ] User can sign up successfully
- [ ] User can enroll in a free course
- [ ] Learning path shows enrolled course
- [ ] Lesson content loads with resources
- [ ] Quiz loads with random questions
- [ ] Quiz answers show correct/incorrect states
- [ ] Quiz results show score and XP earned
- [ ] Profile shows updated XP and stats
- [ ] Error alerts appear when offline
- [ ] Retry button works after errors

---

## API Endpoints Involved

| Flow Step   | Backend Endpoint               |
| ----------- | ------------------------------ |
| Sign Up     | POST `/api/auth/register`      |
| Login       | POST `/api/auth/login`         |
| Enroll      | POST `/api/user/:email/enroll` |
| Quiz Submit | POST `/api/quiz/submit`        |
| Get Stats   | GET `/api/user/:email/stats`   |
| Update XP   | POST `/api/user/:email/xp`     |

---

**Server URLs:**

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
