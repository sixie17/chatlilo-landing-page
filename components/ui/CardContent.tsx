import React from "react";

interface CardContentProps {
  title: string;
  description: string;
}

const CardContent: React.FC<CardContentProps> = ({ title, description }) => {
  return (
    <div className="text-center">
      <h3 className="text-xl font-bold mb-3 text-dark">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default CardContent;
