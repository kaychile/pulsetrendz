'use client'

import Link from 'next/link'
import { TrendChart } from '@/components/TrendChart'
import { Settings, Bell, Home } from 'lucide-react'
import { useState } from 'react'

export default function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [timeRange, setTimeRange] = useState('24h')

  const categories = ['all', 'tech', 'social', 'crypto', 'fashion']

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition">
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold">Personalized Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-800 rounded-lg transition">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-lg transition">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg transition ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            {['1h', '24h', '7d', '30d'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-lg transition ${
                  timeRange === range
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        {/* Main Chart */}
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 mb-8">
          <h2 className="text-xl font-bold mb-6">Trend Performance</h2>
          <TrendChart />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <p className="text-gray-400 text-sm mb-2">Total Trends Tracked</p>
            <p className="text-3xl font-bold">1,247</p>
            <p className="text-green-400 text-sm mt-2">+12% from last week</p>
          </div>

          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <p className="text-gray-400 text-sm mb-2">Your Favorites</p>
            <p className="text-3xl font-bold">23</p>
            <p className="text-blue-400 text-sm mt-2">Following actively</p>
          </div>

          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <p className="text-gray-400 text-sm mb-2">Engagements</p>
            <p className="text-3xl font-bold">5,642</p>
            <p className="text-purple-400 text-sm mt-2">Shares & reactions</p>
          </div>

          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <p className="text-gray-400 text-sm mb-2">Top Category</p>
            <p className="text-3xl font-bold">Tech</p>
            <p className="text-orange-400 text-sm mt-2">35% of your views</p>
          </div>
        </div>

        {/* Exploration Tools */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <h3 className="text-xl font-bold mb-4">Compare Trends</h3>
            <p className="text-gray-400 mb-4">Select two trends to compare their performance side-by-side</p>
            <button className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition">
              Open Comparison Tool
            </button>
          </div>

          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <h3 className="text-xl font-bold mb-4">Timeline Explorer</h3>
            <p className="text-gray-400 mb-4">Navigate through historical trend data with our timeline slider</p>
            <button className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition">
              Open Timeline
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
