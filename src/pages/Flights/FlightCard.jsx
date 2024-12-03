import React from "react";
import { MdFlightTakeoff } from "react-icons/md";
import { PiAirplaneLandingFill, PiAirplaneTakeoffFill } from "react-icons/pi";
import { useNavigate } from "react-router";

export const FlightCard = ({ flight }) => {
  const navigate = useNavigate();
  return (
    <div className="p-5 flex flex-col gap-5 md:flex-row md:items-center bg-slate-200 rounded-md justify-between mb-5">
      {/* Airline Info */}
      <div className="md:flex md:flex-col hidden  justify-center items-center">
        <p className="text-black font-bold">{flight.airline}</p>
      </div>
      {/* Timeline */}
      <div className="flex justify-between">
        <div className="md:hidden block">
          <p className="text-black ">{flight.airline}</p>
        </div>
        <div className="">
          <div className="flex  justify-center items-center">
            <p className="text-gray-600 mb-2 mr-2 text-xl font-semibold">
              {flight?.origin}
            </p>
            <PiAirplaneTakeoffFill className="h-5 hidden md:block w-5 text-black font-bold mb-2" />
            <p className="h-1  bg-black w-20  md:w-48 lg:w-56"></p>{" "}
            <PiAirplaneLandingFill className="h-5 hidden md:block w-5 text-black font-bold mb-2" />
            <p className="text-gray-600 mb-2 ml-2 text-xl font-semibold">
              {flight?.destination}
            </p>
          </div>
        </div>
        {/* <ul className="timeline">
          <li>
            <div className="timeline-start">{flight.time}</div>
            <div className="timeline-middle">
              <PiAirplaneTakeoffFill className="h-5 w-5 text-black font-bold" />
            </div>
            <div className="timeline-end ">{flight.origin}</div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start">05h 15m</div>

            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start">unknwon</div>
            <div className="timeline-middle">
              <PiAirplaneLandingFill className="h-5 w-5 text-black font-bold" />
            </div>
            <div className="timeline-end">{flight.destination}</div>
          </li>
        </ul> */}
      </div>
      {/* Price */}
      <div className="font-bold text-black text-2xl hidden md:block">
        Price : ${flight.price}
      </div>
      {/* Buttons */}
      <div className="md:flex md:flex-col gap-1 hidden ">
        <button
          className="btn md:btn-md btn-sm bg-primary text-white hover:bg-pink-600 "
          onClick={() => navigate(`/flight/${flight._id}`)}
        >
          View Details
        </button>
        <button
          onClick={() => navigate(`/book/${flight?._id}`)}
          className="btn md:btn-md btn-sm bg-green-500 text-white hover:bg-green-600 "
        >
          Book Now
        </button>
      </div>
      {/* Mobile View */}
      <div className="flex justify-between items-center w-full md:hidden">
        <p className="font-bold text-2xl text-black">Price : ${flight.price}</p>
        <div className="flex  gap-1">
          <button
            className="btn md:btn-md btn-sm bg-primary text-white hover:bg-pink-600 "
            onClick={() => navigate(`/flight/${flight._id}`)}
          >
            View Details
          </button>
          <button
            onClick={() => navigate(`/book/${flight?._id}`)}
            className="btn bg-green-500 text-white hover:bg-green-600  md:btn-md btn-sm"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};
