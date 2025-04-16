import { CTAButton } from "@/components/cta-button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-r from-blue-900 via-purple-800 to-blue-600 pt-16 pb-16 md:pt-24 md:pb-24">
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="container relative z-10 flex flex-col items-center text-center text-white">
        <h1
          className="text-6xl md:text-7xl lg:text-8xl font-black tracking-wide uppercase"
          style={{
            textShadow: "0 0 1px rgba(255,255,255,0.1)",
            fontFamily: "'Montserrat', sans-serif",
            letterSpacing: "0.05em",
            lineHeight: "1",
          }}
        >
          <span
            className="block bg-gradient-to-r from-blue-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent"
            style={{
              backgroundSize: "200% auto",
              animation: "gradient 3s linear infinite",
            }}
          >
            TRANSFORM YOUR
          </span>
          <span
            className="block bg-gradient-to-r from-blue-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent"
            style={{
              backgroundSize: "200% auto",
              animation: "gradient 3s linear infinite",
            }}
          >
            BUSINESS WITH
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            AI POWER
          </span>
        </h1>

        <div className="py-3 flex items-center justify-center">
          {[1, 2, 3, 4, 5].map((star, index) => (
            <div key={star} style={{ marginLeft: index === 0 ? "0" : "3px", marginRight: index === 4 ? "0" : "3px" }}>
              <Image src="/images/five-star-gold.svg" alt="Gold star" width={25} height={25} className="h-6 w-6" />
            </div>
          ))}
        </div>

        <h2
          className="text-3xl md:text-4xl font-bold mb-6 text-slate-300 uppercase"
          style={{
            textShadow: "0 0 10px rgba(148, 163, 184, 0.6), 0 0 20px rgba(148, 163, 184, 0.4)",
          }}
        >
          BECOME THE FIRST CHOICE. EVERY TIME.
        </h2>

        <div className="max-w-3xl">
          <p className="text-lg mb-1">
            Drive unstoppable growth through <strong>Elite Branding</strong>, high-performance{" "}
            <strong>Web Design</strong>, <strong>Local SEO Ranking</strong>, <strong>Sales Automation</strong>, and{" "}
            <strong>Smart AI Employees</strong> that never rest.
          </p>
        </div>

        <p className="text-xl font-bold mt-4 mb-5">More clients. More revenue. Unshakable loyalty.</p>

        <CTAButton
          className="py-8 px-8 rounded-md text-lg font-bold border-2 border-purple-500"
          style={{
            boxShadow: "0 0 8px rgba(168, 85, 247, 0.4), 0 0 15px rgba(168, 85, 247, 0.2)",
            transition: "all 0.3s ease",
          }}
          source="Hero Section - Book Strategy Call"
        >
          <div className="flex flex-col">
            <span>BOOK YOUR STRATEGY CALL</span>
            <span className="text-xs font-normal">AND GET A FREE MARKETING AUDIT REPORT</span>
          </div>
        </CTAButton>
      </div>
    </section>
  )
}
