import Image from "next/image"
import { Linkedin } from "lucide-react"

export function TeamSection() {
  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "15+ years of experience in digital marketing and business growth strategies.",
    },
    {
      name: "Maria Rodriguez",
      role: "Chief Marketing Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Former Google employee with expertise in local SEO and business profile optimization.",
    },
    {
      name: "David Chen",
      role: "Web Development Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Award-winning web designer with a focus on conversion-optimized websites.",
    },
    {
      name: "Sarah Williams",
      role: "AI Implementation Specialist",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Pioneering the integration of AI solutions for small and medium businesses.",
    },
  ]

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experts dedicated to helping your business achieve unprecedented growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-center">
                      <a
                        href="#"
                        className="bg-white rounded-full p-2 text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
