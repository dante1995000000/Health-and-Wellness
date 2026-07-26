import Link from "next/link";
import Sprig from "./Sprig";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-ink-100 bg-sage-50">
      <div className="mx-auto max-w-8xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <h2 className="font-display text-2xl text-ink-800">
              HEALTH &amp; WELLNESS
            </h2>
            <Sprig className="my-3 text-sage-400" />
            <p className="max-w-xs font-body text-sm leading-relaxed text-ink-500">
              Evidence-based writing on sexual and pelvic health, hormones,
              vitality, intimacy, and the small daily habits that add up.
            </p>
          </div>

          <div>
            <h3 className="font-body text-xs uppercase tracking-widest2 text-ink-400">
              Explore
            </h3>
            <ul className="mt-4 space-y-2 font-body text-sm text-ink-600">
              <li><Link href="/" className="hover:text-sage-600">Home</Link></li>
              <li><Link href="/blog" className="hover:text-sage-600">Blog</Link></li>
              <li><Link href="/about" className="hover:text-sage-600">About Me</Link></li>
              <li><Link href="/contact" className="hover:text-sage-600">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-sage-600">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-body text-xs uppercase tracking-widest2 text-ink-400">
              A note
            </h3>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-ink-500">
              This site shares general, evidence-informed education and is
              not a substitute for individualized medical advice. Always
              consult a qualified healthcare provider about your own health.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-ink-100 pt-6 sm:flex-row">
          <p className="font-body text-xs text-ink-400">
            &copy; {new Date().getFullYear()} Health &amp; Wellness. All rights reserved.
          </p>
          <p className="font-body text-xs text-ink-400">
            Made with care, one gentle habit at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
