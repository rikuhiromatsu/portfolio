import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// お知らせ: 1件 = 1つの Markdown。タイトルと日付だけ表示する
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    url: z.string().url().optional(),
  }),
});

// つくっているもの: 1件 = 1つの Markdown。order の小さい順に並ぶ
const making = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/making' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    url: z.string().url().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { news, making };
