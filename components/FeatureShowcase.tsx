import Image from "next/image";
import React from "react";

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-white bg-primary rounded-full p-1 flex-shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const FeatureShowcase = ({ translations }: { translations: any }) => {
  return (
    <section className="py-20 bg-light-bg">
      <div className="container mx-auto px-6 space-y-24">
        {/* Feature 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-start">
            <span className="text-primary font-semibold">
              {translations.f1.tag}
            </span>
            <h3 className="text-3xl font-bold text-dark mt-2 mb-4">
              {translations.f1.title}
            </h3>
            <p className="text-gray-600 mb-6">{translations.f1.description}</p>
            <ul className="space-y-4">
              {(translations.f1.points as string[]).map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckIcon />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            {/* Consider replacing <img> with Next.js's <Image> component for optimization */}
            <video
              src="/whatsappConnection1.mp4"
              className="rounded-xl shadow-xl"
              autoPlay
              loop
              muted
              playsInline
              style={{ maxWidth: 500, maxHeight: 300 }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:order-2">
            <Image src='/businessPage.png' alt="Business Page" width={500} height={300} className="rounded-xl shadow-xl" />
          </div>
          <div className="md:order-1 text-start">
            <span className="text-primary font-semibold">
              {translations.f2.tag}
            </span>
            <h3 className="text-3xl font-bold text-dark mt-2 mb-4">
              {translations.f2.title}
            </h3>
            <p className="text-gray-600 mb-6">{translations.f2.description}</p>
            <ul className="space-y-4">
              {(translations.f2.points as string[]).map((point, i) => (
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
