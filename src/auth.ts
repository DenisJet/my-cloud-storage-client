import { LoginFormDTO, LoginResponseDTO, RegisterFormDTO, RegisterResponseDTO, User } from './dto/auth.dto';

export const login = async (values: LoginFormDTO): Promise<LoginResponseDTO> => {
  const response = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

  return await response.json();
};

export const register = async (values: RegisterFormDTO): Promise<RegisterResponseDTO> => {
  const response = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

  return await response.json();
};

export const getMe = async (token: string | undefined): Promise<User> => {
  const response = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/users/me', {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });

  return await response.json();
};
