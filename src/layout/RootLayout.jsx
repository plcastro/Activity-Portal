import Navbar from "../components/Navbar";
import "../App.css";
import { Outlet } from "react-router-dom";
export default function RootLayout() {
  return (
    <div className="bg-slate-100">
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}
