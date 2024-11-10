'use server';
import { xata } from '@/xata';

export const getUserByName = async (name: string) => {
  console.log('service');
  const response = await xata.db['users']
    .filter({ name: { $contains: name } })
    .getMany();
  console.log(response);
  return response;
};
