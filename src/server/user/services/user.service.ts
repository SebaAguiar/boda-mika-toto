/* eslint-disable @typescript-eslint/no-explicit-any */
export class UserService {
  getUserByName(name: string) {
    console.log(name);
    // try {
    //   return this.db.db['users']
    //     .filter({ name: { $contains: name } })
    //     .getMany();
    // } catch (error) {
    //   console.log(error);
    //   throw error;
    // }
  }

  updateUser(id: number, body: any) {
    console.log(body);
    console.log(id);
    // try {
    //   return this.db.update(user).set(body).where(eq(user.id, id));
    // } catch (error) {
    //   console.log(error);
    //   throw error;
    // }
  }
}
