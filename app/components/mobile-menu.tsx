"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" className="text-white">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-black border-white/10 p-0">
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>

          <nav className="flex flex-col gap-4 p-6">
            <Link
              href="/why"
              className="text-2xl font-light py-2 border-b border-white/10"
              onClick={() => setOpen(false)}
            >
              Why
            </Link>
            <Link
              href="/work"
              className="text-2xl font-light py-2 border-b border-white/10"
              onClick={() => setOpen(false)}
            >
              Work
            </Link>
            <Link
              href="/what"
              className="text-2xl font-light py-2 border-b border-white/10"
              onClick={() => setOpen(false)}
            >
              What
            </Link>
            <Link
              href="/plans"
              className="text-2xl font-light py-2 border-b border-white/10"
              onClick={() => setOpen(false)}
            >
              Plans
            </Link>
          </nav>

          <div className="mt-auto p-6">
            <Link
              href="/contact"
              className="inline-block w-full bg-black text-white border border-white/20 px-6 py-3 rounded-md text-center hover:bg-white/10 transition-colors"
              onClick={() => setOpen(false)}
            >
              Book a call
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

