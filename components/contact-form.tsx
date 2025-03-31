"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { useLanguage } from "@/contexts/language-context"

export function ContactForm() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // 發送數據到API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // 提交成功
        toast({
          title: t("contact.form.success"),
          description: t("contact.form.success.desc"),
        });

        // 重置表單
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        // 提交出錯
        toast({
          title: "錯誤",
          description: data.message || "提交表單時出現問題，請稍後再試。",
          variant: "destructive",
        });
      }
    } catch (error) {
      // 請求出錯
      toast({
        title: "錯誤",
        description: "無法連接到服務器，請檢查您的網絡連接並稍後再試。",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="font-sans">{t("contact.form.name")}</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={t("contact.form.name")}
          required
          className="bg-white/5 border-white/10 focus:border-white font-sans"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="font-sans">{t("contact.form.email")}</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          required
          className="bg-white/5 border-white/10 focus:border-white font-sans"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="company" className="font-sans">{t("contact.form.company")}</Label>
        <Input
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder={t("contact.form.company")}
          className="bg-white/5 border-white/10 focus:border-white font-sans"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="font-sans">{t("contact.form.message")}</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={t("contact.form.message")}
          required
          className="min-h-[120px] bg-white/5 border-white/10 focus:border-white font-sans"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-b from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white font-medium transition-all border border-white/10 shadow-lg font-sans"
      >
        {isSubmitting ? t("contact.form.submitting") : t("contact.form.submit")}
      </Button>
    </form>
  )
}

