import type { Metadata } from "next"
import Link from "next/link"
import { AudioWaveformIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Pulse Feedback | Free Strategy Session",
  description:
    "Book a free strategy session with Pulse Studio to discuss your design challenges and explore solutions for your startup or scaleup.",
}

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-black text-white p-5 md:p-10 lg:p-16">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 animate-fade-in">Pulse Feedback</h1>

      <div
        className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full text-primary text-sm mb-12 animate-fade-in"
        style={{ animationDelay: "100ms" }}
      >
        <AudioWaveformIcon className="h-4 w-4" />
        <span>Free Strategy Session</span>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl animate-fade-in"
        style={{ animationDelay: "200ms" }}
      >
        <div>
          <h2 className="text-2xl font-medium mb-4">What to expect</h2>
          <ul className="space-y-4 text-white/80">
            <li className="flex gap-3">
              <span className="text-primary">01.</span>
              <p>A 45-minute video call with our design strategists</p>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">02.</span>
              <p>Analysis of your current design challenges and opportunities</p>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">03.</span>
              <p>Actionable recommendations you can implement immediately</p>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">04.</span>
              <p>No obligations or sales pressure - just valuable insights</p>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-medium mb-4">Perfect for</h2>
          <ul className="space-y-4 text-white/80">
            <li className="flex gap-3 items-start">
              <span className="text-primary text-xl">✓</span>
              <p>Startups looking to establish a strong brand identity</p>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-primary text-xl">✓</span>
              <p>Scaleups needing to refine their user experience</p>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-primary text-xl">✓</span>
              <p>Teams preparing for a product launch or redesign</p>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-primary text-xl">✓</span>
              <p>Founders seeking expert design guidance</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 animate-fade-in" style={{ animationDelay: "300ms" }}>
        <Link
          href="/contact"
          className="inline-block bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
        >
          Book your free session
        </Link>
      </div>

      <div className="mt-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
        <Link href="/" className="text-white/70 hover:text-white transition-colors">
          ← Back to home
        </Link>
      </div>
    </div>
  )
}

