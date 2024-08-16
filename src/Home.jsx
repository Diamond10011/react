import React, { useState, useEffect } from "react";
import Nav from "./nav";
import Footer from "./footer";
import axios from "axios";

export default function Home() {
  const [hotels, setHotels] = useState([]);
  const [dest, setdest] = useState([]);
  const [pac, setPac] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const destResponse = await axios.get(
          "http://localhost:5223/api/hotels" // top destination
        );
        const hotelResponse = await axios.get(
          "http://localhost:5223/api/hotels"
        );
        const pacResponse = await axios.get("http://localhost:5223/api/hotels");

        if (!hotelResponse.ok || !destResponse.ok) {
          throw new Error("Network Problem");
        }

        setHotels(hotelResponse.data);

        setdest(destResponse.data);
        setPac(pacResponse.data);
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
        <div className=" h-he mt-4  bg-img bg-cover bg-center rounded-md">
          <div className=" w-full h-full ">
            <div className="flex justify-center items-center h-full">
              <input
                className=" w-1/3 h-11 pl-3 bg-none rounded-md"
                type="search"
                name="search"
                id=""
                placeholder="Search your place"
              />
              <img
                className=" w-9 relative z-10 right-10 cursor-pointer"
                src="src\assets\search.webp"
                alt=""
              />
            </div>
          </div>
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
              <li>Top Hotels</li>
            </ul>
          </div>
          <div className="grid grid-cols-4 gap-8 mt-2">
            {hotels.slice(0, 4).map((hotel) => (
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
