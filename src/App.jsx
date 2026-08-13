import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { PasswordChecker } from "./pages/PasswordChecker";
import { GradeEvaluation } from "./pages/GradeEvaluation";
import { AttendanceChecker } from "./pages/AttendanceChecker";
import { ElectricityBill } from "./pages/ElectricityBill";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />

        <Route path="/home" element={<Home />}>
          <Route index element={<Login />} />
        </Route>

        <Route path="/" element={<Login />}>
          <Route path="login" element={<Login />} />
          <Route path="passChecker" element={<PasswordChecker />} />
          <Route path="gradeEval" element={<GradeEvaluation />} />
          <Route path="attendance" element={<AttendanceChecker />} />
          <Route path="electricity" element={<ElectricityBill />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
