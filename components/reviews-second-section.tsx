import { CTAButton } from "@/components/cta-button"
import { TestimonialCarousel } from "@/components/testimonial-carousel"

export function ReviewsSecondSection() {
  return (
    <section className="w-full py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">What Our Clients Say</h2>
        </div>

        <div className="px-8 md:px-12 mb-12">
          <TestimonialCarousel darkMode={true} />
        </div>

        <div className="text-center">
          <CTAButton source="Reviews Second Section" className="py-6 px-8 rounded-md text-lg font-bold">
            <div className="flex flex-col">
              <span>BOOK A CONSULTATION NOW</span>
              <span className="text-xs">GET A FREE MARKETING AUDIT</span>
            </div>
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
