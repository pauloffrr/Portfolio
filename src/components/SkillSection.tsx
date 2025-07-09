import { useTranslation } from "react-i18next";

function SkillSection() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">{t("skills")}</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* React */}
        <div className="border border-gray-600 rounded-lg h-40 flex items-center justify-center hover:bg-white hover:text-black transition">
          <img src="/React-icon.svg" alt="React" className="h-12" />
        </div>

        {/* Java */}
        <div className="border border-gray-600 rounded-lg h-40 flex items-center justify-center hover:bg-white hover:text-black transition">
          <img src="/javinha.svg" alt="Java" className="h-16" />
        </div>

        {/* Spring Boot */}
        <div className="border border-gray-600 rounded-lg h-40 flex items-center justify-center hover:bg-white hover:text-black transition">
          <img src="/images/Springg.png" alt="Springboot" className="h-12" />
        </div>

        {/* Docker */}
        <div className="border border-gray-600 rounded-lg h-40 flex items-center justify-center hover:bg-white hover:text-black transition">
          <img src="docker.svg" alt="Docker" className="h-12" />
        </div>
      </div>
    </section>
  );
}

export default SkillSection;
