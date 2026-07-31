export interface Tag {
  name: string;
  slug: string;
  description?: string;
}

export const ALL_TAGS: Tag[] = [
  { name: "AI", slug: "ai", description: "Artificial intelligence, ML, and LLMs" },
  { name: "Engineering", slug: "engineering", description: "Software engineering and architecture" },
  { name: "Web Dev", slug: "web-dev", description: "Web development and frontend" },
  { name: "DevOps", slug: "devops", description: "DevOps, infrastructure, and deployment" },
  { name: "Open Source", slug: "open-source", description: "Open source projects and contributions" },
  { name: "Career", slug: "career", description: "Career reflections and advice" },
  { name: "Tutorial", slug: "tutorial", description: "Tutorials and how-to guides" },
  { name: "Project", slug: "project", description: "Project showcases and updates" },
];

export const TAG_NAMES = ALL_TAGS.map((t) => t.name);
export const TAG_SLUGS = ALL_TAGS.map((t) => t.slug);

export function getTagBySlug(slug: string): Tag | undefined {
  return ALL_TAGS.find((t) => t.slug === slug);
}

export function slugify(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}