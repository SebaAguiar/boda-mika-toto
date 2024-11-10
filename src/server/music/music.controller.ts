import Elysia from 'elysia';
import { MusicService } from './services/music.service';

const MusicController = new Elysia({ prefix: '/music' })
  .decorate({
    musicService: new MusicService(),
  })
  .post('/', async ({ body, musicService, set }) => {
    try {
      await musicService.postMusicRecomendarion(body);
      set.status = 200;
      return {
        response: 'Gracias por tu recomendación',
      };
    } catch (error) {
      set.status = 500;
      console.log(error);
      return {
        response: 'internal server error',
      };
    }
  });

export default MusicController;
