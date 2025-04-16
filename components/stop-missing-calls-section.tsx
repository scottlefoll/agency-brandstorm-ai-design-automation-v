import Image from "next/image"
import { CTAButton } from "@/components/cta-button"

export function StopMissingCallsSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="/placeholder.svg?height=500&width=400"
              alt="Woman with headset"
              width={400}
              height={500}
              className="w-full max-w-md mx-auto"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-purple-800">
              Stop Missing Calls,
              <br />
              Start Growing Revenue
            </h2>

            <p className="text-lg mb-6">
              Never miss another opportunity with our AI-powered call handling system that ensures every customer
              inquiry is captured and converted.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>24/7 call answering with natural-sounding AI</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>Instant appointment scheduling and follow-up</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>Call tracking and analytics to measure performance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>Seamless integration with your existing systems</span>
              </li>
            </ul>

            <CTAButton source="Stop Missing Calls Section">SCHEDULE A DEMO TODAY</CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
