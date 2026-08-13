import Navbar from "../components/Navbar";
import "../App.css";
import { Outlet } from "react-router-dom";
export default function RootLayout() {
  return (
    <div className="bg-slate-100">
      <Navbar />
      <div className="min-h-screen mx-auto max-w-6xl py-8 px-4">
        <Outlet />
      </div>
    </div>
  );
}
