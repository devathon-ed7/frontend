import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomeView from "../views/HomeView/HomeView";
import LoginView from "../views/LoginView/LoginView";
import ForgotPassView from "../views/ForgotPassView/ForgotPassView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
  },
  {
    path: "/login",
    element: <LoginView />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassView />,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
