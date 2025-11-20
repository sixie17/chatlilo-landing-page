"use client";

import React, { useState } from "react";
import WaitlistForm from "./WaitListForm";

export default function FormTriggerButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsFormOpen(true)}
        className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition hover:cursor-pointer font-bold"
      >
        {children}
      </button>

      {isFormOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-2xl font-bold text-dark mb-4">
              Join Our Waitlist
            </h2>
            <p className="text-gray-600 mb-6">
              Be the first to know when we launch!
            </p>
            <WaitlistForm />
          </div>
        </div>
      )}
    </>
  );
}
