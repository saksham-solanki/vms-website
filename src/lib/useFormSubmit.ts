"use client";

import { useState, type FormEvent } from "react";

type FormType = "contact" | "demo" | "free_trial" | "newsletter";

interface UseFormSubmitOptions {
  formType: FormType;
  onSuccess?: () => void;
}

export function useFormSubmit({ formType, onSuccess }: UseFormSubmitOptions) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = { form_type: formType };

    formData.forEach((value, key) => {
      if (typeof value === "string" && value.trim()) {
        data[key] = value.trim();
      }
    });

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      (e.target as HTMLFormElement).reset();
      onSuccess?.();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  return { status, errorMessage, handleSubmit };
}
