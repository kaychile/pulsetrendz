import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { Server as SocketIOServer } from 'socket.io'
import http from 'http'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Create HTTP server for WebSocket support
const server = http.createServer(app)
const io = new SocketIOServer(server, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
})

// API Routes
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'PulseTrendz backend is running' })
})

app.get('/api/trends', (req: Request, res: Response) => {
  // Mock trending data - replace with real API calls
  const mockTrends = [
    { id: 1, title: 'AI in 2024', category: 'tech', value: 2450, change: 12.5 },
    { id: 2, title: '#DanceChallenge', category: 'social', value: 1890, change: 8.2 },
    { id: 3, title: 'Bitcoin Rally', category: 'crypto', value: 3200, change: 15.3 },
    { id: 4, title: 'Minimalist Fashion', category: 'fashion', value: 1650, change: 5.1 },
  ]
  res.json(mockTrends)
})

app.get('/api/trends/search', (req: Request, res: Response) => {
  const query = req.query.q as string
  res.json({ query, results: [] })
})

// WebSocket connections for real-time updates
io.on('connection', (socket) => {
  console.log(`New client connected: ${socket.id}`)

  // Emit real-time trend updates every 5 seconds
  const interval = setInterval(() => {
    const randomTrend = {
      id: Math.random(),
      title: `Trend ${Math.floor(Math.random() * 1000)}`,
      value: Math.floor(Math.random() * 5000),
      change: (Math.random() * 20) - 10,
      timestamp: new Date()
    }
    socket.emit('trend-update', randomTrend)
  }, 5000)

  socket.on('subscribe-category', (category: string) => {
    console.log(`Client subscribed to: ${category}`)
    socket.emit('subscription-confirmed', { category })
  })

  socket.on('disconnect', () => {
    console.log(`Client disconnected: ${socket.id}`)
    clearInterval(interval)
  })
})

// Start server
server.listen(port, () => {
  console.log(`🚀 PulseTrendz backend running on http://localhost:${port}`)
  console.log(`📡 WebSocket server ready`)
})
