"use client"

import Link from "next/link"
import { ContactForm } from "@/components/contact-form"
import { Square, Mail, MapPin, ArrowLeft } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { SharedLayout } from "@/components/shared-layout"

export default function ContactPageClient() {
  const { t } = useLanguage()

  return (
    <SharedLayout>
      <div className="min-h-screen bg-background text-white p-5 md:p-10 lg:p-16 grid-pattern">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 animate-fade-in font-sans">{t("contact.title")}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
            <h2 className="text-2xl font-medium mb-4 font-sans">{t("contact.subtitle")}</h2>
            <p className="text-white/70 mb-6 font-sans">{t("contact.desc")}</p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-white mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium text-white/90 font-sans">{t("contact.email")}</h3>
                  <p className="text-white/70 font-sans">hello@gogh.studio</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-white mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium text-white/90 font-sans">{t("contact.location")}</h3>
                  <p className="text-white/70 font-sans">{t("contact.location.value")}</p>
                </div>
              </div>
            </div>

            <div className="p-6 border border-white/10 rounded-lg hover:border-white/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Square className="h-6 w-6 text-white" />
                <h3 className="font-medium font-sans">{t("contact.consultation.title")}</h3>
              </div>
              <p className="text-white/70 mb-4 font-sans">{t("contact.consultation.desc")}</p>
              <Link 
                href="/consultation" 
                className="inline-flex items-center gap-2 bg-gradient-to-b from-blue-600 to-blue-800 text-white px-4 py-2 rounded-full hover:from-blue-500 hover:to-blue-700 transition-all font-medium font-sans border border-white/10 shadow-lg"
              >
                {t("contact.consultation.cta")}
              </Link>
            </div>

            <div className="mt-8">
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 bg-gradient-to-b from-blue-600 to-blue-800 text-white px-4 py-2 rounded-full hover:from-blue-500 hover:to-blue-700 transition-all font-medium font-sans border border-white/10 shadow-lg"
              >
                <ArrowLeft className="h-4 w-4" />
                {t("nav.back")}
              </Link>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <ContactForm />
          </div>
        </div>
      </div>
    </SharedLayout>
  )
}

