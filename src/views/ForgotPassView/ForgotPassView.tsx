import { useTranslation } from "react-i18next";
import { Button } from "../../components/Button/Button";
import { InputField } from "../../components/Input/Input";
import { useState } from "react";
const ForgotPassView = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  return (
    <div className="text-black">
      <span>Logo</span>
      <br></br>
      {t("forgotPassword")}

      <h1 className="text-black font-semibold text-center text-xl sm:text-2xl md:text-3xl">
        Recupera tu cuenta
      </h1>
      <hr />
      <p className="text-center text-xs sm:text-xl md:text-2xl">
        Introduce tu correo electrónico o número de móvil para buscar tu cuenta.
      </p>
      <form className="flex flex-col ">
        <InputField
          id="email"
          type="email"
          placeholder="correo@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button title="Buscar" />
        <Button title="Cancelar" />
      </form>
    </div>
  );
};

export default ForgotPassView;
