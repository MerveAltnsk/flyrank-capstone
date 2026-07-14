import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import {
  SettingsForm,
  validateEmail,
  validateName,
  validateSettingsForm,
} from "./settings-form";

afterEach(() => {
  cleanup();
});

describe("settings form validation", () => {
  it("requires a non-empty name", () => {
    expect(validateName("")).toBe("Name cannot be empty.");
    expect(validateName("   ")).toBe("Name cannot be empty.");
    expect(validateName("Alex")).toBeUndefined();
  });

  it("requires a valid email format", () => {
    expect(validateEmail("")).toBe("Email cannot be empty.");
    expect(validateEmail("not-an-email")).toBe(
      "Please enter a valid email address.",
    );
    expect(validateEmail("user@example.com")).toBeUndefined();
  });

  it("returns all field errors for invalid values", () => {
    expect(validateSettingsForm({ name: "", email: "invalid" })).toEqual({
      name: "Name cannot be empty.",
      email: "Please enter a valid email address.",
    });
  });
});

describe("SettingsForm", () => {
  it("shows validation messages when fields are invalid", async () => {
    const user = userEvent.setup();

    render(<SettingsForm />);
    const form = screen.getByRole("form", { name: /settings form/i });

    await user.click(within(form).getByRole("button", { name: /save settings/i }));

    expect(within(form).getByText("Name cannot be empty.")).toBeInTheDocument();
    expect(within(form).getByText("Email cannot be empty.")).toBeInTheDocument();
    expect(within(form).getByLabelText(/^name$/i)).toHaveAttribute(
      "aria-invalid",
      "true",
    );
    expect(within(form).getByLabelText(/^email$/i)).toHaveAttribute(
      "aria-invalid",
      "true",
    );
  });

  it("shows an email format error for invalid email input", async () => {
    const user = userEvent.setup();

    render(<SettingsForm />);
    const form = screen.getByRole("form", { name: /settings form/i });

    await user.type(within(form).getByLabelText(/^name$/i), "Alex");
    await user.type(within(form).getByLabelText(/^email$/i), "invalid-email");
    await user.click(within(form).getByRole("button", { name: /save settings/i }));

    expect(
      within(form).getByText("Please enter a valid email address."),
    ).toBeInTheDocument();
    expect(
      within(form).queryByText("Name cannot be empty."),
    ).not.toBeInTheDocument();
  });

  it("submits valid values and shows a success message", async () => {
    const user = userEvent.setup();
    const handleSubmit = vi.fn();

    render(<SettingsForm onSubmit={handleSubmit} />);
    const form = screen.getByRole("form", { name: /settings form/i });

    await user.type(within(form).getByLabelText(/^name$/i), "Alex");
    await user.type(within(form).getByLabelText(/^email$/i), "alex@example.com");
    await user.click(within(form).getByRole("button", { name: /save settings/i }));

    expect(handleSubmit).toHaveBeenCalledWith({
      name: "Alex",
      email: "alex@example.com",
    });
    expect(within(form).getByRole("status")).toHaveTextContent(
      "Settings saved successfully.",
    );
    expect(within(form).queryByRole("alert")).not.toBeInTheDocument();
  });
});
