import type { Metadata } from "next"
import WhyClientPage from "./WhyClientPage"

export const metadata: Metadata = {
  title: "Why Gogh | Minimalist Design Studio",
  description:
    "Learn why Gogh Studio is the ideal design partner for businesses seeking clean, minimalist design solutions in Hong Kong.",
}

export default function WhyPage() {
  return <WhyClientPage />
}

