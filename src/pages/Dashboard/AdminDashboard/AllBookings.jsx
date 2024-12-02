import React from "react";
import { DashboardSectionHeader } from "./DashboardSectionHeader";
import { useQuery } from "@tanstack/react-query";
import { useAxiosSequre } from "../../../hooks/useAxiosSequre";
import { curdOperationChecker } from "../../../utlis/curdOperationChecker";

export const AllBookings = () => {
  const axiosSequre = useAxiosSequre();

  const {
    data = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allFlights"],
    queryFn: async () => {
      const result = await axiosSequre.get("/bookings");
      return result.data;
    },
  });

  const handleCancel = async (id) => {
    const result = await axiosSequre.put(`/bookings/${id}`, {
      bookingStatus: "cancelled",
    });
    curdOperationChecker(result);
    refetch();
  };

  const handleDelete = async (id) => {
    const result = await axiosSequre.delete(`/bookings/${id}`);
    curdOperationChecker(result);
    refetch();
  };

  const handleConfirm = async (id) => {
    const result = await axiosSequre.put(`/bookings/${id}`, {
      bookingStatus: "confirmed",
    });
    curdOperationChecker(result);
    refetch();
  };

  return (
    <main className="p-6">
      <section className="mb-12">
        <DashboardSectionHeader heading="All Bookings" />
        {isLoading ? (
          <h1>Loading....</h1>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full table-auto bg-white shadow rounded-lg">
              <thead>
                <tr className="bg-primary text-white border-none">
                  <th className="p-2 md:p-4 text-left">Booking ID</th>
                  <th className="p-2 md:p-4 text-left">Passenger Name</th>
                  <th className="p-2 md:p-4 text-left">Phone</th>
                  <th className="p-2 md:p-4 text-left">Seats</th>
                  <th className="p-2 md:p-4 text-left">Total Price</th>
                  <th className="p-2 md:p-4 text-left">Status</th>
                  <th className="p-2 md:p-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((booking) => (
                  <tr key={booking._id} className="border-t">
                    <td className="p-2 md:p-4 text-gray-800">{booking._id}</td>
                    <td className="p-2 md:p-4 text-gray-800">{booking.name}</td>
                    <td className="p-2 md:p-4 text-gray-800">
                      {booking.phone}
                    </td>
                    <td className="p-2 md:p-4 text-gray-800">
                      {booking.numberOfSeats}
                    </td>
                    <td className="p-2 md:p-4 text-gray-800">
                      ${booking.totalPrice}
                    </td>
                    <td
                      className={`p-2 md:p-4 font-semibold ${
                        booking.bookingStatus === "confirmed"
                          ? "text-green-600"
                          : booking.bookingStatus === "cancelled"
                          ? "text-red-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {booking.bookingStatus}
                    </td>
                    <td className="p-2 md:p-4 space-x-2 flex">
                      {booking.bookingStatus === "pending" && (
                        <>
                          <button
                            className="btn btn-sm bg-green-500 text-white border-none"
                            onClick={() => handleConfirm(booking._id)}
                          >
                            Confirm
                          </button>
                          <button
                            className="btn btn-sm bg-red-500 text-white border-none"
                            onClick={() => handleCancel(booking._id)}
                          >
                            Cancel
                          </button>
                        </>
                      )}

                      {booking.bookingStatus === "confirmed" && (
                        <>
                          <button
                            className="btn btn-sm bg-red-500 text-white border-none"
                            onClick={() => handleCancel(booking._id)}
                          >
                            Cancel
                          </button>
                        </>
                      )}

                      {booking.bookingStatus === "cancelled" && (
                        <>
                          <button
                            className="btn btn-sm bg-gray-500 text-white border-none"
                            onClick={() => handleDelete(booking._id)}
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
};
