import Navbar from "../components/Navbar";
import "../App.css";
import { Outlet } from "react-router-dom";
export default function RootLayout() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <Navbar />

      <div className="max-w-6xl mx-auto lex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
}
