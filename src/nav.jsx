import React from "react";
import nezuko from "../src/assets/userProfile.jpg";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className=" mt-10 font-sans flex justify-between ">
        <div>
          <h2 className=" text-blue-500 text-xl font-bold">
            <Link to="/admin">WanderMate</Link>
          </h2>
        </div>

        <ul className=" pt-1 flex gap-7 font-bold">
          <li className=" cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className=" cursor-pointer">
            <Link to="/destination">Destination</Link>
          </li>
          <li className=" cursor-pointer">
            <Link to="/travelpackage">Travel Packages</Link>
          </li>
          <li className=" cursor-pointer">
            <Link to="/hotels">Hotels</Link>
          </li>
        </ul>

        <div className=" flex gap-6">
          {/* <span className=" font-bold pt-1">Diamond123</span> */}
          <Link to="/profile">
            <img src={nezuko} className=" w-12 rounded-full relative -top-2" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
