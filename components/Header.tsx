import React, { useState, useRef, useEffect } from "react";
import Logo from "./Logo";
import { useTranslation } from "../i18nContext";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Header: React.FC = () => {
  const { t, language, setLanguage } = useTranslation();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  const languages: { [key: string]: string } = {
    en: "English",
    fr: "Français",
    ar: "العربية",
  };

  

  useEffect(() => {
    const detectLanguageFromURL = () => {
      const path = window.location.pathname;
      const langMatch = path.match(/^\/([a-z]{2})\//);

      if (langMatch) {
        const detectedLang = langMatch[1];
        if (languages[detectedLang] && detectedLang !== language) {
          setLanguage(detectedLang as "en" | "fr" | "ar");
        }
      } else if (language !== "en") {
        // Default to English if no language prefix
        setLanguage("en");
      }
    };

    detectLanguageFromURL();
  }, [language, setLanguage]);

  const handleLanguageChange = (newLang: string) => {
    const currentPath = window.location.pathname;
    const currentSearch = window.location.search;

    const pathWithoutLang = currentPath.replace(/^\/([a-z]{2})\//, "/");

    const newPath =
      newLang === "en"
        ? pathWithoutLang === "/"
          ? "/"
          : pathWithoutLang
        : `/${newLang}${pathWithoutLang}`;

    window.history.pushState({}, "", newPath + currentSearch);
    setLanguage(newLang as "en" | "fr" | "ar");
    setIsLangMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langMenuRef.current &&
        !langMenuRef.current.contains(event.target as Node)
      ) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-dark hover:text-primary transition-colors duration-300"
            >
              {t("header.features")}
            </a>
            <a
              href="#"
              className="text-dark hover:text-primary transition-colors duration-300"
            >
              {t("header.pricing")}
            </a>
            <a
              href="#"
              className="text-dark hover:text-primary transition-colors duration-300"
            >
              {t("header.contact")}
            </a>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <div ref={langMenuRef} className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center text-dark font-medium hover:text-primary transition-colors duration-300"
              >
                {isLangMenuOpen ? (
                  <IoIosArrowDown color="text-dark" />
                ) : (
                  <IoIosArrowForward color="text-dark" />
                )}
                {languages[language]}
              </button>
              {isLangMenuOpen && (
                <div className="absolute top-full mt-2 w-32 bg-white rounded-md shadow-lg border">
                  {Object.keys(languages).map((lang) => (
                    <button
                      key={lang}
                      onClick={(e) => handleLanguageChange(lang)}
                      className="block px-4 py-2 text-sm text-dark hover:bg-gray-100"
                    >
                      {languages[lang]}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <a
              href="#"
              className="text-dark font-medium hover:text-primary transition-colors duration-300"
            >
              {t("header.signIn")}
            </a>
            <a
              href="#"
              className="bg-primary text-white font-medium px-5 py-2 rounded-lg hover:bg-opacity-90 transition-colors duration-300 shadow-sm"
            >
              {t("header.getStarted")}
            </a>
          </div>
          <div className="md:hidden">
            <button className="text-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
