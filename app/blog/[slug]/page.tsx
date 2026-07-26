import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getRelatedPosts, posts } from "@/lib/posts";
import CategoryPill from "@/components/CategoryPill";
import Sprig from "@/components/Sprig";
import PostCard from "@/components/PostCard";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post, 3);
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article>
      <div className="mx-auto max-w-3xl px-5 pt-14 sm:px-8">
        <Link
          href="/blog"
          className="font-body text-xs uppercase tracking-widest2 text-ink-400 hover:text-sage-600"
        >
          &larr; Back to Journal
        </Link>

        <div className="mt-6">
          <CategoryPill category={post.category} />
        </div>

        <h1 className="mt-5 font-display text-4xl leading-tight text-ink-800 sm:text-5xl">
          {post.title}
        </h1>

        <div className="mt-5 flex items-center gap-2 font-body text-xs uppercase tracking-widest2 text-ink-400">
          <span>{post.author}</span>
          <span aria-hidden="true">&middot;</span>
          <span>{formattedDate}</span>
          <span aria-hidden="true">&middot;</span>
          <span>{post.readTime}</span>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-5xl px-5 sm:px-8">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-sage-100">
          <Image
            src={post.image}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 960px, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <p className="font-display text-xl italic leading-relaxed text-ink-600 sm:text-2xl">
          {post.excerpt}
        </p>
        <Sprig className="my-8 text-sage-400" />

        <div className="space-y-6">
          {post.content.map((paragraph, i) => (
            <p
              key={i}
              className="font-body text-base leading-relaxed text-ink-700 sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-ink-100 bg-sage-50 p-6">
          <p className="font-body text-xs leading-relaxed text-ink-500">
            <strong className="text-ink-600">A note on this article:</strong>{" "}
            This content is for general education and is not a substitute
            for personalized medical advice. Please speak with a qualified
            healthcare provider about any questions related to your own
            health.
          </p>
        </div>
      </div>

      {related.length > 0 && (
        <section className="border-t border-ink-100 bg-sage-50">
          <div className="mx-auto max-w-8xl px-5 py-16 sm:px-8">
            <h2 className="mb-8 font-display text-3xl text-ink-800">
              Continue reading
            </h2>
            <div className="masonry">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
