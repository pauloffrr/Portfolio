import { useEffect, useRef, useState } from "react";
// import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react"; // ou use ícones próprios se quiser
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

function Header() {
  const { t } = useTranslation();
  function changeLanguage(lang: "en" | "pt") {
    i18n.changeLanguage(lang);
  }
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        resumeRef.current &&
        !resumeRef.current.contains(event.target as Node)
      ) {
        setIsResumeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex items-center justify-between px-6 py-6 bg-black text-white relative">
      <div className="flex-shrink-0 mr-4">
        <div className="font-bold text-xl leading-tight">
          Paulo <br className="md:hidden" /> DEV
        </div>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex">
        <ul className="flex space-x-8 list-none">
          <li>
            <a href="#about" className="hover:text-gray-400">
              {t("about.title")}
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-gray-400">
              {t("skills")}
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400">
              {t("projects.title")}
            </a>
          </li>
          <li>
            <a href="#certifications" className="hover:text-gray-400">
              {t("certifications.key")}
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">
              {t("contact.title")}
            </a>
          </li>
        </ul>
      </nav>

      {/* Resume + Mobile Menu Toggle */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Resume */}
        <div className="relative" ref={resumeRef}>
          <button
            onClick={() => setIsResumeOpen(!isResumeOpen)}
            className="px-3 py-1 border rounded text-sm hover:bg-white hover:text-black transition"
          >
            {t("resume")}
          </button>
          {/* Dropdown */}
          {isResumeOpen && (
            <div className="absolute right-0 mt-2 bg-zinc-900 border border-zinc-700 rounded shadow-lg z-10 w-40">
              <a
                href="/PauloEduCV.pdf"
                download
                className="block px-4 py-2 text-sm text-white hover:bg-zinc-700"
              >
                🇧🇷 {t("portuguese")}
              </a>
              <a
                href="/PauloEduardoCVEnglish.pdf"
                download
                className="block px-4 py-2 text-sm text-white hover:bg-zinc-700"
              >
                🇺🇸 {t("english")}
              </a>
            </div>
          )}
        </div>

        {/* Language Switch */}
        <div className="flex gap-1">
          <button
            onClick={() => changeLanguage("pt")}
            className="px-3 py-1 border rounded text-sm"
          >
            PT
          </button>
          <button
            onClick={() => changeLanguage("en")}
            className="px-3 py-1 border rounded text-sm"
          >
            EN
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-black text-white border-t border-zinc-700 md:hidden">
          <ul className="flex flex-col p-4 space-y-2">
            <li>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>
                {t("about.title")}
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>
                {t("skills")}
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>
                {t("projects.title")}
              </a>
            </li>
            <li>
              <a
                href="#certifications"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("certifications.key")}
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                {t("contact.title")}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
