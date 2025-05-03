import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web Design - Brandstorm AI",
  description:
    "Custom-designed websites that convert visitors into customers with strategic layouts and compelling content.",
}

export default function WebDesignPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">Web Design</h1>
          <p className="text-xl text-gray-600">Service page coming soon</p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
