import React, { useEffect, useState } from "react";
import { SearchSection } from "../../component/Hero/SearchSection/SearchSection";
import img from "../../assets/images/low/img (1).jpg";
import { useQuery } from "@tanstack/react-query";
import { useAxiosPublic } from "./../../hooks/useAxiosPublic";
import { useLocation, useNavigate, useParams } from "react-router";
import { useAxiosSequre } from "../../hooks/useAxiosSequre";

import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { Filter } from "./Filter";
export const Flights = () => {
  const navigate = useNavigate();
  const [priceRange, setPriceRange] = useState([20, 80]);
  const [availableRange, setavailableRange] = useState([20, 80]);
  const [durationRange, setDurationRange] = useState([20, 80]);

  const { state } = useLocation();
  const axiosSequre = useAxiosSequre();
  const [clearSearch, setclearSearch] = useState(false);
  const axiosPublic = useAxiosPublic();
  const [searchParams, setSearchParams] = useState({
    origin: "",
    destination: "",
    date: "",
  });

  useEffect(() => {
    const origin = state?.origin || "";
    const destination = state?.destination || "";
    const date = state?.date || "";
    setSearchParams({
      origin,
      destination,
      date,
    });
  }, []);

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["flights", searchParams],
    queryFn: async () => {
      const { origin, destination, date } = searchParams;

      if (origin && destination && date) {
        const response = await axiosPublic.get("/flights/search", {
          params: {
            origin,
            destination,
            date,
          },
        });
        return response.data;
      } else {
        const response = await axiosPublic.get("/flights");
        return response.data;
      }
    },
  });

  return (
    <div className="pt-10">
      <div className="mb-10">
        <SearchSection
          setSearchParams={setSearchParams}
          clearSearch={clearSearch}
        />
      </div>
      <div className="flex gap-16">
        {/* Filters Section for large screen */}
        <div className="w-[25%] hidden lg:block space-y-5">
          <div className="flex justify-between p-3 border-b">
            <h6> Filters</h6>
            <span>clear</span>
          </div>
          <Filter
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            durationRange={durationRange}
            setDurationRange={setDurationRange}
            availableRange={availableRange}
            setavailableRange={setavailableRange}
          />
        </div>
        {/* Flights List Section */}

        <div className="flex-1">
          <div className="flex justify-between">
            <details className="dropdown lg:hidden">
              <summary className="btn m-1 lg:hidden flex justify-center items-center">
                {" "}
                <HiOutlineAdjustmentsHorizontal /> Filter
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-96 p-2 shadow">
                {/* Mobile Device Filter Section */}

                <div className="space-y-3 ">
                  <Filter
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    durationRange={durationRange}
                    setDurationRange={setDurationRange}
                    availableRange={availableRange}
                    setavailableRange={setavailableRange}
                  />
                </div>
                {/* Mobile device Filter Section End */}
              </ul>
            </details>

            <h6 className="md:text-2xl  font-bold p-4">
              {!isLoading && searchParams?.origin
                ? `${data?.length} flights available based on your search`
                : "Showing All Flights from our own database"}
            </h6>
            {searchParams?.origin && (
              <p
                onClick={() => {
                  setSearchParams({});
                  setclearSearch(true);
                }}
                className="btn"
              >
                clear search
              </p>
            )}
          </div>

          {!isLoading &&
            data?.map((flight) => (
              <div
                className="p-5 flex flex-col gap-5 md:flex-row md:items-center bg-white rounded-md justify-between mb-5"
                key={flight._id}
              >
                {/* Airline Info */}
                <div className="md:flex md:flex-col hidden  justify-center items-center">
                  <img className="w-20" src={flight.img} alt={flight.airline} />
                  <p>{flight.airline}</p>
                </div>
                {/* Timeline */}
                <div className="flex justify-between">
                  <div className="md:hidden block">
                    <img
                      className="w-20"
                      src={flight.img}
                      alt={flight.airline}
                    />
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
                <div className="font-bold text-2xl hidden md:block">
                  {flight.price}
                </div>
                {/* Buttons */}
                <div className="md:flex md:flex-col gap-1 hidden ">
                  <button
                    className="btn md:btn-md btn-sm"
                    onClick={() => navigate(`/flight/${flight._id}`)}
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => navigate(`/book/${flight?._id}`)}
                    className="btn md:btn-md btn-sm"
                  >
                    Book Now
                  </button>
                </div>
                {/* Mobile View */}
                <div className="flex justify-between items-center w-full md:hidden">
                  <p className="font-bold text-2xl">{flight.price}</p>
                  <div className="flex flex-col gap-1">
                    <button
                      className="btn md:btn-md btn-sm"
                      onClick={() => navigate(`/flight/${flight._id}`)}
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
