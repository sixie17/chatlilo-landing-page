import React from "react";
import Logo from "./Logo";
import { useTranslation } from "../i18nContext";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const productLinks = t("footer.product.links") as unknown as string[];
  const companyLinks = t("footer.company.links") as unknown as string[];
  const legalLinks = t("footer.legal.links") as unknown as string[];
  const socialLinks = t("footer.social") as unknown as string[];

  return (
    <footer className="bg-light-bg border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-4 text-gray-600">{t("footer.tagline")}</p>
          </div>
          <div>
            <h4 className="font-semibold text-dark mb-4">
              {t("footer.product.title")}
            </h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 hover:text-primary">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-dark mb-4">
              {t("footer.company.title")}
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 hover:text-primary">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-dark mb-4">
              {t("footer.legal.title")}
            </h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a
                    href={
                      legalLinks.indexOf(link) === 1 ? "/privacy-policy" : "/terms-of-use"
                    }
                    className="text-gray-600 hover:text-primary"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Chatlilo. {t("footer.copyright")}
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((link) => (
              <a key={link} href="#" className="hover:text-primary">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
