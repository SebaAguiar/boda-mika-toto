import Elysia from 'elysia';
import { SeederService } from './services/seeder.service';

const SeedersController = new Elysia({ prefix: '/seeders' })
  .decorate({
    seederService: new SeederService(),
  })
  .post('/user', async ({ seederService }) => {
    try {
      await seederService.userSeeder();
      return {
        response: 'Datos actualizados',
      };
    } catch (error) {
      console.error(error);
      return {
        response: 'internal server error',
      };
    }
  });

export default SeedersController;
