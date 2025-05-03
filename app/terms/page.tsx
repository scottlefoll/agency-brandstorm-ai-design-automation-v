import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - Brandstorm AI",
  description: "Read our terms of service and conditions for using Brandstorm AI services.",
}

export default function TermsOfServicePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="flex-1 bg-gray-50 pt-32">
        <div className="container max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-purple-800 mb-8">Terms of Service</h1>

          <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
            <section>
              <p className="text-gray-600 mb-4">Last Updated: May 2, 2025</p>

              <p className="mb-4">
                Please read these Terms of Service ("Terms") carefully before using the website and services offered by
                BRANDSTORM.AI ("Company", "we", "us", or "our").
              </p>

              <p className="mb-4">
                By accessing or using our website and services, you agree to be bound by these Terms. If you disagree
                with any part of the Terms, you may not access our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-3">1. Services</h2>
              <p className="mb-4">
                BRANDSTORM.AI provides digital marketing, branding, web design, Google Business Profile optimization,
                Google Maps ranking, sales automation, AI employees, and related services to businesses ("Services").
                The specific Services provided to you will be outlined in a separate agreement or service order.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-3">2. Account Registration</h2>
              <p className="mb-4">
                To access certain features of our Services, you may be required to register for an account. You agree to
                provide accurate, current, and complete information during the registration process and to update such
                information to keep it accurate, current, and complete.
              </p>
              <p className="mb-4">
                You are responsible for safeguarding your account credentials and for all activities that occur under
                your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-3">3. Payment Terms</h2>
              <p className="mb-4">
                Certain Services may require payment of fees. All fees are stated in U.S. dollars and are exclusive of
                any applicable taxes unless otherwise stated.
              </p>
              <p className="mb-4">
                You agree to provide current, complete, and accurate billing information. By providing your payment
                information, you authorize us to charge your payment method for the Services you have selected.
              </p>
              <p className="mb-4">
                Unless otherwise specified, fees are non-refundable. We reserve the right to change our prices at any
                time, with notice provided to you before such changes take effect.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-3">4. Intellectual Property</h2>
              <p className="mb-4">
                The Service and its original content, features, and functionality are and will remain the exclusive
                property of BRANDSTORM.AI and its licensors. The Service is protected by copyright, trademark, and other
                laws of both the United States and foreign countries.
              </p>
              <p className="mb-4">
                Our trademarks and trade dress may not be used in connection with any product or service without the
                prior written consent of BRANDSTORM.AI.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-3">5. User Content</h2>
              <p className="mb-4">
                You retain all rights to any content you submit, post, or display on or through the Service ("User
                Content"). By providing User Content, you grant us a worldwide, non-exclusive, royalty-free license to
                use, reproduce, modify, adapt, publish, translate, distribute, and display such User Content in
                connection with providing the Services.
              </p>
              <p className="mb-4">
                You represent and warrant that: (i) you own the User Content or have the right to use and grant us the
                rights and license as provided in these Terms, and (ii) the posting of your User Content does not
                violate the privacy rights, publicity rights, copyrights, contract rights, or any other rights of any
                person.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-3">6. Prohibited Uses</h2>
              <p className="mb-4">You agree not to use the Service:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>
                  In any way that violates any applicable federal, state, local, or international law or regulation
                </li>
                <li>
                  To transmit, or procure the sending of, any advertising or promotional material, including any "junk
                  mail," "chain letter," "spam," or any other similar solicitation
                </li>
                <li>
                  To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other
                  person or entity
                </li>
                <li>
                  To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or
                  which may harm the Company or users of the Service
                </li>
                <li>
                  To attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the
                  Service, the server on which the Service is stored, or any server, computer, or database connected to
                  the Service
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-3">7. Termination</h2>
              <p className="mb-4">
                We may terminate or suspend your account and access to the Service immediately, without prior notice or
                liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              <p className="mb-4">
                Upon termination, your right to use the Service will immediately cease. If you wish to terminate your
                account, you may simply discontinue using the Service or contact us to request account deletion.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-3">8. Limitation of Liability</h2>
              <p className="mb-4">
                In no event shall BRANDSTORM.AI, nor its directors, employees, partners, agents, suppliers, or
                affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages,
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                resulting from:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Your access to or use of or inability to access or use the Service</li>
                <li>Any conduct or content of any third party on the Service</li>
                <li>Any content obtained from the Service</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
              <p className="mb-4">Our liability is limited to the maximum extent permitted by law.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-3">9. Disclaimer</h2>
              <p className="mb-4">
                Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE"
                basis. The Service is provided without warranties of any kind, whether express or implied, including,
                but not limited to, implied warranties of merchantability, fitness for a particular purpose,
                non-infringement, or course of performance.
              </p>
              <p className="mb-4">
                BRANDSTORM.AI does not warrant that: (a) the Service will function uninterrupted, secure, or available
                at any particular time or location; (b) any errors or defects will be corrected; (c) the Service is free
                of viruses or other harmful components; or (d) the results of using the Service will meet your
                requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-3">10. Governing Law</h2>
              <p className="mb-4">
                These Terms shall be governed and construed in accordance with the laws of the State of New Hampshire,
                United States, without regard to its conflict of law provisions.
              </p>
              <p className="mb-4">
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
                rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining
                provisions of these Terms will remain in effect.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-3">11. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will
                provide notice of any changes by posting the new Terms on this page and updating the "Last Updated"
                date.
              </p>
              <p className="mb-4">
                By continuing to access or use our Service after those revisions become effective, you agree to be bound
                by the revised Terms. If you do not agree to the new Terms, please stop using the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-3">12. Contact Us</h2>
              <p className="mb-4">If you have any questions about these Terms, please contact us at:</p>
              <p className="mb-1">BRANDSTORM.AI</p>
              <p className="mb-1">Milan, New Hampshire</p>
              <p className="mb-1">Email: info@brandstorm.ai</p>
              <p className="mb-1">Phone: 1-888-383-2473</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
