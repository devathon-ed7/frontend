import { FormEvent, useState } from "react";
import { InputField } from "../Input/Input";

export const LoginForm = () => {
  const [email] = useState("");
  const [password] = useState("");
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
          label="Email"
          type="email"
          placeholder="correo@example.com"
          error={errors.email}
        />
      </div>
      <div className="flex flex-col gap-2">
        <InputField
          id="password"
          label="Contraseña"
          type="password"
          placeholder="*********"
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
          className="h-12 self-center rounded-lg bg-black px-24 text-sm text-white sm:h-16 sm:self-auto md:h-20 md:px-6 md:text-lg lg:h-16 lg:px-8 lg:text-xl"
        >
          Iniciar Sesión
        </button>
      </div>
    </form>
  );
};
