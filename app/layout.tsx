import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TRUSTWORK Consulting Limited - Management & Development Solutions",
  description:
    "Professional management, research and development consulting services across Africa. Capacity building, strategic planning, and innovative solutions for government, private and NGO sectors.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/images/logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/logo-dark.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/images/logo.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/images/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
