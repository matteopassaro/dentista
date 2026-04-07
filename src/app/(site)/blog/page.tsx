import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { getAllPostsMeta } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const postDateFormatter = new Intl.DateTimeFormat("it-IT", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

export const metadata = pageMetadata({
  title: "Blog del dentista a Bari",
  description: `Articoli su prevenzione, terapie e salute orale da ${siteConfig.name}, studio dentistico a Bari.`,
  path: "/blog",
});

export default async function BlogIndexPage() {
  const posts = await getAllPostsMeta();
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-balance font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
          Consigli del dentista a Bari per prevenzione e salute orale
        </h1>
        <p className="mt-3 text-[var(--muted)]">
          Approfondimenti pensati per aiutarti a capire meglio la salute orale, senza sostituire
          la visita clinica.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.slug} className="flex flex-col" elevated={false}>
            <p className="text-xs font-medium uppercase tracking-wide text-[var(--primary)]">
              {postDateFormatter.format(new Date(post.date))}
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--foreground)]">
              <Link href={`/blog/${post.slug}`} className="hover:text-[var(--primary)] hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 flex-1 text-sm text-[var(--muted)]">{post.description}</p>
            <p className="mt-4 text-xs text-[var(--muted)]">Di {post.author}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
