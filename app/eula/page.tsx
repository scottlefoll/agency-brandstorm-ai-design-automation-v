import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "End User License Agreement - Brandstorm AI",
  description: "End User License Agreement (EULA) for Brandstorm AI services and products.",
}

export default function EULAPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="flex-1 bg-gray-50 pt-32">
        <div className="container max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-purple-800 mb-8">End User License Agreement</h1>

          <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
            <section className="text-center font-bold mb-8">
              <p className="mb-2">ALL USE OF THIS SOFTWARE IS SUBJECT TO THE TERMS OF THIS LICENSE</p>
              <p className="mb-2">
                YOU MUST NOT ACCESS, USE, OR INTERACT IN ANY WAY WITH THIS SOFTWARE UNLESS YOU AGREE TO AND ACCEPT ALL
                TERMS AND CONDITIONS OF THIS END-USER LICENSE AGREEMENT
              </p>
              <p>
                IF YOU DO NOT AGREE TO OR CHOOSE NOT TO ACCEPT THE TERMS AND CONDITIONS OF THIS LICENSE, YOU MAY NOT
                ACCESS THE SOFTWARE.
              </p>
            </section>

            <section>
              <p className="mb-4">
                If you collect Personal Data from residents of the EU or if you are a Controller for purposes of the
                General GDPR, you must read and accept the Data Processing Addendum ("DPA") to this License (find DPA
                link in the footer of this page), and you understand and agree the DPA modifies and forms a part of this
                Agreement. You further understand that Brandstorm AI may begin tracking or collecting information from
                visitors who come from third-party email or advertisements immediately.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-3">1. Definitions</h2>
              <p className="mb-4">
                In this Agreement, the following words and expressions have the following meanings:
              </p>
              <p className="mb-2">
                "DPA" means the Data Processing Addendum, which forms a part of this End-User License Agreement with
                regard to GDPR compliance for any Controller thereunder;
              </p>
              <p className="mb-2">"EULA" or "Agreement" mean this End-User License Agreement;</p>
              <p className="mb-2">"Brandstorm AI" means Wirestorm Digital and its assignees;</p>
              <p className="mb-2">"License" means the limited personal license rights granted in paragraph 3;</p>
              <p className="mb-2">
                "Site" means any site where You access the software, including but not limited to www.Brandstorm.AI;
              </p>
              <p className="mb-2">
                "Software" (or "Brandstorm AI Software") means any Brandstorm AI software including any web- or
                cloud-based application, mobile app, server-based application, client, desktop or standalone software
                application, plugin, or add-on, including but not limited to Brandstorm AI shopping cart software.
                "Software" also includes all documentation, manuals, tutorials, user guides, videos, and accompanying or
                associated materials whether printed or electronic; and
              </p>
              <p className="mb-2">"You" means a user (or licensee) of any Brandstorm AI Software.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-3">
                2. Brandstorm AI Retains All Ownership of the Software and its Code
              </h2>
              <p className="mb-4">
                Brandstorm AI retains all ownership including all right, title, and interest in and to the Software, the
                underlying code, and any copies thereof. You understand and agree that Brandstorm AI (and not You) has
                and keeps all proprietary rights including without limitation all intellectual property rights therein,
                including copyrights, patents, and trademarks which all remain exclusively Brandstorm AI's property.
              </p>
              <p className="mb-4">
                More particularly, You agree and acknowledge that the Software is Brandstorm AI's exclusive property and
                that the Software is protected by copyright, trademark protection, database rights, and other
                intellectual property rights, and may be the subject of patent protection. Brandstorm AI grants You no
                express or implied rights under Brandstorm AI's copyrights, trademarks, patents, or other intellectual
                property or proprietary rights. You further understand and agree that You may not, and will not, in
                whole or in part, adapt, alter, assign, clone, copy, create a derivative of, decode, decompile,
                disassemble, distribute, lease, license, modify, publish, reproduce, reverse engineer, sell, transfer,
                translate, or vary the Software without the prior written authorization of Brandstorm AI, directly or
                indirectly through any person in Your employ or under Your authorization, direction, or control.
              </p>
              <p className="mb-4">
                You further understand and agree that to the extent that the Brandstorm AI Software utilizes,
                incorporates, or references any third party software, those portions may remain the intellectual
                property of such third parties. To the extent that Brandstorm AI Software utilizes or references any
                modules, libraries, or the like, that include code that is subject to restrictions on proprietary rights
                or which require public licensing terms, those restrictions or terms only pertain to such modules or
                libraries and do not alter the terms of this EULA, or Your rights hereunder, or any proprietary rights
                as between You and Brandstorm AI. The only rights You have regarding the Software are those usage rights
                expressly provided in the License below. You also understand that You may not, directly or indirectly
                remove any Brandstorm AI proprietary notices from the Software including copyright notices, trademark
                notices, or notices or markings regarding patents or patent status. Likewise, any third party notices or
                marking must remain intact.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-3">
                3. Limited License Granted to You to Use the Software
              </h2>
              <p className="mb-4">
                Brandstorm AI hereby grants to You a non-exclusive, non-transferable, revocable, limited, and personal
                license to use the Software (the "License") in accordance with the terms of your purchase, subscription,
                or service plan, this EULA and Brandstorm AI's Acceptable Use Policy, as amended from time to time, and
                You agree to comply with any restrictions therein.
              </p>
              <p className="mb-4">
                The Software utilizes, interfaces with, or operates in connection with services provided by or through
                Amazon AWS, RackSpace, Pusher, SendGrid, GoHighLevel, and any of our integration partners. This license
                is therefore also subject to all applicable limitations, terms, and conditions of service for these
                services to the extent they control content or usage. You agree to comply with all such limitations,
                terms, and conditions in connection with your usage of the Software.
              </p>
              <p className="mb-4">
                You understand that Brandstorm AI reserves the right, in its sole discretion, to discontinue any
                features or aspect(s) of the Software at any time.
              </p>
              <p className="font-semibold mb-2">
                Your License is Personal to You; You May Not Transfer Your Rights or Duties.
              </p>
              <p className="mb-4">
                The limited license rights granted in this Agreement are personal to You, as are the obligations,
                duties, representations, and warranties made by You herein.
              </p>
              <p className="mb-4">
                You may not license, sublicense, assign, or otherwise transfer or dispose of, all or any part of the
                Software or any of the limited rights granted to You in this Agreement to any third party. You may not
                remove, move, or relocate the Software from the Site or any server on which it is located unless You are
                expressly authorized to do so in writing by Brandstorm AI.
              </p>
              <p className="font-semibold mb-2">Your License is Limited.</p>
              <p className="mb-4">
                Your License to use the Brandstorm AI Software is limited. Your License is subject to our Acceptable Use
                Policy, which is incorporated herein. You may also be subject to specific limitations based on the
                License You purchased or Your subscription to the Brandstorm AI Software. Brandstorm AI will use
                reasonable efforts to inform You of such limitations prior to and at the time of purchase or
                subscription. Limitations may also be imposed by third parties over whom Brandstorm AI has no control
                (see the above list of service providers). For example, a third party may refuse to process certain
                types of transactions, or transactions from certain locations, or transactions for certain goods or
                services. Brandstorm AI will use reasonable efforts to communicate any such limitations to You. Other
                limitations may pertain to Your usage of particular features or certain aspects of the Brandstorm AI
                Software. For example, You will have a limit on the number of emails You can send, and the amount of
                video You can deliver via the Brandstorm AI Software, and You will be responsible for fees for usage of
                those features in excess of Your limits. Brandstorm AI will publish the fees for any such usage and
                reserves the right to revise them it shall deem useful, in its sole discretion. YOU ARE ALSO RESPONSIBLE
                FOR TIMELY PAYMENT OF YOUR USAGE OR OTHER FEES, AND YOUR LICENSE MAY BE TERMINATED FOR NONPAYMENT OF ANY
                SUCH FEES.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-3">4. Usage Limitations and Fees</h2>
              <p className="mb-4">
                Based on factors including usage, demands, and third party charges, Brandstorm AI has established
                monthly usage allotments and additional usage fees for certain features of the Software. At present,
                email, asset hosting and bandwidth, and hostname use are the only features for which monthly allotments
                have been established and additional usage fees apply. Note that any Brandstorm AI refund policies that
                may exist DO NOT APPLY to usage fees. The consequences of nonpayment of fees may be severe, please see
                Paragraph 11 regarding Termination for NonPayment.
              </p>
              <p className="mb-4 italic">
                [Note: The fees and limitations of this Paragraph 4 will be updated from time to time. Your continued
                use of the Software is Your assent to the current rates for which You are responsible. New rates will
                only be implemented as of their effective date, and will have no impact on usage prior to the effective
                date. Brandstorm AI will strive to keep the fees fair for all who require additional usage.]
              </p>
              <p className="mb-4">
                Email: As a User of the Brandstorm AI Software You can send a specific number of emails per month
                depending on the package purchased without additional fees. For each additional 1 thousand emails, You
                will incur a charge of US $2.10.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-3">
                5. Disclaimer: Brandstorm AI Software is provided "AS IS" With NO Guarantees or Warranties
              </h2>
              <p className="mb-4">
                While the Brandstorm AI Software is reasonably believed to be functional and to accurately perform its
                function(s), Brandstorm AI cannot guarantee that the Software will not contain errors or omissions, now
                or in the future. The Software has been rigorously tested internally, and during various alpha, beta,
                and other testing with third parties such that Brandstorm AI reasonably expects that such testing has or
                will identify any significant errors for correction. However, certain errors may not be readily detected
                and may remain hidden. The Software is provided to each Licensee on an "AS IS" with any and all faults
                or failings. You agree that Your access and use of the Software is entirely at Your own risk.
              </p>
              <p className="mb-4">
                Brandstorm AI makes absolutely no express guarantees or warranties about the Software or Your use of the
                Software for any purpose. All conditions, warranties, terms, representations, and undertakings, express
                or implied, in respect of the Software are expressly excluded. Moreover, to the extent permissible under
                applicable law, Brandstorm AI specifically disclaims any and all warranties or guarantees, including any
                that may be implied by law or otherwise, including without limitation any warranty of performance,
                accuracy, completeness, quality, merchantability, fitness for a particular purpose, and any warranty of
                non-infringement of any intellectual property or other rights of any third party. Further, Brandstorm AI
                does not warrant or assume any responsibility for financial transactions processed via the Software. You
                should track and verify all transactions until You have confidence that Your transactions are being
                properly processed and all monies due you are being paid to Your account(s). You assume the risk of
                failing to check Your own accounts sufficiently. As with any important business data, You should also
                regularly BACK-UP or otherwise PRESERVE Your User Content and other data including data pertaining to
                financial transactions ("Data) in connection with the Software. You are solely responsible for Your
                Data. Brandstorm AI does not warrant or represent that it will preserve or retain any Data for You after
                the expiration, lapse, or termination of Your License to use the Software for any reason by any party,
                including failure to pay fees due. However, Brandstorm AI reserves the right to do in its sole
                discretion. Brandstorm AI also does not warrant or guarantee that Your use of the Software is
                legal/permissible under the applicable law in Your locality. You agree with the foregoing and assume all
                risks associated with accessing or using the Software for any financial transactions.
              </p>
              <p className="mb-4">
                You understand that Brandstorm AI does not guarantee any confidentiality with respect to any goods,
                services, products, promotions, or offerings used in connection with the Software.
              </p>
            </section>

            {/* Continue with the rest of the sections... */}
            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-3">6. Brandstorm AI's Liability is Limited</h2>
              <p className="mb-4">
                You accept all responsibility and liability for any damages You suffer in connection with accessing or
                using the Software, or installing any software, plugin, add-on or the like, in connection with the
                Brandstorm AI Software. You understand that Brandstorm AI's liability is strictly limited by this
                Agreement. Do not access or use the Brandstorm AI Software if You are unable or unwilling to accept this
                limitation. In no event shall Brandstorm AI or its directors, officers, agents, employees or licensors
                be liable for any losses or damages whatsoever or howsoever incurred as a result of any access or use
                of, or inability to access or use the Software, including, without limitation, lost profits, lost
                opportunities, business interruption, or lost information, and lost Data, except to the extent which it
                is unlawful to exclude such liability. Your use of the Software is entirely at Your own risk. In the
                event that any exclusion contained in this Agreement shall be held to be invalid for any reason and
                Brandstorm AI becomes liable for any loss or damage, You agree that Brandstorm AI's liability shall be
                limited to the lesser of US $50.00 or what You paid to license the Software, as agreed-upon liquidated
                damages.
              </p>
              <p className="mb-4 font-bold">
                IN NO EVENT SHALL Brandstorm AI, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS, BE LIABLE TO YOU FOR ANY
                DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES WHATSOEVER RESULTING FROM:
              </p>
              <p className="mb-2">
                (i) ANY ERRORS, OMISSIONS, MISTAKES, OR INACCURACIES WITH RESPECT TO THE SOFTWARE, OR ANY FINANCIAL
                TRANSACTION INCLUDING BUT NOT LIMITED TO PRICING ERRORS, TRANSACTION PROCESSING ERRORS BY THIRD PARTIES,
                CREDIT CARD OR SIMILAR FRAUDULENT TRANSACTIONS PROCESSED BY YOU OR ON YOUR BEHALF, OR ERRONEOUS OR
                FRAUDULENT CHARGEBACKS;
              </p>
              <p className="mb-2">
                (ii) ANY PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO
                AND/OR USE OF OUR SOFTWARE;
              </p>
              <p className="mb-2">
                (iii) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SERVERS, COMPUTERS, OR BUSINESS RECORDS AND/OR ANY AND
                ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN;
              </p>
              <p className="mb-2">
                (iv) ANY LOSS OR DELETION OF YOUR DATA (INCLUDING USER CONTENT) FROM Brandstorm AI SERVERS OR SYSTEM
                AFTER YOUR LICENSE TO USE THE Brandstorm AI SOFTWARE HAS EXPIRED, LAPSED, OR BEEN TERMINATED FOR ANY
                REASON BY YOU OR Brandstorm AI;
              </p>
              <p className="mb-2">(v) ANY INTERRUPTION OR CESSATION OF SOFTWARE OPERATION;</p>
              <p className="mb-2">
                (vi) ANY BUGS, VIRUSES, MALWARE, SPYWARE, TROJAN HORSES, OR THE LIKE, WHICH MAY BE TRANSMITTED TO OR
                THROUGH OUR SOFTWARE BY ANY THIRD PARTY;
              </p>
              <p className="mb-2">
                (vii) ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A DIRECT OR INDIRECT RESULT OF YOUR ACCESS OR USE OF
                THE Brandstorm AI SOFTWARE;
              </p>
              <p className="mb-2">
                (viii) ANY LOSS RESULTING FROM TERMINATION INCLUDING BUT NOT LIMITED TO TERMINATION FOR NONPAYMENT;
                AND/OR
              </p>
              <p className="mb-2">
                (ix) ANY LIABILITY INCURRED BY YOU FOR VIOLATIONS OF THE GDPR OR SIMILAR PRIVACY REGULATIONS WHETHER OR
                NOT BASED IN WHOLE OR PART ON Brandstorm AI'S PROCESSING OF ANY DATA PROVIDED BY YOU TO Brandstorm AI OR
                PROCESSED IN CONNECTION WITH PROVIDING THE SERVICES HEREUNDER TO YOU OR ON YOUR BEHALF; WHETHER BASED ON
                WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT Brandstorm AI WAS ADVISED OF OR
                KNEW OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p className="mb-4 font-bold">
                THE FOREGOING LIMITATION OF LIABILITY SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY LAW IN THE
                APPLICABLE JURISDICTION.
              </p>
            </section>

            <div className="text-center mt-8">
              <p className="mb-4 font-semibold">Contact Us</p>
              <p>Wirestorm Digital</p>
              <p>44 W. Village Rd.</p>
              <p>Milan NH 03588</p>
              <p className="mt-2">Email: support@Brandstorm.AI</p>
              <p className="mt-4 text-sm text-gray-600">This document was last updated on May 13, 2025</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
