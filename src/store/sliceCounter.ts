import type { StateCreator } from "zustand";

export type SliceCounterType = {
  count: number;
  increment: () => void;
  decrement: () => void;
  incrementBy: (value: number) => void;
  decrementBy: (value: number) => void;
  reset: () => void;
};

export const createCounterSlice: StateCreator<SliceCounterType> = (set) => ({
  count: 0,

  increment: () =>
    set((state) => ({
      count: state.count + 1,
    })),

  decrement: () =>
    set((state) => ({
      count: state.count - 1,
    })),

  incrementBy: (value) =>
    set((state) => ({
      count: state.count + value,
    })),

  decrementBy: (value) =>
    set((state) => ({
      count: state.count - value,
    })),

  reset: () => set({ count: 0 }),
});
