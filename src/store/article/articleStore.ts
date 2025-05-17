import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { IArticleState, IArticleStore } from "./IArticleStore";

const initialState: IArticleState = {
  params: {
    pagination: {
      page: 1,
      pageSize: 8,
    },
  },
};

const useArticleStore = create<IArticleStore>()(
  devtools(
    (set) => ({
      ...initialState,
      setState: (type: keyof IArticleState, value: any) =>
        set({ [type]: value }, false, `article-set-state-${type}`),
      resetState: (type: keyof IArticleState, value?: any) => {
        set(
          {
            [type]:
              initialState[type as keyof IArticleState] || value || undefined,
          },
          false,
          `article-reset-state-${type}`
        );
      },
    }),
    {
      enabled: import.meta.env.VITE_ENVIRONMENT === "local",
      name: "article-store",
    }
  )
);

export default useArticleStore;
