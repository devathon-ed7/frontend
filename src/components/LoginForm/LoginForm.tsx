import { FormEvent, useState, useCallback } from "react";
import { InputField } from "../Input/Input";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateForm = useCallback(() => {
    const newErrors = { email: "", password: "" };
    let hasErrors = false;
    if (!email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio.";
      hasErrors = true;
    }
    if (!password.trim()) {
      newErrors.password = "La contraseña es obligatoria.";
      hasErrors = true;
    }

    setErrors(newErrors);
    return !hasErrors;
  }, [email, password]);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      if (validateForm()) {
        console.log({ email, password, rememberMe });
      }
    },
    [email, password, rememberMe, validateForm],
  );
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-5">
      <InputField
        id="email"
        type="email"
        title="Correo Electrónico"
        placeholder="correo@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        errorMessage={errors.email}
      />
      <InputField
        id="password"
        type="password"
        title="Contraseña"
        placeholder="*******"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        errorMessage={errors.password}
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
