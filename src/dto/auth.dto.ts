export interface LoginFormDTO {
  email: string | undefined;
  password: string | undefined;
}

export type RegisterFormDTO = LoginFormDTO & { fullName: string | undefined };

export interface User {
  id: number;
  email: string;
  fullName: string;
}
