'use client'

import { useState } from 'react'
import { Laugh, Copy, Share2, RefreshCw } from 'lucide-react'

export default function JokeGenerator() {
  const [joke, setJoke] = useState<{ setup?: string; delivery?: string; joke?: string } | null>(null)
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [jokeType, setJokeType] = useState('any')

  const fetchJoke = async () => {
    setLoading(true)
    try {
      let url = 'https://official-joke-api.appspot.com/random_joke'

      if (jokeType !== 'any') {
        url = `https://official-joke-api.appspot.com/jokes/${jokeType}/random`
      }

      const response = await fetch(url)
      const data = await response.json()
      setJoke(data)
    } catch (error) {
      console.error('Error fetching joke:', error)
      setJoke({ joke: 'Oops! Could not fetch a joke. Try again!' })
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = () => {
    if (!joke) return

    const jokeText = joke.setup ? `${joke.setup}\n${joke.delivery}` : joke.joke
    navigator.clipboard.writeText(jokeText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareJoke = () => {
    if (!joke) return

    const jokeText = joke.setup ? `${joke.setup}\n${joke.delivery}` : joke.joke
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(jokeText + ' 😄')}`
    window.open(tweetUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black">
      {/* Navigation */}
      <nav className="bg-gray-900/50 backdrop-blur-lg border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center space-x-3">
          <Laugh className="w-8 h-8 text-yellow-400" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Joke Generator
          </h1>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get Your Daily <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Laugh</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Generate random jokes to brighten your day!
          </p>
        </div>

        {/* Category Selection */}
        <div className="mb-8 bg-gray-800 rounded-lg p-6 border border-gray-700">
          <label className="block text-sm font-semibold mb-4 text-gray-300">Select Joke Type</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { value: 'any', label: 'Any' },
              { value: 'general', label: 'General' },
              { value: 'knock-knock', label: 'Knock-Knock' },
              { value: 'programming', label: 'Programming' },
            ].map((type) => (
              <button
                key={type.value}
                onClick={() => setJokeType(type.value)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  jokeType === type.value
                    ? 'bg-yellow-500 text-black'
                    : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Joke Display */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border-2 border-yellow-500/30 p-8 mb-8 min-h-64 flex flex-col justify-center">
          {joke ? (
            <div className="space-y-4">
              {joke.setup ? (
                <>
                  <div>
                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Setup</p>
                    <p className="text-2xl text-white font-semibold">{joke.setup}</p>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded"></div>
                  <div>
                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Punchline</p>
                    <p className="text-2xl text-yellow-300 font-bold">{joke.delivery}</p>
                  </div>
                </>
              ) : (
                <p className="text-2xl text-white text-center">{joke.joke}</p>
              )}
            </div>
          ) : (
            <div className="text-center">
              <Laugh className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">Click the button below to generate a joke!</p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button
            onClick={fetchJoke}
            disabled={loading}
            className="flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
            <span>{loading ? 'Loading...' : 'Get New Joke'}</span>
          </button>

          <button
            onClick={copyToClipboard}
            disabled={!joke}
            className="flex items-center justify-center space-x-2 px-6 py-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Copy className="w-5 h-5" />
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>

          <button
            onClick={shareJoke}
            disabled={!joke}
            className="flex items-center justify-center space-x-2 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
              <Laugh className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-lg font-bold mb-2">Random Jokes</h3>
            <p className="text-gray-400">Get unlimited random jokes from a vast collection</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
              <Copy className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-lg font-bold mb-2">Easy Copy</h3>
            <p className="text-gray-400">Copy jokes to clipboard with a single click</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
              <Share2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Share on Twitter</h3>
            <p className="text-gray-400">Share your favorite jokes with your followers</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>Powered by <a href="https://official-joke-api.appspot.com/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300">Official Joke API</a></p>
        </div>
      </footer>
    </div>
  )
}
