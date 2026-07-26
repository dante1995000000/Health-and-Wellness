import type { Metadata } from "next";
import { Suspense } from "react";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Browse articles on women's health, hormones and cycle tracking, men's vitality, intimacy, and daily wellness.",
};

export default function BlogPage() {
  return (
    <Suspense fallback={null}>
      <BlogClient />
    </Suspense>
  );
}
