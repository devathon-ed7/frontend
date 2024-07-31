import { Navigate, Outlet, useLocation } from "react-router-dom";

export const App = () => {
  const path = useLocation();

  if (path.pathname === "/") {
    return <Navigate to="/dashboard" />;
  }

  return (
    <main>
      <Outlet />
    </main>
  );
};

export default App;
