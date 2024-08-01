import { useTranslation } from "react-i18next";
import { Button } from "../../components/Button/Button";
import { InputField } from "../../components/Input/Input";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ForgotPassView = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const {
    register,
    formState: { errors },
    watch,
  } = useForm();
  return (
    <div className="container mx-auto box-border flex flex-col space-y-4 text-black">
      <span>Logo</span>
      <br></br>

      <h1 className="text-center text-xl font-semibold text-black sm:text-2xl md:text-3xl">
        <a href="#">{t("forgotPassword")}</a>
      </h1>
      <hr />
      <p className="text-center text-xs sm:text-xl md:text-2xl">
        Introduce tu correo electrónico o número de móvil para buscar tu cuenta.
      </p>
      <form className="flex flex-col space-y-4">
        <InputField
          id="email"
          type="email"
          placeholder="correo@example.com"
          {...register("correovalido", {
            required: {
              value: true,
              message: "Este campo se requiere rellenar",
            },
            validate: (value) =>
              value === watch("correovalido") || "El correo no está en nuestra base de datos",
          })}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.correovalido &&
          errors.correovalido.message &&
          typeof errors.correovalido.message === "string" && (
            <span>{errors.correovalido.message}</span>
          )}
        <Button title="Buscar" />
        <Button title="Cancelar" />
      </form>
    </div>
  );
};

export default ForgotPassView;
