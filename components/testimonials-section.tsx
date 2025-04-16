import { Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "John Smith",
      business: "Smith Plumbing Services",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Since working with Brand Builder AI, our business has grown by 127%. We're now the #1 plumbing service in our area according to Google Maps.",
      stars: 5,
    },
    {
      name: "Sarah Johnson",
      business: "Johnson Law Firm",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "The team at Brand Builder AI transformed our online presence. Our website conversion rate increased by 85% and we're getting quality leads daily.",
      stars: 5,
    },
    {
      name: "Michael Davis",
      business: "Davis Roofing",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "The ROI we've seen from Brand Builder AI's services has been incredible. Our Google Business Profile now generates 40+ leads per month.",
      stars: 5,
    },
  ]

  return (
    <section className="w-full py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped dominate their local markets
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-px mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic text-gray-700 mb-6">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.business}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
