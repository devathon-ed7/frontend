import { createBrowserRouter } from "react-router-dom";

import HomeView from "../views/HomeView/HomeView";
import LoginView from "../views/LoginView/LoginView";
import { SignupView } from "../views/SignupView/SignupView";
import ForgotPassView from "../views/ForgotPassView/ForgotPassView";
import { AuthLayout, DashboardLayout } from "../layouts";
import App from "../App";
import { Dashboard } from "../views/DashboardView/DashboardView";
import { UserView } from "../views/UserView/UserView";
import { RolesView } from "../views/RoleView/RolesView";
import { CreateRoleView } from "../views/RoleView/CreateRoleView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      //dashboard Routes
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          { path: "home", element: <Dashboard /> },

          { path: "users", element: <UserView /> },
          { path: "roles", element: <RolesView /> },
          { path: "roles/create", element: <CreateRoleView /> },
        ],
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
