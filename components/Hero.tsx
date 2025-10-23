import React from 'react';
import Logo from './Logo';
import { useTranslation } from '../i18nContext';

const ChatBubble: React.FC<{ from: 'user' | 'bot'; children: React.ReactNode }> = ({ from, children }) => {
  const userStyles = 'bg-primary text-white self-end rounded-t-xl rounded-bl-xl rtl:rounded-br-xl rtl:rounded-bl-none';
  const botStyles = 'bg-gray-200 text-dark self-start rounded-t-xl rounded-br-xl rtl:rounded-bl-xl rtl:rounded-br-none';
  return (
    <div className={`px-4 py-3 max-w-[80%] text-sm ${from === 'user' ? userStyles : botStyles}`}>
      {children}
    </div>
  );
};

const ChatWidget: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm border border-gray-100">
      <div className="bg-gray-50 p-4 rounded-t-2xl flex items-center justify-between border-b">
        <Logo className="h-7" />
        <button className="text-gray-400 hover:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div className="p-6 h-96 flex flex-col space-y-4 overflow-y-auto">
        <ChatBubble from="bot">{t('hero.chat.q1')}</ChatBubble>
        <ChatBubble from="user">{t('hero.chat.a1')}</ChatBubble>
        <ChatBubble from="bot">{t('hero.chat.q2')}</ChatBubble>
        <ChatBubble from="user">{t('hero.chat.a2')}</ChatBubble>
      </div>
      <div className="p-4 border-t bg-gray-50 rounded-b-2xl">
        <div className="relative">
          <input
            type="text"
            placeholder={t('hero.chat.placeholder')}
            className="w-full bg-white border border-gray-300 rounded-full py-2 ps-4 pe-12 focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <button className="absolute right-2 rtl:right-auto rtl:left-2 top-1/2 -translate-y-1/2 bg-primary text-white rounded-full p-2 hover:bg-opacity-90">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 md:py-32 bg-light-bg">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-start">
            <h1 className="text-4xl md:text-6xl font-extrabold text-dark leading-tight mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://forms.gle/F94owXAxVxhSLCSB8"
                className="bg-primary text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {t('hero.cta')}
              </a>
            </div>
            <p className="mt-4 text-gray-500 text-sm">{t('hero.noCreditCard')}</p>
          </div>
          <div className="flex justify-center items-center">
            <ChatWidget />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;