// import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { LoginForm } from "../../components/LoginForm/LoginForm";

const LoginView = () => {
  return (
    <main className="flex flex-col md:flex-row h-screen">
      <div className="flex-1 flex justify-center items-center p-4 sm:p-10 border-2">
        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
          <p className="font-semibold text-center text-xl sm:text-2xl md:text-3xl ">¡Bienvenido!</p>
          <div className="p-4 flex flex-col gap-3 sm:gap-5">
            <span className="font-semibold">Usa una de las redes sociales</span>
            <div className="flex flex-col justify-center sm:flex-row gap-3">
              <Button title="Google" />
              <Button title="Facebook" />
              <Button title="Twitter" />
            </div>
            <span className="font-semibold">O usa tu correo electronico</span>
            <LoginForm />
            <div className="flex flex-col gap-2 sm:gap-3 text-center">
              <span>
                ¿No tienes cuenta?
                <a href="" className="text-black">
                  Registrate
                </a>
                {/* <Link to={""} className="text-black">
                  Reguistrarse
                </Link> */}
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
