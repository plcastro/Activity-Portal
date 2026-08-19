import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Card({ num, title, subtitle, subtitle2, page }) {
  return (
    <div className="flex flex-col justify-between w-full p-4 sm:p-5 gap-2 bg-gray-800 rounded-lg border-t-4 border-teal-500 shadow-md shadow-gray-950">
      <div className="flex text-center justify-center items-center rounded  font-black bg-teal-200/20 border-teal-700 border text-teal-400 size-10">
        {num}
      </div>
      <h3 className="text-xl text-white font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{subtitle}</p>
      <Link
        to={page}
        className="w-full font-bold py-2 px-4 rounded text-center bg-teal-500 text-gray-900 hover:bg-teal-600 hover:text-white shadow-md shadow-teal-900 transition ease-linear "
      >
        Open Activity
      </Link>
    </div>
  );
}

export default Card;
