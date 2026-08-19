import React, { useState } from "react";
import PunchClockTwoToneIcon from "@mui/icons-material/PunchClockTwoTone";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import "../App.css";

export default function AttendanceChecker() {
  const [empName, setEmpName] = useState("");
  const [timeIn, setTimeIn] = useState("");
  const [timeConvert, setTimeConvert] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [resultName, setResultName] = useState("");
  const [result, setResult] = useState(false);
  const [alertStyle, setAlertStyle] = useState({
    textColor: "text-green-500",
    bgColor: "bg-green-800/20",
    borderColor: "border-green-500",
  });

  const convertTime = (time) => {
    let hours = Math.floor(time);
    let minutes = Math.round((time - hours) * 60);

    const period = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;

    if (hours === 0) {
      hours = 12;
    }
    const formattedMinutes = String(minutes).padStart(2, "0");

    return `${hours}:${formattedMinutes} ${period}`;
  };

  const getAttendance = () => {
    if (!empName) {
      setError("Please enter employee name.");
      setResult(false);
      return;
    }

    if (!timeIn) {
      setError("Please enter time in.");
      setResult(false);
      return;
    }

    if (timeIn < 0 || timeIn > 24) {
      setError("Invalid time.");
      setResult(false);
      return;
    }

    const time = Number(timeIn);

    setError("");

    const convertedTime = convertTime(time);
    setTimeConvert(convertedTime);

    if (time <= 8) {
      setStatus("On Time");
      setMessage("Good job!");

      setAlertStyle({
        textColor: "text-green-400",
        bgColor: "bg-green-700/20",
        borderColor: "border-green-400",
      });
    } else if (time <= 9) {
      setStatus("Late");
      setMessage("Please be on time tomorrow.");

      setAlertStyle({
        textColor: "text-yellow-400",
        bgColor: "bg-yellow-700/20",
        borderColor: "border-yellow-400",
      });
    } else {
      setStatus("Very Late");
      setMessage("Report to your supervisor.");

      setAlertStyle({
        textColor: "text-red-400",
        bgColor: "bg-red-700/20",
        borderColor: "border-red-400",
      });
    }
    setResultName(empName);
    setResult(true);
  };

  function handleReset() {
    setEmpName("");
    setTimeIn("");
    setTimeConvert("");
    setStatus("");
    setMessage("");
    setError("");
    setResult(false);
  }

  return (
    <div className="sm:p-0 p-3">
      <div className="mt-10 mb-10 p-4 sm:p-8 md:p-12 h-full flex flex-col justify-between mx-auto w-full max-w-6xl gap-4 rounded-xl sm:rounded-5xl bg-gray-800 border-t-teal-400 border-t-4 shadow-md shadow-gray-950">
        <PunchClockTwoToneIcon
          className="text-teal-400 bg-teal-900 border border-teal-400 p-3 md:p-5  rounded-full mx-auto"
          sx={{ fontSize: { xs: 70, sm: 100 } }}
        />

        <h1 className="text-2xl md:text-3xl text-center font-bold text-white">
          Employee Attendance Tracker
        </h1>

        <p className="text-gray-400">
          Enter employee details to check attendance
        </p>

        <label htmlFor="empName" className="flex text-white font-semibold">
          <Person2OutlinedIcon />
          Employee Name
        </label>

        <input
          id="empName"
          type="text"
          placeholder="Enter employee name"
          className="h-12 text-white border border-gray-500 rounded-md px-3
             focus:border-2  focus:border-teal-400 focus:outline-none transition-all duration-200 ease-in"
          value={empName}
          onChange={(e) => setEmpName(e.target.value)}
        />

        <label htmlFor="timeIn" className="flex text-white font-semibold">
          <PunchClockTwoToneIcon />
          Time In
        </label>

        <input
          id="timeIn"
          type="number"
          step="0.01"
          placeholder="E.g., 8.5 = 8:30 AM"
          className="h-12 text-white border border-gray-500 rounded-md px-3 focus:border-2  focus:border-teal-400  focus:outline-none  transition-all duration-200 ease-in"
          value={timeIn}
          onChange={(e) => setTimeIn(e.target.value)}
        />

        <div className="flex flex-col md:flex-row justify-evenly items-center gap-2">
          <button
            onClick={getAttendance}
            className="flex justify-center items-center gap-2 w-full h-12 whitespace-nowrap rounded-md px-2 py-2 text-md lg:px-4 bg-teal-400 text-gray-900 text-sm md:text-md hover:text-white hover:bg-teal-800 shadow-md shadow-teal-900 transition ease-linear"
          >
            <CheckCircleOutlinedIcon />
            Check Attendance
          </button>

          <button
            type="reset"
            onClick={handleReset}
            className="flex justify-center items-center gap-2 w-full h-12 whitespace-nowrap rounded-md px-2 py-2 text-md lg:px-4 text-white border-gray-500 border hover:text-red-400 hover:border-red-400 hover:bg-red-700/10 shadow-md hover:shadow-red-900 transition ease-linear"
          >
            <RestartAltOutlinedIcon />
            Reset
          </button>
        </div>

        {error && (
          <div className="mb-5 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400">
            {error}
          </div>
        )}

        {result && (
          <div
            className={`flex flex-col gap-3 rounded-lg border ${alertStyle.borderColor} ${alertStyle.bgColor} ${alertStyle.textColor} p-3`}
          >
            <p>
              Employee Name: <strong>{resultName}</strong>
            </p>
            <p>
              Time In: <strong>{timeConvert}</strong>
            </p>

            <p>Attendance Status</p>
            <h3 className="text-2xl font-black tracking-wide">{status}</h3>

            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}
