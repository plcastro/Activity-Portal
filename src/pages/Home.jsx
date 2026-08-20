import React from "react";
import "../App.css";
import Card from "../components/Card";
export default function Home() {
  return (
    <div className="flex flex-col mt-10 sm:mt-30 justify-center items-center ">
      <header className="gap-4">
        <h1 className="text-3xl md:text-5xl font-black text-center uppercase text-teal-400 tracking-wide leading-tight">
          React Activity Portal
        </h1>
        <p className="text-center text-gray-400 ">
          Three interactive React activities demonstrating state, events,
          conditional logic, validation, and calculations.
        </p>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto justify-around gap-5 py-4 px-8 md:py-10 md:px-6">
        <Card
          num={3}
          title="Password Strength Checker"
          subtitle="Made by John Rafael Rodis"
          page={"/passChecker"}
        />
        <Card
          num={4}
          title="Electricity Bill Calculator"
          subtitle="Made by Darryl Adrian Salamera"
          page={"/electricity"}
        />

        <Card
          num={5}
          title="Employee Attendance Tracker"
          subtitle="Made by Patricia Lyca Castro"
          page={"/attendance"}
        />
      </main>
    </div>
  );
}
