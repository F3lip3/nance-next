import { procedure, router } from '../trpc';
import { userRouter } from './user';

export const appRouter = router({
  health: procedure.query(() => 'yay!'),
  user: userRouter
});

export type AppRouter = typeof appRouter;
