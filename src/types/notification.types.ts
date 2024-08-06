export interface NotificationStore {
  message: string;
  duration: number;
  variant?: NotificationType;
  setMessage: (message: string, duration?: number, variant?: NotificationType) => void;
  isVisible: boolean;
  closeNotification: () => void;
}

export type NotificationType = "success" | "error" | "warning" | "info";
