import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GameForge AI - Build Your Perfect Gaming PC",
  description:
    "AI-powered gaming PC builder. Get personalized recommendations based on your budget and gaming goals, or build manually with expert guidance. Explore gaming laptops and learn gaming facts.",
  keywords: ["gaming PC", "PC builder", "AI recommendations", "gaming laptop", "hardware guide"],
  authors: [{ name: "GameForge AI" }],
  openGraph: {
    title: "GameForge AI - Build Your Perfect Gaming PC",
    description: "AI-powered gaming PC builder with personalized recommendations",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
