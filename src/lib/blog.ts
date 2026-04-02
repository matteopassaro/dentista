import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import type { BlogPost, BlogPostMeta } from "@/types";

const postsDirectory = path.join(process.cwd(), "content/blog");

function listMarkdownFiles(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));
}

export function getAllPostSlugs(): string[] {
  return listMarkdownFiles().map((f) => f.replace(/\.md$/, ""));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const processed = await remark().use(remarkHtml).process(content);
  const title = typeof data.title === "string" ? data.title : slug;
  const description = typeof data.description === "string" ? data.description : "";
  const date = typeof data.date === "string" ? data.date : "";
  const author = typeof data.author === "string" ? data.author : "";
  const image = typeof data.image === "string" ? data.image : undefined;
  return {
    slug,
    title,
    description,
    date,
    author,
    image,
    contentHtml: processed.toString(),
  };
}

export async function getAllPostsMeta(): Promise<BlogPostMeta[]> {
  const slugs = getAllPostSlugs();
  const metas: BlogPostMeta[] = [];
  for (const slug of slugs) {
    const p = await getPostBySlug(slug);
    if (!p) continue;
    metas.push({
      slug: p.slug,
      title: p.title,
      description: p.description,
      date: p.date,
      author: p.author,
      image: p.image,
    });
  }
  return metas.sort((a, b) => (a.date < b.date ? 1 : -1));
}
