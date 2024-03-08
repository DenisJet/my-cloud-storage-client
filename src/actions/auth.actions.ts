'use server';
import { cookies } from 'next/headers';
import { LoginFormDTO, RegisterFormDTO } from '../dto/auth.dto';
import { redirect } from 'next/navigation';

////////////////////////////////////////////////////

const register = async (values: RegisterFormDTO) => {
  const response = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

  return await response.json();
};

export async function registration(values: RegisterFormDTO) {
  try {
    const { token } = await register(values);

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

///////////////////////////////////////////////////

const login = async (values: LoginFormDTO) => {
  const response = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

  return await response.json();
};

export async function authenticate(values: LoginFormDTO) {
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

///////////////////////////////////////////////

export const getMe = async (token: string | undefined) => {
  const response = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/users/me', {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });

  return await response.json();
};

////////////////////////////////////////////////

export const logout = () => {
  cookies().delete('_token');
};
