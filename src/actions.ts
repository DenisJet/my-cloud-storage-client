'use server';
import { cookies } from 'next/headers';
import { login } from './auth';

export async function authenticate(values) {
  try {
    const { token } = await login(values);
    const expires = new Date(Date.now() + 1800 * 1000);

    cookies().set('_token', `${token}`, { expires, httpOnly: true });
  } catch (error) {
    console.log(error);
  }
}
