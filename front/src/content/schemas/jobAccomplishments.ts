import { z } from "astro:content";

const jobAccomplishments = z.object({
  type: z.string(),
  area: z.string(),
});

export default jobAccomplishments;
