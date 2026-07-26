import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Sprig from "@/components/Sprig";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "The story and mission behind Health & Wellness — a journal for whole-body, evidence-based wellbeing.",
};

const values = [
  {
    title: "Evidence over trends",
    text: "Every article is grounded in current research, with citations to primary sources where relevant — not repackaged wellness-industry marketing.",
  },
  {
    title: "Whole-body, not siloed",
    text: "Sexual health, hormones, relationships, and daily habits aren't separate categories. They shape each other, and this journal treats them that way.",
  },
  {
    title: "Written without shame",
    text: "Topics like libido, pelvic health, and intimacy deserve plain, respectful language — not euphemism, and not sensationalism.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-5xl px-5 pb-6 pt-16 text-center sm:px-8">
        <p className="font-body text-xs uppercase tracking-widest2 text-sage-600">
          About
        </p>
        <h1 className="mt-3 font-display text-5xl text-ink-800 sm:text-6xl">
          Hi, I&rsquo;m glad you&rsquo;re here.
        </h1>
        <Sprig className="mx-auto my-6 text-sage-400" />
      </section>

      <section className="mx-auto grid max-w-5xl items-center gap-12 px-5 py-10 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] bg-sage-100">
          <Image
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=900&auto=format&fit=crop"
            alt="Portrait of the Health & Wellness editorial team in a plant-filled studio"
            fill
            sizes="(min-width: 1024px) 30vw, 80vw"
            className="object-cover"
          />
        </div>

        <div className="max-w-xl">
          <p className="font-body text-base leading-relaxed text-ink-600">
            Health &amp; Wellness started as a set of notes I kept for
            myself &mdash; questions about my own cycle, conversations with
            doctors I wished I&rsquo;d had sooner, and research papers I
            didn&rsquo;t want to lose track of. Over time, friends started
            asking for those notes, and this journal became the place to
            share them properly.
          </p>
          <p className="mt-5 font-body text-base leading-relaxed text-ink-600">
            I work with a small group of contributors &mdash; a pelvic
            health physical therapist, a registered dietitian, and a
            physician with a focus in sexual and reproductive health &mdash;
            to make sure what&rsquo;s published here is careful, current,
            and genuinely useful.
          </p>
          <p className="mt-5 font-body text-base leading-relaxed text-ink-600">
            This isn&rsquo;t a place for miracle cures or fear-based
            headlines. It&rsquo;s a place to understand your body a little
            better, one honest article at a time.
          </p>
        </div>
      </section>

      <section className="mt-8 border-y border-ink-100 bg-sage-50">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
          <h2 className="text-center font-display text-3xl text-ink-800">
            What guides this journal
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="text-center sm:text-left">
                <h3 className="font-display text-xl text-sage-700">
                  {v.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink-500">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8">
        <h2 className="font-display text-3xl italic text-ink-800">
          Have a topic you&rsquo;d like covered?
        </h2>
        <p className="mx-auto mt-3 max-w-md font-body text-sm leading-relaxed text-ink-500">
          I read every message. If there&rsquo;s something you&rsquo;ve been
          wanting clear, well-researched information on, I&rsquo;d love to
          hear it.
        </p>
        <Link
          href="/contact"
          className="mt-7 inline-block rounded-full bg-sage-600 px-7 py-3 font-body text-sm uppercase tracking-widest2 text-cream transition-colors hover:bg-sage-700"
        >
          Send a Message
        </Link>
      </section>
    </div>
  );
}
