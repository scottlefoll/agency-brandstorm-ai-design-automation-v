import Image from "next/image"
import { CTAButton } from "@/components/cta-button"

export function BuildTrustSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-purple-800">
              Build Trust Through
              <br />
              Reviews
            </h2>

            <p className="text-lg mb-6">
              Leverage the power of social proof with our automated review generation and management system.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>Automated review requests that get results</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>Smart review monitoring across all platforms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>Reputation management and response templates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>Review widgets for your website to showcase testimonials</span>
              </li>
            </ul>

            <CTAButton source="Build Trust Section">GET MORE REVIEWS TODAY</CTAButton>
          </div>

          <div>
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Review dashboard"
              width={500}
              height={400}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
