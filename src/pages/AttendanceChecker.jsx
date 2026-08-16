import { useState } from "react";
import PunchClockTwoToneIcon from "@mui/icons-material/PunchClockTwoTone";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import "../App.css";

export default function AttendanceChecker() {
  const initialState = {
    name: "",
    timeIn: "",
    result: "",
    bg: "",
    color: "",
    status: "",
    submittedName: "",
    submittedTimeIn: "",
  };

  const [attendanceDetails, setAttendanceDetails] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (key, value) => {
    setAttendanceDetails((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const formatTimeIn = (value) => {
    const decimalTime = Number(value);
    const totalMinutes = Math.round(decimalTime * 60);
    const hours = Math.floor(totalMinutes / 60) % 24;
    const minutes = totalMinutes % 60;
    const displayHours = hours % 12 || 12;
    const period = hours < 12 ? "AM" : "PM";

    return `${displayHours}:${String(minutes).padStart(2, "0")} ${period}`;
  };

  const getResult = (e) => {
    e.preventDefault();

    const { name, timeIn } = attendanceDetails;

    if (!name.trim()) {
      return setErrorMessage("Please enter employee name.");
    }

    if (timeIn === "") {
      return setErrorMessage("Please enter time in.");
    }

    const time = Number(timeIn);

    if (time < 0 || time > 24) {
      return setErrorMessage("Invalid time.");
    }

    if (time <= 8) {
      setAttendanceDetails((prev) => ({
        ...prev,
        bg: "bg-green-600/20",
        color: "text-green-500",
        status: "On Time",
        result: "Good job!",
        submittedName: name,
        submittedTimeIn: timeIn,
      }));
      setErrorMessage("");
      return;
    }

    if (8 < time && time <= 9) {
      setAttendanceDetails((prev) => ({
        ...prev,
        bg: "bg-red-700/20",
        color: "text-red-500",
        status: "Late",
        result: "Please be on time tomorrow.",
        submittedName: name,
        submittedTimeIn: timeIn,
      }));
      setErrorMessage("");
      return;
    }

    setAttendanceDetails((prev) => ({
      ...prev,
      bg: "bg-red-700/20",
      color: "text-red-500",
      status: "Very Late",
      result: "Report to your supervisor.",
      submittedName: name,
      submittedTimeIn: timeIn,
    }));
    setErrorMessage("");
  };

  const handleReset = () => {
    setAttendanceDetails(initialState);
    setErrorMessage("");
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6 max-w-xl max-h-full mx-auto p-4">
      <PunchClockTwoToneIcon
        className="text-teal-400 bg-teal-900 border border-teal-400 p-5 rounded-full "
        sx={{ fontSize: 80 }}
      />
      <h1 className="text-2xl md:text-4xl text-center font-bold text-white ">
        Employee Attendance Tracker
      </h1>
      <p className="text-gray-400">
        Enter employee details to check attendance
      </p>

      <form
        onSubmit={getResult}
        className="flex flex-col justify-between mx-auto w-full max-w-6xl p-6 sm:p-8 gap-4 rounded-xl sm:rounded-5xl bg-gray-800 border-t-teal-400 border-t-4"
      >
        <label htmlFor="empName" className="flex text-white font-semibold">
          <Person2OutlinedIcon />
          Employee Name
        </label>
        <input
          type="text"
          placeholder="Enter employee name"
          className="h-12 text-white"
          value={attendanceDetails.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <label htmlFor="timeIn" className="flex text-white font-semibold">
          <PunchClockTwoToneIcon />
          Time In
        </label>
        <input
          type="number"
          placeholder="E.g., 9 = 9:00 AM"
          className="h-12 text-white"
          value={attendanceDetails.timeIn}
          onChange={(e) => handleChange("timeIn", e.target.value)}
        />
        {errorMessage && (
          <div className="bg-red-500/20 border border-red-500 p-3 rounded text-red-500">
            {errorMessage}
          </div>
        )}
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-2">
          <button
            type="submit"
            className="flex justify-center items-center gap-2 w-full h-12 whitespace-nowrap rounded-md px-2 py-2 text-md lg:px-4 bg-teal-400  text-gray-900 text-sm md:text-md transition ease-linear hover:text-white hover:bg-teal-800 shadow-md shadow-teal-900  active:text-white  active:bg-teal-800 active:shadow-teal-900"
          >
            <CheckCircleOutlinedIcon />
            Check Attendance
          </button>
          <button
            type="reset"
            onClick={handleReset}
            className="flex justify-center items-center gap-2 w-full h-12 whitespace-nowrap rounded-md px-2 py-2 text-md lg:px-4 text-white border border-gray-500 shadow-md transition ease-linear hover:text-red-500 hover:border-red-500 hover:bg-red-600/10 hover:shadow-red-900 active:text-red-500 active:border-red-500 active:bg-red-600/10 active:shadow-red-900"
          >
            <RestartAltOutlinedIcon />
            Reset
          </button>
        </div>

        {attendanceDetails.result && (
          <div
            className={`flex flex-col gap-3 p-4 border rounded-xl ${attendanceDetails.bg} ${attendanceDetails.color}`}
          >
            <p className="text-sm">Employee Name</p>
            <p className="font-bold">{attendanceDetails.submittedName}</p>

            <p className="text-sm">Time In</p>
            <p className="font-bold">
              {formatTimeIn(attendanceDetails.submittedTimeIn)}
            </p>

            {attendanceDetails.status && (
              <div className="flex flex-col gap-1">
                <p className="text-sm">Attendance Status</p>
                <h3 className="font-black text-2xl">
                  {attendanceDetails.status}
                </h3>
                <p className="text-sm font-bold">{attendanceDetails.result}</p>
              </div>
            )}
          </div>
        )}
      </form>
    </div>
  );
}
