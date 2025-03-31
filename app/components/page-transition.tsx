"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [displayChildren, setDisplayChildren] = useState(children)

  useEffect(() => {
    if (pathname) {
      setIsTransitioning(true)
      const timeout = setTimeout(() => {
        setDisplayChildren(children)
        setIsTransitioning(false)
      }, 500)

      return () => clearTimeout(timeout)
    }
  }, [pathname, children])

  return (
    <div className={`transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
      {displayChildren}
    </div>
  )
}

