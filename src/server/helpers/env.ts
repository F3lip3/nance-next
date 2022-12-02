import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string(),
  NODE_ENV: z.enum(['development', 'production'])
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error(
    'Invalid environment variables:',
    JSON.stringify(parsedEnv.error.format(), null, 2)
  );
  process.exit(1);
}

export const env = parsedEnv.data;
