import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health",
  description: "Application health status.",
};

type Todo = {
  title: string;
  completed: boolean;
};

export default async function HealthPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const todo = (await response.json()) as Todo;

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Health
      </h1>
      <dl className="max-w-prose space-y-2 text-base text-zinc-600 dark:text-zinc-400">
        <div>
          <dt className="font-medium text-zinc-900 dark:text-zinc-50">
            Todo title
          </dt>
          <dd>{todo.title}</dd>
        </div>
        <div>
          <dt className="font-medium text-zinc-900 dark:text-zinc-50">
            Completed status
          </dt>
          <dd>{todo.completed ? "Yes" : "No"}</dd>
        </div>
      </dl>
    </section>
  );
}
