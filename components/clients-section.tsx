import Image from "next/image"

export function ClientsSection() {
  const serviceCategories = [
    {
      title: "HOME SERVICES",
      services: [
        { name: "ROOFING", image: "/placeholder.svg?height=200&width=200" },
        { name: "HOME SERVICES", image: "/placeholder.svg?height=200&width=200" },
        { name: "LANDSCAPING", image: "/placeholder.svg?height=200&width=200" },
        { name: "CONSTRUCTION", image: "/placeholder.svg?height=200&width=200" },
        { name: "HOME RENOVATION", image: "/placeholder.svg?height=200&width=200" },
      ],
    },
    {
      title: "PROFESSIONAL SERVICES",
      services: [
        { name: "ACCOUNTANTS", image: "/placeholder.svg?height=200&width=200" },
        { name: "ATTORNEYS", image: "/placeholder.svg?height=200&width=200" },
        { name: "CONSULTANT SERVICES", image: "/placeholder.svg?height=200&width=200" },
        { name: "MEDICAL PRACTICES", image: "/placeholder.svg?height=200&width=200" },
        { name: "SCHOOLS AND EDUCATION", image: "/placeholder.svg?height=200&width=200" },
      ],
    },
  ]

  return (
    <section className="w-full py-16 bg-blue-900 text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">WHO DO WE WORK WITH:</h2>
        </div>

        {serviceCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">{category.title}</h3>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {category.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="relative group overflow-hidden rounded-lg">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    width={200}
                    height={200}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center p-4">
                    <h4 className="font-bold text-center">{service.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
