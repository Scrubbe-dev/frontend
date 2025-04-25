import { createStore } from "zustand/vanilla";
import { devtools, persist } from "zustand/middleware";
import { createAuthSlice, SliceAuthType } from "./sliceAuth";
import { createUiSlice, SliceUiType } from "./sliceUi";
import { createCounterSlice, SliceCounterType } from "./sliceCounter";

export type BoundStoreType = SliceAuthType & SliceUiType & SliceCounterType;

export const createBoundStore = () => {
  const store = createStore<BoundStoreType>()(
    persist(
      devtools((set, get, store) => ({
        ...createAuthSlice(set, get, store),
        ...createUiSlice(set, get, store),
        ...createCounterSlice(set, get, store),
      })),
      {
        name: "bound-store", // Key in localStorage
        // No partialize option means the entire state will be persisted
      }
    )
  );

  return store;
};
