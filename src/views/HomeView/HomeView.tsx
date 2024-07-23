import { useTranslation } from "react-i18next";

const HomeView = () => {
  const { t } = useTranslation();

  return (
    <main>
      <h1 className="text-3xl font-bold underline">{t("homeTitle")}</h1>
    </main>
  );
};

export default HomeView;
