import React from 'react';
import { useTranslation } from '../i18nContext';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white bg-primary rounded-full p-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const FeatureShowcase: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-light-bg">
      <div className="container mx-auto px-6 space-y-24">
        {/* Feature 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-start">
            <span className="text-primary font-semibold">{t('featureShowcase.f1.tag')}</span>
            <h3 className="text-3xl font-bold text-dark mt-2 mb-4">{t('featureShowcase.f1.title')}</h3>
            <p className="text-gray-600 mb-6">{t('featureShowcase.f1.description')}</p>
            <ul className="space-y-4">
              {(t('featureShowcase.f1.points') as unknown as string[]).map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckIcon />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <img src="https://picsum.photos/500/400?grayscale&random=1" alt="Unified Inbox" className="rounded-xl shadow-xl"/>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:order-2">
             <img src="https://picsum.photos/500/400?grayscale&random=2" alt="AI Automation" className="rounded-xl shadow-xl"/>
          </div>
          <div className="md:order-1 text-start">
            <span className="text-primary font-semibold">{t('featureShowcase.f2.tag')}</span>
            <h3 className="text-3xl font-bold text-dark mt-2 mb-4">{t('featureShowcase.f2.title')}</h3>
            <p className="text-gray-600 mb-6">{t('featureShowcase.f2.description')}</p>
            <ul className="space-y-4">
               {(t('featureShowcase.f2.points') as unknown as string[]).map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckIcon />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeatureShowcase;