import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import PunchClockTwoToneIcon from "@mui/icons-material/PunchClockTwoTone";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import "../App.css";

export default function AttendanceChecker() {
  //no functions yet
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
      <form className="flex flex-col justify-between mx-auto w-full max-w-6xl p-6 sm:p-8 gap-4 rounded-xl sm:rounded-5xl bg-gray-800 border-t-teal-400 border-t-4">
        <label htmlFor="empName" className="flex text-white font-semibold">
          <Person2OutlinedIcon />
          Employee Name
        </label>
        <input
          type="text"
          placeholder="Enter employee name"
          required
          className="h-12 text-white"
        />
        <label htmlFor="timeIn" className="flex text-white font-semibold">
          <PunchClockTwoToneIcon />
          Time In
        </label>
        <input
          type="number"
          placeholder="E.g., 9 = 9:00 AM"
          required
          max={24}
          min={0}
          className="h-12 text-white"
        />
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-2">
          <button className="flex justify-center items-center gap-2 w-full h-12 whitespace-nowrap rounded-md px-2 py-2 text-md lg:px-4 bg-teal-400  text-gray-900 text-sm md:text-md hover:text-white hover:bg-teal-800 shadow-md shadow-teal-900 transition ease-linear">
            <CheckCircleOutlinedIcon />
            Check Attendance
          </button>
          <button
            type="reset"
            className="flex justify-center items-center gap-2 w-full h-12 whitespace-nowrap rounded-md px-2 py-2 text-md lg:px-4 text-white border-gray-500 border hover:text-red-500 hover:border-red-500 hover:bg-red-600/10 shadow-md hover:shadow-red-900 has-focus-within:text-red-500  transition ease-linear"
          >
            <RestartAltOutlinedIcon />
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
