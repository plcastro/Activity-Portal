import React from "react";

function Card({ title, subtitle, children }) {
  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{subtitle}</p>
      {children}
    </div>
  );
}

export default Card;
