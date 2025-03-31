"use client"

import { useLanguage } from "@/contexts/language-context"
import { Quote } from "lucide-react"
import { motion } from "framer-motion"

interface Testimonial {
  id: number
  quoteKey: string
  authorKey: string
  roleKey: string
  companyKey: string
}

export function TestimonialsSection() {
  const { t } = useLanguage()

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quoteKey: "testimonials.quote1",
      authorKey: "testimonials.author1",
      roleKey: "testimonials.role1",
      companyKey: "testimonials.company1",
    },
    {
      id: 2,
      quoteKey: "testimonials.quote2",
      authorKey: "testimonials.author2",
      roleKey: "testimonials.role2",
      companyKey: "testimonials.company2",
    },
    {
      id: 3,
      quoteKey: "testimonials.quote3",
      authorKey: "testimonials.author3",
      roleKey: "testimonials.role3",
      companyKey: "testimonials.company3",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-[#030303] overflow-hidden relative">
      {/* 背景漸變 */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] via-white/[0.02] to-white/[0.01]" />
      
      {/* 右下角漸變圓形 */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-t from-white/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-gray-400 font-sans">
            {t("testimonials.title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Quote className="h-8 w-8 text-white/30 mb-4" />
              <p className="text-white/80 italic mb-6 font-sans">"{t(testimonial.quoteKey)}"</p>
              <div>
                <p className="font-medium font-sans">{t(testimonial.authorKey)}</p>
                <p className="text-white/60 text-sm font-sans">
                  {t(testimonial.roleKey)}, {t(testimonial.companyKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

