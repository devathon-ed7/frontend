import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomeView from "../views/HomeView/HomeView";
import LoginView from "../views/LoginView/LoginView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
  },
  {
    path: "/login",
    element: <LoginView />,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
