import { UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";

import { ILoginPayload, IMeData, IRegisterPayload } from "./IAuth";
import { QryKeyAuth } from "./KAuth";

import { getMe, login, register } from "@/services/apiAuth";

import useUserStore from "@/store/user/userStore";

const queryLoadMe = (): UseQueryResult<IMeData> => {
  return useQuery({
    queryKey: [QryKeyAuth.getMe],
    queryFn: getMe,
  });
};

const queryRegister = () => {
  return useMutation({
    mutationKey: [QryKeyAuth.register],
    mutationFn: (payload: IRegisterPayload) => register(payload),
    onSuccess: (_data) => {
      useUserStore.getState().setState("token", _data.jwt);
      useUserStore.getState().setState("user", _data.user);
    },
  });
};

const queryLogin = () => {
  return useMutation({
    mutationKey: [QryKeyAuth.login],
    mutationFn: (payload: ILoginPayload) => login(payload),
    onSuccess: (_data) => {
      useUserStore.getState().setState("token", _data.jwt);
      useUserStore.getState().setState("user", _data.user);
    },
  });
};

export { queryRegister, queryLogin, queryLoadMe };
