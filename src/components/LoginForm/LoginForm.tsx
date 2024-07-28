import { FormEvent, useState } from "react";
import { InputField } from "../Input/Input";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let formIsValid = true;
    const newErrors = { email: "", password: "" };

    if (!email) {
      newErrors.email = "El campo de email es obligatorio.";
      formIsValid = false;
    }

    if (!password) {
      newErrors.password = "El campo de contraseña es obligatorio.";
      formIsValid = false;
    }

    setErrors(newErrors);

    if (formIsValid) {
      console.log({ email, password, rememberMe });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-2">
      <div className="flex flex-col gap-2">
        <InputField
          id="email"
          title="Email"
          type="email"
          placeholder="correo@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />
      </div>
      <div className="flex flex-col gap-2">
        <InputField
          id="password"
          title="Contraseña"
          type="password"
          placeholder="*********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between sm:justify-start">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="recordar"
              name="rememberMe"
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
