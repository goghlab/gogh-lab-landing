"use client"

import { useLanguage } from "@/contexts/language-context"

export function ClientsSection() {
  const { t } = useLanguage()

  const clients = [
    { id: 1, name: "Client 1", logo: "/placeholder.svg?height=60&width=120" },
    { id: 2, name: "Client 2", logo: "/placeholder.svg?height=60&width=120" },
    { id: 3, name: "Client 3", logo: "/placeholder.svg?height=60&width=120" },
    { id: 4, name: "Client 4", logo: "/placeholder.svg?height=60&width=120" },
    { id: 5, name: "Client 5", logo: "/placeholder.svg?height=60&width=120" },
    { id: 6, name: "Client 6", logo: "/placeholder.svg?height=60&width=120" },
  ]

  return null
}

