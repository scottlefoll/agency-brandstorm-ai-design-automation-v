import Image from "next/image"
import { CTAButton } from "@/components/cta-button"

export function BrandingSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-purple-800">
              Stand Out With Professional
              <br />
              Branding and Web Design
            </h2>

            <p className="text-lg mb-6">
              Create a powerful first impression with stunning branding and conversion-focused websites that turn
              visitors into customers.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>Custom logo and brand identity development</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>Responsive website design optimized for conversions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>SEO-friendly architecture and content strategy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>Ongoing maintenance and performance optimization</span>
              </li>
            </ul>

            <CTAButton source="Branding Section">ELEVATE YOUR BRAND TODAY</CTAButton>
          </div>

          <div>
            <Image
              src="/images/branding-web-design.png"
              alt="Professional branding and web design mockup"
              width={500}
              height={500}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
