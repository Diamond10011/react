import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className="flex flex-col gap-7 mx-8 mt-12 pr-32 shadow-shade pl-8 pt-3  text-footerColor mb-7 pb-4">
        <div className="flex justify-between ">
          {/* About wandermate */}
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-xl">About WanderMate</h1>
            <ul className="flex flex-col gap-1">
              <li className=' cursor-pointer '>About Us</li>
              <li className=' cursor-pointer '>Home</li>
              <li className=' cursor-pointer '>Destinations</li>
              <li className=' cursor-pointer '>Tours</li>
              <li className=' cursor-pointer '>Hotels</li>
            </ul>
          </div>
          {/* Explore */}
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-xl">Explore</h1>
            <ul className="flex flex-col gap-1">
              <li className=' cursor-pointer'>Flights</li>
              <li className=' cursor-pointer'>Car Rentals</li>
              <li className=' cursor-pointer'>Activities</li>
              <li className=' cursor-pointer'>Deals</li>
            </ul>
          </div>
          {/* Trip advisor sites */}
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-xl">Trip-Advisor Sites</h1>
            <ul className="flex flex-col gap-1">
              <li className=' cursor-pointer'>Contact Us</li>
              <li className=' cursor-pointer'>Terms of Servide</li>
              <li className=' cursor-pointer'>Privacy Policy</li>
              <li className=' cursor-pointer'>Terms and Conditions</li>
            </ul>
          </div>
        </div>
        <h1 className="text-center font-bold text-md">
          © 2024 WanderMate LLC All rights reserved
        </h1>
      </div>
    </div>
  );
}
