import { useState } from "react";
import { InputField } from "../Input/Input";
import useLogin from "../../hooks/useLogin";
import { Credentials } from "../../types/apiTypes";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const { login } = useLogin();
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await login(credentials);
      navigate("/dashboard");
    } catch (error) {
      //
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-5">
      <InputField
        id="username"
        type="text"
        placeholder="Username"
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <InputField
        id="password"
        type="password"
        placeholder="Contraseña"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between sm:justify-start">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="recordar"
              className="mr-2"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="recordar">Recordar</label>
          </div>
        </div>
        <button
          type="submit"
          className="h-12 self-center rounded-lg bg-black px-24 text-sm text-white sm:h-16 sm:self-auto md:h-20 md:px-6 md:text-lg lg:h-16 lg:px-8 lg:text-xl"
        >
          Iniciar Sesión
        </button>
      </div>
    </form>
  );
};
