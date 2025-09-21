import React from 'react';
import { useTranslation } from '../i18nContext';

const FinalCTA: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-dark text-white">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t('finalCta.title')}
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          {t('finalCta.subtitle')}
        </p>
        <a
          href="#"
          className="bg-primary text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 inline-block shadow-lg"
        >
          {t('finalCta.cta')}
        </a>
        <p className="mt-4 text-gray-400 text-sm">{t('finalCta.subtext')}</p>
      </div>
    </section>
  );
};

export default FinalCTA;