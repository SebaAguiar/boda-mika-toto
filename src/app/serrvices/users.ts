/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';
import { xata } from '@/xata';

export const getUserByName = async (name: string) => {
  console.log('service');
  const response = await xata.db['users']
    .filter({ name: { $contains: name } })
    .getMany();
  return response;
};

export const updateAttendance = async (body: any) => {
  console.log(body);
  const response = await xata.db['users'].update(body.id, {
    status: body.attending,
  });
  return response;
};
