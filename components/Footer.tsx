import React from "react";
import Logo from "./Logo";
import Link from "next/link"; // Import from next/link
import { getDictionary } from "../dictionaries"; // Adjust path if needed

// The component is now async and receives the lang prop
const Footer = ({ lang }: { lang: 'en' | 'fr' | 'ar' }) => {
  // Fetch translations on the server
  const dict = getDictionary(lang);
  const footerDict = dict.footer;

  const productLinks = footerDict.product.links as string[];
  const companyLinks = footerDict.company.links as string[];
  const legalLinks = footerDict.legal.links as string[];

  return (
    <footer className="bg-light-bg border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-4 text-gray-600">{footerDict.tagline}</p>
          </div>
          <div>
            <h4 className="font-semibold text-dark mb-4">
              {footerDict.product.title}
            </h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-gray-600 hover:text-primary">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-dark mb-4">
              {footerDict.company.title}
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-gray-600 hover:text-primary">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-dark mb-4">
              {footerDict.legal.title}
            </h4>
            <ul className="space-y-2">
              {/* Assuming the order is [Terms, Privacy] */}
              <li>
                <Link href={`/${lang}/terms-of-use`} className="text-gray-600 hover:text-primary">
                  {legalLinks[0]}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/privacy-policy`} className="text-gray-600 hover:text-primary">
                  {legalLinks[1]}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Chatlilo. {footerDict.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;