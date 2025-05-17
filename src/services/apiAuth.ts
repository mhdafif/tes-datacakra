import { ILoginPayload, IRegisterPayload } from "@/queries/auth/IAuth";

import http from "@/config/http";

enum ApiAuth {
  register = "auth/local/register",
  login = "auth/local",
  getMe = "users/me",
}

const register = async (data: IRegisterPayload) => {
  const response = await http({
    method: "post",
    url: ApiAuth.register,
    data,
  });
  return response.data;
};

const login = async (data: ILoginPayload) => {
  const response = await http({
    method: "post",
    url: ApiAuth.login,
    data,
  });
  return response.data;
};

const getMe = async () => {
  const response = await http({
    method: "get",
    url: ApiAuth.getMe,
  });
  return response.data;
};

export { ApiAuth, register, login, getMe };
