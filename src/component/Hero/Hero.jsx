import React, { forwardRef } from "react";
import img from "../../assets/images/img (18).jpg";
import "../../Style/style.css";
import "./Hero.css";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";

import { useState } from "react";
// import "react-datepicker/dist/react-datepicker.css";
// import { BsCalendarDate } from "react-icons/bs";
// import DatePicker from "react-datepicker";
import { CustomDatePicker } from "./CustomDatePicker/CustomDatePicker";
import { useNavigate } from "react-router";
import { useForm, Controller } from "react-hook-form";
import { SearchSection } from "./SearchSection/SearchSection";

export const Hero = () => {
  return (
    <div className="">
      <div
        className="hero min-h-screen bg-center mb-10"
        style={{
          backgroundImage: `url("${img}")`,
        }}
      >
        <div className="hero-overlay bg-opacity-70 bg-black"></div>

        <div className="hero-content  text-center ">
          <div className="space-y-2 md:space-y-4 lg:space-y-5">
            <h1 className="my-16 text-center lg:text-5xl md:text-3xl text-2xl font-bold max-w-2xl mx-auto">
              {" "}
              Welcome to SkyJabo! Explore your journey with seamless bookings.
            </h1>
            <SearchSection />
            {/* <div className="backdrop-blur-lg mt-5">
              <div className="md:p-12 p-8 relative">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div>
                      <label className="inputt flex items-center gap-2">
                        <GiAirplaneDeparture />
                        <input
                          {...register("origin", { required: true })}
                          type="text"
                          name="origin"
                          className=""
                          placeholder="From"
                        />
                      </label>{" "}
                      <span className="text-red-500">
                        {errors?.origin && "  This field is required"}
                      </span>
                    </div>

                    <div className="">
                      <label className="inputt  flex items-center gap-2">
                        <GiAirplaneArrival />
                        <input
                          {...register("destination", { required: true })}
                          type="text"
                          className=" grow"
                          name="destination"
                          placeholder="To"
                        />
                      </label>

                      <span className="text-red-500">
                        {" "}
                        {errors?.destination && "  This field is required"}
                      </span>
                    </div>
                    <Controller
                      control={control}
                      name="date"
                      rules={{ required: "Required" }}
                      render={({ field }) => (
                        <CustomDatePicker
                          startDate={field.value}
                          setStartDate={setStartDate}
                          change={field.onChange}
                          errors={errors}
                        />
                      )}
                    />
                  </div>
                  <input
                    type="submit"
                    value="Search"
                    className="custom-btn2  absolute left-[29%] md:left-[44%] bottom-[-20px]"
                  />
                </form>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
