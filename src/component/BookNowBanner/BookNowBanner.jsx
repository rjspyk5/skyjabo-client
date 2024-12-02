import React from "react";
import img from "../../assets/images/img (21).jpg";
import { useNavigate } from "react-router";

export const BookNowBanner = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="hero "
        style={{
          backgroundImage: `url("${img}")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md space-y-3">
            <h2 className="sm:text-4xl text-2xl font-bold mb-6 text-white">
              Explore the World
            </h2>
            <p className="sm:text-lg text-base text-center text-gray-50">
              Embark on unforgettable journeys. Book your dream vacation today!
            </p>
            <button
              onClick={() => navigate("/flights")}
              type="button"
              className="mt-12  text-white text-base py-3 px-6 border border-white rounded-lg bg-primary hover:bg-pink-500 transition duration-300"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
