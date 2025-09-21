import React from "react";
import { useTranslation } from "../i18nContext";
import { PiMagicWandBold } from "react-icons/pi";

const AiIcon = () => <PiMagicWandBold color="#07B097" size={30} />;

const IntegrationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-primary"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.368a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
    />
  </svg>
);

const AutomationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-primary"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const BulkMessageIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-primary"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H17z"
    />
  </svg>
);

const icons = [
  <AiIcon />,
  <IntegrationIcon />,
  <AutomationIcon />,
  <BulkMessageIcon />,
];

const Features: React.FC = () => {
  const { t } = useTranslation();
  const features = t("features.cards") as unknown as {
    title: string;
    description: string;
  }[];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            {t("features.title")}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{t("features.subtitle")}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-light-bg p-8 rounded-xl text-center border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              <div className="flex items-center justify-center h-16 w-16 bg-primary/10 rounded-full mx-auto mb-6">
                {icons[index]}
              </div>
              <h3 className="text-xl font-bold mb-3 text-dark">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
