import { FormEvent, useState } from "react";
import { InputField } from "../Input/Input";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-5">
      <InputField
        id="email"
        type="email"
        placeholder="Correo Electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        id="password"
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
          className="text-white bg-black h-12 sm:h-16 md:h-20 lg:h-16 rounded-lg px-24 md:px-6 lg:px-8 text-sm md:text-lg lg:text-xl self-center sm:self-auto"
        >
          Iniciar Sesión
        </button>
      </div>
    </form>
  );
};
