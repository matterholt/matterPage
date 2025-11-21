import { jobAccomplishments, jobPosition, personalArticles } from "./schemas";

import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const positions = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/positions" }),
  schema: jobPosition,
});
const accomplishments = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/accomplishments  " }),
  schema: jobAccomplishments,
});
const articles = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/personalArticles  ",
  }),
  schema: personalArticles,
});
export const collections = {
  positions,
  accomplishments,
  articles,
};
