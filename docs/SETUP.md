# PulseTrendz Setup Guide

## Prerequisites
- Node.js 18+
- npm or yarn
- MongoDB (optional, for user data persistence)

## Quick Start

### 1. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:3000`

### 2. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

The backend will run on `http://localhost:5000`

## Features Implemented

### ✅ Real-Time Data Visualization
- Interactive line/area charts using Recharts
- Live data updates
- Multiple trend categories (Tech, Social Media, Crypto, Fashion)

### ✅ Exploration Tools
- Search bar with autocomplete suggestions
- Category filtering
- Time range selection (1h, 24h, 7d, 30d)
- Trend cards with detailed information
- Comparison tool placeholder
- Timeline explorer placeholder

### ✅ Social & Sharing
- Share buttons for Twitter, LinkedIn, Facebook
- Copy link to clipboard
- Integration-ready for social platforms

### ✅ Personalization
- Personalized dashboard
- Favorites tracking
- Category preferences
- Stats and engagement metrics

### ✅ User Interface
- Dark modern theme
- Responsive design
- Smooth animations
- Gradient accents

## Project Structure

```
pulsetrendz/
├── frontend/
│   ├── app/
│   │   ├── page.tsx          # Home page
│   │   ├── layout.tsx        # Root layout
│   │   ├── globals.css       # Global styles
│   │   └── dashboard/
│   │       └── page.tsx      # Dashboard page
│   ├── components/
│   │   ├── TrendChart.tsx    # Interactive chart
│   │   ├── TrendCard.tsx     # Trend display card
│   │   ├── SearchBar.tsx     # Search with autocomplete
│   │   └── ShareButton.tsx   # Social sharing
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.js
│   ├── tailwind.config.ts
│   └── postcss.config.js
├── backend/
│   ├── src/
│   │   └── index.ts          # Express server & WebSocket
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
├── docs/
│   ├── SETUP.md
│   ├── API.md
│   └── ARCHITECTURE.md
└── README.md
```

## Next Steps

1. **Integrate Real APIs**
   - Twitter API for social trends
   - CoinGecko API for crypto trends
   - GitHub API for tech trends
   - Fashion API integrations

2. **Add Database**
   - Set up MongoDB
   - Create user authentication
   - Store user preferences and favorites

3. **Enhance Real-Time Features**
   - WebSocket subscriptions by category
   - Real-time alerts and notifications
   - Live data streaming

4. **Authentication**
   - User signup/login
   - JWT token management
   - Protected routes

5. **Deployment**
   - Containerize with Docker
   - Deploy frontend to Vercel
   - Deploy backend to Railway/Heroku

## Environment Variables

Create `.env` file in backend folder with:
```
PORT=5000
FRONTEND_URL=http://localhost:3000
MONGODB_URI=mongodb://localhost:27017/pulsetrendz
JWT_SECRET=your_secret_key
```

## Troubleshooting

- **Port already in use**: Change PORT in .env or stop the process using the port
- **CORS errors**: Ensure FRONTEND_URL matches your frontend URL
- **WebSocket issues**: Check firewall settings, ensure Socket.IO is properly configured

## Development Commands

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

### Backend
- `npm run dev` - Start development server with auto-reload
- `npm run build` - Compile TypeScript
- `npm start` - Run compiled JS

## Support

For issues or questions, create an issue in the GitHub repository.
