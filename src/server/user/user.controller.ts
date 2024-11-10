import Elysia from 'elysia';
import { UserService } from './services/user.service';

const UserController = new Elysia({ prefix: '/user' })
  .decorate({
    userService: new UserService(),
  })
  .post('/search', async ({ query, userService, set }) => {
    try {
      const { name } = query;
      if (!name) {
        set.status = 400;
        return {
          response: 'Por favor ingresa un nombre',
        };
      }
      const user = await userService.getUserByName(name);
      // if (!user) {
      //   set.status = 404;
      //   return {
      //     response: 'No hay usuario con ese nombre',
      //   };
      // }
      set.status = 200;
      return {
        response: user,
      };
    } catch (error) {
      console.error(error);
      set.status = 500;
      return {
        response: 'internal server error',
      };
    }
  })
  .patch('/update/:id', async ({ params, body, userService }) => {
    try {
      const { id } = params;
      await userService.updateUser(Number(id), body);
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

export default UserController;
