import type { Metadata } from "next";
import Sprig from "@/components/Sprig";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Health & Wellness collects, uses, and protects your information.",
};

const sections = [
  {
    title: "1. Overview",
    body: [
      "This Privacy Policy explains how Health & Wellness (\u201cwe,\u201d \u201cus,\u201d or \u201cour\u201d) collects, uses, and protects information when you visit this website. We take the sensitivity of health-related topics seriously and aim to collect only what is necessary to operate this site.",
    ],
  },
  {
    title: "2. Information We Collect",
    body: [
      "Contact form submissions: when you use our contact form, we collect the name, email address, and message content you provide.",
      "Usage data: like most websites, we may collect standard technical information such as browser type, device type, pages visited, and time spent on pages, typically through privacy-conscious analytics tools.",
      "Cookies: we may use essential cookies to support basic site functionality. We do not use cookies to build advertising profiles.",
    ],
  },
  {
    title: "3. How We Use Information",
    body: [
      "We use the information we collect to respond to your messages, understand how our content is used so we can improve it, and maintain the security and functionality of the site.",
      "We do not sell personal information to third parties, and we do not use contact form submissions for marketing without your explicit consent.",
    ],
  },
  {
    title: "4. Health Information Disclaimer",
    body: [
      "Health & Wellness is an educational publication, not a healthcare provider. Nothing on this site constitutes medical advice, diagnosis, or treatment. Any information you choose to share with us through the contact form is not protected health information under HIPAA, since we are not a covered healthcare entity.",
      "Please do not share sensitive personal health details through our contact form. For any medical concerns, please consult a licensed healthcare provider directly.",
    ],
  },
  {
    title: "5. Third-Party Services",
    body: [
      "We may use third-party services for hosting, analytics, or email delivery. These providers only receive the information necessary to perform their function and are contractually or legally obligated to protect it appropriately.",
    ],
  },
  {
    title: "6. Data Retention",
    body: [
      "We retain contact form submissions only as long as necessary to respond to your inquiry and for a reasonable period afterward for record-keeping, after which they are deleted.",
    ],
  },
  {
    title: "7. Your Rights",
    body: [
      "Depending on your location, you may have the right to request access to, correction of, or deletion of personal information we hold about you. To make such a request, please use the contact form and specify your request clearly.",
    ],
  },
  {
    title: "8. Children's Privacy",
    body: [
      "This site is not directed at children under 13, and we do not knowingly collect personal information from children.",
    ],
  },
  {
    title: "9. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. The \u201cLast updated\u201d date below reflects the most recent revision. Continued use of the site after changes constitutes acceptance of the updated policy.",
    ],
  },
  {
    title: "10. Contact Us",
    body: [
      "If you have questions about this Privacy Policy or how your information is handled, please reach out through our contact page.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div>
      <section className="mx-auto max-w-3xl px-5 pb-4 pt-16 text-center sm:px-8">
        <p className="font-body text-xs uppercase tracking-widest2 text-sage-600">
          Legal
        </p>
        <h1 className="mt-3 font-display text-5xl text-ink-800 sm:text-6xl">
          Privacy Policy
        </h1>
        <Sprig className="mx-auto my-6 text-sage-400" />
        <p className="font-body text-xs uppercase tracking-widest2 text-ink-400">
          Last updated: July 1, 2026
        </p>
      </section>

      <section className="mx-auto max-w-2xl px-5 py-12 sm:px-8">
        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-2xl text-ink-800">
                {section.title}
              </h2>
              <div className="mt-3 space-y-3">
                {section.body.map((p, i) => (
                  <p
                    key={i}
                    className="font-body text-sm leading-relaxed text-ink-600"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
