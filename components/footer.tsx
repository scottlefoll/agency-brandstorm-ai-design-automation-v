import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full bg-blue-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="inline-block mb-2">
              <Image
                src="/images/brandstorm-logo.png"
                alt="BRANDSTORM.AI Logo"
                width={220}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-300 text-base font-bold mb-4">Powered by Umbrella Local</p>
            <p className="text-gray-300 mb-6">
              Creating unstoppable growth for local businesses through exceptional branding and digital marketing.
            </p>
            <div className="flex flex-col space-y-3 max-w-[200px]">
              {/* Top row - 4 icons */}
              <div className="flex justify-between w-full">
                <a
                  href="https://facebook.com/wirestormagency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors"
                  title="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com/@wirestorm_digi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors"
                  title="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com/wirestorm_digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors"
                  title="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/company/wirestorm-agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>

              {/* Bottom row - 3 icons centered */}
              <div className="flex justify-center w-full gap-4">
                <a
                  href="https://youtube.com/@WirestormDigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors"
                  title="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a
                  href="https://pinterest.com/wirestormdigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors"
                  title="Pinterest"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M12 0a12 12 0 0 0-4.373 23.182c-.067-.593-.132-1.504.028-2.153.145-.586.934-3.733.934-3.733s-.238-.48-.238-1.188c0-1.114.645-1.944 1.448-1.944.683 0 1.012.512 1.012 1.127 0 .686-.436 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.255-3.342-3.255-2.276 0-3.612 1.707-3.612 3.472 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.198.796-.226.907-.035.146-.117.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.287-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A12 12 0 1 0 12 0z" />
                  </svg>
                </a>
                <a
                  href="https://tiktok.com/@wirestorm.digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors"
                  title="TikTok"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services/ai-employees" className="text-gray-300 hover:text-white transition-colors">
                  AI Employees
                </Link>
              </li>
              <li>
                <Link
                  href="/services/google-business-profile"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Google Business Profile
                </Link>
              </li>
              <li>
                <Link href="/services/google-maps-ranking" className="text-gray-300 hover:text-white transition-colors">
                  Google Maps Ranking
                </Link>
              </li>
              <li>
                <Link href="/services/sales-automation" className="text-gray-300 hover:text-white transition-colors">
                  Sales Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/search-box-optimization"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Search Box Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/web-design" className="text-gray-300 hover:text-white transition-colors">
                  Web Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-study" className="text-gray-300 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-300 hover:text-white transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="text-gray-300">Milan, New Hampshire</li>
              <li>
                <Link href="/call" className="text-gray-300 hover:text-white transition-colors">
                  1-888-383-2473
                </Link>
              </li>
              <li>
                <Link href="/email" className="text-gray-300 hover:text-white transition-colors">
                  info@brandstorm.ai
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2024 BRANDSTORM.AI. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/acceptable-use" className="text-gray-400 text-sm hover:text-white transition-colors">
                Acceptable Use Policy
              </Link>
              <Link href="/eula" className="text-gray-400 text-sm hover:text-white transition-colors">
                EULA
              </Link>
              <Link href="/dmca" className="text-gray-400 text-sm hover:text-white transition-colors">
                DMCA
              </Link>
              <Link href="/sitemap" className="text-gray-400 text-sm hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
