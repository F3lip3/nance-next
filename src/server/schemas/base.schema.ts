import { z } from 'zod';

export const baseOutputSchema = z.object({
  status: z.number(),
  message: z.string()
});
