import Link from "next/link";
import { SettingsForm } from "@/components/settings-form";

export default function SettingsPage() {
  return (
    <div className="flex flex-1 justify-center bg-zinc-50 px-4 py-12 font-sans dark:bg-black sm:px-6">
      <main className="w-full max-w-2xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 sm:p-8">
        <div className="mb-8 space-y-2">
          <Link
            href="/"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            ← Back to home
          </Link>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            Settings
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Manage your profile and application preferences.
          </p>
        </div>

        <SettingsForm />
      </main>
    </div>
  );
}
