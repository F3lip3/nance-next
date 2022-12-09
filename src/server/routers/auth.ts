import { TRPCError } from '@trpc/server';
import { crypto } from '../helpers/crypto';
import { signUpSchema, singUpResultSchema } from '../schemas/auth.schema';
import { procedure, router } from '../trpc';

export const authRouter = router({
  signUp: procedure
    .input(signUpSchema)
    .output(singUpResultSchema)
    .mutation(async ({ input, ctx }) => {
      const { email, name, password: rawPassword } = input;
      const exists = await ctx.prisma.user.findUnique({
        where: { email }
      });

      if (exists) {
        throw new TRPCError({
          code: 'CONFLICT',
          message: `An user with email '${email}' already exists.`
        });
      }

      const password = await crypto.encrypt(rawPassword);

      await ctx.prisma.user.create({
        data: {
          email,
          name,
          password
        }
      });

      return {
        status: 201,
        message: 'Account created successfully',
        data: {
          email
        }
      };
    })
});
