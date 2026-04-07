import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };
const blogPostDateFormatter = new Intl.DateTimeFormat("it-IT", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
    image: post.image,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article>
        <Section className="pb-8 pt-10">
          <nav aria-label="Percorso navigazione" className="text-sm text-[var(--muted)]">
            <ol className="flex flex-wrap gap-1">
              <li>
                <Link href="/" className="hover:text-[var(--primary)]">
                  Home
                </Link>
              </li>
              <li aria-hidden="true"> / </li>
              <li>
                <Link href="/blog" className="hover:text-[var(--primary)]">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true"> / </li>
              <li className="text-[var(--foreground)]">{post.title}</li>
            </ol>
          </nav>
          <header className="mx-auto mt-6 max-w-3xl text-center">
            <p className="text-sm font-medium text-[var(--primary)]">
              {blogPostDateFormatter.format(new Date(post.date))}{" "}
              · {post.author}
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-[var(--muted)]">{post.description}</p>
          </header>
        </Section>
        <Section className="bg-[var(--surface)] pt-0">
          <div
            className="post-body mx-auto max-w-3xl"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
          <div className="mx-auto mt-12 max-w-3xl rounded-[var(--radius)] border border-[var(--border)] bg-[var(--background)] p-6 text-center">
            <p className="font-medium text-[var(--foreground)]">Vuoi approfondire con una visita?</p>
            <Button href="/prenota" variant="primary" className="mt-4">
              Prenota la tua visita
            </Button>
          </div>
        </Section>
      </article>
    </>
  );
}
