"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import FormTriggerButton from "./FormTriggerButton";

const ChatBubble: React.FC<{
  from: "user" | "bot";
  children: React.ReactNode;
}> = ({ from, children }) => {
  const userStyles =
    "bg-primary text-white self-end rounded-t-xl rounded-bl-xl rtl:rounded-br-xl rtl:rounded-bl-none";
  const botStyles =
    "bg-gray-200 text-dark self-start rounded-t-xl rounded-br-xl rtl:rounded-bl-xl rtl:rounded-br-none";
  return (
    <div
      className={`px-4 py-3 max-w-[80%] text-sm ${
        from === "user" ? userStyles : botStyles
      }`}
    >
      {children}
    </div>
  );
};

const ChatWidget: React.FC<{ translations: any }> = ({ translations }) => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm border border-gray-100">
      <div className="bg-gray-50 p-4 rounded-t-2xl flex items-center justify-between border-b">
        <Logo className="h-7" />
        <button className="text-gray-400 hover:text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="p-6 h-96 flex flex-col space-y-4 overflow-y-auto">
        <ChatBubble from="bot">{translations.q1}</ChatBubble>
        <ChatBubble from="user">{translations.a1}</ChatBubble>
        <ChatBubble from="bot">{translations.q2}</ChatBubble>
        <ChatBubble from="user">{translations.a2}</ChatBubble>
      </div>
      <div className="p-4 border-t bg-gray-50 rounded-b-2xl">
        <div className="relative">
          <input
            type="text"
            placeholder={translations.placeholder}
            className="w-full bg-white border border-gray-300 rounded-full py-2 ps-4 pe-12 focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <button className="absolute right-2 rtl:right-auto rtl:left-2 top-1/2 -translate-y-1/2 bg-primary text-white rounded-full p-2 hover:bg-opacity-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      const currentMonth = now.getMonth();

      const targetYear =
        currentMonth === 11 && now.getDate() > 15
          ? currentYear + 1
          : currentYear;
      const targetDate = new Date(targetYear, 11, 15, 0, 0, 0, 0);

      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-3 justify-center">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
      ].map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center bg-white rounded-lg shadow-md p-3 min-w-[60px]"
        >
          <span className="text-2xl font-bold text-primary">
            {String(item.value).padStart(2, "0")}
          </span>
          <span className="text-xs text-gray-500 mt-1">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

// ...existing code...
const CountdownPopup: React.FC<{ translations: any }> = ({ translations }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Show popup after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fade-in">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <h2 className="text-3xl font-bold text-center text-secondary mb-2">
          🚀 Launching Soon!
        </h2>
        <p className="text-center text-gray-600 mb-6">
          {translations.countdownMessage || "Don't miss out on our launch!"}
        </p>
        <CountdownTimer />
        <div className="mt-6">
          <FormTriggerButton className="text-white">{translations.waitlist}</FormTriggerButton>
        </div>
      </div>
    </div>
  );
};
// ...existing code...

const Hero = ({ translations }: { translations: any }) => {
  return (
    <>
      <section className="py-10 md:py-22 bg-[#f5ffff]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-start">
              <h1 className="text-4xl md:text-6xl font-extrabold text-dark leading-tight mb-6">
                {translations.title}
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                {translations.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <FormTriggerButton className="text-white">{translations.cta}</FormTriggerButton>
              </div>
              <p className="mt-4 text-gray-500 text-sm">
                {translations.noCreditCard}
              </p>
            </div>
            <div className="flex justify-center items-center">
              <ChatWidget translations={translations.chat} />
            </div>
          </div>
        </div>
      </section>
      <CountdownPopup translations={translations} />
    </>
  );
};

export default Hero;
