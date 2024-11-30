import React from "react";
import { SearchSection } from "../../component/Hero/SearchSection/SearchSection";
import img from "../../assets/images/low/img (1).jpg";

// Dummy Data for Flights
const flightsData = [
  {
    id: 1,
    airline: "Test Airline 1",
    img: img,
    departureTime: "19:00",
    arrivalTime: "00:15",
    duration: "05h 15m",
    stops: "1 stop via Goa",
    departureCity: "Delhi",
    arrivalCity: "Mumbai",
    price: "$500",
  },
  {
    id: 2,
    airline: "Test Airline 2",
    img: img,
    departureTime: "08:30",
    arrivalTime: "13:45",
    duration: "05h 15m",
    stops: "Non-stop",
    departureCity: "Kolkata",
    arrivalCity: "Chennai",
    price: "$450",
  },
];

export const Flights = () => {
  return (
    <div className="pt-10">
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box relative max-w-4xl">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
            onClick={() => document.getElementById("my_modal_3").close()}
          >
            ✕
          </button>

          <h3 className="font-bold text-2xl text-center mb-4">
            Flight Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column: Basic Flight Info */}
            <div className="space-y-3">
              <p>
                <span className="font-semibold">Airline:</span> Test Airline 1
              </p>
              <p>
                <span className="font-semibold">Departure Time:</span> 19:00
              </p>
              <p>
                <span className="font-semibold">Arrival Time:</span> 00:15
              </p>
              <p>
                <span className="font-semibold">Duration:</span> 5h 15m
              </p>
              <p>
                <span className="font-semibold">Stops:</span> 1 stop via Goa
              </p>
            </div>

            {/* Right Column: Additional Info */}
            <div className="space-y-3">
              <p>
                <span className="font-semibold">Price:</span> $500
              </p>
              <p>
                <span className="font-semibold">Class:</span> Economy
              </p>
              <p>
                <span className="font-semibold">Baggage Allowance:</span> 20kg
              </p>
              <p>
                <span className="font-semibold">Meal:</span> Included
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6 border-t pt-4">
            <h4 className="font-bold text-lg mb-2">Description</h4>
            <p>
              This flight offers a comfortable journey with complimentary meals,
              in-flight entertainment, and spacious seating. Enjoy seamless
              travel with experienced crew and top-tier services.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="modal-action justify-end mt-6">
            <button
              className="btn btn-primary"
              onClick={() => alert("Booking Confirmed!")}
            >
              Confirm Booking
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>

      <div className="mb-10">
        <SearchSection />
      </div>
      <div className="flex gap-16">
        {/* Filters Section */}
        <div className="w-[25%] hidden lg:block space-y-5">
          <div className="flex justify-between p-3 border-b">
            <h6>Filters</h6>
            <span>clear</span>
          </div>
          <div className="p-3 bg-white text-black rounded-lg space-y-3">
            <h6>Price</h6>
            <input
              type="range"
              min={0}
              max="100"
              value="40"
              className="range range-xs"
            />
          </div>
          <div className="p-3 bg-white text-black rounded-lg space-y-3">
            <h6>Duration</h6>
            <input
              type="range"
              min={0}
              max="100"
              value="40"
              className="range range-xs"
            />
          </div>
          {/* Airlines */}
          <div className="p-3 bg-white text-black rounded-lg space-y-3 h-48 overflow-auto">
            <h6>Airlines</h6>
            {["Airline 1", "Airline 2", "Airline 3", "Airline 4"].map(
              (airline, index) => (
                <div className="form-control" key={index}>
                  <label className="label py-1 justify-normal space-x-2 cursor-pointer">
                    <input type="checkbox" className="checkbox" />
                    <span className="label-text">{airline}</span>
                  </label>
                </div>
              )
            )}
          </div>
        </div>
        {/* Flights List Section */}
        <div className="flex-1">
          <div className="flex justify-between">
            <button className="btn lg:hidden">Filter</button>
            <h6 className="text-2xl font-bold p-4">
              {flightsData.length} Tickets Available
            </h6>
          </div>
          {flightsData.map((flight) => (
            <div
              className="p-5 flex flex-col gap-5 md:flex-row md:items-center bg-white rounded-md justify-between mb-5"
              key={flight.id}
            >
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
                    <div className="timeline-start">{flight.departureTime}</div>
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
                    <div className="timeline-end ">{flight.departureCity}</div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-start">{flight.duration}</div>
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
                    <div className="timeline-end">{flight.stops}</div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-start">{flight.arrivalTime}</div>
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
                    <div className="timeline-end">{flight.arrivalCity}</div>
                  </li>
                </ul>
              </div>
              {/* Price */}
              <div className="font-bold text-2xl hidden md:block">
                {flight.price}
              </div>
              {/* Buttons */}
              <div className="md:flex md:flex-col gap-1 hidden ">
                <button
                  className="btn md:btn-md btn-sm"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  View Details
                </button>
                <button className="btn md:btn-md btn-sm">Book Now</button>
              </div>
              {/* Mobile View */}
              <div className="flex justify-between items-center w-full md:hidden">
                <p className="font-bold text-2xl">{flight.price}</p>
                <div className="flex flex-col gap-1">
                  <button
                    className="btn md:btn-md btn-sm"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    View Details
                  </button>
                  <button className="btn md:btn-md btn-sm">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
