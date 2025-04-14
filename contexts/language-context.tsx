"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "zh"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.why": "Why",
    "nav.work": "Work",
    "nav.what": "What",
    "nav.plans": "Plans",
    "nav.back": "← Back to home",

    // Home page
    "home.approach": "Our minimalist approach",
    "home.subtitle": "Where simplicity meets functionality",
    "home.heading": "Transforming brands through minimalist design",
    "home.cta": "Book a consultation",
    
    // Rotating text section
    "home.rotating.title": "How We Make Design",
    "home.rotating.prefix": "We create designs that are",
    "home.rotating.text1": "minimal & elegant",
    "home.rotating.text2": "functional & intuitive",
    "home.rotating.text3": "modern & impactful",

    // New Hero Section
    "hero.makeYour": "Make your",
    "hero.website": "website",
    "hero.description": "with a minimalist approach to create modern and memorable user experiences that effectively communicate your brand's unique value.",
    "hero.button1": "Explore Services",
    "hero.button2": "Contact Us",
    "hero.rotate.fancy": "fancy",
    "hero.rotate.fun": "fun",
    "hero.rotate.lovely": "lovely ♥",
    "hero.rotate.weird": "weird",
    "hero.rotate.funky": "🪩 funky",
    "hero.rotate.dancing": "💃🕺",
    "hero.rotate.sexy": "sexy",
    "hero.rotate.cool": "🕶️ cool",
    "hero.rotate.go": "go 🚀",
    "hero.rotate.fire": "🔥🔥🔥",
    "hero.rotate.animated": "over-animated?",
    "hero.rotate.pop": "pop ✨",
    "hero.rotate.rock": "rock 🤘",

    // Banner
    "banner.title": "Design Consultation",
    "banner.subtitle": "A minimalist approach for your brand",
    "banner.free": "FREE",

    // Why page
    "why.title": "Why Gogh?",
    "why.p1":
      "We believe design is most powerful when stripped to its essence—a perfect balance of form and function that creates meaningful connections between brands and their audiences.",
    "why.p2":
      "Our approach draws inspiration from minimalist principles, combining clean aesthetics with meticulous attention to detail to deliver designs that stand out in today's cluttered digital landscape.",
    "why.p3":
      "With Gogh Studio, you're partnering with designers who understand the Hong Kong market—professionals who transform your vision into elegant, effective digital experiences that drive real results.",
    "why.vision": "Minimalist Vision",
    "why.vision.desc": "We distill complex ideas into clean, focused designs that capture your brand's unique essence.",
    "why.execution": "Precise Execution",
    "why.execution.desc":
      "Our skilled designers blend minimalist principles with modern digital tools for elegant results.",
    "why.impact": "Business Impact",
    "why.impact.desc": "Clean design with purpose—we create experiences that drive engagement and conversion.",

    // Work page
    "work.title": "Our Work",
    "work.project1.title": "Minimalist Brand Identity",
    "work.project1.client": "Hong Kong Financial Group",
    "work.project1.tag1": "Branding",
    "work.project1.tag2": "Logo Design",
    "work.project1.tag3": "Visual Identity",
    "work.project2.title": "Clean UX Design",
    "work.project2.client": "Tech Startup",
    "work.project2.tag1": "User Experience",
    "work.project2.tag2": "Automation Marketing",
    "work.project2.tag3": "Multi-platform Integration",
    "work.project3.title": "Monochrome Web Experience",
    "work.project3.client": "Luxury Retail Brand",
    "work.project3.tag1": "Web Design",
    "work.project3.tag2": "Animation",
    "work.project3.tag3": "Minimalism",

    // What page
    "what.title": "What We Do",
    "what.service1.title": "Minimalist Branding",
    "what.service1.desc":
      "Creating distinctive brand identities that capture your essence through clean, focused design that resonates with Hong Kong audiences.",
    "what.service2.title": "Clean UX/UI Design",
    "what.service2.desc":
      "Crafting intuitive and visually refined digital experiences that engage users and elevate your digital presence.",
    "what.service3.title": "Monochrome Web Experiences",
    "what.service3.desc":
      "Building elegant websites that blend minimalist design with technical excellence for memorable user journeys.",
    "what.service4.title": "Design Systems",
    "what.service4.desc":
      "Developing comprehensive design frameworks that ensure consistency and efficiency across all your digital touchpoints.",

    // Services section
    "services.title": "Our Advantages",
    "services.ai.title": "AI-Driven Creativity",
    "services.ai.description": "We combine AI with human creativity to explore possibilities beyond traditional design approaches.",
    "services.aesthetics.title": "East-West Aesthetics",
    "services.aesthetics.description": "Our team blends Eastern Zen aesthetics with Western design principles for unique creations.",
    "services.tech.title": "Tech & Design Integration",
    "services.tech.description": "We're not just designers, but technical experts creating beautiful and powerful solutions.",
    "services.learnMoreButton": "Learn More About Our Services",

    // Plans page
    "plans.title": "Our Plans",
    "plans.essential": "Essential",
    "plans.essential.price": "HK$3,888",
    "plans.essential.desc": "Perfect for specific design needs",
    "plans.essential.feature1": "Brand identity design",
    "plans.essential.feature2": "Website design (up to 5 pages)",
    "plans.essential.feature3": "One round of revisions",
    "plans.essential.feature4": "2 weeks delivery",
    "plans.premium": "Premium",
    "plans.premium.price": "HK$65,000/mo",
    "plans.premium.desc": "Ongoing creative support for growing brands",
    "plans.premium.feature1": "Unlimited design requests",
    "plans.premium.feature2": "UI/UX design",
    "plans.premium.feature3": "Website & app design",
    "plans.premium.feature4": "Priority support",
    "plans.premium.feature5": "Fast turnaround",
    "plans.enterprise": "Enterprise",
    "plans.enterprise.price": "Custom",
    "plans.enterprise.desc": "Comprehensive solutions for larger organizations",
    "plans.enterprise.feature1": "Dedicated creative team",
    "plans.enterprise.feature2": "Design direction",
    "plans.enterprise.feature3": "Design systems",
    "plans.enterprise.feature4": "Custom integrations",
    "plans.enterprise.feature5": "24/7 support",
    "plans.cta": "Get started",

    // Contact page
    "contact.title": "Contact Us",
    "contact.subtitle": "Get in touch",
    "contact.desc":
      "Ready to transform your brand with minimalist design? We're here to help you create exceptional digital experiences that captivate your audience and elevate your business in Hong Kong and beyond.",
    "contact.email": "Email",
    "contact.location": "Location",
    "contact.location.value": "Central, Hong Kong",
    "contact.consultation.title": "Design Consultation",
    "contact.consultation.desc":
      "Book a free 45-minute consultation with our design team to discuss your brand challenges and explore minimalist solutions.",
    "contact.consultation.cta": "Learn more →",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.company": "Company",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.form.submitting": "Sending...",
    "contact.form.success": "Message sent",
    "contact.form.success.desc": "We'll get back to you as soon as possible.",

    // Consultation page
    "consultation.title": "Design Consultation",
    "consultation.badge": "Free Strategy Session",
    "consultation.expect": "What to expect",
    "consultation.expect.1": "A 45-minute video call with our design directors",
    "consultation.expect.2": "Analysis of your current brand challenges and design opportunities",
    "consultation.expect.3": "Minimalist design recommendations you can implement immediately",
    "consultation.expect.4": "No obligations or sales pressure - just valuable design insights",
    "consultation.perfect": "Perfect for",
    "consultation.perfect.1": "Hong Kong businesses looking to establish a distinctive minimalist identity",
    "consultation.perfect.2": "Brands needing to refresh their visual language",
    "consultation.perfect.3": "Teams preparing for a product launch or redesign",
    "consultation.perfect.4": "Founders seeking expert design guidance",
    "consultation.cta": "Book your free session",

    // Process section
    "process.title": "Our Design Process",
    "process.subtitle": "A streamlined approach to creating impactful minimalist designs",
    "process.step1.title": "Discovery",
    "process.step1.description": "We learn about your brand, goals, and audience to establish a strategic foundation.",
    "process.step2.title": "Creation",
    "process.step2.description": "Our designers craft clean, purposeful solutions that embody your brand essence.",
    "process.step3.title": "Refinement",
    "process.step3.description": "We perfect every detail to ensure the final design achieves maximum impact.",

    // Testimonials section
    "testimonials.title": "What Our Clients Say",
    "testimonials.quote1":
      "Gogh Studio transformed our brand with their minimalist approach. The clean design perfectly captures our essence while standing out in the Hong Kong market.",
    "testimonials.author1": "Sarah Chen",
    "testimonials.role1": "Marketing Director",
    "testimonials.company1": "HK Financial Group",
    "testimonials.quote2":
      "Working with Gogh was effortless. Their attention to detail and focus on simplicity helped us create a digital experience our users love.",
    "testimonials.author2": "Michael Wong",
    "testimonials.role2": "Founder",
    "testimonials.company2": "TechFlow",
    "testimonials.quote3":
      "The team's understanding of minimalist design principles elevated our brand identity. Their work has directly contributed to our business growth.",
    "testimonials.author3": "Jessica Tam",
    "testimonials.role3": "Creative Director",
    "testimonials.company3": "Luxe Retail",

    // Clients section
    "clients.title": "Trusted by Leading Brands",

    // CTA section
    "cta.title": "Ready to Transform Your Brand?",
    "cta.description": "Let's create a minimalist design that captures your essence and resonates with your audience.",
    "cta.button": "Start Your Project",

    // Footer
    "footer.tagline":
      "A minimalist design studio creating elegant, effective digital experiences for forward-thinking brands in Hong Kong.",
    "footer.navigation": "Navigation",
    "footer.contact": "Contact",
    "footer.hours": "Working Hours",
    "footer.weekdays": "Monday-Friday",
    "footer.weekend": "Saturday-Sunday",
    "footer.closed": "Closed",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",

    // Portfolio section
    "portfolio.title": "Portfolio",
    "portfolio.viewProject": "View Project",
    "portfolio.moveToInteract": "Move mouse to interact",
    "portfolio.tapToView": "Tap to view",
    
    "projects.project1.title": "智能无人便利店系统",
    "projects.project1.client": "AI驱动的全自动购物体验",
    "projects.project1.description": "整合AI技术与移动应用，为用户提供24小时自助购物服务。通过手机APP即可完成商品浏览、购买和支付全过程。",
    "projects.project2.title": "Clean UX Design",
    "projects.project2.client": "Tech Startup",
    "projects.project3.title": "智能POS系统解决方案",
    "projects.project3.client": "Lightspeed零售系统集成",
    "projects.project3.description": "为零售商打造的新一代POS系统集成方案，实现库存管理、销售分析、员工管理和客户关系维护的一体化运营。支持多门店管理，提供实时数据同步和智能分析报表。",
    "projects.project3.tag1": "系统集成",
    "projects.project3.tag2": "零售科技",
    "projects.project3.tag3": "数据分析",
  },
  zh: {
    // Navigation
    "nav.why": "理念",
    "nav.work": "作品",
    "nav.what": "服務",
    "nav.plans": "方案",
    "nav.back": "← 返回首頁",

    // Home page
    "home.approach": "我們的極簡主義方法",
    "home.subtitle": "簡約與功能的完美結合",
    "home.heading": "通過極簡設計改變品牌形象",
    "home.cta": "預約諮詢",
    
    // Rotating text section
    "home.rotating.title": "我們如何設計",
    "home.rotating.prefix": "我們創造的設計是",
    "home.rotating.text1": "簡約而優雅的",
    "home.rotating.text2": "實用而直觀的",
    "home.rotating.text3": "現代而有影響力的",

    // New Hero Section
    "hero.makeYour": "讓您的",
    "hero.website": "網站",
    "hero.description": "通過極簡主義方法創造現代而令人難忘的用戶體驗，有效傳達您品牌的獨特價值。",
    "hero.button1": "探索服務",
    "hero.button2": "聯繫我們",
    "hero.rotate.fancy": "精美",
    "hero.rotate.fun": "有趣",
    "hero.rotate.lovely": "可愛 ♥",
    "hero.rotate.weird": "獨特",
    "hero.rotate.funky": "🪩 時尚",
    "hero.rotate.dancing": "💃🕺",
    "hero.rotate.sexy": "性感",
    "hero.rotate.cool": "🕶️ 酷炫",
    "hero.rotate.go": "起飛 🚀",
    "hero.rotate.fire": "🔥🔥🔥",
    "hero.rotate.animated": "動感十足?",
    "hero.rotate.pop": "流行 ✨",
    "hero.rotate.rock": "搖滾 🤘",

    // Banner
    "banner.title": "設計諮詢",
    "banner.subtitle": "為您的品牌提供極簡方案",
    "banner.free": "免費",

    // Why page
    "why.title": "為何選擇Gogh?",
    "why.p1": "我們相信設計在簡化到本質時最為強大——形式與功能的完美平衡，為品牌與受眾之間創造有意義的連接。",
    "why.p2": "我們的方法汲取極簡主義原則的靈感，將簡潔美學與對細節的精心關注相結合，在當今雜亂的數碼環境中脫穎而出。",
    "why.p3":
      "與Gogh Studio合作，您將與了解香港市場的設計師攜手——這些專業人士將您的願景轉化為優雅、有效的數碼體驗，帶來實際成果。",
    "why.vision": "極簡願景",
    "why.vision.desc": "我們將複雜的想法提煉為簡潔、專注的設計，捕捉您品牌的獨特本質。",
    "why.execution": "精準執行",
    "why.execution.desc": "我們的設計師將極簡主義原則與現代數碼工具相結合，創造優雅的成果。",
    "why.impact": "商業影響",
    "why.impact.desc": "有目的的簡潔設計——我們創造能夠提高參與度和轉化率的體驗。",

    // Work page
    "work.title": "數碼轉營升級案例分享",
    "work.project1.title": "智能无人便利店系统",
    "work.project1.client": "AI驱动的全自动购物体验",
    "work.project1.tag1": "AI技术",
    "work.project1.tag2": "移动应用开发",
    "work.project1.tag3": "智能零售",
    "work.project2.title": "MA-1 全能智能营销助手",
    "work.project2.client": "AI驱动的全栈营销代理",
    "work.project2.tag1": "人工智能",
    "work.project2.tag2": "自动化营销",
    "work.project2.tag3": "多平台集成",
    "work.project3.title": "智能POS系统解决方案",
    "work.project3.client": "Lightspeed零售系统集成",
    "work.project3.tag1": "系统集成",
    "work.project3.tag2": "零售科技",
    "work.project3.tag3": "数据分析",

    // What page
    "what.title": "我們的服務",
    "what.service1.title": "極簡品牌識別",
    "what.service1.desc":
      "創造獨特的品牌形象，通過簡潔、專注的設計捕捉您的品牌本質，與香港受眾產生共鳴。",
    "what.service2.title": "清晰的用戶體驗設計",
    "what.service2.desc":
      "打造直觀且視覺精緻的數位體驗，吸引用戶並提升您的數位形象。",
    "what.service3.title": "黑白網頁體驗",
    "what.service3.desc":
      "構建優雅的網站，將極簡設計與技術卓越融為一體，創造難忘的用戶旅程。",
    "what.service4.title": "設計系統",
    "what.service4.desc":
      "開發全面的設計框架，確保在所有數位接觸點上保持一致性和效率。",

    // Services section
    "services.title": "我們的優勢",
    "services.ai.title": "AI驅動的創意",
    "services.ai.description": "我們結合人工智能與人類創意，探索傳統設計方法無法實現的可能性。",
    "services.aesthetics.title": "東西方美學融合",
    "services.aesthetics.description": "我們的團隊將東方禪意美學與西方設計原則融為一體，創造獨特作品。",
    "services.tech.title": "技術與設計的結合",
    "services.tech.description": "我們不僅是設計師，還是技術專家，創造美觀且功能強大的解決方案。",
    "services.learnMoreButton": "了解更多我們的服務",

    // Plans page
    "plans.title": "我們的方案",
    "plans.essential": "基礎方案",
    "plans.essential.price": "港幣$3888",
    "plans.essential.desc": "適合特定設計需求",
    "plans.essential.feature1": "品牌形象設計",
    "plans.essential.feature2": "網站設計（最多5頁）",
    "plans.essential.feature3": "一輪修改",
    "plans.essential.feature4": "2週交付",
    "plans.premium": "高級方案",
    "plans.premium.price": "港幣$65,000/月",
    "plans.premium.desc": "為成長中的品牌提供持續創意支持",
    "plans.premium.feature1": "無限設計請求",
    "plans.premium.feature2": "UI/UX設計",
    "plans.premium.feature3": "網站和應用設計",
    "plans.premium.feature4": "優先支援",
    "plans.premium.feature5": "快速交付",
    "plans.enterprise": "企業方案",
    "plans.enterprise.price": "定制價格",
    "plans.enterprise.desc": "為大型組織提供全面解決方案",
    "plans.enterprise.feature1": "專屬創意團隊",
    "plans.enterprise.feature2": "設計指導",
    "plans.enterprise.feature3": "設計系統",
    "plans.enterprise.feature4": "定制整合",
    "plans.enterprise.feature5": "24/7支援",
    "plans.cta": "開始合作",

    // Contact page
    "contact.title": "聯絡我們",
    "contact.subtitle": "與我們聯絡",
    "contact.desc":
      "準備好通過極簡設計改變您的品牌了嗎？我們將幫助您創造卓越的數碼體驗，吸引您的受眾並提升您在香港及其他地區的業務。",
    "contact.email": "電郵",
    "contact.location": "位置",
    "contact.location.value": "香港中環",
    "contact.consultation.title": "設計諮詢",
    "contact.consultation.desc": "預約45分鐘免費諮詢，與我們的設計團隊討論您的品牌挑戰並探索極簡解決方案。",
    "contact.consultation.cta": "了解更多 →",
    "contact.form.name": "姓名",
    "contact.form.email": "電郵",
    "contact.form.company": "公司",
    "contact.form.message": "留言",
    "contact.form.submit": "發送訊息",
    "contact.form.submitting": "發送中...",
    "contact.form.success": "訊息已發送",
    "contact.form.success.desc": "我們將盡快回覆您。",

    // Consultation page
    "consultation.title": "設計諮詢",
    "consultation.badge": "免費策略會議",
    "consultation.expect": "您可以期待",
    "consultation.expect.1": "與我們的設計總監進行45分鐘視像通話",
    "consultation.expect.2": "分析您當前的品牌挑戰和設計機會",
    "consultation.expect.3": "可立即實施的極簡設計建議",
    "consultation.expect.4": "無義務或銷售壓力——只提供有價值的設計見解",
    "consultation.perfect": "適合對象",
    "consultation.perfect.1": "希望建立獨特極簡形象的香港企業",
    "consultation.perfect.2": "需要更新視覺語言的品牌",
    "consultation.perfect.3": "準備產品發佈或重新設計的團隊",
    "consultation.perfect.4": "尋求專業設計指導的創辦人",
    "consultation.cta": "預約免費會議",

    // Process section
    "process.title": "我們的設計流程",
    "process.subtitle": "創造有影響力極簡設計的精簡方法",
    "process.step1.title": "探索",
    "process.step1.description": "我們了解您的品牌、目標和受眾，建立策略基礎。",
    "process.step2.title": "創作",
    "process.step2.description": "我們的設計師打造簡潔、有目的的解決方案，體現您的品牌本質。",
    "process.step3.title": "完善",
    "process.step3.description": "我們完善每個細節，確保最終設計達到最大影響力。",

    // Testimonials section
    "testimonials.title": "客戶評價",
    "testimonials.quote1":
      "Gogh Studio以極簡方法改變了我們的品牌。簡潔的設計完美捕捉了我們的本質，同時在香港市場中脫穎而出。",
    "testimonials.author1": "陳思穎",
    "testimonials.role1": "市場總監",
    "testimonials.company1": "香港金融集團",
    "testimonials.quote2": "與Gogh合作非常順暢。他們對細節的關注和對簡約的專注幫助我們創造了用戶喜愛的數碼體驗。",
    "testimonials.author2": "王志明",
    "testimonials.role2": "創辦人",
    "testimonials.company2": "科技流",
    "testimonials.quote3": "團隊對極簡設計原則的理解提升了我們的品牌形象。他們的工作直接促進了我們的業務增長。",
    "testimonials.author3": "譚嘉怡",
    "testimonials.role3": "創意總監",
    "testimonials.company3": "奢華零售",

    // Clients section
    "clients.title": "受領先品牌信賴",

    // CTA section
    "cta.title": "準備好改變您的品牌了嗎？",
    "cta.description": "讓我們創造一個能捕捉您本質並與您的受眾產生共鳴的極簡設計。",
    "cta.button": "開始您的項目",

    // Footer
    "footer.tagline": "一家極簡設計工作室，為香港前瞻性品牌創造優雅、有效的數碼體驗。",
    "footer.navigation": "導航",
    "footer.contact": "聯絡",
    "footer.hours": "工作時間",
    "footer.weekdays": "星期一至五",
    "footer.weekend": "星期六日",
    "footer.closed": "休息",
    "footer.rights": "版權所有。",
    "footer.privacy": "私隱政策",
    "footer.terms": "服務條款",

    // Portfolio section
    "portfolio.title": "近期作品",
    "portfolio.viewProject": "查看项目",
    "portfolio.moveToInteract": "移动鼠标互动",
    "portfolio.tapToView": "点击查看",
    
    "projects.project1.title": "智能无人便利店系统",
    "projects.project1.client": "AI驱动的全自动购物体验",
    "projects.project1.description": "整合AI技术与移动应用，为用户提供24小时自助购物服务。通过手机APP即可完成商品浏览、购买和支付全过程。",
    "projects.project2.title": "Clean UX Design",
    "projects.project2.client": "Tech Startup",
    "projects.project3.title": "智能POS系统解决方案",
    "projects.project3.client": "Lightspeed零售系统集成",
    "projects.project3.description": "为零售商打造的新一代POS系统集成方案，实现库存管理、销售分析、员工管理和客户关系维护的一体化运营。支持多门店管理，提供实时数据同步和智能分析报表。",
    "projects.project3.tag1": "系统集成",
    "projects.project3.tag2": "零售科技",
    "projects.project3.tag3": "数据分析",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // 客戶端渲染時讀取存儲的語言設置，預設為繁體中文
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language") as Language
      return saved || "zh"
    }
    return "zh" // 預設語言為繁體中文
  })

  useEffect(() => {
    // 當語言變更時更新 localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language)
    }
  }, [language])

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

