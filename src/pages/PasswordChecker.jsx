import React, { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import "../App.css";

export default function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  function handleCheckPassword(e) {
    e.preventDefault();

    if (password === "") {
      setError("Please enter a password.");
      setResult(null);
      return;
    }

    let strength = "";
    let message = "";

    if (password.length < 6) {
      strength = "Weak";
      message = "Status: Weak – Create a stronger password.";
    } else if (password.length < 10) {
      strength = "Medium";
      message = "Status: Weak – Create a stronger password.";
    } else {
      strength = "Strong";
      message = "Status: Strong – You can use this password.";
    }

    setError("");
    setResult({ strength, message });
  }

  function handleClear() {
    setPassword("");
    setError("");
    setResult(null);
  }

  return (
    <div className="flex flex-col justify-center items-center gap-6 max-w-xl max-h-full mx-auto">
      <form
        onSubmit={handleCheckPassword}
        className="mt-10 p-4 sm:p-8 md:p-12 h-full flex flex-col justify-between mx-auto w-full max-w-6xl gap-4 rounded-xl sm:rounded-5xl bg-gray-800 border-t-teal-400 border-t-4 shadow-md shadow-gray-950"
      >
        <div className="flex flex-col items-center gap-4">
          <LockOutlinedIcon
            className="text-teal-400 bg-teal-900 border border-teal-400 p-5 rounded-full "
            sx={{ fontSize: { xs: 70, sm: 100 } }}
          />
          <h1 className="text-2xl md:text-4xl text-center font-bold text-white ">
            Password Strength Checker
          </h1>
          <p className="text-gray-400">
            Enter a password to check its strength
          </p>
        </div>
        <label
          htmlFor="password"
          className="flex text-white font-semibold gap-1"
        >
          <VpnKeyOutlinedIcon />
          Password
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-12 text-white border border-gray-500 rounded-md px-3 focus:border-2  focus:border-teal-400  focus:outline-none  transition-all duration-200 ease-in"
        />

        {error && (
          <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400">
            {error}
          </div>
        )}

        <div className="flex flex-col md:flex-row justify-evenly items-center gap-2">
          <button
            type="submit"
            className="flex justify-center items-center gap-2 w-full h-12 whitespace-nowrap rounded-md px-2 py-2 text-md lg:px-4 bg-teal-400  text-gray-900 text-sm md:text-md hover:text-white hover:bg-teal-800 shadow-md shadow-teal-900 transition ease-linear"
          >
            <CheckCircleOutlinedIcon />
            Check Password
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="flex justify-center items-center gap-2 w-full h-12 whitespace-nowrap rounded-md px-2 py-2 text-md lg:px-4 text-white border-gray-500 border hover:text-red-500 hover:border-red-500 hover:bg-red-600/10 shadow-md hover:shadow-red-900 has-focus-within:text-red-500  transition ease-linear"
          >
            <RestartAltOutlinedIcon />
            Clear
          </button>
        </div>
      </form>

      {result && (
        <div className="w-full max-w-6xl mb-10 rounded-xl sm:rounded-5xl bg-gray-800 border-t-teal-400 border-t-4 p-6 sm:p-8">
          <div className="flex justify-between border-b border-gray-700 pb-3 mb-3">
            <span className="text-gray-400">Password Status</span>
            <span
              className={
                "font-semibold " +
                (result.strength === "Strong"
                  ? "text-teal-400"
                  : result.strength === "Medium"
                    ? "text-yellow-400"
                    : "text-red-400")
              }
            >
              {result.strength}
            </span>
          </div>

          <div className="flex gap-2 mb-4">
            <div
              className={
                "h-2 flex-1 rounded-full " +
                (result.strength === "Weak" ||
                result.strength === "Medium" ||
                result.strength === "Strong"
                  ? "bg-red-500"
                  : "bg-gray-700")
              }
            />
            <div
              className={
                "h-2 flex-1 rounded-full " +
                (result.strength === "Medium" || result.strength === "Strong"
                  ? "bg-yellow-500"
                  : "bg-gray-700")
              }
            />
            <div
              className={
                "h-2 flex-1 rounded-full " +
                (result.strength === "Strong" ? "bg-teal-400" : "bg-gray-700")
              }
            />
          </div>

          <p className="text-white font-semibold text-center">
            {result.message}
          </p>
        </div>
      )}
    </div>
  );
}
