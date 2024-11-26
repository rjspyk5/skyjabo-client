import React from "react";
import img from "../../assets/images/img (21).jpg";
import "../../Style/style.css";
import "./Hero.css";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { useState } from "react";

import { BsCalendarDate } from "react-icons/bs";

export const Hero = () => {
  const [value, onChange] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="">
      <div
        className="hero min-h-screen bg-center absolute"
        style={{
          backgroundImage: `url("${img}")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black"></div>

        <div className="hero-content  text-center ">
          <div className="space-y-5">
            <h1 className="my-16 text-center lg:text-5xl md:text-4xl text-3xl font-bold max-w-2xl mx-auto">
              {" "}
              Welcome to SkyJabo! Explore your journey with seamless bookings.
            </h1>
            <div className="backdrop-blur-lg mt-5">
              <div className="p-10 relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <label className="inputt flex items-center gap-2">
                    <GiAirplaneDeparture />
                    <input
                      type="text"
                      name="origin"
                      className="grow"
                      placeholder="From"
                    />
                  </label>
                  <label className="inputt  flex items-center gap-2">
                    <GiAirplaneArrival />
                    <input
                      type="text"
                      className="grow "
                      name="destination"
                      placeholder="To"
                    />
                  </label>

                  <label className="inputt  flex items-center gap-2">
                    <BsCalendarDate />
                  </label>
                </div>
                <button className="custom-btn2 absolute left-[39%] md:left-[44%] bottom-[-20px]">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
