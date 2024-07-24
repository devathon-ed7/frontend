import { Button } from "../../components/Button/Button";

const LoginView = () => {
  return (
    <main className="flex flex-col md:flex-row h-screen">
      <div className="flex-1 flex justify-center items-center p-4 sm:p-10 border-2 border-red-500">
        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
          <p className="font-semibold text-center text-xl sm:text-2xl md:text-3xl ">¡Bienvenido!</p>
          <div className="border border-purple-500 p-4 flex flex-col gap-3 sm:gap-5">
            <span className="font-semibold">Usa una de las redes sociales</span>
            <div className="flex flex-col justify-center sm:flex-row gap-3">
              <Button title="Google" />
              <Button title="Facebook" />
              <Button title="Twitter" />
            </div>
            <span className="font-semibold">O usa tu correo electronico</span>
            <form action="">
              <div className="flex flex-col gap-3 sm:gap-5 border-2 border-blue-600">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email">Correo Electronico</label>
                  <input
                    id="email"
                    type="text"
                    placeholder="correo@example.com"
                    className="bg-gray-100 border border-gray-400 w-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="password">Contraseña</label>
                  <input
                    id="password"
                    type="password"
                    placeholder="**********"
                    className="bg-gray-100 border border-gray-400 w-full"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between sm:justify-start">
                    <div className="flex items-center">
                      <input type="checkbox" id="recordar" className="mr-2" />
                      <label htmlFor="recordar">Recordar</label>
                    </div>
                  </div>
                  <button className="text-white bg-black h-12 sm:h-16 md:h-20 lg:h-16 rounded-lg px-24 md:px-6 lg:px-8 text-sm md:text-lg lg:text-xl self-center sm:self-auto">
                    Iniciar Sesión
                  </button>
                </div>
              </div>
            </form>
            <div className="flex flex-col gap-2 sm:gap-3 text-center">
              <span>
                ¿No tienes cuenta?
                <a href="" className="text-black">
                  Reguistrate
                </a>
              </span>
              <a href="" className="text-black">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1"></div>
    </main>
  );
};

export default LoginView;
