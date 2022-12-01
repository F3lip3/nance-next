import { object, string, TypeOf } from 'zod';

export const signInUserSchema = object({
  email: string().email(),
  password: string().min(6)
});

export type SignInUserInput = TypeOf<typeof signInUserSchema>;
