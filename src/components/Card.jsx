import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Card({ num, title, subtitle, page }) {
  return (
    <div className="flex flex-col justify-between w-full h-full p-5 gap-2 bg-white rounded-lg shadow-md">
      <div className="flex text-center justify-center items-center  bg-blue-100 border-blue-700 rounded text-blue-700 size-10">
        {num}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{subtitle}</p>
      <Link
        to={page}
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
      >
        Open Activity
      </Link>
    </div>
  );
}

export default Card;
