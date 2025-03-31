"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function CtaSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-24 bg-[#030303] overflow-hidden relative">
      {/* 背景漸變 */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] via-white/[0.02] to-white/[0.01]" />
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-gray-400 font-sans">
            {t("cta.title")}
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto font-sans">
            {t("cta.description")}
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-b from-blue-600 to-blue-800 text-white px-8 py-3 rounded-full hover:from-blue-500 hover:to-blue-700 transition-all font-medium font-sans border border-white/10 shadow-lg"
            >
              {t("cta.button")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

