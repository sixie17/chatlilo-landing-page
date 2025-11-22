'use client';
import React, { useState, useRef, useEffect } from "react";
import Logo from "./Logo";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import FormTriggerButton from "./FormTriggerButton";

const Header: React.FC<{ lang: string }> = ({ lang }) => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const languages: { [key: string]: string } = {
    en: "English",
    fr: "Français",
    ar: "العربية",
  };

  const handleLanguageChange = (newLang: string) => {
    // pathname is the full path including the current language, e.g., /fr/about
    // We remove the current language prefix to get the base path.
    const pathWithoutLang = pathname.substring(3);
    
    // Navigate to the new path with the selected language.
    router.push(`/${newLang}${pathWithoutLang}`);
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
            <FormTriggerButton className="bg-transparent hover:bg-transparent text-dark hover:text-primary font-normal px-0 mx-0">
              Features
            </FormTriggerButton>
            <FormTriggerButton className="bg-transparent hover:bg-transparent text-dark hover:text-primary font-normal">
              Pricing
            </FormTriggerButton>
            <a
              href="mailto:contact@chatlilo.com"
              className="text-dark hover:text-primary transition-colors duration-300"
            >
              Contact
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
                {languages[lang]}
              </button>
              {isLangMenuOpen && (
                <div className="absolute top-full mt-2 w-32 bg-white rounded-md shadow-lg border">
                  {Object.keys(languages).map((langKey) => (
                    <button
                      key={langKey}
                      onClick={() => handleLanguageChange(langKey)}
                      className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 w-full text-left"
                    >
                      {languages[langKey]}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <FormTriggerButton className="bg-transparent hover:bg-transparent text-secondary hover:text-primary font-semi-bold">
              Sign Up
            </FormTriggerButton>
            <FormTriggerButton className="bg-primary text-white hover:bg-primary-dark font-normal">
              Get Started
            </FormTriggerButton>
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