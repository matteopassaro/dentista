import {
  Activity,
  Droplets,
  Hammer,
  LayoutGrid,
  Scan,
  Smile,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { ServiceDetail } from "@/types";
import { serviceDetails } from "./service-details";

const iconBySlug: Record<string, LucideIcon> = {
  implantologia: LayoutGrid,
  ortodonzia: Scan,
  "igiene-orale": Droplets,
  "estetica-dentale": Sparkles,
  "odontoiatria-conservativa": Hammer,
  "chirurgia-orale": Activity,
  protesi: Smile,
};

export function getServiceSummaries(): Array<{
  slug: string;
  title: string;
  shortDescription: string;
  icon: LucideIcon;
}> {
  return serviceDetails.map((s) => ({
    slug: s.slug,
    title: s.title,
    shortDescription: s.shortDescription,
    icon: iconBySlug[s.slug] ?? Smile,
  }));
}

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  const row = serviceDetails.find((s) => s.slug === slug);
  if (!row) return undefined;
  const icon = iconBySlug[row.slug] ?? Smile;
  return { ...row, icon };
}

export function getServiceSlugs(): string[] {
  return serviceDetails.map((s) => s.slug);
}
