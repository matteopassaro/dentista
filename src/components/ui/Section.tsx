import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  as?: "section" | "div";
};

export function Section({
  id,
  children,
  className = "",
  containerClassName = "",
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag id={id} className={`py-12 sm:py-16 md:py-20 ${className}`.trim()}>
      <div className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${containerClassName}`.trim()}>
        {children}
      </div>
    </Tag>
  );
}
