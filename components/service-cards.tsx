import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function ServiceCards() {
  const services = [
    {
      icon: "/placeholder.svg?height=60&width=60",
      title: "Google Business Profile",
      description: "Optimization",
    },
    {
      icon: "/placeholder.svg?height=60&width=60",
      title: "Google Maps",
      description: "Ranking",
    },
    {
      icon: "/placeholder.svg?height=60&width=60",
      title: "Web Design",
      description: "& Development",
    },
    {
      icon: "/placeholder.svg?height=60&width=60",
      title: "Sales",
      description: "Automation",
    },
    {
      icon: "/placeholder.svg?height=60&width=60",
      title: "AI",
      description: "Employees",
    },
  ]

  return (
    <section className="w-full bg-black py-12">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <Card key={index} className="bg-white rounded-lg overflow-hidden border-0">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Image
                    src={service.icon || "/placeholder.svg"}
                    alt={service.title}
                    width={60}
                    height={60}
                    className="h-16 w-16"
                  />
                </div>
                <h3 className="font-bold text-lg">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
