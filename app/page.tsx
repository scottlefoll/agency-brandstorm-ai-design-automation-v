import { HeroSection } from "@/components/hero-section"
import { NavBar } from "@/components/nav-bar"
import { PartnerLogos } from "@/components/partner-logos"
import { ScaleSection } from "@/components/scale-section"
import { ServiceCards } from "@/components/service-cards"
import { FreeAuditSection } from "@/components/free-audit-section"
import { StopMissingCallsSection } from "@/components/stop-missing-calls-section"
import { GetFoundSection } from "@/components/get-found-section"
import { BuildTrustSection } from "@/components/build-trust-section"
import { GoogleMapsSection } from "@/components/google-maps-section"
import { BrandingSection } from "@/components/branding-section"
import { SalesSection } from "@/components/sales-section"
import { DataSection } from "@/components/data-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { ReadySection } from "@/components/ready-section"
import { ClientsSection } from "@/components/clients-section"
import { CaseStudySection } from "@/components/case-study-section"
import { Footer } from "@/components/footer"
import { SearchBoxOptimizationSection } from "@/components/search-box-optimization-section"
import { ReviewsSecondSection } from "@/components/reviews-second-section"

export default function Home() {
  // Shared background styles for sections that need the hero background
  const heroBackgroundStyle = {
    position: "relative",
    overflow: "hidden",
  } as const

  // Video background component for reuse
  const VideoBackground = () => (
    <>
      {/* Background video as bottom layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          style={{ objectPosition: "center" }}
        >
          <source src="/videos/background-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay with increased opacity (80%) */}
      <div className="absolute inset-0 bg-black/80 z-10"></div>

      {/* Blue gradient overlay with reduced opacity (30%) */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-800 to-blue-600 opacity-30 z-20"></div>
    </>
  )

  return (
    <main className="flex min-h-screen flex-col">
      {/* Header - keep exactly as it is */}
      <NavBar />

      <div style={{ paddingTop: "134px" }}>
        {/* Page_1: Title Section */}
        <section id="page_1" style={heroBackgroundStyle}>
          <VideoBackground />
          <div className="relative z-30">
            <HeroSection />
            <PartnerLogos />
          </div>
        </section>

        {/* Page_2: Testimonial Section */}
        <section id="page_2" className="bg-black">
          <ScaleSection />
          <ServiceCards />
        </section>

        {/* Page_3: Audit Section */}
        <section id="page_3" style={heroBackgroundStyle}>
          <VideoBackground />
          <div className="relative z-30">
            <FreeAuditSection />
          </div>
        </section>

        {/* Page_4: AI_Voice Section */}
        <section id="page_4" className="bg-white">
          <StopMissingCallsSection />
        </section>

        {/* Page_5: Search Section */}
        <section id="page_5" className="bg-[#F5F5F5]">
          <GetFoundSection />
        </section>

        {/* Page_6: Social_Proof Section */}
        <section id="page_6" className="bg-white">
          <BuildTrustSection />
        </section>

        {/* Page_7: Google_Maps Section */}
        <section id="page_7" className="bg-[#F5F5F5]">
          <GoogleMapsSection />
        </section>

        {/* Page_8: Web_Design Section */}
        <section id="page_8" className="bg-white">
          <BrandingSection />
        </section>

        {/* Page_9: Conversion Section */}
        <section id="page_9" className="bg-[#F5F5F5]">
          <SalesSection />
        </section>

        {/* Page_10: CRM Section */}
        <section id="page_10" className="bg-white">
          <DataSection />
        </section>

        {/* Page_11: Brandstorm Section */}
        <section id="page_11" style={heroBackgroundStyle}>
          <VideoBackground />
          <div className="relative z-30">
            <WhyChooseSection />
          </div>
        </section>

        {/* Page_12: Strategy_Call Section */}
        <section id="page_12" className="bg-gray-100">
          <ReadySection />
        </section>

        {/* Page_13: Services Section */}
        <section id="page_13" className="bg-blue-900 text-white">
          <ClientsSection />
        </section>

        {/* Page_14: Case_Study Section */}
        <section id="page_14" className="bg-gray-50">
          <CaseStudySection />
        </section>

        {/* Page_15: SBO Section */}
        <section id="page_15" className="bg-white">
          <SearchBoxOptimizationSection />
        </section>

        {/* Page_16: Reviews_2 Section */}
        <section id="page_16" style={{ position: "relative", overflow: "hidden" }}>
          {/* Dark overlay with increased opacity (80%) */}
          <div className="absolute inset-0 bg-black/80 z-10"></div>

          {/* Blue gradient overlay with reduced opacity (30%) */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-800 to-blue-600 opacity-30 z-20"></div>

          <div className="relative z-30">
            <ReviewsSecondSection />
          </div>
        </section>

        {/* Footer - keep exactly as it is */}
        <Footer />
      </div>
    </main>
  )
}
