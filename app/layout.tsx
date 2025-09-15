import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react" // Import Suspense for wrapping components

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "IKUZO - Your Personal Assistant App",
  description:
    "Join the waitlist for IKUZO, the revolutionary personal assistant app that simplifies your daily tasks.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${poppins.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          {" "}
          {/* Added Suspense boundary */}
          {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
