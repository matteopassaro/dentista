import { forwardRef } from "react";
import type { ComponentPropsWithoutRef } from "react";

export type InputProps = ComponentPropsWithoutRef<"input"> & {
  error?: string;
  label: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
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
      <input
        ref={ref}
        id={inputId}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errId : undefined}
        className={`min-h-[50px] touch-manipulation rounded-[var(--radius)] border bg-[var(--surface)] px-4 py-3 text-base text-[var(--foreground)] shadow-sm transition-[border-color,box-shadow] duration-200 placeholder:text-[var(--muted)] focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/25 sm:text-[15px] ${
          error ? "border-[var(--danger)]" : "border-[var(--border)]"
        } ${className}`.trim()}
        {...props}
      />
      {error ? (
        <p id={errId} className="text-sm text-[var(--danger)]" role="alert" aria-live="polite">
          {error}
        </p>
      ) : null}
    </div>
  );
});
