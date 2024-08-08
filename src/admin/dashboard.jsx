import React from "react";
import Sidebar from "./sidebar";
import Path from "./path";
import axios from "axios";

export default function Dashboard() {
  return (
    <div className="w-screen flex ">
      <div className="w-[20rem] h-screen"> <Sidebar /></div>

      <div className="h-screen "><Path /></div>
    </div>
  );
}
