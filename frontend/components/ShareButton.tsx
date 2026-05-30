'use client'

import { Share2 } from 'lucide-react'
import { useState } from 'react'

const ShareButton = ({ title }: { title: string }) => {
  const [showMenu, setShowMenu] = useState(false)

  const shareOptions = [
    { name: 'Twitter', icon: '𝕏', color: 'hover:bg-gray-700' },
    { name: 'LinkedIn', icon: 'in', color: 'hover:bg-blue-900' },
    { name: 'Facebook', icon: 'f', color: 'hover:bg-blue-700' },
    { name: 'Copy Link', icon: '🔗', color: 'hover:bg-gray-700' },
  ]

  const handleShare = (platform: string) => {
    const text = `Check out "${title}" trending on PulseTrendz`
    const url = 'https://pulsetrendz.com'

    const shareUrls: { [key: string]: string } = {
      Twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      LinkedIn: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      Facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      'Copy Link': url,
    }

    if (platform === 'Copy Link') {
      navigator.clipboard.writeText(url)
      alert('Link copied to clipboard!')
    } else {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400')
    }

    setShowMenu(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="p-2 hover:bg-gray-800 rounded-lg transition"
        aria-label="Share"
      >
        <Share2 className="w-4 h-4 text-gray-400" />
      </button>

      {showMenu && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-20">
          {shareOptions.map((option) => (
            <button
              key={option.name}
              onClick={() => handleShare(option.name)}
              className={`w-full text-left px-4 py-2 text-sm text-gray-200 ${option.color} transition first:rounded-t-lg last:rounded-b-lg`}
            >
              {option.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export { ShareButton }
