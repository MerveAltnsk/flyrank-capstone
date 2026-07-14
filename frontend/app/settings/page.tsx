import type { Metadata } from "next";

import { SettingsForm } from "@/components/settings-form";

export const metadata: Metadata = {
  title: "Settings",
  description: "Update your profile name and email.",
};

export default function SettingsPage() {
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 px-4 py-12 dark:bg-black sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl space-y-8">
        <div className="space-y-2 text-center sm:text-left">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Settings
          </h1>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Update your profile information below.
          </p>
        </div>
        <SettingsForm />
      </div>
    </div>
  );
}
