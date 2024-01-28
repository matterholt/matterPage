import { z } from "astro:content";

const heldJobPosition = z.object({
  workingDate: z.string(),
  employer: z.string(),
  location: z.string(),
  jobTitle: z.string(),
  type: z.string(),
  isCurrent: z.boolean(),
  jobId: z.number(),
});

export default heldJobPosition;
