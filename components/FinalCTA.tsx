'use client';
import React from 'react';
import FormTriggerButton from './FormTriggerButton';

const FinalCTA = ({ translations }: { translations: any }) => {
  return (
    <section className="bg-dark">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          {translations.title}
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          {translations.subtitle}
        </p>
        <FormTriggerButton className='text-white'>
          {translations.cta}
        </FormTriggerButton>
        
        {/* <p className="mt-4 text-gray-400 text-sm">{translations.subtext}</p> */}
      </div>
    </section>
  );
};

export default FinalCTA;