"use client"

import type React from "react"

import Link from "next/link"
import { Square, Circle, Triangle, Hexagon, ArrowLeft } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { SharedLayout } from "@/components/shared-layout"

interface Service {
  titleKey: string
  descriptionKey: string
  icon: React.ReactNode
}

export default function WhatClientPage() {
  const { t } = useLanguage()

  const services: Service[] = [
    {
      titleKey: "what.service1.title",
      descriptionKey: "what.service1.desc",
      icon: <Square className="h-8 w-8" />,
    },
    {
      titleKey: "what.service2.title",
      descriptionKey: "what.service2.desc",
      icon: <Circle className="h-8 w-8" />,
    },
    {
      titleKey: "what.service3.title",
      descriptionKey: "what.service3.desc",
      icon: <Triangle className="h-8 w-8" />,
    },
    {
      titleKey: "what.service4.title",
      descriptionKey: "what.service4.desc",
      icon: <Hexagon className="h-8 w-8" />,
    },
  ]

  return (
    <SharedLayout>
      <div className="min-h-screen bg-background text-white p-5 md:p-10 lg:p-16 grid-pattern">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 animate-fade-in font-sans">{t("what.title")}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-lg p-6 hover:border-white/30 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 100 + 100}ms` }}
            >
              <div className="text-2xl mb-4 text-white">{service.icon}</div>
              <h3 className="text-xl font-medium mb-2 font-sans">{t(service.titleKey)}</h3>
              <p className="text-white/70 font-sans">{t(service.descriptionKey)}</p>
            </div>
          ))}
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
  )
}

