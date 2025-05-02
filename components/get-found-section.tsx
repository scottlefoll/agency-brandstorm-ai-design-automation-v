import Image from "next/image"
import { CTAButton } from "@/components/cta-button"

export function GetFoundSection() {
  const platforms = [
    {
      name: "Google",
      icon: "/images/platform-logos/google-logo.png",
      size: "medium",
      customStyles: {
        container: "translate-y-2", // Lower by 20%
        image: "",
        caption: "translate-y-2", // Lower caption by 25%
      },
    },
    {
      name: "Yelp",
      icon: "/images/platform-logos/yelp-logo.png",
      size: "normal",
      customStyles: {
        container: "",
        image: "",
        caption: "-translate-y-0.5", // Raise caption by 10%
      },
    },
    {
      name: "Facebook",
      icon: "/facebook-logo-on-white.png",
      size: "normal",
      customStyles: {
        container: "",
        image: "",
        caption: "-translate-y-0.5", // Raise caption by 10%
      },
    },
    {
      name: "Apple Maps",
      icon: "/images/platform-logos/apple-maps-logo.png",
      size: "small", // Reduced by 25%
      customStyles: {
        container: "",
        image: "",
        caption: "translate-y-1", // Lower caption by additional 10%
      },
    },
    {
      name: "Bing",
      icon: "/images/platform-logos/bing-logo.png",
      size: "medium",
      customStyles: {
        container: "-translate-y-0.5", // Lower by 10%
        image: "",
        caption: "-translate-y-2", // Keep caption in same place
      },
    },
    {
      name: "TripAdvisor",
      icon: "/images/platform-logos/tripadvisor-logo.svg",
      size: "small", // Reduced by 50% from "large" to "small"
      customStyles: {
        container: "translate-y-0", // Raised by 40% (from translate-y-4 to translate-y-0)
        image: "",
        caption: "translate-y-2", // Lowered caption by 100% (from -translate-y-6 to translate-y-2)
      },
    },
    {
      name: "Yellow Pages",
      icon: "/images/platform-logos/yellow-pages-logo.jpg",
      size: "normal",
      customStyles: {
        container: "",
        image: "",
        caption: "",
      },
    },
    {
      name: "BBB",
      icon: "/bbb-logo-display.png",
      size: "normal",
      customStyles: {
        container: "",
        image: "",
        caption: "",
      },
    },
    {
      name: "Angi",
      icon: "/images/platform-logos/angi-logo.svg",
      size: "medium", // Reduced by 50% from "xlarge" to "medium"
      customStyles: {
        container: "translate-y-2", // Raised by 25% (from translate-y-4 to translate-y-2)
        image: "",
        caption: "translate-y-1", // Lowered caption by 25% (from -translate-y-2 to translate-y-1)
      },
    },
    {
      name: "HomeAdvisor",
      icon: "/abstract-house-wrench.png",
      size: "large",
      customStyles: {
        container: "translate-y-1", // Raised by 10%
        image: "",
        caption: "-translate-y-6", // Lowered caption by 25% (from -translate-y-9 to -translate-y-6)
      },
    },
    {
      name: "Nextdoor",
      icon: "/images/platform-logos/nextdoor-logo.png",
      size: "normal",
      customStyles: {
        container: "",
        image: "",
        caption: "",
      },
    },
    {
      name: "Foursquare",
      icon: "/images/platform-logos/foursquare-logo.svg",
      size: "xsmall", // Keeping as xsmall but with scale
      customStyles: {
        container: "",
        image: "scale-156", // Increased size by 56% total
        caption: "translate-y-2.85", // Raised caption by 5% (from translate-y-3 to translate-y-2.85)
      },
    },
    {
      name: "Waze",
      icon: "/images/platform-logos/waze-logo.png",
      size: "medium", // Keeping as medium but with custom dimensions
      customStyles: {
        container: "translate-y-0.75", // Keep position the same
        image: "scale-76", // Decreased size by 24% total
        caption: "translate-y-0.9", // Raised caption by 10% (from translate-y-1 to translate-y-0.9)
      },
    },
    {
      name: "Mapquest",
      icon: "/images/platform-logos/mapquest-logo.svg",
      size: "normal",
      customStyles: {
        container: "",
        image: "",
        caption: "",
      },
    },
    {
      name: "Citysearch",
      icon: "/images/platform-logos/citysearch-logo.png",
      size: "normal", // Reduced by 50% from "large" to "normal"
      customStyles: {
        container: "",
        image: "",
        caption: "-translate-y-1", // Lowered caption by 25% (from -translate-y-3 to -translate-y-1)
      },
    },
  ]

  // Function to determine the size class based on the size property
  const getSizeClass = (size: string) => {
    switch (size) {
      case "xsmall": // 70% smaller than normal
        return "h-6 w-6 md:h-7 md:w-7"
      case "small": // 25% smaller
        return "h-8 w-8 md:h-9 md:w-9"
      case "medium": // 50% larger
        return "h-15 w-15 md:h-18 md:w-18"
      case "large": // 100% larger
        return "h-20 w-20 md:h-24 md:w-24"
      case "xlarge": // 150% larger
        return "h-25 w-25 md:h-30 md:w-30"
      default: // normal size
        return "h-10 w-10 md:h-12 md:w-12"
    }
  }

  return (
    <section className="w-full py-16 bg-[#F5F5F5]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-800">
            Your Customers Will Find You Everywhere They Look.
            <br />
            Each Time They Look.
          </h2>

          <p className="text-lg max-w-3xl mx-auto mb-8">
            Own the local search results on every major platform in your market using Brandstorm's business search rank
            optimization
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
          {platforms.map((platform, index) => {
            return (
              <div key={index} className="flex flex-col items-center">
                <div className={`flex items-center justify-center ${platform.customStyles.container}`}>
                  <Image
                    src={platform.icon || "/placeholder.svg"}
                    alt={platform.name}
                    width={
                      platform.size === "xlarge"
                        ? 100
                        : platform.size === "large"
                          ? 80
                          : platform.size === "medium"
                            ? 60
                            : platform.size === "small"
                              ? 30
                              : platform.size === "xsmall"
                                ? 20
                                : 40
                    }
                    height={
                      platform.size === "xlarge"
                        ? 100
                        : platform.size === "large"
                          ? 80
                          : platform.size === "medium"
                            ? 60
                            : platform.size === "small"
                              ? 30
                              : platform.size === "xsmall"
                                ? 20
                                : 40
                    }
                    className={`object-contain ${getSizeClass(platform.size)} ${platform.customStyles.image}`}
                  />
                </div>
                <span className={`text-xs mt-1 ${platform.customStyles.caption}`}>{platform.name}</span>
              </div>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mt-16">
          <div>
            <p className="text-lg mb-8">
              Build Trust Through Reviews Leverage the power of social proof with our automated review generation
            </p>

            <p className="text-lg mb-8">
              Our sophisticated listing management system ensures your business information is accurate and consistent
              across all platforms, boosting your visibility and credibility.
            </p>

            <CTAButton source="Get Found Section">GET STARTED TODAY</CTAButton>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/images/listing-management-app.png"
                alt="Business listing management app"
                width={300}
                height={600}
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
