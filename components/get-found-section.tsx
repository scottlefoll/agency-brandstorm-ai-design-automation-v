import Image from "next/image"
import { CTAButton } from "@/components/cta-button"

export function GetFoundSection() {
  const platforms = [
    { name: "Google", icon: "/placeholder.svg?height=40&width=40" },
    { name: "Yelp", icon: "/placeholder.svg?height=40&width=40" },
    { name: "Facebook", icon: "/placeholder.svg?height=40&width=40" },
    { name: "Apple Maps", icon: "/placeholder.svg?height=40&width=40" },
    { name: "Bing", icon: "/placeholder.svg?height=40&width=40" },
    { name: "TripAdvisor", icon: "/placeholder.svg?height=40&width=40" },
    { name: "Yellow Pages", icon: "/placeholder.svg?height=40&width=40" },
    { name: "BBB", icon: "/placeholder.svg?height=40&width=40" },
    { name: "Angi", icon: "/placeholder.svg?height=40&width=40" },
    { name: "HomeAdvisor", icon: "/placeholder.svg?height=40&width=40" },
    { name: "Nextdoor", icon: "/placeholder.svg?height=40&width=40" },
    { name: "Foursquare", icon: "/placeholder.svg?height=40&width=40" },
    { name: "Waze", icon: "/placeholder.svg?height=40&width=40" },
    { name: "Mapquest", icon: "/placeholder.svg?height=40&width=40" },
    { name: "Citysearch", icon: "/placeholder.svg?height=40&width=40" },
  ]

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-800">
            Get Found Everywhere Your
            <br />
            Customers Search
          </h2>

          <p className="text-lg max-w-3xl mx-auto mb-8">
            Dominate local search results across all major platforms with our comprehensive business listing management
            and optimization.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {platforms.map((platform, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={platform.icon || "/placeholder.svg"}
                alt={platform.name}
                width={40}
                height={40}
                className="h-10 w-10 md:h-12 md:w-12"
              />
              <span className="text-xs mt-1">{platform.name}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            With our advanced listing management system, we ensure your business information is accurate, consistent,
            and optimized across 100+ online directories and platforms.
          </p>

          <CTAButton source="Get Found Section">GET STARTED TODAY</CTAButton>
        </div>
      </div>
    </section>
  )
}
