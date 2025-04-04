import type React from 'react'
import type { Metadata } from 'next'
import './globals.css'

// TO be env values
// const url = 'https://sayethereum.com'
// const image = 'https://sayethereum.com/og.png'
const url = 'http://localhost:3000'
const image = 'http://localhost:3000/og.png'

const title =
  'Say Ethereum - Discover how to pronounce Ethereum in different languages and countries by Geodework'
const description =
  'Learn how to pronounce Ethereum in different languages around the world. Geodework will pursue the geographic decentralization of Ethereum.'

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }],
    apple: [
      { url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' },
    ],
  },
  openGraph: {
    title,
    description,
    type: 'website',
    url,
    images: [{ url: image }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [image],
  },
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
