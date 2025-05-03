import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Brandstorm AI",
  description: "Get in touch with our team to discuss how we can help your business grow.",
}

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">Page coming soon</p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
