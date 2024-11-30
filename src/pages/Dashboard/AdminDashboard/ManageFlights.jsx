import React, { useState } from "react";
import { useNavigate } from "react-router";
import { DashboardSectionHeader } from "./DashboardSectionHeader";

export const ManageFlights = () => {
  const navigate = useNavigate();

  const [flights, setFlights] = useState([
    {
      id: 1,
      flightNumber: "UA123",
      airline: "United Airlines",
      origin: "LAX",
      destination: "JFK",
      price: 500,
    },
    {
      id: 2,
      flightNumber: "AA456",
      airline: "American Airlines",
      origin: "ORD",
      destination: "MIA",
      price: 400,
    },
  ]);

  return (
    <main className="p-6">
      <section className="mb-12">
        <DashboardSectionHeader heading="Manage Flights" />
        <div className="flex justify-end mb-3">
          <button
            onClick={() => document.getElementById("my_modal_4").showModal()}
            className=" cursor-pointer  bg-green-600 text-white px-3 py-2 rounded-lg"
          >
            Create Flight
          </button>
        </div>

        {/* Modal Start */}

        <dialog id="my_modal_4" className="modal">
          >
          <div className="modal-box relative">
            <form method="dialog" className="space-y-4">
              {/* Close button */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>

              <h3 className="font-bold text-xl text-center">
                Create New Flight
              </h3>

              {/* Flight Name */}
              <div>
                <label className="label">
                  <span className="label-text">Flight Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter flight name"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Departure */}
              <div>
                <label className="label">
                  <span className="label-text">Departure Location</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter departure location"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Destination */}
              <div>
                <label className="label">
                  <span className="label-text">Destination</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter destination"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Date */}
              <div>
                <label className="label">
                  <span className="label-text">Departure Date</span>
                </label>
                <input
                  type="date"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Price */}
              <div>
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  placeholder="Enter price"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="modal-action">
                <button type="submit" className="btn btn-primary">
                  Create Flight
                </button>
              </div>
            </form>
          </div>
        </dialog>
        {/* Modal End */}

        <div className="overflow-x-auto">
          <table className="table w-full table-auto bg-white shadow rounded-lg">
            <thead>
              <tr className="bg-primary text-white">
                <th className="p-2 md:p-4 text-left">Flight #</th>
                <th className="p-2 md:p-4 text-left">Airline</th>
                <th className="p-2 md:p-4 text-left">Origin</th>
                <th className="p-2 md:p-4 text-left">Destination</th>
                <th className="p-2 md:p-4 text-left">Price</th>
                <th className="p-2 md:p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {flights.map((flight) => (
                <tr key={flight.id} className="border-t">
                  <td className="p-2 md:p-4 text-gray-800">
                    {flight.flightNumber}
                  </td>
                  <td className="p-2 md:p-4 text-gray-800">{flight.airline}</td>
                  <td className="p-2 md:p-4 text-gray-800">{flight.origin}</td>
                  <td className="p-2 md:p-4 text-gray-800">
                    {flight.destination}
                  </td>
                  <td className="p-2 md:p-4 text-gray-800">${flight.price}</td>
                  <td className="p-2 md:p-4 space-x-2 flex">
                    <button className="btn btn-sm bg-info border-none text-white">
                      Edit
                    </button>
                    <button className="btn btn-sm bg-red-500 border-none text-white">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};
