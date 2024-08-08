import React from "react";
import { Route, Routes } from "react-router-dom";
import DHome from "./DHome";
import DTravelPackages from "./DTravelPackages";
import DHotels from "./DHotels";
import Users from "./Users";
import Bookings from "./Bookings";

export default function Path() {
  return (
    <>
      <Routes>
        <Route path="" element={<DHome />} />
        <Route path="travelPackages" element={<DTravelPackages />} />
        <Route path="hotels" element={<DHotels />} />
        <Route path="users" element={<Users />} />
        <Route path="bookings" element={<Bookings />} />
      </Routes>
    </>
  );
}
