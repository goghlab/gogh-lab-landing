"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { ArrowRight, MousePointer, Square, Circle, Triangle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function MainContent() {
  const { t } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeProject, setActiveProject] = useState(0)
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const projects = [
    {
      title: t("projects.project1.title") || "Minimalist Branding",
      client: t("projects.project1.client") || "Hong Kong Finance",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: t("projects.project2.title") || "Clean UX Design",
      client: t("projects.project2.client") || "Tech Startup",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: t("projects.project3.title") || "Monochrome Web Experience",
      client: t("projects.project3.client") || "Luxury Retail",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  // Handle mouse movement for 3D effect
  useEffect(() => {
    if (!containerRef.current) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = e
      const { left, top, width, height } = containerRef.current.getBoundingClientRect()

      // Calculate rotation based on mouse position
      const x = (clientX - left - width / 2) / 25
      const y = (clientY - top - height / 2) / 25

      // Apply 3D transform with smooth transition
      containerRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`
    }

    // Reset transform when mouse leaves
    const handleMouseLeave = () => {
      if (!containerRef.current) return
      containerRef.current.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)"
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 300)

    // Auto-rotate projects
    const projectTimer = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length)
    }, 5000)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      clearTimeout(timer)
      clearInterval(projectTimer)
    }
  }, [projects.length])

  // Add touch support for mobile devices
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (!containerRef.current) return

      // Simple touch interaction - just a subtle tilt
      containerRef.current.style.transform = "perspective(1000px) rotateY(2deg) rotateX(-1deg)"

      // Reset after a short delay
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)"
        }
      }, 300)
    }

    const element = containerRef.current
    if (element) {
      element.addEventListener("touchstart", handleTouchStart)

      return () => {
        element.removeEventListener("touchstart", handleTouchStart)
      }
    }
  }, [isLoaded])

  return (
    <section className="py-16 md:py-24 bg-[#030303] overflow-hidden relative">
      {/* 背景漸變 */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] via-white/[0.02] to-white/[0.01]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-gray-400 font-sans">
            {t("portfolio.title") || "我們的作品"}
          </h2>
        </motion.div>
        
        <div
          ref={(node) => {
            // Assign to both refs
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
          {/* Main content area */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Project showcase */}
              <div className="absolute inset-0 flex items-center justify-center">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 flex flex-col transition-all duration-700 ease-in-out ${
                      activeProject === index ? "opacity-100 transform-none" : "opacity-0 translate-x-8"
                    }`}
                    style={{
                      transitionDelay: activeProject === index ? "0ms" : "0ms",
                      zIndex: activeProject === index ? 10 : 0,
                    }}
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 text-center">
                      <div className="w-full max-w-xs mb-4 sm:mb-6 md:mb-8 relative">
                        <img
                          src={
                            index === 0
                              ? "/placeholder.svg?height=200&width=300&text=Minimalist+Branding"
                              : index === 1
                                ? "/placeholder.svg?height=200&width=300&text=Clean+UX+Design"
                                : "/placeholder.svg?height=200&width=300&text=Monochrome+Web"
                          }
                          alt={`${project.title} preview`}
                          className="w-full h-auto rounded-md shadow-lg border border-white/20 object-cover"
                        />
                        <div className="absolute -bottom-3 -right-3 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center white-glow border border-white/20 bg-[#030303]">
                          {index === 0 ? (
                            <Square className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                          ) : index === 1 ? (
                            <Circle className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                          ) : (
                            <Triangle className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                          )}
                        </div>
                      </div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 font-sans">{project.title}</h2>
                      <p className="text-white/70 mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base font-sans">{project.client}</p>
                      <motion.button 
                        className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#0015ff] hover:bg-[#0015ff]/90 transition-colors text-sm sm:text-base border border-[#0015ff]/30 font-sans text-white shadow-lg shadow-[#0015ff]/20"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                      >
                        <span>{t("portfolio.viewProject") || "View Project"}</span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      </motion.button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Project indicators */}
              <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-0 right-0 flex justify-center gap-1 sm:gap-2 z-20">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
                      activeProject === index ? "bg-[#0015ff] w-4 sm:w-6" : "bg-white/30"
                    }`}
                    onClick={() => setActiveProject(index)}
                    aria-label={`View project ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Left sidebar */}
          <div
            className="absolute left-0 top-0 bottom-0 w-8 sm:w-10 md:w-12 bg-[#040404] hidden sm:flex flex-col items-center py-4 gap-6 z-30"
            aria-hidden="true"
          >
            <div className="w-6 h-6 rounded-full bg-[#0015ff]/30 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#0015ff]" />
            </div>

            <div className="w-6 h-6 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
              <MousePointer className="w-4 h-4 text-white/70" />
            </div>

            {[Square, Circle, Triangle].map((Icon, index) => (
              <div
                key={index}
                className="w-6 h-6 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
              >
                <Icon className="w-4 h-4 text-white/50" />
              </div>
            ))}
          </div>

          {/* Interaction hint */}
          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-[10px] sm:text-xs text-white/50 flex items-center gap-1 sm:gap-2 z-20 font-sans">
            <MousePointer className="w-2 h-2 sm:w-3 sm:h-3" />
            <span className="hidden sm:inline">{t("portfolio.moveToInteract") || "Move mouse to interact"}</span>
            <span className="sm:hidden">{t("portfolio.tapToView") || "Tap to view"}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

