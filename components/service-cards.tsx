import { TestimonialCarousel } from "@/components/testimonial-carousel"

export function ServiceCards() {
  return (
    <section className="w-full bg-black pt-0 pb-6">
      <div className="container">
        <div className="text-center text-white mb-4" style={{ marginTop: "-20px" }}>
          <h3
            className="text-2xl font-bold uppercase mb-2"
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            WHAT OUR CLIENTS SAY
          </h3>
          <p className="text-lg uppercase mb-6">FROM GOOGLE REVIEWS</p>
        </div>

        <div className="px-8 md:px-12 mb-12">
          <TestimonialCarousel darkMode={true} />
        </div>
      </div>
    </section>
  )
}
