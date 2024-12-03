import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./Flights.css";
import { useQuery } from "@tanstack/react-query";
import { useAxiosPublic } from "../../hooks/useAxiosPublic";

export const Filter = ({
  priceRange,
  setPriceRange,
  durationRange,
  setDurationRange,
  availableRange,
  setavailableRange,
  selectedAirlines,
  setSelectedAirlines,
}) => {
  const axiosPublic = useAxiosPublic();
  const { data: airlines, isLoading } = useQuery({
    queryKey: ["airlines"],
    queryFn: async () => {
      const response = await axiosPublic.get("/airlines");
      return response.data;
    },
  });

  const handleAirlineChange = (airline) => {
    setSelectedAirlines((prev) =>
      prev.includes(airline)
        ? prev.filter((a) => a !== airline)
        : [...prev, airline]
    );
  };

  return (
    <>
      {/* Price Range */}
      <div className="p-3 bg-white text-black rounded-lg space-y-3">
        <h6>Price</h6>
        <RangeSlider
          min={0}
          max={10000}
          value={priceRange}
          onInput={(value) => setPriceRange(value)}
        />
        <div className="slider-labels flex justify-between">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Duration Range */}
      <div className="p-3 bg-white text-black rounded-lg space-y-3">
        <h6>Duration</h6>
        <RangeSlider
          min={0}
          max={50}
          value={durationRange}
          onInput={(value) => setDurationRange(value)}
        />
        <div className="slider-labels flex justify-between">
          <span>{durationRange[0]} h</span>
          <span>{durationRange[1]} h</span>
        </div>
      </div>

      {/* Available Seats */}
      <div className="p-3 bg-white text-black rounded-lg space-y-3">
        <h6>Available Seats</h6>
        <RangeSlider
          min={0}
          max={100}
          value={availableRange}
          onInput={(value) => setavailableRange(value)}
        />
        <div className="slider-labels flex justify-between">
          <span>{availableRange[0]}</span>
          <span>{availableRange[1]}</span>
        </div>
      </div>

      {/* Airlines */}
      <details className="collapse collapse-open !rounded-lg bg-white collapse-arrow max-h-48 overflow-auto">
        <summary className="collapse-title text-black cursor-pointer">
          Airlines
        </summary>
        <div className="collapse-content bg-white text-black rounded-lg space-y-3">
          {isLoading ? (
            <p>Loading airlines...</p>
          ) : (
            airlines?.map((airline, index) => (
              <div className="form-control" key={index}>
                <label className="label py-1 justify-normal space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox custom-checkbox"
                    checked={selectedAirlines?.includes(airline)}
                    onChange={() => handleAirlineChange(airline)}
                  />
                  <span className="label-text text-black">{airline}</span>
                </label>
              </div>
            ))
          )}
        </div>
      </details>
    </>
  );
};
