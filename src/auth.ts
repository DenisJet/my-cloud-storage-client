import { SignJWT, jwtVerify } from 'jose';
//import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const secretKey = 'secret';
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('10 sec from now')
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256'],
  });
  return payload;
}

export const login = async (values) => {
  const response = await fetch('http://localhost:7777/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

  return await response.json();
};

export const register = async (values) => {
  return (await axios.post('/auth/register', values)).data;
};

export const getMe = async (token) => {
  const response = await fetch('http://localhost:7777/users/me', {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });

  return await response.json();
};

export const logout = () => {
  destroyCookie(null, '_token', { path: '/' });
};
