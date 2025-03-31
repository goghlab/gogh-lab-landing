"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Square } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function MinimalBanner() {
  const [isHovered, setIsHovered] = useState(false)
  const { t } = useLanguage()

  return (
    <Link href="/consultation">
      <Card
        className="w-full max-w-xs bg-background/80 backdrop-blur-sm border border-white/10 shadow-lg transition-all duration-300 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-4 flex items-center gap-3">
          <div className="flex-shrink-0">
            <Square className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <div className="flex-1 font-serif">
            <h3 className="font-medium text-sm">{t("banner.title")}</h3>
            <p className="text-xs text-white/70">{t("banner.subtitle")}</p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-xs font-medium bg-white/10 text-white px-2 py-0.5 rounded font-serif">
              {t("banner.free")}
            </span>
          </div>
        </CardContent>

        <div
          className={`h-0.5 bg-white transition-all duration-500 ease-in-out ${isHovered ? "w-full" : "w-0"}`}
          aria-hidden="true"
        />
      </Card>
    </Link>
  )
}

