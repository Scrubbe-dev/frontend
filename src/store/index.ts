import { createStore } from "zustand/vanilla";
import { devtools, persist } from "zustand/middleware";
import { createCookiesSlice, SliceCookiesType } from "./slices/sliceCookies";
import {
  createEnterpriseSetupSlice,
  SliceEnterpriseSetupType,
} from "./slices/sliceEnterpriseSetup";

export type BoundStoreType = SliceCookiesType & SliceEnterpriseSetupType;

export const createBoundStore = () => {
  const store = createStore<BoundStoreType>()(
    persist(
      devtools((set, get, store) => ({
        ...createCookiesSlice(set, get, store),
        ...createEnterpriseSetupSlice(set, get, store),
      })),
      {
        name: "bound-store", // Key in localStorage
        partialize: (state) => ({
          // Only persist these fields
          cookieConsent: state.cookieConsent,
          cookiePreferences: state.cookiePreferences,
          // Add other persistent state properties here
          // Enterprise setup - persist completed setup data
          enterpriseSetup: state.enterpriseSetup,
          // Note: Don't persist currentStep, isSubmitting, or errors
          // as these should reset on page reload
        }),
      }
    )
  );

  return store;
};
