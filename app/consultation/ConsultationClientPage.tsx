"use client"

import Link from "next/link"
import { Square, Circle, Triangle, Hexagon } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { SharedLayout } from "@/components/shared-layout"

export default function ConsultationClientPage() {
  const { t } = useLanguage()

  return (
    <SharedLayout>
      <div className="min-h-screen bg-background text-white p-5 md:p-10 lg:p-16 grid-pattern">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 animate-fade-in">{t("consultation.title")}</h1>

        <div
          className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-white text-sm mb-12 animate-fade-in"
          style={{ animationDelay: "100ms" }}
        >
          <Square className="h-4 w-4" />
          <span>{t("consultation.badge")}</span>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
          <div>
            <h2 className="text-2xl font-medium mb-4">{t("consultation.expect")}</h2>
            <ul className="space-y-4 text-white/80">
              <li className="flex gap-3">
                <span className="text-white">01.</span>
                <p>{t("consultation.expect.1")}</p>
              </li>
              <li className="flex gap-3">
                <span className="text-white">02.</span>
                <p>{t("consultation.expect.2")}</p>
              </li>
              <li className="flex gap-3">
                <span className="text-white">03.</span>
                <p>{t("consultation.expect.3")}</p>
              </li>
              <li className="flex gap-3">
                <span className="text-white">04.</span>
                <p>{t("consultation.expect.4")}</p>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-medium mb-4">{t("consultation.perfect")}</h2>
            <ul className="space-y-4 text-white/80">
              <li className="flex gap-3 items-start">
                <Circle className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                <p>{t("consultation.perfect.1")}</p>
              </li>
              <li className="flex gap-3 items-start">
                <Triangle className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                <p>{t("consultation.perfect.2")}</p>
              </li>
              <li className="flex gap-3 items-start">
                <Hexagon className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                <p>{t("consultation.perfect.3")}</p>
              </li>
              <li className="flex gap-3 items-start">
                <Square className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                <p>{t("consultation.perfect.4")}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 animate-fade-in" style={{ animationDelay: "300ms" }}>
          <Link
            href="/contact"
            className="inline-block bg-white text-black font-medium px-8 py-3 rounded-md hover:bg-white/90 transition-colors"
          >
            {t("consultation.cta")}
          </Link>
        </div>

        <div className="mt-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <Link href="/" className="text-white/70 hover:text-white transition-colors minimal-link">
            {t("nav.back")}
          </Link>
        </div>
      </div>
    </SharedLayout>
  )
}

