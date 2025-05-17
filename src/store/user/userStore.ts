import { AES, enc } from "crypto-js";
import { StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { IUserState, IUserStore } from "./IUserStore";

const initialState: IUserState = {
  token: undefined,
  user: undefined,
};

const secretKey = import.meta.env.VITE_SECRET_KEY;

const userStoreSlice: StateCreator<
  IUserStore,
  [
    // ["zustand/subscribeWithSelector", never],
    ["zustand/devtools", unknown],
    ["zustand/persist", unknown],
  ]
> = (set, get) => ({
  ...initialState,
  logout: () => {
    set({
      token: undefined,
      user: undefined,
    });
  },
  getUser: () => {
    const encryptData: any = get().user;
    if (encryptData) {
      const decrypt = AES.decrypt(encryptData, secretKey);
      const user = JSON.parse(decrypt.toString(enc.Utf8));
      return user;
    }
    return undefined;
  },
  getState: (type: keyof IUserState) => {
    const encryptData: any = get()[type];
    if (encryptData) {
      const decrypt = AES.decrypt(encryptData, secretKey);
      const value = JSON.parse(decrypt.toString(enc.Utf8));
      return value;
    }
    return undefined;
  },
  setState: (type: keyof IUserState, value: any) => {
    const encryptValue = AES.encrypt(
      JSON.stringify(value),
      secretKey
    ).toString();
    set({ [type]: encryptValue }, false, `user-set-state-${type}`);
  },
  resetState: (type: keyof IUserState, value?: any) => {
    set(
      {
        [type]: initialState[type as keyof IUserState] || value || undefined,
      },
      false,
      `user-reset-state-${type}`
    );
  },
});

const useUserStore = create<IUserStore>()(
  devtools(
    persist(userStoreSlice, {
      name: "user-store",
      // storage: createJSONStorage(() => sessionStorage),

      // exclude some data to persist
      // partialize: (state) =>
      //   Object.fromEntries(
      //     Object.entries(state).filter(([key]) => !["loading"].includes(key))
      //   ),

      // or include some data
      partialize: (state) => ({ token: state.token, user: state.user }),
    }),
    {
      name: "user-store",
      enabled: import.meta.env.VITE_ENVIRONMENT === "local",
    }
  )
);

export default useUserStore;
