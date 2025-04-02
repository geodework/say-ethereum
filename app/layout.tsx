import type React from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Say Ethereum - Pronunciation Guide',
  description:
    'Learn how to pronounce Ethereum in different languages around the world in a cute Japanese style',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-comic">{children}</body>
    </html>
  )
}

import './globals.css'
