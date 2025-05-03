import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Brandstorm AI",
  description: "Read the latest insights and tips on digital marketing, branding, and business growth.",
}

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">Blog</h1>
          <p className="text-xl text-gray-600">Page coming soon</p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
