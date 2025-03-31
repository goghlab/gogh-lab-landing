import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Gogh Studio | Minimalist Design for Modern Brands",
  description:
    "A Hong Kong-based design studio specializing in minimalist brand identity, UX/UI, and digital experiences for forward-thinking businesses.",
  keywords: ["design studio", "minimalist design", "UX/UI", "brand identity", "web design", "Hong Kong"],
  authors: [{ name: "Gogh Studio" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${playfair.variable} font-serif antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'