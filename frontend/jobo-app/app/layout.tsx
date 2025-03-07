import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jobo - AI-Powered Job Matching Platform",
  description:
    "Find your perfect job with AI-powered matching technology that connects you with the right opportunities faster.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  )
}

