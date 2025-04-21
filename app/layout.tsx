import type React from "react"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Matomo from "@/components/AnalyticsTool"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-comic min-h-screen flex flex-col">
        <Matomo />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
