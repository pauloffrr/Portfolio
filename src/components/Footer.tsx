import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="text-center py-6 mt-20 text-gray-500 text-sm">
      <div className="flex justify-center items-center gap-4 mb-2">
        <a
          href="https://www.linkedin.com/in/paulo-eduardo-f-rodrigues-387416364/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <i className="fab fa-linkedin text-xl" />
        </a>
        <a
          href="https://github.com/pauloffrr"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <i className="fab fa-github text-xl" />
        </a>
      </div>
      <div>
        © {new Date().getFullYear()} Paulo Eduardo F. Rodrigues.{" "}
        {t("footer.rights")}
      </div>
    </footer>
  );
}

export default Footer;
