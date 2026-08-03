import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tasks",
  description: "View your tasks.",
};

export default function TasksPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Tasks
      </h1>
      <p className="max-w-prose text-base leading-7 text-zinc-600 dark:text-zinc-400">
        Your task list will appear here. This is placeholder content.
      </p>
    </section>
  );
}
