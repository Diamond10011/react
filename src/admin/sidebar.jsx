import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-[#101226] text-white  pl-10  flex-col font-semibold text-lg justify-between w-[14rem] h-screen lg:flex ">
      
      <div className="flex items-center mt-7 ">
        {/* <img className="w-8" src="#" alt="no" />  */}
        <h1 className=" text-2xl font-bold">Travel Dashboard</h1>
      </div>
      <ul className="flex mt-[4] flex-col ">
        <Link
          className="hover:text-blue-600 flex items-center transition-all duration-200 "
          to="home"
        >
          {/* <img
            className="w-8  hover:fill-blue-500 stroke-blue-500"
            src="#" alt="no"
          /> */}
          <li>Home</li>
        </Link>
        <Link
          className="hover:text-blue-600 flex items-center  transition-all duration-200"
          to="travelPackages"
        >
          {/* <img className="w-8" src="#" alt="no" /> */}
          <li>Travel Packages</li>
        </Link>
        <Link
          to=""
          className="hover:text-blue-600 flex items-center  transition-all duration-200"
        >
          {/* <img className="w-8" src='#' alt="no"/> */}
          <li>Hotels</li>
        </Link>
        <Link
          to="users"
          className="hover:text-blue-600 flex items-center  transition-all duration-200"
        >
          {/* <img className="w-8" src='#' alt="no"/> */}
          <li>Users</li>
        </Link>
        <Link
          className="hover:text-blue-600 flex items-center  transition-all duration-200"
          to="bookings"
        >
          {/* <img className="w-8" src='#' alt="no" /> */}
          <li>Bookings</li>
        </Link>
      </ul>
      <ul className="mb-5">
        <Link to="/">
          <li>Logout</li>
        </Link>
      </ul>
      {/* { <Path/> } */}
    </div>
  );
}
