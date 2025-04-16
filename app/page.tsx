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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="pt-24">
        {" "}
        {/* Add padding to account for fixed header */}
        <HeroSection />
        <PartnerLogos />
        <ScaleSection />
        <ServiceCards />
        <FreeAuditSection />
        <StopMissingCallsSection />
        <GetFoundSection />
        <BuildTrustSection />
        <GoogleMapsSection />
        <BrandingSection />
        <SalesSection />
        <DataSection />
        <WhyChooseSection />
        <ReadySection />
        <ClientsSection />
        <CaseStudySection />
        <Footer />
      </div>
    </main>
  )
}
