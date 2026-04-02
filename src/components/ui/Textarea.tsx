import { forwardRef } from "react";
import type { ComponentPropsWithoutRef } from "react";

export type TextareaProps = ComponentPropsWithoutRef<"textarea"> & {
  error?: string;
  label: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { id, label, error, className = "", ...props },
  ref,
) {
  const inputId = id ?? label.replace(/\s+/g, "-").toLowerCase();
  const errId = `${inputId}-error`;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputId} className="text-sm font-medium text-[var(--foreground)]">
        {label}
      </label>
      <textarea
        ref={ref}
        id={inputId}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errId : undefined}
        rows={5}
        className={`rounded-[var(--radius)] border bg-[var(--surface)] px-3 py-2.5 text-[var(--foreground)] shadow-sm transition-colors placeholder:text-[var(--muted)] focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/25 ${
          error ? "border-[var(--danger)]" : "border-[var(--border)]"
        } ${className}`.trim()}
        {...props}
      />
      {error ? (
        <p id={errId} className="text-sm text-[var(--danger)]" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
});
