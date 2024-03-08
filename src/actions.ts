'use server';
import { cookies } from 'next/headers';
import { login, register } from './auth';
import { LoginFormDTO, RegisterFormDTO } from './dto/auth.dto';
import { upload } from './file';

export async function authenticate(values: LoginFormDTO) {
  try {
    const { token } = await login(values);
    const expires = new Date(Date.now() + 1800 * 1000);
    if (token != undefined) {
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

export async function registration(values: RegisterFormDTO) {
  try {
    const { token } = await register(values);
    const expires = new Date(Date.now() + 1800 * 1000);

    cookies().set('_token', `${token}`, { expires, httpOnly: true });
  } catch (error) {
    console.log(error);
  }
}

export async function uploadFile(file) {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('_token');

    return upload(file, token);
  } catch (err) {
    console.log(err);
  }
}
