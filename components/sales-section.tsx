import Image from "next/image"
import { CTAButton } from "@/components/cta-button"

export function SalesSection() {
  return (
    <section className="w-full py-16 bg-[#F5F5F5]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <Image
              src="/images/sales-automation-mobile.png"
              alt="Smartphone displaying sales automation dashboard"
              width={300}
              height={500}
              className="w-full max-w-xs mx-auto rounded-lg shadow-md"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6 text-purple-800">
              Close More Sales With Less
              <br />
              Effort
            </h2>

            <p className="text-lg mb-6">
              Streamline your sales process with our intelligent automation system that nurtures leads and closes deals
              while you focus on growth.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>Automated lead qualification and routing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>Smart follow-up sequences that convert</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>AI-powered proposal and quote generation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>Performance tracking and optimization</span>
              </li>
            </ul>

            <div className="bg-white p-4 rounded-lg shadow-md mb-8">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-purple-100 p-2 rounded-full">
                  <span className="text-purple-800 font-bold">$</span>
                </div>
                <div>
                  <p className="font-bold">Increase Revenue by 35%</p>
                  <p className="text-sm text-gray-600">Average client result in first 90 days</p>
                </div>
              </div>
            </div>

            <CTAButton source="Sales Section">AUTOMATE YOUR SALES TODAY</CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
