import React, { useState } from "react";
import userp from "../src/assets/OIF.jpg";
import userw from "../src/assets/images.jpg";
import Nav from "./nav";
import Footer from "./footer";
import { useEffect } from "react";

export default function UserProfile() {
  const [hotels, setHotels] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const hotelResponse = await fetch(
          "http://localhost:5223/wandermate/Hotels"
        );

        if (!hotelResponse.ok) {
          throw new Error("Network Problem");
        }

        const hotelData = await hotelResponse.json();
        setHotels(hotelData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  

  return (
    <div>
      <div className=" m-5 px-6 ">
        <Nav />
        <section className="p-5">
          <div className="flex justify-center mb-5  ">
            <img
              id="coverpage"
              src={userw}
              alt="Profile Background"
              className="h-[28rem] w-full rounded-3xl object-cover"
            />
          </div>
          <div className="flex justify-center -mt-28">
            <img
              id="profilepic"
              src={userp}
              alt="Avatar"
              className="w-[250px] h-[250px] rounded-full border-4 border-white"
            />
          </div>
          <div className="text-center mt-3">
            <h1 id="Uname" className="text-3xl font-bold">
              sora
            </h1>
            <p id="Udesc" className="mt-2 ">
              My name is Sora because I was born during a thunderstorm, and
              'Sora' means 'sky' in Japanese. The raging storm outside was a
              powerful force of nature, and my parents wanted to give me a name
              that reflected the majesty and beauty of the sky.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Edit Profile
            </button>
          </div>
        </section>


        <section className="p-5">
          <h2 className="text-2xl font-bold mb-5">Hotel Bookings</h2>
          <div className="space-y-5">
            {hotels.slice(0, 1).map((hotel, index) => (
              <div
                key={index}
                className="flex bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={hotel.img}
                  alt={hotel.name}
                  className="w-1/3 object-cover"
                />
                <div className=" flex flex-col justify-center items-center p-5 w-2/3">
                  <h3 className="text-xl font-bold">{hotel.name}</h3>
                  <p className="text-lg font-semibold">{hotel.price}</p>
                  <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md">
                    View Deal
                  </button>
                  <div className="mt-3">
                    {[...Array(hotel.rating)].map((star, i) => (
                      <span key={i} className="text-yellow-500">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
