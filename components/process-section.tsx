"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { Square, Circle, Triangle, ArrowRight } from "lucide-react"

interface ProcessStep {
  id: number
  titleKey: string
  descriptionKey: string
  icon: React.ReactNode
}

export function ProcessSection() {
  const { t } = useLanguage()

  const steps: ProcessStep[] = [
    {
      id: 1,
      titleKey: "process.step1.title",
      descriptionKey: "process.step1.description",
      icon: <Square className="h-6 w-6" />,
    },
    {
      id: 2,
      titleKey: "process.step2.title",
      descriptionKey: "process.step2.description",
      icon: <Circle className="h-6 w-6" />,
    },
    {
      id: 3,
      titleKey: "process.step3.title",
      descriptionKey: "process.step3.description",
      icon: <Triangle className="h-6 w-6" />,
    },
  ]

  return (
    <section
      className="py-16 md:py-24 bg-[#030303] overflow-hidden relative"
    >
      {/* 背景漸變 */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] via-white/[0.02] to-white/[0.01]" />
      
      {/* 左上角漸變圓形 */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-b from-white/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-gray-400 font-sans">{t("process.title")}</h2>
          <p className="text-white/70 font-sans">{t("process.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id} 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-gradient-to-b from-white/10 to-white/5 flex items-center justify-center mb-4 border border-white/20">
                  {step.icon}
                </div>
                <h3 className="text-xl font-medium mb-2 font-sans">{t(step.titleKey)}</h3>
                <p className="text-white/70 font-sans">{t(step.descriptionKey)}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-full transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="h-5 w-5 text-white/30" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

