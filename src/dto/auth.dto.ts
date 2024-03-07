export interface LoginFormDTO {
  email: string | undefined;
  password: string | undefined;
}

export interface LoginResponseDTO {
  token: string | undefined;
}

export type RegisterFormDTO = LoginFormDTO & { fullName: string | undefined };
export type RegisterResponseDTO = LoginResponseDTO;

export interface User {
  id: number;
  email: string;
  fullName: string;
}
