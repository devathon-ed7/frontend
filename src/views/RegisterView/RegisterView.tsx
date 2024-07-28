import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterView = () => {
  return (
    <main className="flex flex-col md:flex-row h-screen">
      <div className="flex-1 hidden md:block"></div>
      <div className="flex-1 flex justify-center items-center p-4 sm:p-10 border-2">
        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
          <p className="font-semibold text-center text-xl sm:text-2xl md:text-3xl">¡Bienvenido!</p>
          <div className="p-4 flex flex-col gap-3 sm:gap-5">
            <RegisterForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterView;
