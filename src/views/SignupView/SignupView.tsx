import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { SignupForm } from "../../components/SignupForm/SignupForm";

export const SignupView = () => {
  const { t } = useTranslation();

  return (
    <main className="flex h-screen w-full">
      <div className="hidden w-1/2 flex-col items-start justify-end bg-slate-950/50 bg-[url('https://images.pexels.com/photos/1968177/pexels-photo-1968177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center p-9 text-white bg-blend-darken md:flex">
        <h2 className="text-2xl font-medium">The largest community</h2>
        <p className="text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>
      <section className="m-6 flex w-full flex-col justify-start md:w-1/2 md:justify-center md:p-14">
        <h1 className="mb-3 text-center text-3xl font-semibold text-gray-800">
          {t("signupTitle")}
        </h1>
        <SignupForm />
        <p className="my-3 text-center text-sm">
          {`${t("alreadyHaveAccount")} `}
          <Link to="/login" className="text-sky-600">
            {t("loginAction")}
          </Link>
        </p>
      </section>
    </main>
  );
};
