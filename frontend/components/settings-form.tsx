"use client";

import { FormEvent, useState } from "react";

type Theme = "system" | "light" | "dark";

type SettingsValues = {
  displayName: string;
  email: string;
  bio: string;
  theme: Theme;
  emailNotifications: boolean;
  productUpdates: boolean;
};

const initialValues: SettingsValues = {
  displayName: "",
  email: "",
  bio: "",
  theme: "system",
  emailNotifications: true,
  productUpdates: false,
};

export function SettingsForm() {
  const [values, setValues] = useState<SettingsValues>(initialValues);
  const [status, setStatus] = useState<"idle" | "saved">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("saved");
  }

  function updateField<K extends keyof SettingsValues>(
    field: K,
    value: SettingsValues[K],
  ) {
    setStatus("idle");
    setValues((current) => ({ ...current, [field]: value }));
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
            Profile
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Basic information visible on your account.
          </p>
        </div>

        <div className="space-y-4">
          <label className="block space-y-2">
            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-200">
              Display name
            </span>
            <input
              type="text"
              name="displayName"
              value={values.displayName}
              onChange={(event) =>
                updateField("displayName", event.target.value)
              }
              placeholder="Jane Doe"
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-950 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-600 dark:focus:border-zinc-600"
            />
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-200">
              Email
            </span>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={(event) => updateField("email", event.target.value)}
              placeholder="jane@example.com"
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-950 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-600 dark:focus:border-zinc-600"
            />
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-200">
              Bio
            </span>
            <textarea
              name="bio"
              value={values.bio}
              onChange={(event) => updateField("bio", event.target.value)}
              rows={3}
              placeholder="A short description about you."
              className="w-full resize-y rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-950 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-600 dark:focus:border-zinc-600"
            />
          </label>
        </div>
      </section>

      <section className="space-y-4 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <div>
          <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
            Preferences
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Customize how the app looks and what you hear about.
          </p>
        </div>

        <label className="block space-y-2">
          <span className="text-sm font-medium text-zinc-900 dark:text-zinc-200">
            Theme
          </span>
          <select
            name="theme"
            value={values.theme}
            onChange={(event) =>
              updateField("theme", event.target.value as Theme)
            }
            className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-950 outline-none transition-colors focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-zinc-600"
          >
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>

        <div className="space-y-3">
          <label className="flex items-start gap-3 rounded-lg border border-zinc-200 px-4 py-3 dark:border-zinc-800">
            <input
              type="checkbox"
              name="emailNotifications"
              checked={values.emailNotifications}
              onChange={(event) =>
                updateField("emailNotifications", event.target.checked)
              }
              className="mt-0.5 h-4 w-4 rounded border-zinc-300 text-zinc-950 focus:ring-zinc-400 dark:border-zinc-700 dark:bg-zinc-950"
            />
            <span className="space-y-1">
              <span className="block text-sm font-medium text-zinc-900 dark:text-zinc-200">
                Email notifications
              </span>
              <span className="block text-sm text-zinc-600 dark:text-zinc-400">
                Receive updates about account activity and security alerts.
              </span>
            </span>
          </label>

          <label className="flex items-start gap-3 rounded-lg border border-zinc-200 px-4 py-3 dark:border-zinc-800">
            <input
              type="checkbox"
              name="productUpdates"
              checked={values.productUpdates}
              onChange={(event) =>
                updateField("productUpdates", event.target.checked)
              }
              className="mt-0.5 h-4 w-4 rounded border-zinc-300 text-zinc-950 focus:ring-zinc-400 dark:border-zinc-700 dark:bg-zinc-950"
            />
            <span className="space-y-1">
              <span className="block text-sm font-medium text-zinc-900 dark:text-zinc-200">
                Product updates
              </span>
              <span className="block text-sm text-zinc-600 dark:text-zinc-400">
                Get occasional emails about new features and improvements.
              </span>
            </span>
          </label>
        </div>
      </section>

      <div className="flex items-center justify-between gap-4 border-t border-zinc-200 pt-6 dark:border-zinc-800">
        <p
          role="status"
          aria-live="polite"
          className="text-sm text-emerald-600 dark:text-emerald-400"
        >
          {status === "saved" ? "Settings saved." : ""}
        </p>
        <button
          type="submit"
          className="rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
        >
          Save changes
        </button>
      </div>
    </form>
  );
}
