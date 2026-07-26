import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import Sprig from "@/components/Sprig";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Health & Wellness team.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="mx-auto max-w-3xl px-5 pb-4 pt-16 text-center sm:px-8">
        <p className="font-body text-xs uppercase tracking-widest2 text-sage-600">
          Contact
        </p>
        <h1 className="mt-3 font-display text-5xl text-ink-800 sm:text-6xl">
          Let&rsquo;s talk.
        </h1>
        <Sprig className="mx-auto my-6 text-sage-400" />
        <p className="mx-auto max-w-md font-body text-sm leading-relaxed text-ink-500">
          Questions, topic requests, collaboration ideas &mdash; send a note
          and I&rsquo;ll get back to you within a few days.
        </p>
      </section>

      <section className="mx-auto max-w-xl px-5 py-12 sm:px-8">
        <ContactForm />
      </section>

      <section className="border-t border-ink-100 bg-sage-50">
        <div className="mx-auto max-w-3xl px-5 py-14 text-center sm:px-8">
          <p className="font-body text-xs uppercase tracking-widest2 text-ink-400">
            Please note
          </p>
          <p className="mx-auto mt-3 max-w-lg font-body text-sm leading-relaxed text-ink-500">
            This contact form is for general questions about the journal.
            It is not monitored for medical emergencies. If you are
            experiencing a health emergency, please contact a doctor or
            emergency services directly.
          </p>
        </div>
      </section>
    </div>
  );
}
