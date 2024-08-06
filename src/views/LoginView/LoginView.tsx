import { LoginForm } from "../../components/LoginForm/LoginForm";
const LoginView = () => {
  return (
    <main className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-mercury-100">
      <div>
        <div className="border-1 flex items-center justify-center border-mercury-200 bg-white p-4 shadow-xl sm:p-10">
          <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
            <div className="flex items-center justify-center space-x-4">
              <span className="logo-login"></span>
              <p className="text-center text-xl font-semibold sm:text-2xl md:text-xl">
                Inventory System
              </p>
            </div>

            <div className="flex flex-col gap-3 p-4 sm:gap-5">
              <LoginForm />
            </div>
          </div>
        </div>
        <div className="hidden flex-1 items-center justify-center bg-gray-100 md:flex"></div>
      </div>
    </main>
  );
};

export default LoginView;
