"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { ArrowRight, Square } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function MainContent() {
  const { t } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const projects = [
    {
      title: t("projects.project1.title") || "智能无人便利店系统",
      client: t("projects.project1.client") || "AI驱动的全自动购物体验",
      description: t("projects.project1.description") || "整合AI技术与移动应用，为用户提供24小时自助购物服务。通过手机APP即可完成商品浏览、购买和支付全过程。",
      image: "/852.png",
    }
  ]

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setIsLoaded(true)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [inView])

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-white/[0.05] blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-gray-400 font-sans">
            {t("work.title") || "最新案例"}
          </h2>
        </motion.div>
        
        <div
          ref={(node) => {
            if (node) {
              containerRef.current = node
              inViewRef(node)
            }
          }}
          className={`relative w-full max-w-4xl mx-auto aspect-[16/9] md:aspect-video bg-[#050505] rounded-2xl overflow-hidden transition-all duration-500 shadow-2xl ${
            inView && isLoaded ? "opacity-100" : "opacity-0"
          } border border-white/10`}
          style={{
            transformStyle: "preserve-3d",
            transform: "perspective(1000px)",
          }}
          aria-label="Interactive design showcase"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="absolute inset-0 flex flex-col transition-all duration-700 ease-in-out opacity-100 transform-none"
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 text-center">
                    <div className="w-full max-w-lg mb-4 sm:mb-6 md:mb-8 relative">
                      <img
                        src={projects[0].image}
                        alt={`${projects[0].title} preview`}
                        className="w-full h-auto rounded-md shadow-lg border border-white/20 object-cover scale-150"
                      />
                      <div className="absolute -bottom-3 -right-3 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center white-glow border border-white/20 bg-[#030303]">
                        <Square className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 font-sans">{projects[0].title}</h2>
                    <p className="text-white/70 mb-2 sm:mb-3 text-sm sm:text-base font-sans">{projects[0].client}</p>
                    <p className="text-white/60 mb-4 sm:mb-6 text-sm sm:text-base font-sans max-w-md">{projects[0].description}</p>
                    <motion.button 
                      className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#0015ff] hover:bg-[#0015ff]/90 transition-colors text-sm sm:text-base border border-[#0015ff]/30 font-sans text-white shadow-lg shadow-[#0015ff]/20"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    >
                      <span>{t("portfolio.viewProject") || "查看项目"}</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

