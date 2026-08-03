import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tasks", label: "Tasks" },
  { href: "/add-task", label: "Add Task" },
  { href: "/settings", label: "Settings" },
  { href: "/about", label: "About" },
  { href: "/health", label: "Health" },
] as const;

export function Navigation() {
  return (
    <nav aria-label="Main">
      <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-start sm:gap-x-6">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
