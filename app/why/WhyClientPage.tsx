"use client"

import Link from "next/link"
import { Square, Circle, Triangle, ArrowLeft } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { SharedLayout } from "@/components/shared-layout"
import { Footer } from "@/components/footer"

export default function WhyClientPage() {
  const { t } = useLanguage()

  return (
    <>
      <SharedLayout>
        <div className="min-h-screen bg-background text-white p-5 md:p-10 lg:p-16 grid-pattern">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 animate-fade-in font-sans">{t("why.title")}</h1>

          <div
            className="max-w-3xl space-y-6 text-lg text-white/80 animate-slide-up font-sans"
            style={{ animationDelay: "100ms" }}
          >
            <p>{t("why.p1")}</p>
            <p>{t("why.p2")}</p>
            <p>{t("why.p3")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div
              className="border border-white/10 rounded-lg p-6 hover:border-white/30 transition-all animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              <Square className="h-8 w-8 text-white mb-4" />
              <h3 className="text-xl font-medium mb-2 font-sans">{t("why.vision")}</h3>
              <p className="text-white/70 font-sans">{t("why.vision.desc")}</p>
            </div>

            <div
              className="border border-white/10 rounded-lg p-6 hover:border-white/30 transition-all animate-fade-in"
              style={{ animationDelay: "300ms" }}
            >
              <Circle className="h-8 w-8 text-white mb-4" />
              <h3 className="text-xl font-medium mb-2 font-sans">{t("why.execution")}</h3>
              <p className="text-white/70 font-sans">{t("why.execution.desc")}</p>
            </div>

            <div
              className="border border-white/10 rounded-lg p-6 hover:border-white/30 transition-all animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
              <Triangle className="h-8 w-8 text-white mb-4" />
              <h3 className="text-xl font-medium mb-2 font-sans">{t("why.impact")}</h3>
              <p className="text-white/70 font-sans">{t("why.impact.desc")}</p>
            </div>
          </div>

          <div className="mt-12 animate-fade-in" style={{ animationDelay: "500ms" }}>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-gradient-to-b from-blue-600 to-blue-800 text-white px-4 py-2 rounded-full hover:from-blue-500 hover:to-blue-700 transition-all font-medium font-sans border border-white/10 shadow-lg"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("nav.back")}
            </Link>
          </div>
        </div>
      </SharedLayout>
      <Footer />
    </>
  )
}

