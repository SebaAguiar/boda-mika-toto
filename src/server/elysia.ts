import { cors } from '@elysiajs/cors';
import { Elysia } from 'elysia';
import UserController from './user/user.controller';
import MusicController from './music/music.controller';
import SeedersController from './seeders/seeders.controller';

export const app = new Elysia({ prefix: '/api' })
  .use(cors())
  .use(UserController)
  .use(MusicController)
  .use(SeedersController);

export type App = typeof app;
