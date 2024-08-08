import React, { useState, useEffect } from "react";
import Nav from "./nav";
import Footer from "./footer";

export default function Destination() {
  const [things, setthings] = useState([]);
  const [dest, setdest] = useState([]);
  const [pac, setPac] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const destResponse = await fetch(
          "http://localhost:3000/topDestinations"
        );
        const thingsResponse = await fetch("http://localhost:3000/thingsToDo");
        const pacResponse = await fetch("http://localhost:3000/travelPackages");

        if (!thingsResponse.ok || !destResponse.ok) {
          throw new Error("Network Problem");
        }

        const thingsData = await thingsResponse.json();
        setthings(thingsData);

        const destData = await destResponse.json();
        const pacData = await pacResponse.json();

        setdest(destData);
        setPac(pacData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className=" m-5 px-6">
        <Nav />
        <div className=" h-he mt-4 ">
          <img
            className=" h-he w-full rounded-md object-cover object-center"
            src="src/assets/solukhumbuXmt.jpg"
            alt=""
          />
        </div>

        <div className=" m-6 ">
          <div className=" flex">
            <img
              src="src\assets\bg.jpg"
              alt=""
              className=" w-8 h-8 rounded-full"
            />
            <ul className=" font-bold ml-2 pt-1">
              <li>Top Destinations</li>
            </ul>
          </div>
          <div className="grid grid-cols-4 gap-8 mt-2">
            {dest.map((dest) => (
              <div key={dest.id}>
                <img src={dest.img} alt="" className="w-full h-52 rounded-md" />
                <h3 className="text-xl backdrop-blur-sm relative z-10 bottom-9 text-white font-bold mt-2">
                  {dest.name}
                </h3>
              </div>
            ))}
          </div>
          <div className=" flex justify-between"></div>
          <div className=" flex mt-4">
            <img
              src="src\assets\bg2.jpg"
              alt=""
              className=" w-8 h-8 rounded-full"
            />
            <ul className=" font-bold ml-2 pt-1">
              <li>Things To Do</li>
            </ul>
          </div>
          <div className="grid grid-cols-4 gap-8 mt-2">
            {things.map((hotel) => (
              <div key={hotel.id}>
                <img
                  src={hotel.img}
                  alt=""
                  className="w-full h-52 rounded-md"
                />
                <h3 className="text-xl backdrop-blur-sm relative z-10 bottom-9 text-white font-bold mt-2">
                  {hotel.name}
                </h3>
              </div>
            ))}
          </div>
          <div className=""></div>
          <div className=" flex mt-4">
            <img
              src="src\assets\bg5.jpg"
              alt=""
              className=" w-8 h-8 rounded-full"
            />
            <ul className=" font-bold ml-2 pt-1">
              <li>Top Travel Packages</li>
            </ul>
          </div>
          <div className="grid grid-cols-4 gap-8 mt-2">
            {pac.map((hotel) => (
              <div key={hotel.id}>
                <img
                  src={hotel.img}
                  alt=""
                  className="w-full h-52 rounded-md"
                />
                <h3 className="text-xl backdrop-blur-sm relative z-10 bottom-9 text-white font-bold mt-2">
                  {hotel.name}
                </h3>
              </div>
            ))}
          </div>
          <div className=""></div>
        </div>
      </div>

      <Footer />
    </>
  );
}
