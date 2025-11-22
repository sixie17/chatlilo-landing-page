import React from "react";

interface CardProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ icon, children, className }) => {
  return (
    <div
      className={`bg-white p-8 rounded-xl border border-gray-100 
      transition-all duration-300 hover:shadow-lg hover:-translate-y-2 ${className}`}
    >
      {icon && (
        <div className="flex items-center justify-center h-16 w-16 bg-primary/10 rounded-full mx-auto mb-6 text-2xl text-secondary">
          {icon}
        </div>
      )}

      {children}
    </div>
  );
};

export default Card;
