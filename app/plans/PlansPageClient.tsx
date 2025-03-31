"use client"

import Link from "next/link"
import { Check } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { SharedLayout } from "@/components/shared-layout"

interface Plan {
  nameKey: string
  priceKey: string
  descriptionKey: string
  featureKeys: string[]
  featured?: boolean
}

export default function PlansPageClient() {
  const { t } = useLanguage()

  const plans: Plan[] = [
    {
      nameKey: "plans.essential",
      priceKey: "plans.essential.price",
      descriptionKey: "plans.essential.desc",
      featureKeys: [
        "plans.essential.feature1",
        "plans.essential.feature2",
        "plans.essential.feature3",
        "plans.essential.feature4",
      ],
    },
    {
      nameKey: "plans.premium",
      priceKey: "plans.premium.price",
      descriptionKey: "plans.premium.desc",
      featureKeys: [
        "plans.premium.feature1",
        "plans.premium.feature2",
        "plans.premium.feature3",
        "plans.premium.feature4",
        "plans.premium.feature5",
      ],
      featured: true,
    },
    {
      nameKey: "plans.enterprise",
      priceKey: "plans.enterprise.price",
      descriptionKey: "plans.enterprise.desc",
      featureKeys: [
        "plans.enterprise.feature1",
        "plans.enterprise.feature2",
        "plans.enterprise.feature3",
        "plans.enterprise.feature4",
        "plans.enterprise.feature5",
      ],
    },
  ]

  return (
    <SharedLayout>
      <div className="min-h-screen bg-background text-white p-5 md:p-10 lg:p-16 grid-pattern">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 animate-fade-in">{t("plans.title")}</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`border rounded-lg p-6 transition-all animate-fade-in ${
                plan.featured
                  ? "border-white bg-white/5 transform hover:-translate-y-1"
                  : "border-white/10 hover:border-white/30"
              }`}
              style={{ animationDelay: `${index * 100 + 100}ms` }}
            >
              <h3 className="text-xl font-medium mb-1">{t(plan.nameKey)}</h3>
              <div className="text-2xl font-bold mb-2">{t(plan.priceKey)}</div>
              <p className="text-white/70 mb-6">{t(plan.descriptionKey)}</p>

              <ul className="space-y-3 mb-6">
                {plan.featureKeys.map((featureKey, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 mr-2 flex-shrink-0 text-white" aria-hidden="true" />
                    <span>{t(featureKey)}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`inline-block w-full text-center py-2 px-4 rounded-md transition-colors ${
                  plan.featured ? "bg-white text-black hover:bg-white/90" : "bg-white/10 hover:bg-white/20"
                }`}
              >
                {t("plans.cta")}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <Link href="/" className="text-white/70 hover:text-white transition-colors minimal-link">
            {t("nav.back")}
          </Link>
        </div>
      </div>
    </SharedLayout>
  )
}

