import React, { useState } from "react";
import { Link } from "react-router-dom";
import rt from "../src/assets/headerImg2.jpg";
import Signin from "./Signin";
import Signup from './Signup'

export default function Landing() {
  
  const [signin, setSignIn] = useState(false);
  const [signup, setSignUp] = useState(false);

  const showsignin = (e) =>{
    e.preventDefault();
    setSignIn(true);
    setSignUp(false);
  }
  const showsignup = (e) =>{
    e.preventDefault();
    setSignUp(true);
    setSignIn(false);
  }
  const hidesignin = () => {
    setSignIn(false);
  }
  const hidesignup = () => {
    setSignUp(false);
  }
  
  
  return (
    <div className=" w-full h-screen bg-cover bg-center bg-backg ">
      <div className=" bg-black bg-opacity-50 w-full h-full">
        <img
          className="w-64 h-56 absolute top-0 right-0 "
          src={rt}
          alt=""
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 70%, 65% 100%, 0% 35%)",
          }}
        />
        <nav>
          <div className=" flex justify-normal gap-80 item-center py-8 px-12 ">
            <h1 className="text-orange-500 h-[30px] w-18 font-bold text-3xl cursor-pointer">
              <Link to ="/home">EXPLORE.</Link>
            </h1>
            <ul className="flex ml-14 space-x-16 text-xl text-white">
              <li>
                <a href="#" onClick={showsignin}>
                  About
                </a>
              </li>
              <li>
                <a href="#" onClick={showsignin}>
                  Tours
                </a>
              </li>
              <li>
                <a href="#" onClick={showsignin}>
                  Sale
                </a>
              </li>
              <li>
                <a href="#" onClick={showsignin}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="w-full h-1/2 mt-10 flex flex-col items-center justify-center">
          <h3 className="tracking-wide text-xl text-white">
            The Country Of Himalayas
          </h3>
          <p className="text-8xl font-serif font-bold mt-10">
            <a href="#" onClick={showsignin}>
              <span className="text-orange-500">NEP</span>
              <span className="text-white">AL</span>
            </a>
          </p>
        </div>
        <div className=" text-white z-10 absolute left-20 bottom-[90px]">
          <h1>
            Visit Nepal. You will never regret it.
            <br />
            This is something incredible, fantastic,
            <br />
            mesmerizing and a lifetime experience.
          </h1>
        </div>
        <footer>
          <div className=" relative -bottom-[150px] h-16 flex justify-end items-center pr-20 backdrop-blur">
            <ul className=" flex space-x-4 text-white">
              <li>Facebook</li>
              <li>Twitter</li>
              <li> Instagram</li>
            </ul>
          </div>
        </footer>
      </div>
      {signin && <Signin onbClick={showsignup} onClick={hidesignin} />}
      {signup && <Signup onbClick={showsignin} onClick={hidesignup} />}
    </div>
  );
}
