import type { LucideIcon } from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
};

export type ServiceSummary = {
  slug: string;
  title: string;
  shortDescription: string;
  icon: LucideIcon;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ServiceDetail = ServiceSummary & {
  description: string;
  whenNeeded: string;
  benefits: string[];
  processSteps: string[];
  faq: FaqItem[];
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
  imageAlt: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  rating: number;
};

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image?: string;
};

export type BlogPost = BlogPostMeta & {
  contentHtml: string;
};
