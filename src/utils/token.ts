import { cookies } from 'next/headers';

export const getToken = () => {
  const cookieStore = cookies();
  return cookieStore.get('_token')?.value;
};

export const setToken = (token: string) => {
  cookies().set('_token', `${token}`, { httpOnly: true });
};
