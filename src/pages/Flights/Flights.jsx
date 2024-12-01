import React, { useEffect, useState } from "react";
import { SearchSection } from "../../component/Hero/SearchSection/SearchSection";

import { useQuery } from "@tanstack/react-query";
import { useAxiosPublic } from "./../../hooks/useAxiosPublic";
import { useLocation, useNavigate, useParams } from "react-router";
import { useAxiosSequre } from "../../hooks/useAxiosSequre";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { Filter } from "./Filter";
import { FlightCard } from "./FlightCard";
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
        {/* Filter Section for large screen end */}

        <div className="flex-1">
          <div className="flex justify-between">
            {/* Mobile Device Filter Section */}
            <details className="dropdown lg:hidden">
              <summary className="btn m-1 lg:hidden flex justify-center items-center">
                {" "}
                <HiOutlineAdjustmentsHorizontal /> Filter
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-96 p-2 shadow">
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
              </ul>
            </details>
            {/* Mobile device Filter Section End */}

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
              <FlightCard key={flight._id} flight={flight} />
            ))}
        </div>
      </div>
    </div>
  );
};
