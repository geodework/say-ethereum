import { generateMetadata } from "@/lib/metadata"
import { Metadata } from "next"
import { EPage } from "@/lib/constant"
import MainWrapper, { LegalCss } from "@/components/MainWrapper"
import { cn } from "@/lib/utils"

export const metadata: Metadata = generateMetadata({
  params: { pageType: EPage.TermsOfUse },
})

const { titleCss, listWrapperCss } = LegalCss

export default function TermsOfUse() {
  return (
    <MainWrapper>
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-pink-400 mb-4 font-comic">
          &quot;Say Ethereum&quot; Terms and Conditions
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto font-comic">
          Last Updated: April 9, 2025
        </p>
      </div>

      <div className="text-gray-700 max-w-3xl mx-auto font-comic space-y-6">
        <p>
          This Terms and Conditions (the &quot;Agreement&quot;) is a contract
          between you and General Index, LLC (dba Geodework) (the
          &quot;Company,&quot; &quot;we,&quot; or &quot;us&quot;) that applies
          to your use of the &quot;Say Ethereum&quot; website
          (https://say-ethereum.vercel.app/) (the &quot;Website&quot;) as a user
          (&quot;User&quot;, &quot;you&quot; or &quot;your&quot;). By using the
          Website, you agree that you have read, understood and accept all the
          terms and conditions contained in this Agreement as well as our
          Privacy Policy, and you acknowledge and agree that you will be bound
          by them. Section 8 of this Agreement governs how this Agreement may be
          changed over time.
        </p>

        <h2 className={titleCss}>1. Access to and Changes to Our Website</h2>
        <p>
          We do not guarantee that the Website, or any content on it, will
          always be available or be uninterrupted. We may suspend, withdraw,
          discontinue or change all or any part of the Website without notice.
          We will not be liable to you if for any reason the Website is
          unavailable at any time or for any period. Whilst you are in
          compliance with this Agreement, we grant you a non-exclusive,
          non-transferable, personal, revocable limited license to access the
          material on the Website in accordance with this Agreement. Please note
          that content on the Website may be out of date at any given time, and
          we are under no obligation to update it. We do not guarantee that the
          Website, or any content on it, will be free from errors or omissions.
          If you are dissatisfied with any portion of the Website or with this
          Agreement, your sole and exclusive remedy is to discontinue use of the
          Website.
        </p>

        <h2 className={titleCss}>2. Eligibility</h2>
        <p>
          The Website is not intended for children under the age of majority in
          the country they live (i.e. 18 years of age in the United States)
          (&quot;Minors&quot;), and we do not knowingly collect information from
          Minors without parental consent. If we learn we have collected or
          received personal information from a Minor without verification of
          parental consent, we will delete that information.
        </p>

        <h2 className={titleCss}>3. Privacy Policy</h2>
        <p>
          We are committed to protecting your personal information and helping
          you understand exactly how your personal information is being used.
          You should carefully read our Privacy Policy, as it provides details
          on how your personal information is collected, stored, protected, and
          used.
        </p>

        <h2 className={titleCss}>4. No Reliance on Information</h2>
        <p>
          The content on the Website is provided for general information only.
          The fact that the Website may include information in relation to an
          organization does not mean that we are a part of, endorse or recommend
          that organization. We may provide directions to tools and resources we
          think may be of use to you, but it is not intended to amount to
          financial, investment or any other kind of advice on which you should
          rely. Although we make reasonable efforts to update the information on
          the Website, we make no representations, warranties or guarantees,
          whether express or implied, that the content on the Website is
          accurate, complete or up to date. We may arrange for or facilitate the
          display of advertising or other promotional material on the Website.
          That does not mean that we endorse or recommend the advertised or
          promoted goods or services.
        </p>

        <h2 className={titleCss}>5. Restricted Activities</h2>
        <p>
          In connection with your use of the Website, you hereby agree that you
          will not:
        </p>
        <ul className={cn(listWrapperCss, "list-[lower-alpha]")}>
          <li>
            Violate (or assist any other party in violating) any applicable law,
            statute, ordinance, or regulation;
          </li>
          <li>
            Intentionally try to defraud (or assist in the defrauding of) us or
            other Users;
          </li>
          <li>
            Take any action that interferes with, intercepts, or expropriates
            any system, data, or information;
          </li>
          <li>
            Transmit or upload any virus, worm, or other malicious software or
            program;
          </li>
          <li>
            Defame, harass, or violate the privacy or intellectual property
            rights of us or any other Users; or
          </li>
          <li>
            Post job openings whose requirements or compensation arrangements
            violate relevant law.
          </li>
        </ul>

        <h2 className={titleCss}>6. Indemnification; Release</h2>
        <p>
          You agree to indemnify and hold us, our affiliates, and service
          providers, and each of their officers, directors, agents, joint
          venturers, employees, and representatives harmless from any claim or
          demand (including attorneys&apos; fees and any losses, fines, fees or
          penalties imposed by any regulatory authority) arising out of your
          breach of this Agreement, your violation of any law or regulation or
          your use of the Website.
        </p>

        <h2 className={titleCss}>7. Limitation of Liability; No Warranty</h2>
        <p>
          YOU EXPRESSLY UNDERSTAND AND AGREE THAT WE AND OUR AFFILIATES AND
          SERVICE PROVIDERS, AND THEIR RESPECTIVE OFFICERS, DIRECTORS, AGENTS,
          JOINT VENTURERS, EMPLOYEES, AND REPRESENTATIVES WILL NOT BE LIABLE FOR
          ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY DAMAGES,
          OR DAMAGES FOR LOSS OF PROFITS INCLUDING BUT NOT LIMITED TO, DAMAGES
          FOR LOSS OF GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES (EVEN IF
          WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), WHETHER
          BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR OTHERWISE,
          RESULTING FROM: (I) THE USE OR THE INABILITY TO USE THE WEBSITE; (II)
          THE COST OF PROCUREMENT OF SUBSTITUTE GOODS AND SERVICES RESULTING
          FROM ANY GOODS, DATA, INFORMATION, OR SERVICES PURCHASED OR OBTAINED
          OR MESSAGES RECEIVED OR TRANSACTIONS ENTERED INTO THROUGH OR FROM THE
          WEBSITE; (III) UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR
          TRANSMISSIONS OR DATA; OR (IV) ANY OTHER MATTER RELATING TO THE
          WEBSITE. UNDER NO CIRCUMSTANCES WILL WE BE LIABLE FOR
          &quot;EXEMPLARY&quot; OR &quot;PUNITIVE&quot; DAMAGES.
        </p>
        <p>
          THE WEBSITE IS PROVIDED &quot;AS IS&quot; AND WITHOUT ANY
          REPRESENTATION OR WARRANTY, WHETHER EXPRESS, IMPLIED OR STATUTORY. WE
          SPECIFICALLY DISCLAIM ANY IMPLIED WARRANTIES OF TITLE,
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT.
          WE MAKE NO WARRANTY THAT (I) THE WEBSITE WILL MEET YOUR REQUIREMENTS,
          (II) THE WEBSITE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE,
          OR (III) THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION, OR OTHER
          MATERIAL PURCHASED OR OBTAINED BY YOU WILL MEET YOUR EXPECTATIONS.
        </p>

        <h2 className={titleCss}>8. Changes to this Agreement</h2>
        <p>
          We may change this Agreement from time to time. When we do make
          updates, we will let you know by changing the date at the top of this
          Agreement. It is your responsibility to review this Agreement
          periodically. If you keep using the Website, you consent to any
          updates to this Agreement by using the Website once this Agreement is
          updated.
        </p>

        <h2 className={titleCss}>9. Website; Third Party Content</h2>
        <p>
          We strive to provide accurate and reliable information and content on
          the Website, but such information may not always be correct, complete,
          or up to date. You should always independently verify such
          information.
        </p>
        <p>
          The Website may also contain links to third-party websites,
          applications, events or other materials (&quot;Third Party
          Content&quot;). Such information is provided for your convenience and
          links or references to Third Party Content do not constitute an
          endorsement by us of any products or services. We shall have no
          liability for any losses incurred as a result of actions taken in
          reliance on the information contained on the Website or in any Third
          Party Content.
        </p>

        <h2 className={titleCss}>10. Limited License; IP Rights</h2>
        <p>
          We grant you a limited, non-exclusive, non-sublicensable, and
          non-transferable license, subject to this Agreement, to access and use
          the Website. We and our licensors reserve all rights in the Website
          and you agree that this Agreement does not grant you any rights in or
          licenses to the Website except for the limited license set forth
          above. Except as expressly authorized by us, you agree not to modify,
          reverse engineer, copy, frame, scrape, rent, lease, loan, sell,
          distribute, or create derivative works based on the Website, in whole
          or in part. If you violate any portion of this Agreement, your
          permission to access and use the Website may be terminated pursuant to
          this Agreement. All right, title, and interest in and to the Website,
          and all technology and any content created or derived from it is the
          exclusive property of us.
        </p>

        <h2 className={titleCss}>11. Arbitration</h2>
        <p>
          Any controversy or claim arising out of or relating to this Agreement
          or any breach thereof shall be settled by arbitration in Newark,
          Delaware, to be administered by JAMS pursuant to its Streamlined
          Arbitration Rules and Procedures. The determination of the arbitrator
          in such proceeding shall be final, binding and non-appealable, and
          judgment upon the award rendered by the arbitrator may be entered in
          any court having jurisdiction thereof. The prevailing party shall be
          entitled to reimbursement for costs and reasonable attorneys&apos;
          fees.
        </p>

        <h2 className={titleCss}>12. Governing Law; Venue</h2>
        <p>
          This Agreement and the rights of the Parties hereunder shall be
          governed by and construed in accordance with the laws of the State of
          Delaware including all matters of construction, validity, performance,
          and enforcement and without giving effect to the principles of
          conflict of laws. Any action brought by a Party hereto shall be
          brought within the city of Newark, Delaware.
        </p>

        <h2 className={titleCss}>13. Entire Agreement; Severability</h2>
        <p>
          The failure of us to exercise or enforce any right or provision of the
          Agreement shall not constitute a waiver of such right or provision. If
          any provision of this Agreement shall be adjudged by any court of
          competent jurisdiction to be unenforceable or invalid, that provision
          shall be limited or eliminated to the minimum extent necessary so that
          this Agreement shall otherwise remain in full force and effect and
          remain enforceable between the parties.
        </p>

        <h2 className={titleCss}>Questions? Concerns? Suggestions?</h2>
        <p>
          Please contact hello@geodework.com to ask any questions regarding this
          Agreement or the Website.
        </p>
      </div>
    </MainWrapper>
  )
}
