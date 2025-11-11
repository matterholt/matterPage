import { z } from "astro:content";

const personalArticles = z.object({
  title: z.string(),
  slug: z.string(),
  publishDate: z.date(),
  tags: z.array(z.string()).min(1),
});

export default personalArticles;
