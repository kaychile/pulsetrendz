'use client'

import Link from 'next/link'
import { TrendChart } from '@/components/TrendChart'
import { TrendCard } from '@/components/TrendCard'
import { SearchBar } from '@/components/SearchBar'
import { ShareButton } from '@/components/ShareButton'
import { Zap, TrendingUp, Share2, Settings } from 'lucide-react'

export default function Home() {
  // Mock trending data
  const mockTrends = [
    { id: 1, title: 'AI in 2024', category: 'tech', value: 2450, change: 12.5 },
    { id: 2, title: '#DanceChallenge', category: 'social', value: 1890, change: 8.2 },
    { id: 3, title: 'Bitcoin Rally', category: 'crypto', value: 3200, change: 15.3 },
    { id: 4, title: 'Minimalist Fashion', category: 'fashion', value: 1650, change: 5.1 },
  ]

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-indigo-500" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              PulseTrendz
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 rounded-lg hover:bg-gray-800 transition">Explore</button>
            <button className="px-4 py-2 rounded-lg hover:bg-gray-800 transition">Discover</button>
            <Link href="/dashboard" className="px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition">
              Dashboard
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Track <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Trending</span> Topics in Real-Time
          </h2>
          <p className="text-gray-400 text-xl mb-8">
            Monitor tech, social media, crypto, fashion trends and more with live data visualization
          </p>
          <SearchBar />
        </div>

        {/* Real-Time Chart */}
        <div className="mb-16 bg-gray-900 rounded-lg border border-gray-800 p-6">
          <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
            <TrendingUp className="w-6 h-6 text-green-500" />
            <span>Trending Now</span>
          </h3>
          <TrendChart />
        </div>

        {/* Trend Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mockTrends.map((trend) => (
            <TrendCard key={trend.id} trend={trend} />
          ))}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-indigo-500 transition">
            <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Real-Time Visualization</h3>
            <p className="text-gray-400">Live updating charts with animated transitions tracking trends as they happen</p>
          </div>

          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-purple-500 transition">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
              <Share2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Social Sharing</h3>
            <p className="text-gray-400">Share trends with your network and embed widgets on your own sites</p>
          </div>

          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-pink-500 transition">
            <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-4">
              <Settings className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Personalization</h3>
            <p className="text-gray-400">Customize your dashboard, follow trends, and get personalized insights</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>&copy; 2024 PulseTrendz. Track trends in real-time.</p>
        </div>
      </footer>
    </div>
  )
}
