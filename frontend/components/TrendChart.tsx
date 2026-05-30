'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts'
import { useEffect, useState } from 'react'

const TrendChart = () => {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    // Mock data - in production, this would come from WebSocket
    const chartData = [
      { time: '00:00', 'AI Trends': 1200, 'Social Media': 900, 'Crypto': 1500, 'Fashion': 800 },
      { time: '04:00', 'AI Trends': 1400, 'Social Media': 1100, 'Crypto': 1800, 'Fashion': 950 },
      { time: '08:00', 'AI Trends': 1800, 'Social Media': 1300, 'Crypto': 2200, 'Fashion': 1100 },
      { time: '12:00', 'AI Trends': 2200, 'Social Media': 1800, 'Crypto': 2800, 'Fashion': 1400 },
      { time: '16:00', 'AI Trends': 2450, 'Social Media': 1890, 'Crypto': 3200, 'Fashion': 1650 },
      { time: '20:00', 'AI Trends': 2290, 'Social Media': 2000, 'Crypto': 3000, 'Fashion': 1520 },
      { time: '24:00', 'AI Trends': 2000, 'Social Media': 1800, 'Crypto': 2600, 'Fashion': 1400 },
    ]
    setData(chartData)
  }, [])

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorAI" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorSocial" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorCrypto" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ec4899" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#ec4899" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorFashion" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis dataKey="time" stroke="#666" />
        <YAxis stroke="#666" />
        <Tooltip 
          contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px' }}
          labelStyle={{ color: '#fff' }}
        />
        <Legend />
        <Area type="monotone" dataKey="AI Trends" stroke="#6366f1" fillOpacity={1} fill="url(#colorAI)" />
        <Area type="monotone" dataKey="Social Media" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorSocial)" />
        <Area type="monotone" dataKey="Crypto" stroke="#ec4899" fillOpacity={1} fill="url(#colorCrypto)" />
        <Area type="monotone" dataKey="Fashion" stroke="#f59e0b" fillOpacity={1} fill="url(#colorFashion)" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export { TrendChart }
