import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomeView from "../views/HomeView/HomeView";
import LoginView from "../views/LoginView/LoginView";
import { SignupView } from "../views/SignupView/SignupView";
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
  {
    path: "/signup",
    element: <SignupView />,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
