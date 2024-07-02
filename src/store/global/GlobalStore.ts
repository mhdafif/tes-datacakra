import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { IData, IGlobalStore } from "./IGlobalStore";

const initialData: IData = {
  setupInterceptor: false,
  loading: false,
};

const useGlobalStore = create<IGlobalStore>()(
  devtools((set) => ({
    ...initialData,
    setLoading: (value: boolean) => set({ loading: value }),
    setSetupInterceptor: () => set({ setupInterceptor: true }),
  }))
);

export default useGlobalStore;
