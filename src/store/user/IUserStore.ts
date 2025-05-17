export interface IUser {
  id: number;
  documentId: string;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale?: string;
}
export interface IUserState {
  token?: string;
  user?: IUser;
}
export interface IUserStore extends IUserState {
  logout(): void;
  getUser(): IUser;
  getState(type: keyof IUserState): any;
  setState(type: keyof IUserState, value: any): void;
  resetState(type: keyof IUserState, value?: any): void;
}
