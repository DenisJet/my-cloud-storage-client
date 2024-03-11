import { cookies } from 'next/headers';

export const getToken = () => {
  const cookieStore = cookies();
  return cookieStore.get('_token')?.value;
};

export const setToken = (token: string) => {
  const expires = new Date(Date.now() + 43200 * 1000);
  cookies().set('_token', `${token}`, { expires, httpOnly: true });
};
