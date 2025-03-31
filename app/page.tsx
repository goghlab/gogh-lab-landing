"use client"

import Link from "next/link"
import { MinimalBanner } from "@/components/minimal-banner"
import { MainContent } from "@/components/main-content"
import { useLanguage } from "@/contexts/language-context"
import { SharedLayout } from "@/components/shared-layout"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ClientsSection } from "@/components/clients-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { ServicesSection } from "@/components/ui/services-section"
import { LandingHero } from "@/components/ui/landing-hero"

export default function Home() {
  const { t } = useLanguage()

  return (
    <>
      <SharedLayout>
        <div className="relative flex-1 flex flex-col">
          <div className="absolute top-5 right-5 md:top-10 md:right-10 lg:right-16 z-10">
            <MinimalBanner />
          </div>

          <LandingHero />

          <div id="services">
            <ServicesSection />
          </div>

          <MainContent />

          <ProcessSection />
          <TestimonialsSection />
          <ClientsSection />
          <div id="contact">
            <CtaSection />
          </div>
        </div>
      </SharedLayout>
      <Footer />
    </>
  )
}

