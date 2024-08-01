import { Navigate, Outlet } from "react-router-dom";
import { useLoginStore } from "../store/login.store";
import { HeaderDashboard } from "../components/HeaderDashboard/HeaderDashboard";
import { SideMenu } from "../components/SideMenu/SideMenu";

export const DashboardLayout = () => {
  const authStatus = useLoginStore((state) => state.status);

  if (authStatus === "Unauthorized") {
    return <Navigate to="/home" />; //to="/auth/login"  for login
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col overflow-hidden">
      <HeaderDashboard />
      {/* product and sidemenu wrapper */}

      <div className="relative flex flex-grow overflow-y-auto">
        <div className="relative flex w-screen">
          <SideMenu />
          <div className={`w-full p-4`}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
