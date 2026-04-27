import { z } from 'astro/zod';

const jobAccomplishments = z.object({
  type: z.string(),
  area: z.string(),
});

export default jobAccomplishments;
