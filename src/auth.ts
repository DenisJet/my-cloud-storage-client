import { SignJWT, jwtVerify } from 'jose';
//import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

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
  const response = await fetch('http://localhost:7777/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

  return await response.json();
};

export const getMe = async (token) => {
  const response = await fetch('http://localhost:7777/users/me', {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });

  return await response.json();
};
