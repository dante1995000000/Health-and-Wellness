import Link from "next/link";
import Image from "next/image";
import { categories, posts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Sprig from "@/components/Sprig";

export default function HomePage() {
  const featured = posts.slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ink-100">
        <div className="mx-auto grid max-w-8xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="max-w-xl">
            <p className="font-body text-xs uppercase tracking-widest2 text-sage-600">
              A journal for whole-body wellbeing
            </p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] text-ink-800 sm:text-6xl lg:text-7xl">
              Wellness, told
              <br />
              <span className="italic text-sage-600">honestly.</span>
            </h1>
            <Sprig className="my-6 text-sage-400" />
            <p className="max-w-md font-body text-base leading-relaxed text-ink-500 sm:text-lg">
              Evidence-based writing on women&rsquo;s sexual and pelvic
              health, hormones and cycle tracking, men&rsquo;s vitality,
              intimacy, and the daily habits that quietly change everything.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/blog"
                className="rounded-full bg-sage-600 px-7 py-3 font-body text-sm uppercase tracking-widest2 text-cream transition-colors hover:bg-sage-700"
              >
                Read the Journal
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-ink-200 px-7 py-3 font-body text-sm uppercase tracking-widest2 text-ink-600 transition-colors hover:border-sage-500 hover:text-sage-600"
              >
                About Me
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] bg-sage-100 shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=1000&auto=format&fit=crop"
                alt="Woman stretching gently in soft morning light"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden aspect-square w-32 items-center justify-center rounded-full bg-clay-100 sm:flex">
              <p className="px-4 text-center font-display text-sm italic leading-tight text-clay-600">
                grounded &amp; evidence&#8209;based
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category strip */}
      <section className="mx-auto max-w-8xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/blog?category=${cat.slug}`}
              className="group flex flex-col gap-3 rounded-2xl border border-ink-100 bg-paper p-5 transition-colors hover:border-sage-300"
            >
              <span className={`h-2.5 w-2.5 rounded-full ${cat.dot}`} />
              <h3 className="font-display text-lg leading-snug text-ink-800 group-hover:text-sage-600">
                {cat.name}
              </h3>
              <p className="font-body text-xs leading-relaxed text-ink-400">
                {cat.blurb}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured masonry */}
      <section className="mx-auto max-w-8xl px-5 pb-24 sm:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="font-body text-xs uppercase tracking-widest2 text-sage-600">
              Recent &amp; recommended
            </p>
            <h2 className="mt-2 font-display text-3xl text-ink-800 sm:text-4xl">
              From the journal
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden font-body text-sm uppercase tracking-widest2 text-ink-500 hover:text-sage-600 sm:block"
          >
            View all &rarr;
          </Link>
        </div>

        <div className="masonry">
          {featured.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <Link
            href="/blog"
            className="font-body text-sm uppercase tracking-widest2 text-ink-500 hover:text-sage-600"
          >
            View all posts &rarr;
          </Link>
        </div>
      </section>

      {/* Newsletter / closing */}
      <section className="border-t border-ink-100 bg-sage-50">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8">
          <Sprig className="mx-auto text-sage-400" />
          <h2 className="mt-5 font-display text-3xl italic text-ink-800 sm:text-4xl">
            Small, honest steps toward feeling well.
          </h2>
          <p className="mx-auto mt-4 max-w-md font-body text-sm leading-relaxed text-ink-500">
            No fads, no miracle cures &mdash; just clear, evidence-informed
            writing to help you understand your body a little better.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-sage-600 px-7 py-3 font-body text-sm uppercase tracking-widest2 text-cream transition-colors hover:bg-sage-700"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
