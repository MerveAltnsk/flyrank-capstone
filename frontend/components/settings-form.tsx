"use client";

import { FormEvent, useId, useState } from "react";

export type SettingsFormValues = {
  name: string;
  email: string;
};

export type SettingsFormErrors = {
  name?: string;
  email?: string;
};

export type SettingsFormProps = {
  initialValues?: Partial<SettingsFormValues>;
  onSubmit?: (values: SettingsFormValues) => void;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateName(name: string): string | undefined {
  if (!name.trim()) {
    return "Name cannot be empty.";
  }

  return undefined;
}

export function validateEmail(email: string): string | undefined {
  if (!email.trim()) {
    return "Email cannot be empty.";
  }

  if (!EMAIL_PATTERN.test(email)) {
    return "Please enter a valid email address.";
  }

  return undefined;
}

export function validateSettingsForm(
  values: SettingsFormValues,
): SettingsFormErrors {
  const errors: SettingsFormErrors = {};

  const nameError = validateName(values.name);
  if (nameError) {
    errors.name = nameError;
  }

  const emailError = validateEmail(values.email);
  if (emailError) {
    errors.email = emailError;
  }

  return errors;
}

export function SettingsForm({
  initialValues,
  onSubmit,
}: SettingsFormProps) {
  const formId = useId();
  const nameId = `${formId}-name`;
  const emailId = `${formId}-email`;
  const nameErrorId = `${formId}-name-error`;
  const emailErrorId = `${formId}-email-error`;

  const [name, setName] = useState(initialValues?.name ?? "");
  const [email, setEmail] = useState(initialValues?.email ?? "");
  const [errors, setErrors] = useState<SettingsFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateSettingsForm({ name, email });
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    onSubmit?.({ name: name.trim(), email: email.trim() });
    setSubmitted(true);
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="w-full max-w-lg space-y-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 sm:p-8"
      aria-label="Settings form"
    >
      <div className="space-y-2">
        <label
          htmlFor={nameId}
          className="block text-sm font-medium text-zinc-900 dark:text-zinc-100"
        >
          Name
        </label>
        <input
          id={nameId}
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
            setSubmitted(false);
            if (errors.name) {
              setErrors((current) => ({ ...current, name: undefined }));
            }
          }}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? nameErrorId : undefined}
          className="block w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-base text-zinc-900 outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-zinc-500 dark:focus:ring-zinc-800"
        />
        {errors.name ? (
          <p
            id={nameErrorId}
            role="alert"
            className="text-sm text-red-600 dark:text-red-400"
          >
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label
          htmlFor={emailId}
          className="block text-sm font-medium text-zinc-900 dark:text-zinc-100"
        >
          Email
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setSubmitted(false);
            if (errors.email) {
              setErrors((current) => ({ ...current, email: undefined }));
            }
          }}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? emailErrorId : undefined}
          className="block w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-base text-zinc-900 outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-zinc-500 dark:focus:ring-zinc-800"
        />
        {errors.email ? (
          <p
            id={emailErrorId}
            role="alert"
            className="text-sm text-red-600 dark:text-red-400"
          >
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-zinc-900 px-5 text-sm font-medium text-white transition hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300 dark:focus-visible:outline-zinc-100 sm:w-auto"
        >
          Save settings
        </button>
        {submitted ? (
          <p
            role="status"
            className="text-sm text-green-700 dark:text-green-400"
          >
            Settings saved successfully.
          </p>
        ) : null}
      </div>
    </form>
  );
}
