import http from "@/utils/http";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { IDummy, IDummyStore } from "./dummyStore";

const initialState: IDummy = {
  loading: false,
  data: undefined,
};

const useDummyStore = create<IDummyStore>()(
  // to track data on redux dev tools
  devtools((set) => ({
    ...initialState,
    loadData: async () => {
      try {
        set({ loading: true });
        const response = await http({
          url: "/api/dummy",
        });
        set({
          data: response.data.data,
        });
      } finally {
        set({ loading: false });
      }
    },
    reset: () => set(initialState),
  }))
);

export default useDummyStore;
