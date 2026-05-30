'use client'

import { Search } from 'lucide-react'
import { useState } from 'react'

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])

  const mockSuggestions = [
    'AI Trends',
    'Bitcoin',
    'TikTok Challenges',
    'Tech Startups',
    'Fashion Weeks',
    'Cryptocurrency',
    'Social Media',
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)
    
    if (value) {
      setSuggestions(
        mockSuggestions.filter(s => s.toLowerCase().includes(value.toLowerCase())).slice(0, 5)
      )
    } else {
      setSuggestions([])
    }
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search trends... (e.g., AI, Bitcoin, Fashion)"
          value={searchQuery}
          onChange={handleChange}
          className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition"
        />
      </div>

      {/* Suggestions Dropdown */}
      {suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border border-gray-700 rounded-lg overflow-hidden shadow-lg z-10">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => {
                setSearchQuery(suggestion)
                setSuggestions([])
              }}
              className="w-full text-left px-4 py-2 hover:bg-gray-800 transition text-gray-200"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export { SearchBar }
