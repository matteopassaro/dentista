export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[var(--radius)] focus:bg-[var(--surface)] focus:px-4 focus:py-2 focus:text-[var(--primary)] focus:shadow-[var(--shadow)]"
    >
      Vai al contenuto principale
    </a>
  );
}
