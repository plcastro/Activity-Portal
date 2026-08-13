import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between py-8 px-4">
        <p className="whitespace-nowrap text-base font-bold text-blue-500 lg:text-xl ">
          React Activity Portal
        </p>

        <ul className="hidden items-center gap-4 md:flex">
          <li>
            <Link
              to="/"
              className={`block whitespace-nowrap rounded-md px-2 py-2 text-xs font-semibold transition hover:bg-blue-100 hover:text-blue-500 lg:px-4 lg:text-sm ${
                location.pathname === "/"
                  ? "bg-blue-500 text-white"
                  : "text-slate-600"
              }`}
            >
              Home
            </Link>
          </li>
          {/* <li>
            <Link
              to="/login"
              className={`block whitespace-nowrap rounded-md px-2 py-2 text-xs font-semibold transition hover:bg-blue-100 hover:text-blue-500 lg:px-4 lg:text-sm ${
                location.pathname === "/login"
                  ? "bg-blue-500 text-white"
                  : "text-slate-600"
              }`}
            >
              Activity 1
            </Link>
          </li>
          <li>
            <Link
              to="/gradeEval"
              className={`block whitespace-nowrap rounded-md px-2 py-2 text-xs font-semibold transition hover:bg-blue-100 hover:text-blue-500 lg:px-4 lg:text-sm ${
                location.pathname === "/gradeEval"
                  ? "bg-blue-500 text-white"
                  : "text-slate-600"
              }`}
            >
              Activity 2
            </Link>
          </li> */}
          <li>
            <Link
              to="/passChecker"
              className={`block whitespace-nowrap rounded-md px-2 py-2 text-xs font-semibold transition hover:bg-blue-100 hover:text-blue-500 lg:px-4 lg:text-sm ${
                location.pathname === "/passChecker"
                  ? "bg-blue-500 text-white"
                  : "text-slate-600"
              }`}
            >
              Activity 3
            </Link>
          </li>
          <li>
            <Link
              to="/electricity"
              className={`block whitespace-nowrap rounded-md px-2 py-2 text-xs font-semibold transition hover:bg-blue-100 hover:text-blue-500 lg:px-4 lg:text-sm ${
                location.pathname === "/electricity"
                  ? "bg-blue-500 text-white"
                  : "text-slate-600"
              }`}
            >
              Activity 4
            </Link>
          </li>
          <li>
            <Link
              to="/attendance"
              className={`block whitespace-nowrap rounded-md px-2 py-2 text-xs font-semibold transition hover:bg-blue-100 hover:text-blue-500 lg:px-4 lg:text-sm ${
                location.pathname === "/attendance"
                  ? "bg-blue-500 text-white"
                  : "text-slate-600"
              }`}
            >
              Activity 5
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="rounded-md px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-blue-100 hover:text-blue-500 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <ul className="mx-auto grid max-w-6xl gap-2 px-6 pb-4 md:hidden">
          <li>
            <Link
              to="/home"
              className={`block whitespace-nowrap rounded-md px-2 py-2 text-xs font-semibold transition hover:bg-blue-100 hover:text-blue-500 lg:px-4 lg:text-sm ${
                location.pathname === "/home"
                  ? "bg-blue-500 text-white"
                  : "text-slate-600"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          {/* <li>
            <Link
              to="/login"
              className={`block whitespace-nowrap rounded-md px-2 py-2 text-xs font-semibold transition hover:bg-blue-100 hover:text-blue-500 lg:px-4 lg:text-sm ${
                location.pathname === "/login"
                  ? "bg-blue-500 text-white"
                  : "text-slate-600"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Activity 1
            </Link>
          </li>
          <li>
            <Link
              to="/gradeEval"
              className={`block whitespace-nowrap rounded-md px-2 py-2 text-xs font-semibold transition hover:bg-blue-100 hover:text-blue-500 lg:px-4 lg:text-sm ${
                location.pathname === "/gradeEval"
                  ? "bg-blue-500 text-white"
                  : "text-slate-600"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Activity 2
            </Link>
          </li> */}
          <li>
            <Link
              to="/passChecker"
              className={`block whitespace-nowrap rounded-md px-2 py-2 text-xs font-semibold transition hover:bg-blue-100 hover:text-blue-500 lg:px-4 lg:text-sm ${
                location.pathname === "/passChecker"
                  ? "bg-blue-500 text-white"
                  : "text-slate-600"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Activity 3 - Password Checker
            </Link>
          </li>
          <li>
            <Link
              to="/electricity"
              className={`block whitespace-nowrap rounded-md px-2 py-2 text-xs font-semibold transition hover:bg-blue-100 hover:text-blue-500 lg:px-4 lg:text-sm ${
                location.pathname === "/electricity"
                  ? "bg-blue-500 text-white"
                  : "text-slate-600"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Activity 4 - Electricity Bill
            </Link>
          </li>
          <li>
            <Link
              to="/attendance"
              className={`block whitespace-nowrap rounded-md px-2 py-2 text-xs font-semibold transition hover:bg-blue-100 hover:text-blue-500 lg:px-4 lg:text-sm ${
                location.pathname === "/attendance"
                  ? "bg-blue-500 text-white"
                  : "text-slate-600"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Activity 5 - Attendance Checker
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
