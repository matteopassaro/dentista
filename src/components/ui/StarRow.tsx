type StarRowProps = {
  rating: number;
  max?: number;
  size?: "sm" | "md";
  /** When true, stars are decorative (rating also read in text nearby). */
  decorative?: boolean;
};

export function StarRow({ rating, max = 5, size = "md", decorative = false }: StarRowProps) {
  const dim = size === "sm" ? "h-4 w-4" : "h-5 w-5";
  const labelId = `stars-${rating}-${max}`.replace(/\./g, "");
  return (
    <div
      className="flex gap-0.5 text-amber-500"
      {...(decorative
        ? { "aria-hidden": true as const }
        : { "aria-labelledby": labelId })}
    >
      {!decorative ? (
        <span id={labelId} className="sr-only">
          Valutazione {rating} su {max}
        </span>
      ) : null}
      {Array.from({ length: max }, (_, i) => {
        const filled = i < Math.round(rating);
        return (
          <svg
            key={i}
            className={`${dim} ${filled ? "fill-current" : "fill-[var(--muted-bg)] text-[var(--muted-bg)]"}`}
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        );
      })}
    </div>
  );
}
