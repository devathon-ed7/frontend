import { FieldValues, useForm } from "react-hook-form";

import { InputField } from "../Input/Input";

export const SignupForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = (data: FieldValues) => {
    // TODO: create signup call to api
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className="flex flex-col gap-3 p-3 sm:gap-5">
      <InputField
        id="email"
        label={"Correo electronico"}
        type="email"
        placeholder="Escribe tu correo electronico"
        error={errors.email && errors.email.message?.toString()}
        {...register("email", {
          required: {
            value: true,
            message: "Este campo es requerido.",
          },
          pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9*-]+\.[a-z]{2,4}$/,
            message: "Correo electronico invalido.",
          },
        })}
      />

      <div className="flex flex-col gap-4 lg:flex-row">
        <InputField
          id="password"
          label={"Contraseña"}
          type="password"
          placeholder="Escribe tu contraseña"
          error={errors.password && errors.password.message?.toString()}
          {...register("password", {
            required: {
              value: true,
              message: "Este campo es requerido.",
            },
          })}
        />
        <InputField
          id="repeatPassword"
          label={"Confirma tu contraseña"}
          type="repeatPassword"
          placeholder="Confirma tu contraseña"
          error={errors.repeatPassword && errors.repeatPassword.message?.toString()}
          {...register("repeatPassword", {
            required: {
              value: true,
              message: "Este campo es requerido.",
            },
            validate: (value) => watch("password") === value || "Las contraseas no coinciden.",
          })}
        />
      </div>

      <button
        type="submit"
        className="mt-2 rounded bg-sky-600 px-3.5 py-3 font-medium text-neutral-50"
      >
        Crear tu cuenta
      </button>
    </form>
  );
};
