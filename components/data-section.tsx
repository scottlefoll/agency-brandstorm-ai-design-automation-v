import Image from "next/image"
import { CTAButton } from "@/components/cta-button"

export function DataSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-purple-800">Turn Data Into Dollars</h2>

            <p className="text-lg mb-6">
              Leverage powerful analytics and insights to make data-driven decisions that maximize your marketing ROI.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>Comprehensive marketing performance dashboard</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>Customer journey tracking and optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>Conversion rate optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>Competitive intelligence and market analysis</span>
              </li>
            </ul>

            <CTAButton source="Data Section">GET INSIGHTS TODAY</CTAButton>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/placeholder.svg?height=250&width=250"
                alt="Data chart 1"
                width={250}
                height={250}
                className="w-full rounded-lg shadow-lg"
              />
              <Image
                src="/placeholder.svg?height=250&width=250"
                alt="Data chart 2"
                width={250}
                height={250}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
