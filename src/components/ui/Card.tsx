import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  elevated?: boolean;
};

export function Card({ children, className = "", elevated = true }: CardProps) {
  const shadow = elevated ? "shadow-[var(--shadow)]" : "border border-[var(--border)]";
  return (
    <div
      className={`rounded-[var(--radius)] bg-[var(--surface)] p-6 transition-[box-shadow,border-color,transform] duration-200 ${shadow} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
