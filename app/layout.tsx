import type React from 'react'
import type { Metadata } from 'next'
import './globals.css'

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_DOMAIN) {
    // Production domain (if set)
    return `https://${process.env.NEXT_PUBLIC_DOMAIN}`
  }
  if (process.env.VERCEL_URL) {
    // Vercel deployment (preview or production)
    return `https://${process.env.VERCEL_URL}`
  }
  // Development
  return 'http://localhost:3000'
}

const baseUrl = getBaseUrl()
const url = baseUrl
const image = `${baseUrl}/og.png`

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
