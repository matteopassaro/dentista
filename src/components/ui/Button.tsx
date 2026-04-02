import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius)] font-semibold transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<
  "primary" | "outline" | "ghost" | "whatsapp",
  string
> = {
  primary:
    "bg-[var(--primary)] text-[var(--primary-foreground)] px-5 py-2.5 shadow-[var(--shadow)] hover:bg-[var(--primary-dark)]",
  outline:
    "border-2 border-[var(--primary)] text-[var(--primary)] bg-transparent px-5 py-2.5 hover:bg-[var(--primary)]/10",
  ghost: "text-[var(--primary)] px-3 py-2 hover:bg-[var(--primary)]/10",
  whatsapp:
    "bg-[#25D366] text-white px-5 py-2.5 shadow-[var(--shadow)] hover:brightness-95",
};

type ButtonOwnProps = {
  variant?: keyof typeof variants;
  children: ReactNode;
  className?: string;
};

export type ButtonProps = ButtonOwnProps &
  (
    | (ComponentProps<typeof Link> & { href: string })
    | (ComponentProps<"button"> & { href?: undefined })
  );

export function Button(props: ButtonProps) {
  const { variant = "primary", className = "", children, ...rest } = props;
  const cls = `${baseClass} ${variants[variant]} ${className}`.trim();

  if ("href" in rest && rest.href) {
    const { href, ...linkRest } = rest;
    return (
      <Link href={href} className={cls} {...linkRest}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest as ComponentProps<"button">;
  const { type = "button", ...btnRest } = buttonProps;
  return (
    <button type={type} className={cls} {...btnRest}>
      {children}
    </button>
  );
}
