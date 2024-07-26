import { FormEvent, useState } from "react";
import { InputField } from "../Input/Input";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "", repeatPassword: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let formIsValid = true;
    const newErrors = { email: "", password: "", repeatPassword: "" };

    if (!email) {
      newErrors.email = "El campo de email es obligatorio.";
      formIsValid = false;
    }

    if (!password) {
      newErrors.password = "El campo de contraseña es obligatorio.";
      formIsValid = false;
    }

    if (!repeatPassword) {
      newErrors.repeatPassword = "El campo de repetir contraseña es obligatorio.";
      formIsValid = false;
    }

    setErrors(newErrors);

    if (formIsValid) {
      console.log({ email, password, repeatPassword, rememberMe });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-5">
      <InputField
        id="email"
        title="Correo Electrónico"
        type="text"
        placeholder="correo@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
      />
      <InputField
        id="password"
        title="Contraseña"
        type="password"
        placeholder="*********"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
      />
      <InputField
        id="repeatPassword"
        title="Repetir Contraseña"
        type="password"
        placeholder="*********"
        value={repeatPassword}
        onChange={(e) => setRepeatPassword(e.target.value)}
        error={errors.repeatPassword}
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
          Crear Cuenta
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
