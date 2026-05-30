import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PulseTrendz - Real-Time Trend Tracking',
  description: 'Track trending topics across tech, social media, crypto, fashion and more in real-time',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white">
        {children}
      </body>
    </html>
  )
}
