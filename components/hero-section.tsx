import { CTAButton } from "@/components/cta-button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      className="relative w-full"
      style={{
        paddingTop: "5.36rem",
        paddingBottom: "4.5rem", // Reduced by 25% from 6rem to 4.5rem
      }}
    >
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

      {/* Dark overlay with increased opacity (80% instead of 70%) */}
      <div className="absolute inset-0 bg-black/80 z-10"></div>

      {/* Blue gradient overlay with reduced opacity (30%) */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-800 to-blue-600 opacity-30 z-20"></div>

      <div className="container relative z-30 flex flex-col items-center text-center text-white">
        <h1
          className="text-6xl md:text-7xl lg:text-8xl font-black tracking-wide uppercase"
          style={{
            textShadow: "0 0 1px rgba(255,255,255,0.1)",
            fontFamily: "'Montserrat', sans-serif",
            letterSpacing: "0.007em",
            wordSpacing: "-0.126em",
            lineHeight: "0.768",
          }}
        >
          <span
            className="block bg-gradient-to-r from-blue-500 via-purple-400 to-indigo-300 bg-clip-text text-transparent opacity-0 animate-slide-up-fade"
            style={{
              backgroundSize: "200% auto",
              animation: "gradient 3s linear infinite, slideUpFade 0.8s ease-out 0.2s forwards",
            }}
          >
            TRANSFORM YOUR
          </span>
          <span
            className="block bg-gradient-to-r from-blue-500 via-purple-400 to-indigo-300 bg-clip-text text-transparent opacity-0 animate-slide-up-fade"
            style={{
              backgroundSize: "200% auto",
              animation: "gradient 3s linear infinite, slideUpFade 0.8s ease-out 0.6s forwards",
            }}
          >
            BUSINESS WITH
          </span>
          <span
            className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 opacity-0 animate-slide-up-fade"
            style={{
              animation: "slideUpFade 0.8s ease-out 1.0s forwards",
            }}
          >
            AI POWER
          </span>
        </h1>

        <div
          className="py-2.5 flex items-center justify-center opacity-0 animate-slide-up-fade"
          style={{
            animation: "slideUpFade 0.8s ease-out 1.4s forwards",
          }}
        >
          {[1, 2, 3, 4, 5].map((star, index) => (
            <div key={star} style={{ marginLeft: index === 0 ? "0" : "3px", marginRight: index === 4 ? "0" : "3px" }}>
              <Image src="/images/five-star-gold.svg" alt="Gold star" width={25} height={25} className="h-6 w-6" />
            </div>
          ))}
        </div>

        <h2
          className="text-3xl md:text-4xl font-black mb-6 text-white uppercase opacity-0 animate-slide-up-fade"
          style={{
            textShadow: "0 0 2px rgba(255,255,255,0.8), 0 0 10px rgba(255,255,255,0.3)",
            letterSpacing: "0.02em",
            animation: "slideUpFade 0.8s ease-out 1.8s forwards",
          }}
        >
          BECOME THE FIRST CHOICE. EVERY TIME.
        </h2>

        <div
          className="max-w-3xl opacity-0 animate-slide-up-fade"
          style={{
            animation: "slideUpFade 0.8s ease-out 2.2s forwards",
          }}
        >
          <p className="text-lg mb-1">
            Drive unstoppable growth through <strong className="font-extrabold">Elite Branding</strong>,
            high-performance <strong className="font-extrabold">Web Design</strong>,{" "}
            <strong className="font-extrabold">Google Maps Ranking</strong>,{" "}
            <strong className="font-extrabold">Google My Business Ranking</strong>,{" "}
            <strong className="font-extrabold">Search Box Optimization</strong>,{" "}
            <strong className="font-extrabold">Sales Automation</strong>, and{" "}
            <strong className="font-extrabold">Smart AI Employees</strong> that never rest.
          </p>
        </div>

        <p
          className="text-xl font-extrabold mt-4 mb-5 opacity-0 animate-slide-up-fade"
          style={{
            animation: "slideUpFade 0.8s ease-out 2.6s forwards",
          }}
        >
          More clients. More revenue. Unshakable loyalty.
        </p>

        <div
          className="opacity-0 animate-slide-up-fade"
          style={{
            animation: "slideUpFade 0.8s ease-out 3.0s forwards",
          }}
        >
          <CTAButton
            className="py-8 px-8 rounded-md text-lg font-bold border-2 border-purple-500"
            style={{
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
      </div>
    </section>
  )
}
