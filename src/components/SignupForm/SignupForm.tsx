import { FieldValues, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { InputField } from "../Input/Input";

export const SignupForm = () => {
  const { t } = useTranslation();
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
        label={t("emailLabel")}
        type="email"
        placeholder={t("emailPlaceholder")}
        error={errors.email && errors.email.message?.toString()}
        {...register("email", {
          required: {
            value: true,
            message: t("requiredInputError"),
          },
          pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9*-]+\.[a-z]{2,4}$/,
            message: t("invalidEmailError"),
          },
        })}
      />

      <div className="flex flex-col gap-4 lg:flex-row">
        <InputField
          id="password"
          label={t("passwordLabel")}
          type="password"
          placeholder={t("passwordPlaceholder")}
          error={errors.password && errors.password.message?.toString()}
          {...register("password", {
            required: {
              value: true,
              message: t("requiredInputError"),
            },
          })}
        />
        <InputField
          id="repeatPassword"
          label={t("repeatPasswordLabel")}
          type="password"
          placeholder={t("repeatPasswordPlaceholder")}
          error={errors.repeatPassword && errors.repeatPassword.message?.toString()}
          {...register("repeatPassword", {
            required: {
              value: true,
              message: t("requiredInputError"),
            },
            validate: (value) => watch("password") === value || t("passwordMismatchError"),
          })}
        />
      </div>

      <button type="submit" className="mt-2 rounded bg-sky-600 p-3.5 font-medium text-neutral-50">
        {t("createAccount")}
      </button>
    </form>
  );
};
