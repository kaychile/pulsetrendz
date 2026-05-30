'use client'

import { TrendingUp, TrendingDown } from 'lucide-react'
import { ShareButton } from './ShareButton'

interface Trend {
  id: number
  title: string
  category: string
  value: number
  change: number
}

const categoryColors: { [key: string]: string } = {
  tech: 'bg-blue-900 text-blue-200',
  social: 'bg-purple-900 text-purple-200',
  crypto: 'bg-yellow-900 text-yellow-200',
  fashion: 'bg-pink-900 text-pink-200',
}

const TrendCard = ({ trend }: { trend: Trend }) => {
  const isPositive = trend.change >= 0
  const colorClass = categoryColors[trend.category] || 'bg-gray-700 text-gray-200'

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 hover:border-indigo-500 transition hover:shadow-lg hover:shadow-indigo-500/20">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className={`inline-block px-3 py-1 rounded-full text-sm ${colorClass} mb-2`}>
            {trend.category.charAt(0).toUpperCase() + trend.category.slice(1)}
          </span>
          <h3 className="text-lg font-bold">{trend.title}</h3>
        </div>
        <ShareButton title={trend.title} />
      </div>

      <div className="flex items-baseline space-x-2 mb-4">
        <span className="text-2xl font-bold">{trend.value}</span>
        <div className={`flex items-center space-x-1 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          <span className="text-sm">{Math.abs(trend.change)}%</span>
        </div>
      </div>

      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-600"
          style={{ width: `${Math.min((trend.value / 4000) * 100, 100)}%` }}
        ></div>
      </div>

      <button className="mt-4 w-full px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition text-sm">
        View Details
      </button>
    </div>
  )
}

export { TrendCard }
