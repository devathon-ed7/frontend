import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterView = () => {
  return (
    <main className="flex h-screen flex-col md:flex-row">
      <div className="hidden flex-1 md:block"></div>
      <div className="flex flex-1 items-center justify-center border-2 p-4 sm:p-10">
        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
          <p className="text-center text-xl font-semibold sm:text-2xl md:text-3xl">¡Bienvenido!</p>
          <div className="flex flex-col gap-3 p-4 sm:gap-5">
            <RegisterForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterView;
