import React, { useEffect, useState } from "react";
import { SearchSection } from "../../component/Hero/SearchSection/SearchSection";
import { useQuery } from "@tanstack/react-query";
import { useAxiosPublic } from "../../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router";
import { useAxiosSequre } from "../../hooks/useAxiosSequre";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { Filter } from "./Filter";
import { FlightCard } from "./FlightCard";
import { Loading } from "../../component/Loading/Loading";
import { Fade } from "react-awesome-reveal";

export const Flights = () => {
  const navigate = useNavigate();
  const [priceRange, setPriceRange] = useState([1, 10000]);
  const [availableRange, setavailableRange] = useState([1, 100]);
  const [durationRange, setDurationRange] = useState([1, 50]);
  const [selectedAirlines, setSelectedAirlines] = useState([]);
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
  }, [state]);

  const { data, refetch, isLoading } = useQuery({
    queryKey: [
      "flights",
      searchParams,
      priceRange,
      durationRange,
      availableRange,
      selectedAirlines,
    ],
    queryFn: async () => {
      const { origin, destination, date } = searchParams;
      const response = await axiosPublic.get("/flights/search", {
        params: {
          origin,
          destination,
          date,
          minPrice: priceRange[0],
          maxPrice: priceRange[1],
          minDuration: durationRange[0],
          maxDuration: durationRange[1],
          minSeats: availableRange[0],
          maxSeats: availableRange[1],
          airlines: selectedAirlines.length ? selectedAirlines : undefined,
        },
      });
      return response.data;
    },
  });

  useEffect(() => {
    refetch();
  }, [
    priceRange,
    durationRange,
    availableRange,
    searchParams,
    selectedAirlines,
    refetch,
  ]);

  return (
    <Fade>
      {" "}
      <div className="pt-10 pb-10 max-w-[1200px] px-10 mx-auto">
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
            </div>
            <Filter
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              durationRange={durationRange}
              setDurationRange={setDurationRange}
              availableRange={availableRange}
              setavailableRange={setavailableRange}
              selectedAirlines={selectedAirlines}
              setSelectedAirlines={setSelectedAirlines}
            />
          </div>

          <div className="flex-1">
            <div className="flex justify-between">
              {/* Mobile Device Filter Section */}
              <details className="dropdown lg:hidden">
                <summary className="btn m-1 lg:hidden flex justify-center items-center">
                  <HiOutlineAdjustmentsHorizontal /> Filter
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-96 p-2 shadow">
                  <div className="space-y-3">
                    <Filter
                      priceRange={priceRange}
                      setPriceRange={setPriceRange}
                      durationRange={durationRange}
                      setDurationRange={setDurationRange}
                      availableRange={availableRange}
                      setavailableRange={setavailableRange}
                      selectedAirlines={selectedAirlines}
                      setSelectedAirlines={setSelectedAirlines}
                    />
                  </div>
                </ul>
              </details>

              <h6 className="md:text-2xl font-bold p-4">
                {!isLoading && `Total ${data?.length} flights available`}
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

            {isLoading ? (
              <Loading />
            ) : (
              data?.map((flight) => (
                <FlightCard key={flight._id} flight={flight} />
              ))
            )}
          </div>
        </div>
      </div>{" "}
    </Fade>
  );
};
