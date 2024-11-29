import React, { useState } from "react";
import { DashboardSectionHeader } from "./DashboardSectionHeader";

export const AllBookings = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      passengerName: "rakib",
      flightNumber: "UA123",
      origin: "LAX",
      destination: "JFK",
      status: "Confirmed",
    },
    {
      id: 2,
      passengerName: "alif",
      flightNumber: "AA456",
      origin: "ORD",
      destination: "MIA",
      status: "Pending",
    },
  ]);

  return (
    <main className=" p-6">
      <section className="mb-12">
        <DashboardSectionHeader heading="All Bookings" />

        <div className="overflow-x-auto">
          <table className="table w-full table-auto bg-white shadow rounded-lg">
            <thead>
              <tr className="bg-primary *:text-white border-none">
                <th className="p-2 md:p-4 text-left">Booking ID</th>
                <th className="p-2 md:p-4 text-left">Passenger Name</th>
                <th className="p-2 md:p-4 text-left">Flight #</th>
                <th className="p-2 md:p-4 text-left">Origin</th>
                <th className="p-2 md:p-4 text-left">Destination</th>
                <th className="p-2 md:p-4 text-left">Status</th>
                <th className="p-2 md:p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-t">
                  <td className="p-2 md:p-4 text-gray-800">{booking.id}</td>
                  <td className="p-2 md:p-4 text-gray-800">
                    {booking.passengerName}
                  </td>
                  <td className="p-2 md:p-4 text-gray-800">
                    {booking.flightNumber}
                  </td>
                  <td className="p-2 md:p-4 text-gray-800">{booking.origin}</td>
                  <td className="p-2 md:p-4 text-gray-800">
                    {booking.destination}
                  </td>
                  <td
                    className={`p-2 md:p-4 font-semibold ${
                      booking.status === "Confirmed"
                        ? "text-green-600"
                        : booking.status === "Cancelled"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {booking.status}
                  </td>
                  <td className="p-2 md:p-4 space-x-2 flex">
                    <button className="btn btn-sm bg-orange-500 border-none text-white">
                      View
                    </button>
                    {booking.status !== "Cancelled" && (
                      <button className="btn btn-sm bg-red-500 text-white border-none">
                        Cancel
                      </button>
                    )}
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
