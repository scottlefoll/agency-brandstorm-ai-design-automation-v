"use client"

import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Mail } from "lucide-react"
import Head from "next/head"

export default function EmailPage() {
  const router = useRouter()

  // Automatically redirect back to home page after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/")
    }, 5000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <>
      <Head>
        <title>Email Us - Brandstorm AI</title>
      </Head>
      <main className="flex min-h-screen flex-col">
        <NavBar />
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="text-center p-8 max-w-md">
            <div className="bg-purple-100 p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-6">
                <div className="bg-purple-800 text-white p-4 rounded-full">
                  <Mail className="h-8 w-8" />
                </div>
              </div>
              <h1 className="text-2xl font-bold text-purple-800 mb-4">Sending email to</h1>
              <p className="text-xl text-gray-600 mb-4">info@brandstorm.ai</p>
              <p className="text-sm text-gray-500">This is a demo page. No actual email is being sent.</p>
              <p className="text-sm text-gray-500 mt-4">Redirecting to home page in 5 seconds...</p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
