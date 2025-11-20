// Can be placed in a utils file or directly in the component that needs it.
import { usePathname } from 'next/navigation';

type Language = 'en' | 'fr' | 'ar';
const supportedLanguages: Language[] = ['en', 'fr', 'ar'];

export const useCurrentLanguage = (): Language => {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const locale = segments[1];

  if (supportedLanguages.includes(locale as Language)) {
    return locale as Language;
  }

  return 'en'; // Default language
};