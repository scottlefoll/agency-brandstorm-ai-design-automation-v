import Image from "next/image"
import { CTAButton } from "@/components/cta-button"

export function SearchBoxOptimizationSection() {
  return (
    <section className="w-full py-16 bg-[#F5F5F5]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-purple-800">
              Dominate Search Box
              <br />
              Suggestions
            </h2>

            <p className="text-lg mb-6">
              Be the first business that appears when customers start typing in Google's search box.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>Proprietary search suggestion optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>Capture high-intent customers before competitors</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>Strategic keyword implementation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <span>Continuous monitoring and optimization</span>
              </li>
            </ul>

            <CTAButton source="Search Box Optimization Section">GET STARTED TODAY</CTAButton>
          </div>

          <div>
            <Image
              src="/images/search-box-optimization.png"
              alt="Google search box with business appearing in suggestions"
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
