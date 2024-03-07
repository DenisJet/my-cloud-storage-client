'use server';
import { cookies } from 'next/headers';
import { login, register } from './auth';

export async function authenticate(values) {
  try {
    const { token } = await login(values);
    if (token != undefined) {
      const expires = new Date(Date.now() + 1800 * 1000);
      cookies().set('_token', `${token}`, { expires, httpOnly: true });
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}

export const logout = () => {
  cookies().delete('_token');
};

export async function registration(values) {
  try {
    const { token } = await register(values);
    const expires = new Date(Date.now() + 1800 * 1000);

    cookies().set('_token', `${token}`, { expires, httpOnly: true });
  } catch (error) {
    console.log(error);
  }
}
