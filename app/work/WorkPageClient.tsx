"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { SharedLayout } from "@/components/shared-layout"
import { ArrowLeft } from "lucide-react"

interface Project {
  id: number
  titleKey: string
  clientKey: string
  image: string
  tagKeys: string[]
}

export default function WorkPageClient() {
  const { t } = useLanguage()

  const projects: Project[] = [
    {
      id: 1,
      titleKey: "work.project1.title",
      clientKey: "work.project1.client",
      image: "/placeholder.svg?height=400&width=600",
      tagKeys: ["work.project1.tag1", "work.project1.tag2", "work.project1.tag3"],
    },
    {
      id: 2,
      titleKey: "work.project2.title",
      clientKey: "work.project2.client",
      image: "/placeholder.svg?height=400&width=600",
      tagKeys: ["work.project2.tag1", "work.project2.tag2", "work.project2.tag3"],
    },
    {
      id: 3,
      titleKey: "work.project3.title",
      clientKey: "work.project3.client",
      image: "/placeholder.svg?height=400&width=600",
      tagKeys: ["work.project3.tag1", "work.project3.tag2", "work.project3.tag3"],
    },
  ]

  return (
    <SharedLayout>
      <div className="min-h-screen bg-background text-white p-5 md:p-10 lg:p-16 grid-pattern">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 animate-fade-in font-sans">{t("work.title")}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group border border-white/10 rounded-lg overflow-hidden animate-fade-in hover:border-white/30 transition-all"
              style={{ animationDelay: `${index * 100 + 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-lg aspect-video mb-4">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${t(project.titleKey)} for ${t(project.clientKey)}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-white"></div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium font-sans">{t(project.titleKey)}</h3>
                <p className="text-white/70 mb-3 font-sans">{t(project.clientKey)}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tagKeys.map((tagKey, i) => (
                    <span key={i} className="text-xs bg-white/10 px-2 py-1 rounded-full font-sans">
                      {t(tagKey)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-gradient-to-b from-blue-600 to-blue-800 text-white px-4 py-2 rounded-full hover:from-blue-500 hover:to-blue-700 transition-all font-medium font-sans border border-white/10 shadow-lg"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("nav.back")}
          </Link>
        </div>
      </div>
    </SharedLayout>
  )
}

