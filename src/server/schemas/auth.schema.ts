import { z } from 'zod';
import { baseOutputSchema } from '../../server/schemas/base.schema';

export const signInSchema = z.object({
  email: z.string().email().max(200),
  password: z.string().min(6).max(32)
});

export const signUpSchema = signInSchema.extend({
  name: z.string().min(5).max(200)
});

export const singUpResultSchema = baseOutputSchema.extend({
  data: z.object({
    email: z.string().email()
  })
});

export type SignInInput = z.input<typeof signInSchema>;
export type SignUpInput = z.input<typeof signUpSchema>;
export type SignUpOutput = z.infer<typeof singUpResultSchema>;
