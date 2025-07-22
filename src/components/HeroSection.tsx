import { useTranslation } from "react-i18next";

function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col md:flex-row items-center gap-12 py-20">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-5xl font-bold leading-tight mb-6">
          {t("hero.greeting")}{" "}
          <span className="text-white">Paulo Rodrigues</span>.<br />
          <span className="text-gray-300">{t("hero.title")}</span>
          <br />
          {t("hero.location")} <span className="text-white"></span>
        </h1>

        <p className="text-gray-400 mb-6">{t("hero.description")}</p>

        <div className="flex gap-6 justify-center md:justify-start">
          <a href="https://github.com/pauloffrr" target="_blank">
            <i className="fa-brands fa-github text-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/paulo-eduardo-f-rodrigues-387416364/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin text-2xl"></i>
          </a>
        </div>
      </div>

      <div className="relative aspect-square w-full max-w-xl justify-self-end overflow-hidden rounded-full border-8 border-zinc-800">
        <img
          src="/images/IMG_3475.jpeg"
          alt="Profile"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}

export default HeroSection;
