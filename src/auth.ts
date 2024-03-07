import { SignJWT, jwtVerify } from 'jose';
//import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { LoginFormDTO, RegisterFormDTO } from './dto/auth.dto';

export const login = async (values: LoginFormDTO) => {
  const response = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

  return await response.json();
};

export const register = async (values: RegisterFormDTO) => {
  const response = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

  return await response.json();
};

export const getMe = async (token: string | undefined) => {
  const response = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/users/me', {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });

  return await response.json();
};
