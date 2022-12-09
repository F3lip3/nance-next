import { procedure, router } from '../trpc';
import { authRouter } from './auth';
import { userRouter } from './user';

export const appRouter = router({
  health: procedure.query(() => 'yay!'),
  user: userRouter,
  auth: authRouter
});

export type AppRouter = typeof appRouter;
