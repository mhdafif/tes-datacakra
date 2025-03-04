import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { IGlobalState, IGlobalStore } from "./iGlobalStore";

const initialState: IGlobalState = {
  // setupInterceptor: false,
  loading: false,
  error: undefined,
  notif: {
    isOpen: false,
    message: "",
    type: "info",
  },
};

const useGlobalStore = create<IGlobalStore>()(
  devtools(
    (set) => ({
      ...initialState,
      setState: (type: keyof IGlobalState, value: any) =>
        set({ [type]: value }, false, `global-set-state-${type}`),
      resetState: (type: keyof IGlobalState, value?: any) => {
        set(
          {
            [type]:
              initialState[type as keyof IGlobalState] || value || undefined,
          },
          false,
          `global-reset-state-${type}`
        );
      },
      // setSetupInterceptor: () => set({ setupInterceptor: true }),
    }),
    {
      enabled: import.meta.env.VITE_ENVIRONMENT === "local",
      // redux devtools name
      name: "global-store",
    }
  )
);

export default useGlobalStore;
