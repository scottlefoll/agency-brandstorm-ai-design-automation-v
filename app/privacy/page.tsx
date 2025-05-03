import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Brandstorm AI",
  description: "Learn about how Brandstorm AI collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="flex-1 bg-gray-50 pt-32">
        <div className="container max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-purple-800 mb-8">Privacy Policy</h1>

          <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
            <section>
              <p className="text-gray-600 mb-4">Last Updated: May 2, 2025</p>

              <p className="mb-4">
                At BRANDSTORM.AI ("we," "us," or "our"), we respect your privacy and are committed to protecting your
                personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you visit our website or use our services.
              </p>

              <p className="mb-4">
                Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that you
                have read, understood, and agree to be bound by all the terms of this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-3">Information We Collect</h2>

              <h3 className="text-lg font-medium mb-2">Personal Information</h3>
              <p className="mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Register for our services</li>
                <li>Fill out a form on our website</li>
                <li>Sign up for our newsletter</li>
                <li>Request a consultation or demo</li>
                <li>Contact our customer support</li>
                <li>Participate in surveys or promotions</li>
              </ul>

              <p className="mb-4">This information may include:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Business name and address</li>
                <li>Website URL</li>
                <li>Payment information</li>
              </ul>

              <h3 className="text-lg font-medium mb-2">Automatically Collected Information</h3>
              <p className="mb-4">
                When you visit our website or use our services, we may automatically collect certain information about
                your device and usage patterns, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Device information</li>
                <li>Pages visited and time spent</li>
                <li>Referring websites</li>
                <li>Click patterns and interactions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-3">How We Use Your Information</h2>
              <p className="mb-4">We may use the information we collect for various purposes, including to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send administrative information, such as updates, security alerts, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Communicate with you about products, services, offers, promotions, and events</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>Personalize your experience and deliver content relevant to your interests</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-3">Disclosure of Your Information</h2>
              <p className="mb-4">We may share your information in the following situations:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>
                  <strong>Service Providers:</strong> We may share your information with third-party vendors, service
                  providers, contractors, or agents who perform services for us.
                </li>
                <li>
                  <strong>Business Transfers:</strong> We may share or transfer your information in connection with, or
                  during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a
                  portion of our business.
                </li>
                <li>
                  <strong>Legal Obligations:</strong> We may disclose your information where required to do so by law or
                  in response to valid requests by public authorities.
                </li>
                <li>
                  <strong>With Your Consent:</strong> We may disclose your information for any other purpose with your
                  consent.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-3">Your Privacy Rights</h2>
              <p className="mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>The right to access personal information we hold about you</li>
                <li>The right to request correction of inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to restrict or object to processing</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p className="mb-4">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section
                below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-3">Data Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational measures to protect the security of your personal
                information. However, please be aware that no method of transmission over the Internet or electronic
                storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-3">Cookies and Tracking Technologies</h2>
              <p className="mb-4">
                We use cookies and similar tracking technologies to track activity on our website and store certain
                information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                sent. However, if you do not accept cookies, you may not be able to use some portions of our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-3">Children's Privacy</h2>
              <p className="mb-4">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal
                information from children. If you are a parent or guardian and believe your child has provided us with
                personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-3">Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy
                Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-3">Contact Us</h2>
              <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at:</p>
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
