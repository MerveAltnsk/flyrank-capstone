import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Task Manager.",
};

export default function AboutPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        About
      </h1>
      <p className="max-w-prose text-base leading-7 text-zinc-600 dark:text-zinc-400">
        Information about this application will appear here. This is placeholder
        content.
      </p>
    </section>
  );
}
