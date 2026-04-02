"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/types";

type ServiceFaqProps = {
  items: FaqItem[];
};

export function ServiceFaq({ items }: ServiceFaqProps) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[var(--border)] rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)]">
      {items.map((item, index) => {
        const panelId = `${baseId}-panel-${index}`;
        const headerId = `${baseId}-header-${index}`;
        const expanded = openIndex === index;
        return (
          <div key={item.question} className="px-4 sm:px-5">
            <h3 id={headerId}>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-3 py-4 text-left text-base font-semibold text-[var(--foreground)] hover:text-[var(--primary)]"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpenIndex(expanded ? null : index)}
              >
                {item.question}
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[var(--primary)] transition-transform ${
                    expanded ? "rotate-180" : ""
                  }`}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              hidden={!expanded}
              className={expanded ? "pb-4 text-[var(--muted)] leading-relaxed" : "hidden"}
            >
              {expanded ? item.answer : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
