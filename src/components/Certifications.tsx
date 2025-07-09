import { useTranslation } from "react-i18next";

const Certifications = () => {
  const { t } = useTranslation();

  const items = [
    {
      key: "flisol",
      provider: "Integrado",
      year: 2025,
      id: "E296662",
      url: "https://www.grupointegrado.br/certificados",
    },
    {
      key: "docker",
      provider: "Integrado",
      year: 2025,
      id: "E290217",
      url: "https://www.grupointegrado.br/certificados",
    },
    {
      key: "python",
      provider: "Integrado",
      year: 2024,
      id: "E286385",
      url: "https://www.grupointegrado.br/certificados",
    },
    {
      key: "java",
      provider: "Integrado",
      year: 2024,
      id: "P100130",
      url: "https://www.grupointegrado.br/certificados",
    },
  ];

  return (
    <section id="certifications" className="py-16 px-4 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">
        {t("certifications.key")}
      </h2>
      <ul className="max-w-3xl mx-auto space-y-4">
        {items.map((cert, index) => (
          <li
            key={index}
            className="bg-zinc-900 rounded p-4 border border-zinc-700 hover:shadow transition"
          >
            <p className="text-lg font-semibold">
              {t(`certifications.certificates.${cert.key}`)}
            </p>
            <p className="text-sm text-gray-400">
              {cert.provider} — {cert.year} —{" "}
              {t("certifications.certificateId")}: {cert.id}
            </p>

            {cert.url && (
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:underline mt-2 inline-block"
              >
                {t("certifications.verifyCertificate")} →
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
