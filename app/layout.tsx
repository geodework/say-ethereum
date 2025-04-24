import type React from "react"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnalyticsTool from "@/components/AnalyticsTool"
import AdSense from "@/components/AdSense"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <AdSense />
      </head>
      <body className="font-comic min-h-screen flex flex-col">
        <AnalyticsTool />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
