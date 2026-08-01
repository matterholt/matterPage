import { z } from "astro:content";

const blogPost = z.object({
  title: z.string(),
  pubDate: z.date(),
  published: z.boolean().default(false),
  tags: z.array(z.string()).optional(),
});

export default blogPost;
