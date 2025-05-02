import Image from "next/image"

export function ClientsSection() {
  const serviceCategories = [
    {
      title: "HOME SERVICES",
      services: [
        { name: "ROOFING", image: "/images/clients/roofing.png" },
        { name: "HOME SERVICES", image: "/images/clients/home-services.png" },
        { name: "LANDSCAPING", image: "/images/clients/landscaping.png" },
        { name: "CONSTRUCTION", image: "/images/clients/construction.png" },
        { name: "HOME RENOVATION", image: "/images/clients/renovation.png" },
      ],
    },
    {
      title: "PROFESSIONAL SERVICES",
      services: [
        { name: "ACCOUNTANTS", image: "/images/clients/accountant.png" },
        { name: "ATTORNEYS", image: "/images/clients/attorney.png" },
        { name: "CONSULTANT SERVICES", image: "/images/clients/consultant.png" },
        { name: "MEDICAL PRACTICES", image: "/images/clients/medical.png" },
        { name: "SCHOOLS AND EDUCATION", image: "/images/clients/education.png" },
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
