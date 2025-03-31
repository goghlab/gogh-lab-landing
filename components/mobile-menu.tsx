"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Square } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { useLanguage } from "@/contexts/language-context"

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-white" aria-label="打開菜單">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-background border-white/10 p-0 w-full sm:max-w-sm">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4">
            <div className="flex items-center gap-2 font-sans">
              <Square className="h-5 w-5 text-white" />
              <span className="font-medium">Gogh Studio</span>
            </div>
            <SheetClose asChild>
              <Button variant="ghost" size="icon" aria-label="關閉菜單">
                <X className="h-6 w-6" />
              </Button>
            </SheetClose>
          </div>

          <nav className="flex flex-col gap-4 p-6 font-sans" aria-label="移動導航">
            <Link
              href="/why"
              className="text-2xl font-light py-2 border-b border-white/10 hover:text-white transition-colors"
              onClick={handleLinkClick}
            >
              {t("nav.why")}
            </Link>
            <Link
              href="/work"
              className="text-2xl font-light py-2 border-b border-white/10 hover:text-white transition-colors"
              onClick={handleLinkClick}
            >
              {t("nav.work")}
            </Link>
            <Link
              href="/what"
              className="text-2xl font-light py-2 border-b border-white/10 hover:text-white transition-colors"
              onClick={handleLinkClick}
            >
              {t("nav.what")}
            </Link>
            {/* Plans link removed */}
          </nav>

          <div className="mt-auto p-6">
            <Link
              href="/contact"
              className="inline-block w-full bg-transparent text-white border border-white/50 px-6 py-3 rounded-md text-center hover:bg-white/10 transition-colors font-sans"
              onClick={handleLinkClick}
            >
              {t("home.cta")}
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

