import React, { useState, useEffect } from "react";
import { useAxiosSequre } from "../../../hooks/useAxiosSequre";
import { useAuth } from "../../../hooks/useAuth";
import { curdOperationChecker } from "../../../utlis/curdOperationChecker";
import Swal from "sweetalert2";
import { Loading } from "../../../component/Loading/Loading";

export const MyBookings = () => {
  const { user } = useAuth();
  const axiosSequre = useAxiosSequre();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleCancel = async (bookingId) => {
    const result = await Swal.fire({
      title: "Are you sure you want to cancel?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#00bf4c",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    });
    try {
      if (result.isConfirmed) {
        const result = await axiosSequre.put(`/booking/cancel/${bookingId}`, {
          bookingStatus: "cancelled",
        });
        curdOperationChecker(result);
      }
    } catch (error) {
      console.error("Error canceling the booking:", error);
    }
  };

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const bookingRes = await axiosSequre.get(
          `/booking/user/${user?.userId}`
        );
        const bookingsWithFlights = [];
        for (const booking of bookingRes?.data) {
          const flightRes = await axiosSequre.get(
            `/flight/${booking.flightId}`
          );
          bookingsWithFlights.push({
            ...booking,
            flightDetails: flightRes.data,
          });
        }
        setBookings(bookingsWithFlights);
      } catch (err) {
        console.error("Error fetching bookings or flight details:", err);
      } finally {
        setLoading(false);
      }
    };
    if (user) {
      fetchBookings();
    }
  }, [handleCancel]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-[400px] ">
      <section className=" w-full pb-10 pt-20 text-center text-white">
        <h1 className="text-4xl font-semibold mb-4">My Bookings</h1>
        <p className="text-lg">Manage flight bookings</p>
      </section>

      <div className="container mx-auto pb-8 px-4">
        <div className="overflow-x-auto bg-white rounded-lg shadow-xl">
          <table className="table-auto w-full text-left text-gray-800">
            <thead className="bg-gray-600 text-white">
              <tr>
                <th className="py-2 px-2">Booking ID</th>
                <th className="py-2 px-2">Customer Name</th>
                <th className="py-2 px-2">Flight Name</th>
                <th className="py-2 px-2">Route</th>
                <th className="py-2 px-2">Date & Time</th>
                <th className="py-2 px-2">Seats</th>
                <th className="py-2 px-2">Total Price</th>
                <th className="py-2 px-2">Status</th>
                <th className="py-2 px-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length === 0 ? (
                <tr>
                  <td colSpan="8" className="text-center py-4 text-gray-600">
                    No bookings found.
                  </td>
                </tr>
              ) : (
                bookings.map((booking) => (
                  <tr key={booking._id} className="border-b hover:bg-pink-100">
                    <td className="py-2 px-2">{booking._id}</td>
                    <td className="py-2 px-2">{booking.name}</td>
                    <td className="py-2 px-2">
                      {booking.flightDetails.airline}
                    </td>
                    <td className="py-2 px-2">
                      {booking.flightDetails.origin} to{" "}
                      {booking.flightDetails.destination}
                    </td>
                    <td className="py-2 px-2">
                      {new Date(
                        booking.flightDetails.date
                      ).toLocaleDateString()}{" "}
                      {booking.flightDetails.time}
                    </td>
                    <td className="py-2 px-2">{booking.numberOfSeats}</td>
                    <td className="py-2 px-2">
                      ${booking.totalPrice.toFixed(2)}
                    </td>
                    <td className="py-2 px-2">
                      <span
                        className={`px-2 py-2 rounded-full  ${
                          booking.bookingStatus === "confirmed"
                            ? "text-green-500"
                            : booking.bookingStatus === "pending"
                            ? "text-yellow-500"
                            : "text-red-500"
                        }`}
                      >
                        {booking.bookingStatus}
                      </span>
                    </td>
                    <td className="py-2 px-2">
                      {booking.bookingStatus === "pending" && (
                        <button
                          className="bg-red-600 text-white px-2 py-2 rounded-md hover:bg-red-700 transition"
                          onClick={() => handleCancel(booking._id)}
                        >
                          Cancel
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
