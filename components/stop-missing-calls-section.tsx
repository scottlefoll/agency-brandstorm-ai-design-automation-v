import Image from "next/image"
import { CTAButton } from "@/components/cta-button"

export function StopMissingCallsSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="/images/customer-service-rep.png"
              alt="Customer service representative with headset"
              width={400}
              height={500}
              className="w-full max-w-md mx-auto rounded-lg shadow-md"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-purple-800">
              Every Missed Call = Lost Revenue.
              <br />
              Stop Leaking Revenue, Start Growing it.
            </h2>

            <p className="text-lg mb-6">Sick of Chasing Calls and Losing Business?</p>

            <p className="text-lg mb-6">
              Every missed call is a missed opportunity — and your potential customer isn't waiting. They're dialing the
              next provider, and you're left counting the cost.
            </p>

            <p className="text-lg mb-6">Losing 4–5 deals a month? That's real revenue walking out the door.</p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>plug the holes in your leaky bucket</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>round-the-clock call handling by an expert AI</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>instant booking, rescheduling, and follow-up</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>sophisticated call tracking and analytics</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>integrate with your current platforms</span>
              </li>
            </ul>

            <p className="text-lg mb-6">
              Let our AI-powered system catch every lead, book every call, and give you back the freedom to focus on
              what truly matters — growing your business and spending time with the people who matter most.
            </p>

            <CTAButton source="Stop Missing Calls Section">
              TALK WITH GRACE
              <br />
              <span className="text-xs">BOOK A DEMO NOW</span>
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
