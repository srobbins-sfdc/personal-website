import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      description: z.string(),
      tags: z.array(z.string()).default([]),
      coverImage: image().optional(),
      draft: z.boolean().default(false),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      description: z.string(),
      tags: z.array(z.string()).default([]),
      coverImage: image().optional(),
      links: z
        .object({
          repo: z.string().optional(),
          demo: z.string().optional(),
          writeup: z.string().optional(),
        })
        .optional(),
      status: z.enum(["active", "complete", "archived"]),
      draft: z.boolean().default(false),
    }),
});

const resume = defineCollection({
  loader: file("src/content/resume/resume.yaml"),
  schema: z.any(),
});

const uses = defineCollection({
  loader: file("src/content/uses/uses.yaml"),
  schema: z.any(),
});

export const collections = { posts, projects, resume, uses };