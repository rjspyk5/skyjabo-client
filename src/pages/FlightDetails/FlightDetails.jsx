import React from "react";
import { useNavigate } from "react-router";

export const FlightDetails = () => {
  const navigate = useNavigate();

  const flight = {
    flightNumber: "AI202",
    airline: "Air India",
    origin: "New York",
    destination: "London",
    duration: "7 hours 30 minutes",
    date: "2024-12-10T08:00:00Z",
    time: "08:00 AM",
    price: 499.99,
    availableSeats: 120,
  };

  const {
    flightNumber,
    airline,
    origin,
    destination,
    duration,
    date,
    time,
    price,
    availableSeats,
  } = flight;

  return (
    <div className="min-h-screen bg-gray-50 p-8 pt-20">
      <button
        onClick={() => navigate(-1)}
        className=" p-3 bg-primary text-white rounded-lg shadow-md hover:bg-[#e93574f4] focus:outline-none"
      >
        Back
      </button>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Flight Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="font-semibold text-gray-600">
                Flight Number:
              </span>
              <span className="text-gray-800">{flightNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-600">Airline:</span>
              <span className="text-gray-800">{airline}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-600">Origin:</span>
              <span className="text-gray-800">{origin}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-600">Destination:</span>
              <span className="text-gray-800">{destination}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-600">Duration:</span>
              <span className="text-gray-800">{duration}</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="font-semibold text-gray-600">Date:</span>
              <span className="text-gray-800">
                {new Date(date).toLocaleDateString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-600">Time:</span>
              <span className="text-gray-800">{time}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-600">Price:</span>
              <span className="text-gray-800">${price.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-600">
                Available Seats:
              </span>
              <span className="text-gray-800">{availableSeats}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 focus:outline-none">
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};
