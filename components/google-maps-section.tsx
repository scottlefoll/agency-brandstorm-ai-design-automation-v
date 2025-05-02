import Image from "next/image"
import { CTAButton } from "@/components/cta-button"

export function GoogleMapsSection() {
  return (
    <section className="w-full py-16 bg-[#F5F5F5]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/google-maps-screenshot1.png"
                alt="Google Maps local search results"
                width={250}
                height={300}
                className="w-full rounded-lg shadow-lg"
              />
              <Image
                src="/images/google-maps-screenshot2.png"
                alt="Google Maps business profile on mobile"
                width={250}
                height={300}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6 text-purple-800">
              Own Your Market on
              <br />
              Google Maps
            </h2>

            <p className="text-lg mb-6">
              Dominate the local map pack and be the first business customers see when searching in your area.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>Advanced Google Business Profile optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>Local citation building and management</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>Geo-targeted content strategy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>Competitor analysis and outranking strategies</span>
              </li>
            </ul>

            <CTAButton source="Google Maps Section">GET RANKED TODAY</CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
