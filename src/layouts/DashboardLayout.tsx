import { Navigate, Outlet } from "react-router-dom";
import { useLoginStore } from "../store/login.store";

export const DashboardLayout = () => {
  const authStatus = useLoginStore((state) => state.status);

  if (authStatus === "Unauthorized") {
    return <Navigate to="/home" />; //to="/auth/login"  for login
  }

  return (
    <div className="h-screen w-screen overflow-y-scroll bg-slate-200 text-slate-900 antialiased selection:bg-blue-900 selection:text-white">
      <div className="relative flex w-screen flex-row">
        {/* <SideMenu />    */}

        <div className="w-full p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
