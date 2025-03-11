// define collections
// 1. Import utilities from `astro:content`
import { defineCollection} from "astro:content";
import heldJobPosition from "./schemas/jobPosition";
import { glob } from 'astro/loaders';

const positions = defineCollection({
  /* ... */
  loader:glob({pattern:"**/*.md", base:"./src/content/positions"}),
  schema: heldJobPosition
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  positions,
};
