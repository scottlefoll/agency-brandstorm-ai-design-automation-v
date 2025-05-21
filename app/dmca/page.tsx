import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "DMCA Policy - Brandstorm AI",
  description: "Digital Millennium Copyright Act (DMCA) policy for Brandstorm AI.",
}

export default function DMCAPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="flex-1 bg-gray-50 pt-32">
        <div className="container max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-purple-800 mb-8">Digital Millennium Copyright Act (DMCA)</h1>

          <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
            <section>
              <p className="text-gray-600 mb-4">Last Updated: May 13, 2025</p>

              <p className="mb-4">
                Wirestorm Digital ("Wirestorm Digital") has the utmost respect, value, and appreciation for intellectual
                property rights – its own intellectual property rights and those of others.
              </p>

              <p className="mb-4">
                Wirestorm Digital does not permit copyright infringing activities and infringement of intellectual
                property rights using its websites, software, products, or services related to BrandBuilderAI and
                related sites (collectively "the Sites and Software"). All such uses of the Sites and Software are
                violations of our EULA as our Acceptable Use Policy. As with any system where user-contributed content
                ("User Generated Content") is present, we do not have the technological means to know in advance or to
                determine whether any given content is used with permission, under license, or is a 'fair use'. To the
                extent technically feasible, where infringing content is found and identified on a server or other
                computer directly controlled by Wirestorm Digital, we will endeavor to assist copyright holders in
                protecting their rights under the Digital Millennium Copyright Act.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-3">
                Procedure for Filing a Claim of Infringement Under the DMCA ("DMCA Take Down Notices")
              </h2>

              <p className="mb-4">
                A. If you are a copyright owner or an authorized agent of such an owner with a good faith belief that
                any content used with the Sites and Software or included as part of any User Generated Content infringes
                upon your copyrights, you may submit a notification pursuant to the Digital Millennium Copyright Act
                ("DMCA") by providing our Copyright Agent with the following information in writing (see 17 U.S.C §
                512(c)(3) for further detail):
              </p>

              <ol className="list-roman pl-6 mb-4 space-y-2">
                <li>
                  identification of the copyrighted work you claim has been infringed, or, if multiple copyrighted works
                  are covered by a single notification, a representative list of such works;
                </li>
                <li>
                  identification of the material that you claim to be infringing or to be the subject of infringing
                  activity and that you believe must be removed, or access to which should be disabled, and information
                  reasonably sufficient to permit Wirestorm Digital to locate the material;
                </li>
                <li>
                  information reasonably sufficient to permit Wirestorm Digital to contact you, such as an address,
                  telephone number, and, if available, an electronic mail;
                </li>
                <li>
                  a verified statement that you have a good faith belief that use of the material in the manner
                  complained of is not authorized by the copyright owner, its agent, or the law; and
                </li>
                <li>
                  a verified statement that the information in the notification is accurate, and under penalty of
                  perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly
                  infringed;
                </li>
                <li>
                  a physical or electronic signature of a person authorized to act on behalf of the owner of an
                  exclusive right that is allegedly infringed.
                </li>
              </ol>

              <p className="mb-4">
                You should send the Take Down Notice to Wirestorm Digital's designated Copyright Agent, authorized to
                receive notifications of claimed infringement:
              </p>

              <div className="bg-gray-50 p-4 rounded-md mb-4">
                <p className="font-semibold">Copyright Infringement</p>
                <p>Wirestorm Digital</p>
                <p>44 W. Village Rd.</p>
                <p>Milan, NH 03588</p>
                <p className="mt-2">support@brandstorm.ai</p>
              </div>

              <p className="mb-4">
                NOTE: only verified DMCA Take Down Notices should go to the designated Copyright Agent; any other
                feedback, comments, requests for technical support, and other communications should be directed to
                Wirestorm Digital. You acknowledge that if you fail to comply with all of the requirements of this
                Section 5(D), your DMCA Take Down Notice may not be valid and may not achieve the desired result. DMCA
                Take Down Notices that do not substantially comply with the foregoing requirements, which do not provide
                enough information for the allegedly infringing content to be located, or which lack the requirement
                verification may not receive a reply.
              </p>

              <p className="mb-4">
                B. Upon receipt of a verified DMCA Take Down Notice that identified allegedly infringing content in the
                required manner, Wirestorm Digital will investigate and disable access to the allegedly infringing
                material. Wirestorm Digital will also notify its User of the Take Down Notice, and if Wirestorm Digital
                receives a Counter Notice that substantially complies with the requirements below, Wirestorm Digital may
                restore access to the content in question consistent with the procedures below and the provisions of the
                DMCA.
              </p>

              <p className="mb-4">C. Counter-Notices</p>

              <p className="mb-4">
                Wirestorm Digital understands that copyright holders are not always correct in their beliefs regarding
                infringement, even when requesting 'take downs' in good faith under the DMCA. If you believe that your
                content that was removed (or to which access was disabled) is not infringing, or that you have the
                authorization from the copyright owner, the copyright owner's agent, or pursuant to the law, to post
                and/or use the material in your content, you may send a Counter-Notice containing the following
                information to the designated Copyright Agent (see above):
              </p>

              <ol className="list-roman pl-6 mb-4 space-y-2">
                <li>
                  identification of the content that has been removed or to which access has been disabled and the
                  location at which the content appeared before it was removed or disabled;
                </li>
                <li>
                  a statement that you have a good faith belief that the content was removed or disabled as a result of
                  mistake or a misidentification of the content;
                </li>
                <li>
                  your name, address, telephone number, and e-mail address, a statement that you consent to the
                  jurisdiction of the federal court in Las Vegas, Nevada, and a statement that you will accept service
                  of process from the person who provided notification of the alleged infringement; and
                </li>
                <li>your physical or electronic signature;</li>
              </ol>

              <p className="mb-4">
                If a Counter-Notice is received by the Copyright Agent, Wirestorm Digital may send a copy of the
                Counter-Notice to the original complaining party informing that person that it may replace the removed
                content or cease disabling it in 10 business days. Unless the copyright owner files an action seeking a
                court order against the user, the removed content may be replaced, or access to it restored, in 10 (to
                14) business days or more after receipt of the Counter-Notice, at Wirestorm Digital's sole discretion.
              </p>

              <p className="text-right text-sm text-gray-600 mt-8">Wirestorm Digital Updated May 13, 2025</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
