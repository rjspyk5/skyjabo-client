import React, { forwardRef } from "react";
import img from "../../assets/images/img (18).jpg";
import "../../Style/style.css";
import "./Hero.css";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

import { BsCalendarDate } from "react-icons/bs";
import DatePicker from "react-datepicker";

export const Hero = () => {
  const [startDate, setStartDate] = useState(null);
  return (
    <div className="">
      <div
        className="hero min-h-screen bg-center absolute"
        style={{
          backgroundImage: `url("${img}")`,
        }}
      >
        <div className="hero-overlay bg-opacity-70 bg-black"></div>

        <div className="hero-content  text-center ">
          <div className="space-y-5">
            <h1 className="my-16 text-center lg:text-5xl md:text-4xl text-3xl font-bold max-w-2xl mx-auto">
              {" "}
              Welcome to SkyJabo! Explore your journey with seamless bookings.
            </h1>
            <div className="backdrop-blur-lg mt-5">
              <div className="p-12 relative">
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
                    <DatePicker
                      closeOnScroll={true}
                      toggleCalendarOnIconClick
                      showIcon
                      placeholderText="Select Date"
                      selected={startDate}
                      dateFormat="MMMM d, yyyy"
                      onChange={(date) => setStartDate(date)}
                      icon={
                        <BsCalendarDate className=" bottom-[-20%] left-[-3%] cursor-pointer" />
                      }
                      className="calender "
                    />
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
