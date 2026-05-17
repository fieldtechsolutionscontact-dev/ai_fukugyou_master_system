// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const zennArticles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./articles" }),
  schema: z.object({
    title: z.string(),
    emoji: z.string().optional(),
    type: z.enum(['tech', 'idea']).default('tech'),
    topics: z.array(z.string()).optional(),
    published: z.boolean().default(false),
    canonical_url: z.string().url().optional(), // これがSEOの鍵
  }),
});

export const collections = {
  'articles': zennArticles,
};