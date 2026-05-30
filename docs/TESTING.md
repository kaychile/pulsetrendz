# Complete Testing Guide for PulseTrendz

## 🧪 Testing Overview

This guide covers testing everything in your PulseTrendz application including:
- Frontend components
- API endpoints
- Joke Generator
- Real-time features
- UI/UX

---

## ⚡ Quick Start Testing (5 Minutes)

### Step 1: Clone & Install
```bash
git clone https://github.com/kaychile/pulsetrendz.git
cd pulsetrendz

cd frontend
npm install
cd ..
```

### Step 2: Start Frontend
```bash
cd frontend
npm run dev
```

### Step 3: Open in Browser
```
http://localhost:3000
```

### Step 4: Test Features
- ✅ Home page loads
- ✅ Click "Jokes" button
- ✅ Click "Get New Joke"
- ✅ Copy joke
- ✅ Share on Twitter

---

## 🏠 Testing Home Page (PulseTrendz)

### URL
```
http://localhost:3000
```

### What to Test

#### 1. Navigation Bar
```
✓ Logo displays correctly
✓ "Explore" button visible
✓ "Discover" button visible
✓ "Dashboard" button clickable
✓ "Jokes" button clickable (yellow)
```

#### 2. Hero Section
```
✓ Title displays: "Track Trending Topics in Real-Time"
✓ Subtitle visible
✓ Search bar present
```

#### 3. Search Bar
```
✓ Click search bar
✓ Type "AI" in search
✓ Suggestions appear: "AI Trends"
✓ Click suggestion
✓ Search box updates
```

#### 4. Trending Chart
```
✓ Chart displays with data
✓ Multiple colored lines visible
✓ Hover over chart (tooltip shows values)
✓ X-axis shows time labels
✓ Y-axis shows values
```

#### 5. Trend Cards
```
✓ 4 cards display:
  - "AI in 2024" (Tech)
  - "#DanceChallenge" (Social)
  - "Bitcoin Rally" (Crypto)
  - "Minimalist Fashion" (Fashion)

✓ Each card shows:
  - Category badge with color
  - Title
  - Value number
  - Percentage change (green ↑ or red ↓)
  - Progress bar
  - "View Details" button
  - Share icon in top right
```

#### 6. Share Button (on Trend Cards)
```
✓ Click share icon
✓ Dropdown menu appears
✓ Options visible: Twitter, LinkedIn, Facebook, Copy Link
✓ Click "Copy Link" - success message
✓ Click "Twitter" - opens Twitter in new window
```

#### 7. Features Section
```
✓ 3 feature cards display:
  1. Real-Time Visualization (Indigo icon)
  2. Social Sharing (Purple icon)
  3. Personalization (Pink icon)

✓ Each card has:
  - Icon
  - Title
  - Description
  - Hover effect
```

#### 8. Footer
```
✓ Copyright text visible
✓ "© 2024 PulseTrendz"
✓ Footer at bottom of page
```

### Visual Testing Checklist
- [ ] Dark theme applied (gray-950 background)
- [ ] Text is readable (white text)
- [ ] All gradients render correctly
- [ ] Icons display from lucide-react
- [ ] Responsive on mobile (try resizing window)

---

## 😂 Testing Joke Generator

### URL
```
http://localhost:3000/joke-generator
```

### Step-by-Step Tests

#### Test 1: Page Load
```
✓ Page loads without errors
✓ Title: "Joke Generator"
✓ Heading: "Get Your Daily Laugh"
✓ Category buttons visible
✓ Large joke display area visible
✓ "Get New Joke" button visible
```

#### Test 2: Category Selection
```
✓ Click "Any" - button highlighted yellow
✓ Click "General" - updates selection
✓ Click "Knock-Knock" - updates selection
✓ Click "Programming" - updates selection

Expected: Only one button should be highlighted at a time
```

#### Test 3: Fetching a Joke
```
✓ Click "Get New Joke" button
✓ Button changes to "Loading..." with spinning icon
✓ Wait 1-2 seconds
✓ Joke displays in the white box
✓ Button returns to "Get New Joke"
```

#### Test 4: Different Joke Types

**General Joke:**
```
1. Select "General"
2. Click "Get New Joke"
3. Verify format: Single joke text
```

**Knock-Knock Joke:**
```
1. Select "Knock-Knock"
2. Click "Get New Joke"
3. Verify format:
   - "Setup" section with question
   - "Punchline" section with answer
   - Divider line between them
```

**Programming Joke:**
```
1. Select "Programming"
2. Click "Get New Joke"
3. Verify tech-related joke appears
```

#### Test 5: Copy Button
```
✓ Get a joke first
✓ Click "Copy" button
✓ Button text changes to "Copied!"
✓ After 2 seconds, changes back to "Copy"
✓ Open text editor (Notepad)
✓ Paste (Ctrl+V) - joke text appears
```

#### Test 6: Share Button
```
✓ Get a joke first
✓ Click "Share" button
✓ New tab opens with Twitter
✓ Tweet pre-filled with joke + 😄 emoji
✓ Can edit and post
```

#### Test 7: Disabled Buttons
```
✓ Before getting a joke:
  - "Copy" button should be grayed out/disabled
  - "Share" button should be grayed out/disabled
  - Cannot click them

✓ After getting a joke:
  - Both buttons become clickable
```

#### Test 8: Error Handling
```
✓ Disconnect internet
✓ Click "Get New Joke"
✓ Error message displays: "Oops! Could not fetch a joke. Try again!"
✓ Reconnect internet
✓ Try again - should work
```

### Visual Testing Checklist
- [ ] Yellow/orange gradient theme applied
- [ ] Setup and Punchline clearly separated
- [ ] Icons are visible (Laugh, Copy, Share2, RefreshCw)
- [ ] Responsive on mobile
- [ ] Loading spinner animates
- [ ] Copied feedback visible

---

## 📱 Testing Dashboard

### URL
```
http://localhost:3000/dashboard
```

### Tests

#### Test 1: Page Load
```
✓ Dashboard page loads
✓ Header shows: "Personalized Dashboard"
✓ Back to Home link visible
✓ Bell icon (notifications) visible
✓ Settings icon visible
```

#### Test 2: Category Filters
```
✓ Click "All" - highlighted
✓ Click "Tech" - updates selection
✓ Click "Social" - updates selection
✓ Click "Crypto" - updates selection
✓ Click "Fashion" - updates selection
```

#### Test 3: Time Range Buttons
```
✓ Click "1h" - selected
✓ Click "24h" - selected
✓ Click "7d" - selected
✓ Click "30d" - selected
```

#### Test 4: Chart Display
```
✓ Trend Performance chart visible
✓ Shows data
✓ Hover shows tooltip
```

#### Test 5: Stats Grid
```
✓ 4 stat cards display:
  1. Total Trends Tracked: 1,247 (+12%)
  2. Your Favorites: 23
  3. Engagements: 5,642
  4. Top Category: Tech (35%)
```

#### Test 6: Exploration Tools
```
✓ "Compare Trends" card visible
✓ "Open Comparison Tool" button clickable
✓ "Timeline Explorer" card visible
✓ "Open Timeline" button clickable
```

---

## 🔧 Testing API Endpoints (With Backend)

### Start Backend
```bash
cd backend
npm install
npm run dev
```

Backend should run on: `http://localhost:5000`

### Test 1: Health Check

**Using Browser Console:**
```javascript
fetch('http://localhost:5000/api/health')
  .then(r => r.json())
  .then(d => console.log(d))
```

**Expected Response:**
```json
{ "status": "PulseTrendz backend is running" }
```

### Test 2: Get Trends

**Using Browser Console:**
```javascript
fetch('http://localhost:5000/api/trends')
  .then(r => r.json())
  .then(d => console.table(d))
```

**Expected Response:**
```json
[
  { "id": 1, "title": "AI in 2024", "category": "tech", "value": 2450, "change": 12.5 },
  { "id": 2, "title": "#DanceChallenge", "category": "social", "value": 1890, "change": 8.2 }
]
```

### Test 3: Search Trends

**Using Browser Console:**
```javascript
fetch('http://localhost:5000/api/trends/search?q=bitcoin')
  .then(r => r.json())
  .then(d => console.log(d))
```

### Test 4: WebSocket Real-Time

**Using Browser Console:**
```javascript
const socket = io('http://localhost:5000')

socket.on('connect', () => {
  console.log('Connected!')
})

socket.on('trend-update', (data) => {
  console.log('New trend:', data)
})

// Subscribe to category
socket.emit('subscribe-category', 'tech')
```

---

## 🧪 Automated Testing (Optional)

### Using Postman

1. **Install Postman**: https://www.postman.com/downloads/

2. **Create Collection**
   - File → New Collection
   - Name: "PulseTrendz Tests"

3. **Add Requests**

**Request 1: Health Check**
```
Method: GET
URL: http://localhost:5000/api/health
```

**Request 2: Get Trends**
```
Method: GET
URL: http://localhost:5000/api/trends
```

**Request 3: Search**
```
Method: GET
URL: http://localhost:5000/api/trends/search?q=bitcoin
```

4. **Run Tests**
   - Click "Send" for each request
   - Check response status (200 = success)

---

## 📊 Testing With cURL

### Open Terminal/Command Prompt

```bash
# Test Joke API
curl https://official-joke-api.appspot.com/random_joke

# Test backend health
curl http://localhost:5000/api/health

# Test get trends
curl http://localhost:5000/api/trends

# Test search
curl "http://localhost:5000/api/trends/search?q=bitcoin"
```

---

## 📱 Mobile Testing

### Test on Mobile Device

1. **Get your computer IP**
   - Windows: `ipconfig` → IPv4 Address
   - Mac: `ifconfig` → inet
   - Linux: `hostname -I`

2. **On mobile device, visit**
   ```
   http://YOUR_IP:3000
   http://YOUR_IP:3000/joke-generator
   http://YOUR_IP:3000/dashboard
   ```

3. **Check**
   - [ ] Page layout responsive
   - [ ] Buttons clickable
   - [ ] Text readable
   - [ ] No horizontal scroll
   - [ ] Touch interactions work

### Using Browser DevTools

1. Open DevTools: `F12` or `Ctrl+Shift+I`
2. Click device icon (top-left)
3. Select device: iPhone, iPad, Android, etc.
4. Test responsive design

---

## 🐛 Debugging

### Browser Console Errors

1. Open DevTools: `F12`
2. Go to "Console" tab
3. Look for red errors
4. Check error messages

### Common Issues & Solutions

**Issue: CORS Error**
```
Error: Access to XMLHttpRequest blocked by CORS policy

Solution:
1. Ensure backend is running
2. Check FRONTEND_URL in .env
3. Verify CORS is enabled in backend
```

**Issue: Port Already in Use**
```
Error: listen EADDRINUSE: address already in use :::3000

Solution:
Option 1: Kill process using port
  npx kill-port 3000

Option 2: Use different port
  npm run dev -- -p 3001
```

**Issue: Joke API Not Working**
```
Error: Failed to fetch from joke API

Solution:
1. Check internet connection
2. Try in browser: https://official-joke-api.appspot.com/random_joke
3. API might be down temporarily
```

**Issue: Network Tab Shows Failed Requests**
```
Debug:
1. Open DevTools → Network tab
2. Reload page
3. Look for failed requests (red)
4. Click on failed request
5. Check "Response" tab for error
```

---

## ✅ Complete Testing Checklist

### Frontend Pages
- [ ] Home page (`/`) loads and displays correctly
- [ ] Dashboard page (`/dashboard`) loads
- [ ] Joke Generator (`/joke-generator`) loads
- [ ] Navigation links work

### Home Page Features
- [ ] Search bar works with suggestions
- [ ] Trend chart displays
- [ ] Trend cards display correctly
- [ ] Share buttons work
- [ ] Hover effects work

### Joke Generator Features
- [ ] Get new joke works
- [ ] Category selection works
- [ ] Copy button works
- [ ] Share button works
- [ ] Loading state displays
- [ ] Error handling works

### API Integration
- [ ] Backend health check works
- [ ] Trends API works
- [ ] Search API works
- [ ] WebSocket connects

### Responsive Design
- [ ] Works on desktop (1920x1080)
- [ ] Works on tablet (768px)
- [ ] Works on mobile (375px)
- [ ] No horizontal scroll
- [ ] Touch interactions work

### UI/UX
- [ ] Dark theme applied
- [ ] Text is readable
- [ ] Icons display
- [ ] Colors are consistent
- [ ] Animations work
- [ ] Loading spinners work

### Performance
- [ ] Page loads in < 3 seconds
- [ ] No console errors
- [ ] API responses are fast
- [ ] No memory leaks

---

## 📸 Screenshot Testing

Take screenshots of:

1. **Home Page**
   - Full page view
   - Mobile view

2. **Joke Generator**
   - Before fetching joke
   - After fetching joke
   - With copied feedback

3. **Dashboard**
   - Full dashboard view
   - Different category selections

4. **Navigation**
   - Menu open
   - Mobile menu

---

## 🎥 Video Testing

Record a video showing:
1. Navigating to home page
2. Using search bar
3. Clicking through trend cards
4. Sharing a trend
5. Going to joke generator
6. Getting a joke
7. Sharing joke on Twitter
8. Going to dashboard
9. Filtering by category

---

## 📋 Test Report Template

```
PulseTrendz Testing Report
Date: [TODAY]

✅ PASSED TESTS:
- Home page loads
- Joke generator works
- ...

❌ FAILED TESTS:
- None found
- ...

⚠️ ISSUES FOUND:
- [Issue description]

📝 NOTES:
- [Any observations]

✅ OVERALL: PASS / FAIL
```

---

## 🚀 What's Next?

After testing:
1. Fix any bugs found
2. Deploy to production
3. Monitor for errors
4. Collect user feedback
5. Add new features

---

**Happy Testing! 🧪** If you find any issues, report them on GitHub!
