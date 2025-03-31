"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { AudioWaveformIcon as Waveform } from "lucide-react"

export function FeedbackBanner() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="w-full max-w-xs bg-black/80 backdrop-blur-sm border border-white/10 shadow-lg transition-all duration-300 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-4 flex items-center gap-3">
        <div className="flex-shrink-0">
          <Waveform className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-sm">Haptic Feedback</h3>
          <p className="text-xs text-white/70">A strategy session for your company</p>
        </div>
        <div className="flex-shrink-0">
          <span className="text-xs font-medium bg-primary/20 text-primary px-2 py-0.5 rounded">FREE</span>
        </div>
      </CardContent>

      <div className={`h-0.5 bg-primary transition-all duration-500 ease-in-out ${isHovered ? "w-full" : "w-0"}`} />
    </Card>
  )
}

