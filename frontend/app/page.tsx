import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Task Manager home page.",
};

export default function HomePage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Home
      </h1>
      <p className="max-w-prose text-base leading-7 text-zinc-600 dark:text-zinc-400">
        Welcome to Task Manager. This is placeholder content for the home page.
      </p>
    </section>
  );
}
