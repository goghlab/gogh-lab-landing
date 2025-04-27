"use client"

import Link from "next/link"
import Image from "next/image"
import { Clock } from "@/components/clock"
import { MobileMenu } from "@/components/mobile-menu"
import { LanguageSwitch } from "@/components/language-switch"
import { useLanguage } from "@/contexts/language-context"
import type { ReactNode } from "react"

interface SharedLayoutProps {
  children: ReactNode
}

export function SharedLayout({ children }: SharedLayoutProps) {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background text-white flex flex-col grid-pattern">
      <header className="flex justify-between items-center px-3 md:px-6 lg:px-10">
        <div className="flex items-center -mt-3">
          <Link
            href="/"
            className="text-white font-medium text-xl flex items-center"
            aria-label="Gogh Studio Home"
          >
            <Image 
              src="/logo.png" 
              alt="Gogh Studio Logo"
              width={200}
              height={200}
              className="w-[150px] h-[150px] object-contain"
            />
          </Link>
        </div>

        <nav className="hidden md:flex space-x-6" aria-label="Main Navigation">
          <Link href="/why" className="text-white/80 hover:text-white transition-colors minimal-link font-sans">
            {t("nav.why")}
          </Link>
          <Link href="/work" className="text-white/80 hover:text-white transition-colors minimal-link font-sans">
            {t("nav.work")}
          </Link>
          <Link href="/what" className="text-white/80 hover:text-white transition-colors minimal-link font-sans">
            {t("nav.what")}
          </Link>
          {/* Plans link removed */}
        </nav>

        <div className="hidden md:flex items-center space-x-6 text-sm text-white/70 font-sans">
          <Clock city="香港" offset={8} />
          <Clock city="紐約" offset={-5} />
          <LanguageSwitch />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitch />
          <MobileMenu />
        </div>
      </header>

      <main className="flex-1">{children}</main>
    </div>
  )
}

