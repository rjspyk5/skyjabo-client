import React from "react";
import { SearchSection } from "../../component/Hero/SearchSection/SearchSection";
import img from "../../assets/images/low/img (1).jpg";

export const Flights = () => {
  return (
    <div className="pt-10 ">
      <div className="mb-10">
        <SearchSection />
      </div>
      <div className="flex gap-16">
        <div className="w-[25%]  space-y-5">
          <div className="flex justify-between p-3  border-b">
            <h6>Filters</h6>
            <span>clear</span>
          </div>
          <div className="p-3 bg-white text-black rounded-lg space-y-3">
            <h6>Price</h6>
            <input
              type="range"
              min={0}
              max="100"
              value="40"
              className="range range-xs"
            />
          </div>
          <div className="p-3 bg-white text-black rounded-lg space-y-3">
            <h6>Duration</h6>
            <input
              type="range"
              min={0}
              max="100"
              value="40"
              className="range range-xs"
            />
          </div>
          <div className="p-3 bg-white text-black rounded-lg space-y-3 h-48 overflow-auto">
            <h6>Airelines</h6>
            <div className="form-control">
              <label className="label justify-normal space-x-2 cursor-pointer">
                <input type="checkbox" defaultChecked className="checkbox" />{" "}
                <span className="label-text">Remember me</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label justify-normal space-x-2 cursor-pointer">
                <input type="checkbox" defaultChecked className="checkbox" />{" "}
                <span className="label-text">Remember me</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label justify-normal space-x-2 cursor-pointer">
                <input type="checkbox" defaultChecked className="checkbox" />{" "}
                <span className="label-text">Remember me</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label justify-normal space-x-2 cursor-pointer">
                <input type="checkbox" defaultChecked className="checkbox" />{" "}
                <span className="label-text">Remember me</span>
              </label>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h6 className="text-2xl font-bold text-center p-4">
            20 Seats Available
          </h6>
          <div className="p-5 flex items-center bg-white rounded-md justify-between">
            <div className="flex flex-col justify-center items-center ">
              <img className="w-20" src={img} alt="" />
              <p>Test Airelines</p>
            </div>
            {/* timeline */}
            <ul className="timeline">
              <li>
                <div className="timeline-start">1984</div>
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
                <div className="timeline-end timeline-box">
                  First Macintosh computer
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-start">1998</div>
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
                <div className="timeline-end timeline-box">iMac</div>
                <hr />
              </li>

              <li>
                <hr />
                <div className="timeline-start">2015</div>
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
                <div className="timeline-end timeline-box">Apple Watch</div>
              </li>
            </ul>
            {/* price */}
            <div className="font-bold text-2xl">$500</div>
            <div className="flex flex-col">
              <button className="btn">View Details</button>
              <button className="btn">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
