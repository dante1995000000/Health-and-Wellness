"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");
  const [name, setName] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Static demo form — wire this up to your email provider or API route.
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div className="rounded-2xl border border-sage-200 bg-sage-50 p-10 text-center">
        <h2 className="font-display text-2xl text-sage-700">
          Thank you{name ? `, ${name}` : ""}.
        </h2>
        <p className="mt-2 font-body text-sm leading-relaxed text-ink-500">
          Your message has been received. I&rsquo;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="font-body text-xs uppercase tracking-widest2 text-ink-500"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full rounded-xl border border-ink-200 bg-paper px-4 py-3 font-body text-sm text-ink-700 placeholder:text-ink-300 focus:border-sage-400"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="font-body text-xs uppercase tracking-widest2 text-ink-500"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-xl border border-ink-200 bg-paper px-4 py-3 font-body text-sm text-ink-700 placeholder:text-ink-300 focus:border-sage-400"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="topic"
          className="font-body text-xs uppercase tracking-widest2 text-ink-500"
        >
          Topic
        </label>
        <select
          id="topic"
          name="topic"
          className="mt-2 w-full rounded-xl border border-ink-200 bg-paper px-4 py-3 font-body text-sm text-ink-700 focus:border-sage-400"
          defaultValue="General question"
        >
          <option>General question</option>
          <option>Topic request</option>
          <option>Collaboration or press</option>
          <option>Something else</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-body text-xs uppercase tracking-widest2 text-ink-500"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="mt-2 w-full resize-none rounded-xl border border-ink-200 bg-paper px-4 py-3 font-body text-sm text-ink-700 placeholder:text-ink-300 focus:border-sage-400"
          placeholder="What's on your mind?"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-sage-600 px-7 py-3 font-body text-sm uppercase tracking-widest2 text-cream transition-colors hover:bg-sage-700 sm:w-auto"
      >
        Send Message
      </button>
    </form>
  );
}
