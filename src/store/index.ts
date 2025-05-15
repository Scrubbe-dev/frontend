import { createStore } from "zustand/vanilla";
import { devtools, persist } from "zustand/middleware";
import { createCookiesSlice, SliceCookiesType } from "./slices/sliceCookies";

export type BoundStoreType = SliceCookiesType;

export const createBoundStore = () => {
  const store = createStore<BoundStoreType>()(
    persist(
      devtools((set, get, store) => ({
        ...createCookiesSlice(set, get, store),
      })),
      {
        name: "bound-store", // Key in localStorage
        partialize: (state) => ({
          // Only persist these fields
          // Add cookie preferences to persisted state
          cookieConsent: state.cookieConsent,
          cookiePreferences: state.cookiePreferences,
          // Add other persistent state properties here
        }),
      }
    )
  );

  return store;
};
