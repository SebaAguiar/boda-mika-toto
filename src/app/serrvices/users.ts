import { eden } from './eden';

export const getUserByName = async (name: string) => {
  console.log('service');
  const response = await eden.api.user.search.post({
    name,
  });
  return response;
};
