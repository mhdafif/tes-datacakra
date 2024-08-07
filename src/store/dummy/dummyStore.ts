import http from "@/utils/http";
import { StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { DummyStateType, IDummy, IDummyStore } from "./iDummyStore";

const initialState: IDummy = {
  loading: false,
  data: undefined,
};

// simple store like just using devtools, easier like this
// const useDummyStore = create<IDummyStore>()(
//   // to track data on redux dev tools
//   devtools((set) => ({
//     ...initialState,
//     loadData: async () => {
//       try {
//         set({ loading: true });
//         const response = await http({
//           url: "/api/dummy",
//         });
//         set({
//           data: response.data.data,
//         });
//       } finally {
//         set({ loading: false });
//       }
//     },
//     reset: () => set(initialState),
//   }))
// );

// export default useDummyStore;

// complicated store
// separate the middleware bellow
const clientStoreSlice: StateCreator<
  IDummyStore,
  [
    // ["zustand/subscribeWithSelector", never],
    ["zustand/devtools", unknown],
    ["zustand/persist", unknown],
  ]
> = (set) => ({
  ...initialState,
  loadData: async () => {
    try {
      set({ loading: true }, false, "loading");
      const response = await http({
        url: "/api/dummy",
      });
      set(
        {
          data: response.data.data,
        },
        false,
        "loadData"
      );
    } finally {
      set({ loading: false }, false, "loading");
    }
  },
  setState: (type: DummyStateType, value: any) => set({ [type]: value }),
  resetState: (type: DummyStateType, value?: any) => {
    set(
      { [type]: initialState[type as keyof IDummy] || value || undefined },
      false,
      // this is to custom the name on redux devtools action
      `reset/${type}`
    );
  },
});

const useClientStore = create<IDummyStore>()(
  // devtools documentation https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md#serialize
  devtools(
    // persist is to persistent data (in storage)
    // https://docs.pmnd.rs/zustand/integrations/persisting-store-data
    persist(clientStoreSlice, {
      name: "dummy-store",
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => !["loading"].includes(key))
        ),
    }),
    {
      // devtools is to monitor the store throught redux devtools
      // redux devtools name
      name: "dummy-store",

      // storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used

      // to enabled or disabled the devtools
      enabled: import.meta.env.VITE_ENVIRONMENT === "local",

      // for annonymous type, can rename with this. default : anonymous
      // anonymousActionType: 'unknown',

      // serialize: { options: true }
    }
  )
);

export default useClientStore;

// full documentation can be seen here https://github.com/pmndrs/zustand
