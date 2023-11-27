// define collections
// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
// 2. Define your collection(s)
const blog = defineCollection({
  /* ... */
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    published: z.boolean().default(false),
    tags: z.array(z.string()).optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog,
};
