import type { Metadata } from "next"
import ConsultationClientPage from "./ConsultationClientPage"

export const metadata: Metadata = {
  title: "Design Consultation | Gogh Studio",
  description:
    "Book a free minimalist design consultation with Gogh Studio to discuss your brand challenges and explore clean design solutions for your Hong Kong business.",
}

export default function ConsultationPage() {
  return <ConsultationClientPage />
}

