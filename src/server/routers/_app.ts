import { procedure, router } from '../trpc';
import { authRouter } from './auth';
import { symbolsRouter } from './symbols';

export const appRouter = router({
  health: procedure.query(() => 'yay!'),
  auth: authRouter,
  symbols: symbolsRouter
});

export type AppRouter = typeof appRouter;
