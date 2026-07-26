"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { categories, posts } from "@/lib/posts";
import type { Category } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function BlogClient() {
  const searchParams = useSearchParams();
  const initialSlug = searchParams.get("category");
  const initialCategory =
    categories.find((c) => c.slug === initialSlug)?.name ?? "All";

  const [active, setActive] = useState<Category | "All">(initialCategory);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = active === "All" || post.category === active;
      const matchesQuery =
        query.trim() === "" ||
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [active, query]);

  return (
    <div>
      <section className="border-b border-ink-100 bg-sage-50">
        <div className="mx-auto max-w-8xl px-5 py-14 text-center sm:px-8">
          <p className="font-body text-xs uppercase tracking-widest2 text-sage-600">
            The Journal
          </p>
          <h1 className="mt-3 font-display text-4xl text-ink-800 sm:text-5xl">
            All Articles
          </h1>
          <p className="mx-auto mt-3 max-w-lg font-body text-sm leading-relaxed text-ink-500">
            Grounded, evidence-based reading across sexual health, hormones,
            vitality, intimacy, and everyday wellbeing.
          </p>

          <div className="mx-auto mt-8 max-w-md">
            <label htmlFor="search" className="sr-only">
              Search articles
            </label>
            <input
              id="search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles&hellip;"
              className="w-full rounded-full border border-ink-200 bg-paper px-5 py-3 font-body text-sm text-ink-700 placeholder:text-ink-300 focus:border-sage-400"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-8xl px-5 py-10 sm:px-8">
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActive("All")}
            className={`rounded-full border px-4 py-2 font-body text-xs uppercase tracking-widest2 transition-colors ${
              active === "All"
                ? "border-sage-600 bg-sage-600 text-cream"
                : "border-ink-200 text-ink-500 hover:border-sage-400 hover:text-sage-600"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActive(cat.name)}
              className={`rounded-full border px-4 py-2 font-body text-xs uppercase tracking-widest2 transition-colors ${
                active === cat.name
                  ? "border-sage-600 bg-sage-600 text-cream"
                  : "border-ink-200 text-ink-500 hover:border-sage-400 hover:text-sage-600"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="mt-12">
          {filtered.length > 0 ? (
            <div className="masonry">
              {filtered.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="font-display text-2xl italic text-ink-600">
                Nothing here yet.
              </p>
              <p className="mt-2 font-body text-sm text-ink-400">
                Try a different search term or category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
