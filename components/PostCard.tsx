import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/posts";
import CategoryPill from "./CategoryPill";

const heightClass: Record<Post["height"], string> = {
  short: "aspect-[4/3]",
  medium: "aspect-[4/5]",
  tall: "aspect-[3/4.4]",
};

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="masonry-item group">
      <Link href={`/blog/${post.slug}`} className="block">
        <div
          className={`relative w-full overflow-hidden rounded-2xl bg-sage-100 ${heightClass[post.height]}`}
        >
          <Image
            src={post.image}
            alt=""
            fill
            sizes="(min-width: 1400px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute left-4 top-4">
            <CategoryPill category={post.category} className="bg-paper/90 shadow-sm" />
          </div>
        </div>

        <div className="mt-4 px-1">
          <h3 className="font-display text-xl leading-snug text-ink-800 transition-colors group-hover:text-sage-600 sm:text-2xl">
            {post.title}
          </h3>
          <p className="mt-2 font-body text-sm leading-relaxed text-ink-500">
            {post.excerpt}
          </p>
          <div className="mt-3 flex items-center gap-2 font-body text-xs uppercase tracking-widest2 text-ink-400">
            <span>{post.author}</span>
            <span aria-hidden="true">&middot;</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
