import { createStore } from "zustand/vanilla";
import { devtools, persist } from "zustand/middleware";
import { createAuthDevSlice, SliceAuthDevType } from "./sliceAuthDev";
import { createUiSlice, SliceUiType } from "./sliceUi";
import { createCounterSlice, SliceCounterType } from "./sliceCounter";

export type BoundStoreType = SliceAuthDevType & SliceUiType & SliceCounterType;

export const createBoundStore = () => {
  const store = createStore<BoundStoreType>()(
    persist(
      devtools((set, get, store) => ({
        ...createAuthDevSlice(set, get, store),
        ...createUiSlice(set, get, store),
        ...createCounterSlice(set, get, store),
      })),
      {
        name: "bound-store", // Key in localStorage
        partialize: (state) => ({
          // Only persist these fields
          devUser: state.devUser,
          devIsAuthenticated: state.devIsAuthenticated,
          // Add other persistent state properties here

          // Exclude devError, devIsLoading and other transient states
        }),
      }
    )
  );

  return store;
};
