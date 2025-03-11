import { z } from "astro:content";

const aboutMeSchema = z.object({
  title: z.string(),
  isPublish: z.boolean().default(false),
  largeLetter: z.string(),
  order: z.number(),
});

export default aboutMeSchema;
