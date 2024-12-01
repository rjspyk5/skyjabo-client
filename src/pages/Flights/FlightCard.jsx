import React from "react";

export const FlightCard = ({ flight }) => {
  return (
    <div className="p-5 flex flex-col gap-5 md:flex-row md:items-center bg-white rounded-md justify-between mb-5">
      {/* Airline Info */}
      <div className="md:flex md:flex-col hidden  justify-center items-center">
        <img className="w-20" src={flight.img} alt={flight.airline} />
        <p>{flight.airline}</p>
      </div>
      {/* Timeline */}
      <div className="flex justify-between">
        <div className="md:hidden block">
          <img className="w-20" src={flight.img} alt={flight.airline} />
          <p>{flight.airline}</p>
        </div>
        <ul className="timeline">
          <li>
            <div className="timeline-start">{flight.time}</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end ">{flight.origin}</div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start">05h 15m</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end">Non stop</div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start">unknwon</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end">{flight.destination}</div>
          </li>
        </ul>
      </div>
      {/* Price */}
      <div className="font-bold text-2xl hidden md:block">{flight.price}</div>
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
        <p className="font-bold text-2xl">{flight.price}</p>
        <div className="flex flex-col gap-1">
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
