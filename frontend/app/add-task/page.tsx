import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Task",
  description: "Create a new task.",
};

export default function AddTaskPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Add Task
      </h1>
      <p className="max-w-prose text-base leading-7 text-zinc-600 dark:text-zinc-400">
        A form to add tasks will go here. This is placeholder content.
      </p>
    </section>
  );
}
