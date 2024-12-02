import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate, useParams } from "react-router";
import { useAxiosSequre } from "../../hooks/useAxiosSequre";
import { useAxiosPublic } from "../../hooks/useAxiosPublic";
import { Loading } from "../../component/Loading/Loading";

export const FlightDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const {
    data: flight,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["singleFlight"],
    queryFn: async () => {
      const result = await axiosPublic.get(`/flight/${id}`);
      return result.data;
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 p-8 pt-20">
      <button
        onClick={() => navigate(-1)}
        className=" p-3 bg-primary text-white rounded-lg shadow-md hover:bg-[#e93574f4] focus:outline-none"
      >
        Back
      </button>

      {isLoading ? (
        <Loading />
      ) : (
        <>
          {" "}
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
                  <span className="text-gray-800">{flight?.flightNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-600">Airline:</span>
                  <span className="text-gray-800">{flight?.airline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-600">Origin:</span>
                  <span className="text-gray-800">{flight?.origin}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-600">
                    Destination:
                  </span>
                  <span className="text-gray-800">{flight?.destination}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-600">Duration:</span>
                  <span className="text-gray-800">{flight?.duration}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-600">Date:</span>
                  <span className="text-gray-800">
                    {new Date(flight?.date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-600">Time:</span>
                  <span className="text-gray-800">{flight?.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-600">Price:</span>
                  <span className="text-gray-800">
                    ${flight?.price.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-600">
                    Available Seats:
                  </span>
                  <span className="text-gray-800">
                    {flight?.availableSeats}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={() => navigate(`/book/${flight?._id}`)}
                className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 focus:outline-none"
              >
                Book Now
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
