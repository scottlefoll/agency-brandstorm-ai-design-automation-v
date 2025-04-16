import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl mb-8">
              Ready to dominate your local market? Contact us today to schedule your free strategy call.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-blue-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p>1-888-383-2473</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-blue-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p>info@brandbuilderai.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-blue-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Office</h3>
                  <p>Tampa Bay, Florida</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" className="bg-white/5 border-white/20" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" className="bg-white/5 border-white/20" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" className="bg-white/5 border-white/20" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" className="bg-white/5 border-white/20" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="business">Business Name</Label>
                <Input id="business" className="bg-white/5 border-white/20" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={4} className="bg-white/5 border-white/20" />
              </div>

              <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
