import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  const projects = t("projects.items", { returnObjects: true }) as {
    title: string;
    description: string;
    tech: string;
    link: string;
  }[];

  return (
    <section id="projects" className="py-16 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">
        {t("projects.title")}
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 px-4">
        {projects.map((project: any, index: number) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-xl p-6 shadow hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm mt-2">{project.description}</p>
            <p className="text-xs text-zinc-400 mt-1">{project.tech}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 text-sm mt-3 inline-block hover:underline"
            >
              {t("projects.viewProject")} →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
