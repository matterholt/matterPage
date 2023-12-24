// define collections
// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
import { blogPost, aboutMeSchema } from "./schemas";
// 2. Define your collection(s)
const blog = defineCollection({
  /* ... */
  type: "content",
  schema: blogPost,
});
const aboutMeCollection = defineCollection({
  /* ... */
  type: "content",
  schema: aboutMeSchema,
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blog,
  about: aboutMeCollection,
};
