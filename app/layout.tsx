import type React from "react"
import "@/app/globals.css"
import { Inter, Montserrat } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-montserrat",
})

export const metadata = {
  title: "Brandstorm AI - Own Your Local Market",
  description:
    "Creating unstoppable growth for your company with Exceptional Branding and Web Design, Google Business Profile Optimization, Google Maps Ranking, Sales Automation and AI Employees.",
  icons: {
    icon: [{ url: "/favicon.png" }, { url: "/favicon.ico" }],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} ${montserrat.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
