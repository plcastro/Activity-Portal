import React from "react";
import "../App.css";
import Card from "../components/Card";
export default function Home() {
  return (
    <div className="mx-auto w-full max-h-screen py-8">
      <header className="flex flex-col justify-center items-center p-1 gap-4">
        <h1 className="text-2xl md:text-5xl font-black text-center uppercase text-teal-400 tracking-wide leading-tight">
          React Activity Portal
        </h1>
        <p className="text-center text-gray-400">
          Three interactive React activities demonstrating state, events,
          conditional logic, validation, and calculations.
        </p>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto justify-around gap-5 py-4 px-8 md:py-10 md:px-6">
        {/* <Card
          title="Login Authentication"
          subtitle="Validate a username and password against sample credentials and manage login/logout state"
          page={"/login"}
        />
        
        <Card
          title="Student Grade Evaluation"
          subtitle="Enter a student's score and get an automatic remark based on grade ranges."
           page={"/gradeEval"}
        />
        */}
        <Card
          num={3}
          title="Password Strength Checker"
          subtitle="Check password length and receive live feedback on how strong it is."
          page={"/passChecker"}
        />
        <Card
          num={4}
          title="Electricity Bill Calculator"
          subtitle="Calculate a customer's electricity bill based on kWh consumption and tiered rates."
          page={"/electricity"}
        />

        <Card
          num={5}
          title="Employee Attendance Tracker"
          subtitle="Check an employee's time-in and determine whether they are on time, late, or very late."
          page={"/attendance"}
        />
      </main>
    </div>
  );
}
