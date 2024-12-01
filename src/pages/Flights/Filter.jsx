import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./Flights.css";

export const Filter = ({
  priceRange,
  setPriceRange,
  durationRange,
  setDurationRange,
  availableRange,
  setavailableRange,
}) => {
  return (
    <>
      <div className="p-3 bg-white text-black rounded-lg space-y-3">
        <h6>Price</h6>
        <RangeSlider
          min={0}
          max={100}
          defaultValue={priceRange}
          onInput={setPriceRange}
        />
        <div className="slider-labels flex justify-between">
          <span>{priceRange[0]}</span>
          <span>{priceRange[1]}</span>
        </div>
      </div>
      <div className="p-3 bg-white text-black rounded-lg space-y-3">
        <h6>Duration</h6>
        <RangeSlider
          min={0}
          max={100}
          defaultValue={durationRange}
          onInput={setDurationRange}
        />
        <div className="slider-labels flex justify-between">
          <span>{durationRange[0]}</span>
          <span>{durationRange[1]}</span>
        </div>
      </div>
      <div className="p-3 bg-white text-black rounded-lg space-y-3">
        <h6>Available Seats</h6>
        <RangeSlider
          min={0}
          max={100}
          defaultValue={availableRange}
          onInput={setavailableRange}
        />
        <div className="slider-labels flex justify-between">
          <span>{availableRange[0]}</span>
          <span>{availableRange[1]}</span>
        </div>
      </div>
      {/* Airlines */}
      <details className="collapse collapse-open !rounded-lg bg-white collapse-arrow max-h-48 overflow-auto">
        <summary className="collapse-title  text-black cursor-pointer">
          Airlines
        </summary>
        <div className="collapse-content bg-white text-black rounded-lg space-y-3 ">
          {["Airline 1", "Airline 2", "Airline 3", "Airline 4"].map(
            (airline, index) => (
              <div className="form-control" key={index}>
                <label className="label py-1 justify-normal space-x-2 cursor-pointer">
                  <input type="checkbox" className="checkbox custom-checkbox" />
                  <span className="label-text text-black">{airline}</span>
                </label>
              </div>
            )
          )}
        </div>
      </details>
    </>
  );
};
