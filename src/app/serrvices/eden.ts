import { app, type App } from '@/server/elysia';
import { treaty } from '@elysiajs/eden';

export const eden = treaty<App>(app);
