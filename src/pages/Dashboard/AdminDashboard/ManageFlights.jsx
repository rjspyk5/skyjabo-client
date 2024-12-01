import React, { useState } from "react";
import { useNavigate } from "react-router";
import { DashboardSectionHeader } from "./DashboardSectionHeader";
import { ModallForFlightCreate } from "../../../component/ModalForFlightCreate/ModallForFlightCreate";
import { useQuery } from "@tanstack/react-query";
import { useAxiosSequre } from "./../../../hooks/useAxiosSequre";
import { curdOperationChecker } from "../../../utlis/curdOperationChecker";
import Swal from "sweetalert2";
import { ModallForEditFlight } from "../../../component/ModalForEditFlight/ModalForEditFlight";

export const ManageFlights = () => {
  const axiosSequre = useAxiosSequre();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["loadAllFlights"],
    queryFn: async () => {
      const result = await axiosSequre.get("/admin/flight");
      return result.data;
    },
  });

  const handleDelte = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#00bf4c",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      const result = await axiosSequre.delete(`/flights/${id}`);
      curdOperationChecker(result);
      refetch();
    }
  };

  return (
    <main className="p-6">
      <section className="mb-12">
        <DashboardSectionHeader heading="Manage Flights" />
        <div className="flex justify-end mb-3">
          <label
            htmlFor="my_modal_6"
            className=" cursor-pointer   bg-green-600 text-white px-3 py-2 rounded-lg"
          >
            Create Flight
          </label>
        </div>

        <ModallForFlightCreate htmlfor="my_modal_6" refetch={refetch} />

        <div className="overflow-x-auto">
          <table className="table w-full table-auto bg-white shadow rounded-lg">
            <thead>
              <tr className="bg-primary text-white">
                <th className="p-2 md:p-4 text-left">Flight #</th>
                <th className="p-2 md:p-4 text-left">Airline</th>
                <th className="p-2 md:p-4 text-left">Origin</th>
                <th className="p-2 md:p-4 text-left">Destination</th>
                <th className="p-2 md:p-4 text-left">Date</th>
                <th className="p-2 md:p-4 text-left">Time</th>
                <th className="p-2 md:p-4 text-left">Price</th>
                <th className="p-2 md:p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data?.map((flight) => (
                  <tr key={flight._id} className="border-t">
                    <td className="p-2 md:p-4 text-gray-800">
                      {flight.flightNumber}
                    </td>
                    <td className="p-2 md:p-4 text-gray-800">
                      {flight.airline}
                    </td>
                    <td className="p-2 md:p-4 text-gray-800">
                      {flight.origin}
                    </td>
                    <td className="p-2 md:p-4 text-gray-800">
                      {flight.destination}
                    </td>
                    <td className="p-2 md:p-4 text-gray-800">{flight.date}</td>
                    <td className="p-2 md:p-4 text-gray-800">{flight.time}</td>
                    <td className="p-2 md:p-4 text-gray-800">
                      ${flight.price}
                    </td>
                    <td className="p-2 md:p-4 space-x-2 flex">
                      <label
                        htmlFor="my_modal_7"
                        className="btn btn-sm bg-info border-none text-white"
                      >
                        Edit
                      </label>
                      <ModallForEditFlight
                        htmlfor="my_modal_7"
                        refetch={refetch}
                        data={flight}
                      />
                      <button
                        onClick={() => handleDelte(flight._id)}
                        className="btn btn-sm bg-red-500 border-none text-white"
                      >
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
