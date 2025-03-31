"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { Clock } from "@/components/clock"
import { motion } from "framer-motion"
import { Square, Mail, Phone, MapPin, Instagram, Twitter, Linkedin, ArrowRight } from "lucide-react"

export function Footer() {
  const { t } = useLanguage()

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#030303] overflow-hidden relative">
      {/* 背景漸變 */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] via-white/[0.02] to-white/[0.01]" />
      
      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo and info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Square className="h-5 w-5 text-white" />
              <span className="font-sans text-xl font-medium">
                Gogh<sup className="text-xs">™</sup>
              </span>
            </div>
            <p className="text-white/70 text-sm max-w-xs font-sans">{t("footer.tagline")}</p>
            <div className="flex items-center space-x-4 pt-2">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4 font-sans">{t("footer.navigation")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/why" className="text-white/70 hover:text-white transition-colors text-sm inline-block font-sans">
                  {t("nav.why")}
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-white/70 hover:text-white transition-colors text-sm inline-block font-sans">
                  {t("nav.work")}
                </Link>
              </li>
              <li>
                <Link href="/what" className="text-white/70 hover:text-white transition-colors text-sm inline-block font-sans">
                  {t("nav.what")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors text-sm inline-block font-sans">
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4 font-sans">{t("footer.contact")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-white/70 mt-0.5" />
                <span className="text-white/70 text-sm font-sans">hello@gogh.studio</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-white/70 mt-0.5" />
                <span className="text-white/70 text-sm font-sans">+852 2123 4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-white/70 mt-0.5" />
                <span className="text-white/70 text-sm font-sans">{t("contact.location.value")}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4 font-sans">{t("footer.hours")}</h3>
            <ul className="space-y-2">
              <li className="text-white/70 text-sm font-sans">{t("footer.weekdays")}: 9:00 - 18:00</li>
              <li className="text-white/70 text-sm font-sans">
                {t("footer.weekend")}: {t("footer.closed")}
              </li>
              <li className="mt-4">
                <Clock city="Hong Kong" offset={8} />
              </li>
            </ul>
            
            <motion.div
              className="mt-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            >
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-gradient-to-b from-blue-600 to-blue-800 text-white px-4 py-2 rounded-full hover:from-blue-500 hover:to-blue-700 transition-all font-medium font-sans border border-white/10 shadow-lg"
              >
                {t("footer.contactUs") || "联系我们"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-xs font-sans">
            © {currentYear} Gogh Studio. {t("footer.rights")}
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-white/50 hover:text-white/70 text-xs transition-colors font-sans">
              {t("footer.privacy")}
            </Link>
            <Link href="/terms" className="text-white/50 hover:text-white/70 text-xs transition-colors font-sans">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

