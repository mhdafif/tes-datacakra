export interface IRegisterData {
  id: number;
}

export interface IRegisterPayload {
  email: string;
  username: string;
  password: string;
}

export interface ILoginData {
  id: number;
}

export interface ILoginPayload {
  identifier: string;
  password: string;
}

export interface IMeData {
  id: string;
}