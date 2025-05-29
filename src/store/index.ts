import { createStore } from "zustand/vanilla";
import { devtools, persist } from "zustand/middleware";
import { createCookiesSlice, cookiesSliceType } from "./slices/cookiesSlice";
import {
  createEnterpriseSetupSlice,
  enterpriseSetupSliceType,
} from "./slices/enterpriseSetupSlice";
import {
  createDataSourcesSlice,
  dataSourcesSliceType,
} from "./slices/dataSourcesSlice";

export type BoundStoreType = cookiesSliceType &
  enterpriseSetupSliceType &
  dataSourcesSliceType;

export const createBoundStore = () => {
  const store = createStore<BoundStoreType>()(
    persist(
      devtools((set, get, store) => ({
        ...createCookiesSlice(set, get, store),
        ...createEnterpriseSetupSlice(set, get, store),
        ...createDataSourcesSlice(set, get, store),
      })),
      {
        name: "bound-store", // Key in localStorage
        partialize: (state) => ({
          // Only persist cookie preferences
          cookieConsent: state.cookieConsent,
          cookiePreferences: state.cookiePreferences,
          // Enterprise setup will not be persisted - goes directly to backend API
        }),
      }
    )
  );

  return store;
};
