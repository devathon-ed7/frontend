import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";
import { NotificationStore, NotificationType } from "../types/notification.types";

const notificationApi: StateCreator<NotificationStore> = (set) => ({
  message: "",
  duration: 5000,
  variant: "success",
  isVisible: false,

  setMessage: (message: string, duration: number = 5000, variant?: NotificationType) => {
    set({
      message,
      duration: duration || 5000,
      variant,
      isVisible: true,
    });

    setTimeout(() => {
      set({ isVisible: false });
    }, duration);
  },
  closeNotification: () => {
    set({ isVisible: false });
  },
});

export const useNotificationStore = create<NotificationStore>()(devtools(notificationApi));
