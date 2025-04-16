import { CTAButton } from "@/components/cta-button"
import Image from "next/image"

export function ReadySection() {
  return (
    <section className="w-full py-16 bg-gray-100" id="book-call">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-800">
          READY TO DOMINATE
          <br />
          YOUR MARKET?
        </h2>

        <p className="text-lg max-w-3xl mx-auto mb-8">
          Book your free strategy call today and discover how BRANDSTORM.AI can help you become the #1 choice in your
          local market.
        </p>

        <div className="flex justify-center mb-8">
          <Image
            src="/images/brandstorm-logo.png"
            alt="BRANDSTORM.AI Logo"
            width={280}
            height={80}
            className="h-16 w-auto"
          />
        </div>

        <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg mb-8">
          <h3 className="font-bold text-xl mb-4">What to Expect on Your Call:</h3>
          <ul className="text-left space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold">1.</span>
              <span>We'll analyze your current online presence and identify opportunities</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold">2.</span>
              <span>You'll get actionable insights you can implement immediately</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold">3.</span>
              <span>We'll create a customized growth plan tailored to your business</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold">4.</span>
              <span>No pressure or obligations - just valuable strategy and advice</span>
            </li>
          </ul>
        </div>

        <CTAButton className="py-6 px-8 rounded-md text-lg font-bold" source="Ready Section - Book Strategy Call">
          <div className="flex flex-col">
            <span>BOOK YOUR STRATEGY CALL</span>
            <span className="text-xs font-normal">AND GET A FREE MARKETING AUDIT REPORT</span>
          </div>
        </CTAButton>
      </div>
    </section>
  )
}
