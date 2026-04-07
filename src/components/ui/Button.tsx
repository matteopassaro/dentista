import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

const baseClass =
  "inline-flex min-h-[48px] touch-manipulation items-center justify-center gap-2 rounded-[var(--radius)] px-5 py-3 text-sm font-semibold transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 motion-reduce:transform-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<
  "primary" | "outline" | "ghost" | "whatsapp",
  string
> = {
  primary:
    "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-[var(--shadow)] hover:bg-[var(--primary-dark)] hover:shadow-lg",
  outline:
    "border-2 border-[var(--primary)] bg-transparent text-[var(--primary)] hover:bg-[var(--primary)]/10",
  ghost: "bg-transparent px-4 py-2.5 text-[var(--primary)] hover:bg-[var(--primary)]/10",
  whatsapp:
    "bg-[#25D366] text-white shadow-[var(--shadow)] hover:brightness-95 hover:shadow-lg",
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

function isExternalHref(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

export function Button(props: ButtonProps) {
  const { variant = "primary", className = "", children, ...rest } = props;
  const cls = `${baseClass} ${variants[variant]} ${className}`.trim();

  if ("href" in rest && rest.href) {
    const { href, ...linkRest } = rest;
    if (isExternalHref(href)) {
      const anchorProps = linkRest as Omit<ComponentProps<"a">, "href">;
      return (
        <a href={href} className={cls} {...anchorProps}>
          {children}
        </a>
      );
    }
    const nextLinkProps = linkRest as Omit<ComponentProps<typeof Link>, "href">;
    return (
      <Link href={href} className={cls} {...nextLinkProps}>
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
