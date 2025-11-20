import "server-only";

import { translations } from "./translations";

const dictionaries = {
  en: translations.en,
  fr: translations.fr,
  ar: translations.ar,
};

export const getDictionary = (locale: "en" | "fr" | "ar") => {
  return dictionaries[locale];
};
