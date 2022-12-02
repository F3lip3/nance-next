import { TRPCError } from '@trpc/server';
import { crypto } from '../helpers/crypto';
import { signInSchema } from '../schemas/user.schema';
import { procedure, router } from '../trpc';

export const userRouter = router({
  signIn: procedure.input(signInSchema).mutation(async ({ input, ctx }) => {
    const user = await ctx.prisma.user.findUnique({
      where: { email: input.email }
    });

    if (!user) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'Invalid email or password'
      });
    }

    const validPassword = await crypto.compare(input.password, user.password);
    if (!validPassword) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'Invalid email or password'
      });
    }

    return user;
  })
});
