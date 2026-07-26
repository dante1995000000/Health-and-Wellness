import { categories } from "@/lib/posts";
import type { Category } from "@/lib/posts";

export default function CategoryPill({
  category,
  className = "",
}: {
  category: Category;
  className?: string;
}) {
  const meta = categories.find((c) => c.name === category);
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-ink-100 bg-paper px-3 py-1 font-body text-[11px] uppercase tracking-widest2 text-ink-600 ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${meta?.dot ?? "bg-sage-500"}`} />
      {category}
    </span>
  );
}
