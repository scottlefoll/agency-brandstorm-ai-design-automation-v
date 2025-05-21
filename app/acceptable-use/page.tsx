import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Acceptable Use Policy - Brandstorm AI",
  description: "Acceptable Use Policy for Brandstorm AI services and products.",
}

export default function AcceptableUsePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="flex-1 bg-gray-50 pt-32">
        <div className="container max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-purple-800 mb-8">Acceptable Use Policy</h1>

          <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
            <section>
              <p className="text-gray-600 mb-4">Last Updated: May 13, 2025</p>

              <p className="mb-4">
                BrandStorm AI is committed to ensuring the highest level of service for its members. As part of that
                commitment, it is important that we all abide by this Acceptable Use Policy, thus preserving the highest
                reputation and deliverability of our service. Violation of this policy may lead to account suspension or
                termination without notice. Additionally, accounts may be suspended or terminated pursuant to our Terms
                & Conditions for behavior, activities, or content that threaten our systems.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-3">Prohibited Content</h2>

              <p className="mb-4">
                BrandStorm AI may not be used to promote, market, exchange, store or produce offensive, illegal,
                harassing activities, or business that is likely to be flagged by spam agencies/filters. For this
                reason, BrandStorm AI cannot service content including, but not limited to:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Anything deemed illegal including, but not limited to, illegal goods and services</li>
                <li>Emails that violate CAN-SPAM Laws</li>
                <li>Pornography/sexually explicit content</li>
                <li>Escort and dating services or products</li>
                <li>Pharmaceutical products</li>
                <li>Products involving unsubstantiated medical claims</li>
                <li>
                  Products or business opportunities promising unsubstantiated income claims or guaranteed profits
                </li>
                <li>Gambling or sport betting services or products</li>
                <li>Cannabis, marijuana and any related products or services</li>
                <li>
                  Automated financial trading software, Forex robots, stock picks or trading signals, or any other
                  hands-free trading instrument
                </li>
                <li>Selling or harvesting Social Media "likes", traffic, leads or followers</li>
                <li>
                  Email advertisements for multiple companies all to the same list (sometimes known as "dedicated email
                  ads" or "solo email ads")
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-3">Content Subject to Scrutiny</h2>

              <p className="mb-4">
                While the following activities are not forbidden, they have a higher-than-normal likelihood of resulting
                in a loss in reputation and email delivery. As a result, businesses engaging in these practices that
                cause or may cause a degradation in the service BrandStormAI provides may be subject to review resulting
                in throttling, suspension, or termination:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Online trading, day trading tips, or stock market related content</li>
                <li>Crypto currencies, virtual currencies or digital currencies</li>
                <li>Daily horoscope reports</li>
                <li>Mortgages, loans and certain financial instruments</li>
                <li>Adult Entertainment/Novelty Items</li>
                <li>
                  Services that support programmatically sending mail on behalf of third parties without creating or
                  reviewing the content
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-3">Prohibited Actions</h2>

              <p className="mb-4">
                BrandStormAI may not be used in connection with any user content that involves, to any degree, any of
                the following:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>False or misleading business opportunities, scams, or pyramid schemes;</li>
                <li>
                  Health claims that have been determined to be false or misleading by a regulatory agency; illegal
                  activities;
                </li>
                <li>Sales of drugs or pharmaceuticals;</li>
                <li>Sales of illegal products or services;</li>
                <li>Pornography or sexually explicit content;</li>
                <li>
                  Content that promotes or depicts human trafficking, child abuse, animal abuse, or which encourages or
                  promotes abuse of alcohol, drugs or other substances, graphic or gratuitous violence, or people being
                  injured, beaten, hurt, attacked, or humiliated;
                </li>
                <li>
                  Content that is needlessly shocking to the senses, gratuitously gross, or which depicts or promotes
                  accidents, death, hate speech attacking or demeaning a group based on race, ethnic origin, religion,
                  disability, gender, age, and the like;
                </li>
                <li>
                  Any use of the Software in connection with predatory behavior, including invasions of privacy,
                  directed to other persons, particularly children, is not permissible and, will not be tolerated.
                </li>
                <li>
                  Harvesting or scrubbing leads from directories, websites, forums, social media sites, etc. All leads
                  must be acquired through a voluntary form fill-in, such as a registration form, a checkout form, etc.
                </li>
                <li>
                  Promoting affiliate links via commonly frowned-upon practices in the affiliate marketing industry
                  including, but not limited to: cookie injection, spamming forums or social media, automated scripts,
                  etc
                </li>
                <li>
                  Use, initiation, or implementation of any automated system, including without limitation, "robots,"
                  "spiders," or "offline readers," on, through, or with the our software in a manner that utilizes more
                  resources from (a) the software, (b) any BrandStormAI or SaaS system server or site, or (c) any third
                  party server or site, in a given period of time than a human can reasonably produce in the same period
                  by using a conventional on-line web browser
                </li>
                <li>The sending or distribution of unsolicited commercial email</li>
                <li>The use of malicious code, spyware, malware, Trojan horses and the like</li>
                <li>Purchased lists (of any form), Rented lists (of any form), List brokers (of any form)</li>
              </ul>
            </section>

            <p className="text-right text-sm text-gray-600 mt-8">
              Updated May 13, 2025
              <br />© 2025 BrandStormAI - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
