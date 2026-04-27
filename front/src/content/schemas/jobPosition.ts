import { z } from 'astro/zod';

const heldJobPosition = z.object({
  workingDate: z.string(),
  employer: z.string(),
  location: z.string(),
  jobTitle: z.string(),
  type: z.string(),
  isCurrent: z.boolean(),
  id: z.number(),
});

export default heldJobPosition;
