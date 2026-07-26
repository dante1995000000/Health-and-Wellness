import Link from "next/link";
import Sprig from "@/components/Sprig";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-5 py-32 text-center sm:px-8">
      <p className="font-body text-xs uppercase tracking-widest2 text-sage-600">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl text-ink-800 sm:text-5xl">
        This page wandered off.
      </h1>
      <Sprig className="my-6 text-sage-400" />
      <p className="font-body text-sm leading-relaxed text-ink-500">
        We couldn&rsquo;t find what you were looking for. Let&rsquo;s get
        you back to the journal.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-sage-600 px-7 py-3 font-body text-sm uppercase tracking-widest2 text-cream transition-colors hover:bg-sage-700"
      >
        Back to Home
      </Link>
    </div>
  );
}
