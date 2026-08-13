import React from "react";
import "../App.css";
import Card from "../components/Card";
export default function Home() {
  return (
    <div className="mx-auto w-full max-h-screen py-8">
      <header className="flex flex-col justify-center items-center p-1 gap-12">
        <h1 className="text-5xl font-black text-center">
          React Activity Portal
        </h1>
        <p className="text-center">
          Five interactive React activities demonstrating state, events,
          conditional logic, validation, and calculations.
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 mx-auto justify-around gap-5 py-8 px-12">
        {/* <Card
          title="Login Authentication"
          subtitle="Validate a username and password against sample credentials and manage login/logout state"
        >
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Open Activity
          </button>
        </Card> 
        <Card
          title="Student Grade Evaluation"
          subtitle="Enter a student's score and get an automatic remark based on grade ranges."
        >
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Open Activity
          </button>
        </Card>*/}
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
