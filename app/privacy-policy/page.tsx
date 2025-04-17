import { generateMetadata } from "@/lib/metadata"
import { Metadata } from "next"
import { EPage } from "@/lib/constant"
import { cn } from "@/lib/utils"
import MainWrapper, { LegalCss } from "@/components/MainWrapper"

export const metadata: Metadata = generateMetadata({
  params: { pageType: EPage.PrivacyPolicy },
})

export default function PrivacyPolicy() {
  return (
    <MainWrapper>
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-pink-400 mb-4 font-comic">
          Say Ethereum Privacy Policy
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto font-comic">
          Last Updated: April 9, 2025
        </p>
      </div>

      <div className="text-gray-700 max-w-3xl mx-auto font-comic space-y-6">
        <p className="mb-4">
          This Privacy Policy describes how General Index, LLC (dba Geodework)
          (the &quot;<strong>Company</strong>,&quot; &quot;<strong>we</strong>
          ,&quot; &quot;
          <strong>us</strong>&quot; or &quot;<strong>our</strong>&quot;)
          collects, uses, stores, shares, and protects your information when you
          use this &apos;Say Ethereum&apos; website (the &apos;
          <strong>Website</strong>&apos;).
        </p>

        <section className="mb-8">
          <h2 className={LegalCss.titleCss}>1. Important Information</h2>

          <h3 className={LegalCss.subtitleCss}>
            Purpose of this Privacy Policy
          </h3>
          <p className="mb-4">
            We know how important privacy is to users of the Website, which is
            why we only collect the information we need and will not share your
            personal information with any third parties, unless necessary. Even
            within the Company, access to your personal information is limited
            to only those employees, contractors, and third-party services
            providers who require such information to handle matters related to
            the Website or services you request.
          </p>

          <h3 className={LegalCss.subtitleCss}>
            Changes to the Privacy Policy and Your Duty to Inform Us of Changes
          </h3>
          <p className="mb-4">
            We may change this privacy policy from time to time. When we do make
            updates, we will let you know by changing the date at the top of
            this privacy policy. It is your responsibility to review this
            privacy policy periodically. If you keep using the Website, you
            consent to any updates to this privacy policy by using the Website
            once this privacy policy is updated.
          </p>

          <h3 className={LegalCss.subtitleCss}>Third-Party Links</h3>
          <p className="mb-4">
            The Website may include links to third-party websites, plug-ins, and
            applications. Clicking on those links or enabling those connections
            may allow third parties to collect or share data about you. We do
            not control these third-party websites and are not responsible for
            their privacy statements. When you leave the Website, we encourage
            you to read the privacy notice of every website you visit.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={LegalCss.titleCss}>
            2. The Data That Will Be Collected
          </h2>
          <p className="mb-4">
            We need to collect personal information about you to provide you
            with certain services. Personal information means any information
            about an individual from which that person can be identified. It
            does not include data where the identity has been removed (anonymous
            data).
          </p>
          <p className="mb-4">
            We may collect, use, store and transfer different kinds of personal
            data about you which we have grouped together as follows:
          </p>
          <ul className={cn(LegalCss.listWrapperCss, "my-4")}>
            <li>
              <strong>Identity Data</strong> includes first name, birth name,
              last name, email address, or any other identity information you
              provide us.
            </li>
            <li>
              <strong>Technical Data</strong> includes internet protocol (IP)
              address, your login data, browser type and version, time zone
              setting and location, browser plug-in types and versions,
              operating system and platform and other technology on the devices
              you use to access the Website.
            </li>
            <li>
              <strong>Usage Data</strong> includes information about how you use
              the Website.
            </li>
            <li>
              <strong>Marketing and Communications Data</strong> includes your
              preferences in receiving marketing from us and our third parties
              and your communication preferences.
            </li>
            <li>
              <strong>Location Data</strong> includes information about your
              device location.
            </li>
          </ul>
          <p className="mb-4">
            We also collect, use, and share <strong>Aggregated Data</strong>{" "}
            such as statistical or demographic data for any purpose. Aggregated
            Data may be derived from your personal data but is not considered
            personal data in law as this data does not directly or indirectly
            reveal your identity. For example, we may aggregate your Usage Data
            to calculate the percentage of users accessing a specific app
            feature. However, if we combine or connect Aggregated Data with your
            personal data so that it can directly or indirectly identify you, we
            treat the combined data as personal data which will be used in
            accordance with this privacy policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={LegalCss.titleCss}>
            3. How We Collect Your Personal Data
          </h2>
          <p className="mb-4">
            We use different methods to collect data from and about you
            including through:
          </p>
          <ul className={cn(LegalCss.listWrapperCss, "my-4")}>
            <li>
              <strong>Direct interactions.</strong> You may provide your
              Identity, Technical, Usage, Marketing and Communications and
              Location Data by submitting it through the Website.
            </li>
            <li>
              <strong>Automated technologies or interactions.</strong> When you
              interact with the Website, we may automatically collect Usage and
              Technical Data about your equipment, browsing actions and
              patterns. We collect this personal data by using cookies, server
              logs and other similar technologies. We may also receive Technical
              Data about you if you visit other websites employing our cookies.
            </li>
            <li>
              <strong>Third parties or publicly available sources.</strong> We
              may receive personal data about you from various third parties
              including Technical Data from analytics providers such as Google.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className={LegalCss.titleCss}>
            4. How We Use Your Personal Data
          </h2>
          <p className="mb-4">
            We collect all this information so that we can provide you with the
            Website safely and seamlessly. The information we collect allows us
            to:
          </p>
          <ul className={cn(LegalCss.listWrapperCss, "my-4")}>
            <li>Deliver the full functionality of the Website;</li>
            <li>
              Stay connected with you: whether it be for providing customer
              service or notifying you of new features or updates to the
              Website; and
            </li>
            <li>
              Fulfill any other purpose for which the information was collected.
            </li>
          </ul>
          <p className="mb-4">
            We will never sell or rent your personal data to third parties. We
            may combine your information with information we collect from other
            companies and use it to improve and personalize the Website, as well
            as our content and advertising.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={LegalCss.titleCss}>
            5. How We Share Your Personal Data
          </h2>
          <h3 className={LegalCss.subtitleCss}>Sharing with Third Parties</h3>
          <p className="mb-4">
            We may have to share your personal data with the parties set out
            below for the purposes set out in Section 4 above:
          </p>
          <ul className={cn(LegalCss.listWrapperCss, "my-4")}>
            <li>
              <strong>Legal advisors</strong> &ndash; If we believe that
              disclosure is reasonably necessary: (1) to comply with any
              applicable law, regulation, legal process or governmental request;
              (2) to establish, exercise or defend our legal rights; (3) to
              enforce or comply with our Terms and Conditions; or (4) to protect
              us, users of our Website or the public from harm, fraud, or
              potentially prohibited or illegal activities.
            </li>
            <li>
              <strong>Service Providers</strong> &ndash; The Company may provide
              your personal information to other companies who help us provide,
              maintain, and improve the Website.
            </li>
            <li>
              <strong>Professional advisers</strong> &ndash; In order to comply
              with our legal obligations, we may need to share information with
              professional advisers who provide consultancy, banking,
              compliance, insurance, or accounting services.
            </li>
            <li>
              <strong>Third parties</strong> &ndash; We may choose to sell,
              transfer, or merge parts of our business or our assets to third
              parties. Alternatively, we may acquire other businesses or merge
              with them. If a change happens to our business, then the new
              owners may use your personal data in the same way as set out in
              this privacy policy.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className={LegalCss.titleCss}>
            6. How We Protect Your Personal Data
          </h2>
          <p className="mb-4">
            We protect your information using technical and administrative
            security measures to reduce the risks of loss, misuse, unauthorized
            access, disclosure, and alteration. Data may be stored with a third
            party company, which may have firewalls and data encryption not
            managed by us. In addition, we limit access to your personal data to
            those employees, agents, contractors and other third parties who
            have a business need to know.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={LegalCss.titleCss}>
            7. Children Under the Age of Majority
          </h2>
          <p className="mb-4">
            The Website is not intended for children under the age of majority
            in the country they live (i.e. 18 years of age in the United States)
            (&quot;Minors&quot;), and we do not knowingly collect information
            from Minors without parental consent. If we learn we have collected
            or received personal information from a Minor without verification
            of parental consent, we will delete that information. If you believe
            we may have information from or about a Minor, please contact us at
            hello@geodework.com.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={LegalCss.titleCss}>8. California Privacy Rights</h2>
          <p className="mb-4">
            Residents of California may have additional rights regarding our use
            of your personal information. To learn more about your California
            privacy rights, visit{" "}
            <a
              href="https://oag.ca.gov/privacy/ccpa"
              className="text-pink-400 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              this link here
            </a>
            . California residents have rights to request a copy of personal
            information collected about them over the past 12 months. California
            residents will not be discriminated against because they choose to
            exercise rights under the California Consumer Privacy Act.
          </p>
          <p className="mb-4">
            If you request a copy of or deletion of your personal information,
            we may ask you to provide additional personal information to verify
            your identity before processing your request. We may still be
            required to keep certain information about you to comply with
            relevant law. To request additional information or submit a request
            under the California Consumer Privacy Act, contact us at
            hello@geodework.com.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={LegalCss.titleCss}>9. Data Retention</h2>
          <p className="mb-4">
            We will only retain your personal data for as long as necessary to
            fulfil the purposes we collected it for, including for the purposes
            of satisfying any legal, accounting, or reporting requirements. To
            determine the appropriate retention period for personal data, we
            consider the amount, nature, and sensitivity of the personal data,
            the potential risk of harm from unauthorized use or disclosure of
            your personal data, the purposes for which we process your personal
            data and whether we can achieve those purposes through other means,
            and the applicable legal requirements.
          </p>
          <p className="mb-4">
            In some circumstances we may anonymize your personal data for
            research or statistical purposes in which case we may use this
            information indefinitely without further notice to you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={LegalCss.titleCss}>10. Contact Information</h2>
          <p className="mb-4">
            Please contact us with any questions, concerns, or feedback
            regarding this privacy policy by sending an email to
            hello@geodework.com.
          </p>
        </section>
      </div>
    </MainWrapper>
  )
}
