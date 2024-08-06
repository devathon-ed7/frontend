import { createBrowserRouter } from "react-router-dom";
import LoginView from "../views/LoginView/LoginView";
import { SignupView } from "../views/SignupView/SignupView";
import ForgotPassView from "../views/ForgotPassView/ForgotPassView";
import { AuthLayout, DashboardLayout } from "../layouts";
import App from "../App";
import { Dashboard } from "../views/DashboardView/DashboardView";
import { UserView } from "../views/UserView/UserView";
import { RolesView } from "../views/RoleView/RolesView";
import { CreateRoleView } from "../views/RoleView/CreateRoleView";
import { UpdateRoleView } from "../views/RoleView/UpdateRoleView";
import { PermissionView } from "../views/PermissionView/PermissionView";
import { CreatePermissionView } from "../views/PermissionView/CreatePermissionView";

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
          { path: "roles/:id", element: <UpdateRoleView /> },
          { path: "permissions", element: <PermissionView /> },
          { path: "permissions/create", element: <CreatePermissionView /> },
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
        element: <LoginView />,
      },
    ],
  },
]);
