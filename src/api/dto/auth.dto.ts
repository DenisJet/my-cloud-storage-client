export interface LoginFormDTO {
  email: string | undefined;
  password: string | undefined;
}

export interface LoginResponseDTO {
  token: string;
}
