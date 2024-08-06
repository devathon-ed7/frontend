import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Notification } from "./components/Notification/Notification";
import useNotification from "./hooks/useNotification";
export const App = () => {
  const { isVisible } = useNotification();
  const path = useLocation();

  if (path.pathname === "/") {
    return <Navigate to="/dashboard" />;
  }

  return (
    <main>
      {isVisible && <Notification />}

      <Outlet />
    </main>
  );
};

export default App;
