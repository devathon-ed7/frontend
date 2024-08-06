import { useNotificationStore } from "../store/notification.store";
import { NotificationType } from "../types/notification.types";

const useNotification = () => {
  const setMessage = useNotificationStore((state) => state.setMessage);
  const isVisible = useNotificationStore((state) => state.isVisible);
  const closeNotification = useNotificationStore((state) => state.closeNotification);
  const message = useNotificationStore((state) => state.message);
  const duration = useNotificationStore((state) => state.duration);
  const variant = useNotificationStore((state) => state.variant);

  const showNotification = (
    message: string,
    duration: number = 5000,
    variant?: NotificationType,
  ) => {
    setMessage(message, duration, variant);
  };

  return {
    showNotification,
    isVisible,
    closeNotification,
    message,
    duration,
    variant,
  };
};

export default useNotification;
