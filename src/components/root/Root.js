import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

export default function Root() {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
}
