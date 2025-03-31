"use client"

import { useEffect, useState } from "react"

interface ClockProps {
  city: string
  offset: number
}

export function Clock({ city, offset }: ClockProps) {
  const [time, setTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const utc = now.getTime() + now.getTimezoneOffset() * 60000
      const cityTime = new Date(utc + 3600000 * offset)

      const hours = cityTime.getHours().toString().padStart(2, "0")
      const minutes = cityTime.getMinutes().toString().padStart(2, "0")
      const seconds = cityTime.getSeconds().toString().padStart(2, "0")

      setTime(`${hours}:${minutes}:${seconds}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [offset])

  return (
    <div className="whitespace-nowrap">
      {city} {time}
    </div>
  )
}

