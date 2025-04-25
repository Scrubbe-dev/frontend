import type { StateCreator } from "zustand";

export type Theme = "light" | "dark" | "system";
export type Language = "en" | "es" | "fr" | "de" | "zh";

export type SliceUiType = {
  theme: Theme;
  language: Language;
  sidebarOpen: boolean;
  isLoading: boolean;
  modals: {
    [key: string]: boolean;
  };
  notifications: Array<{
    id: string;
    type: "success" | "error" | "info" | "warning";
    message: string;
    timestamp: number;
  }>;

  setTheme: (theme: Theme) => void;
  setLanguage: (language: Language) => void;
  toggleSidebar: () => void;
  setSidebarOpen: (isOpen: boolean) => void;
  setLoading: (isLoading: boolean) => void;
  openModal: (modalId: string) => void;
  closeModal: (modalId: string) => void;
  addNotification: (
    notification: Omit<SliceUiType["notifications"][0], "id" | "timestamp">
  ) => void;
  removeNotification: (id: string) => void;
  clearAllNotifications: () => void;
};

export const createUiSlice: StateCreator<SliceUiType> = (set) => ({
  theme: "system",
  language: "en",
  sidebarOpen: false,
  isLoading: false,
  modals: {},
  notifications: [],

  setTheme: (theme) => set({ theme }),

  setLanguage: (language) => set({ language }),

  toggleSidebar: () =>
    set((state) => ({
      sidebarOpen: !state.sidebarOpen,
    })),

  setSidebarOpen: (isOpen) =>
    set({
      sidebarOpen: isOpen,
    }),

  setLoading: (isLoading) => set({ isLoading }),

  openModal: (modalId) =>
    set((state) => ({
      modals: { ...state.modals, [modalId]: true },
    })),

  closeModal: (modalId) =>
    set((state) => ({
      modals: { ...state.modals, [modalId]: false },
    })),

  addNotification: (notification) =>
    set((state) => ({
      notifications: [
        ...state.notifications,
        {
          ...notification,
          id: `notification-${Date.now()}-${Math.random()
            .toString(36)
            .substring(2, 9)}`,
          timestamp: Date.now(),
        },
      ],
    })),

  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter(
        (notification) => notification.id !== id
      ),
    })),

  clearAllNotifications: () => set({ notifications: [] }),
});
