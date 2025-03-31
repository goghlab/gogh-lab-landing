"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-white">
          <Globe className="h-4 w-4" />
          <span className="sr-only">切換語言</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-black border border-white/10">
        <DropdownMenuItem
          className={`font-sans ${language === "en" ? "text-white" : "text-white/70"}`}
          onClick={() => setLanguage("en")}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`font-sans ${language === "zh" ? "text-white" : "text-white/70"}`}
          onClick={() => setLanguage("zh")}
        >
          中文
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

