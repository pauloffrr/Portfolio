import { useTranslation } from "react-i18next";

function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20">
      <h2 className="text-center text-4xl font-bold mb-12">
        {t("about.title")}
      </h2>
      <p className="text-gray-400 max-w-3xl mx-auto px-4 text-justify">
        {t("about.description")}
      </p>
    </section>
  );
}

export default AboutSection;
