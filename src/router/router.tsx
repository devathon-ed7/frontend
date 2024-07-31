import { createBrowserRouter } from "react-router-dom";

import HomeView from "../views/HomeView/HomeView";
import LoginView from "../views/LoginView/LoginView";
import { SignupView } from "../views/SignupView/SignupView";
import ForgotPassView from "../views/ForgotPassView/ForgotPassView";
import { AuthLayout, DashboardLayout } from "../layouts";
import App from "../App";
import { Dashboard } from "../views/DashboardView/DashboardView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      //dashboard Routes
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [{ path: "", element: <Dashboard /> }],
      },
      // auth routes
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <LoginView />,
          },
          {
            path: "signup",
            element: <SignupView />,
          },
          {
            path: "forgot-password",
            element: <ForgotPassView />,
          },
        ],
      },
      // home
      {
        path: "/home",
        element: <HomeView />,
      },
    ],
  },
]);
