import { LoginForm } from "../../components/LoginForm/LoginForm";
const LoginView = () => {
  return (
    <main className="flex h-screen flex-col md:flex-row">
      <div className="flex flex-1 items-center justify-center border-2 p-4 sm:p-10">
        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
          <p className="text-center text-xl font-semibold sm:text-2xl md:text-3xl">¡Bienvenido!</p>
          <div className="flex flex-col gap-3 p-4 sm:gap-5">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="hidden flex-1 items-center justify-center bg-gray-100 md:flex"></div>
    </main>
  );
};

export default LoginView;
