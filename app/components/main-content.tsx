"use client"

import { useEffect, useRef, useState } from "react"

export function MainContent() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = e
      const { left, top, width, height } = containerRef.current.getBoundingClientRect()

      const x = (clientX - left - width / 2) / 25
      const y = (clientY - top - height / 2) / 25

      containerRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-3xl aspect-video bg-zinc-900 rounded-lg overflow-hidden transition-all duration-300"
      style={{
        transformStyle: "preserve-3d",
        opacity: isVisible ? 1 : 0,
        transform: "perspective(1000px)",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-16 h-16 purple-glow">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="black" stroke="#954CE9" strokeWidth="3" />
            <text x="50" y="60" fontSize="40" fontWeight="bold" fill="#954CE9" textAnchor="middle">
              A
            </text>
          </svg>
        </div>
      </div>

      {/* Left sidebar */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-zinc-950 flex flex-col items-center py-4 gap-6">
        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-primary" />
        </div>

        {["search", "grid", "file", "code", "flame", "search"].map((icon, index) => (
          <div
            key={index}
            className="w-6 h-6 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
          >
            <div className="w-4 h-4 bg-white/30 rounded-sm" />
          </div>
        ))}
      </div>
    </div>
  )
}

