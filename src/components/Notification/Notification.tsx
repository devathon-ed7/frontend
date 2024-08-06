import useNotification from "../../hooks/useNotification";

export const Notification = () => {
  const { message, variant } = useNotification();

  let backgroundColor;
  let borderColor;
  let color;

  switch (variant) {
    case "success":
      backgroundColor = "bg-green-100";
      borderColor = "border-green-400";
      color = "text-green-700";
      break;
    case "error":
      backgroundColor = "bg-red-100";
      borderColor = "border-red-400";
      color = "text-red-700";
      break;
    case "info":
      backgroundColor = "bg-blue-100";
      borderColor = "border-blue-400";
      color = "text-blue-700";
      break;
    case "warning":
      backgroundColor = "bg-yellow-100";
      borderColor = "border-yellow-400";
      color = "text-yellow-700";
      break;
    default:
      backgroundColor = "bg-gray-100";
      borderColor = "border-gray-400";
      color = "text-gray-700";
  }
  return (
    <div className="flex justify-center">
      <div
        className={`rounded-md border ${backgroundColor} ${borderColor} ${color} fixed top-6 z-[9999] flex h-12 w-10/12 items-center px-4`}
      >
        <div className="inline-flex items-start">{message}</div>
      </div>
    </div>
  );
};
