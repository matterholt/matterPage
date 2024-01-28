import { z } from "astro:content";

const accomplishDates = z.object({
  type: z.string(),
  area: z.string(),
});

export default accomplishDates;
