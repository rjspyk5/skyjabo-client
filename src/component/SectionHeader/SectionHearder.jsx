import React from "react";

export const SectionHearder = ({ title }) => {
  return (
    <div>
      <h2 className="lg:text-4xl font-bold md:text-3xl text-2xl">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="">
          <div class="card flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform">
            <div class="icon text-blue-500 text-4xl mb-4">✈️</div>
            <h4 class="text-sm font-medium text-gray-500 mb-1">Step One</h4>
            <h3 class="text-xl font-semibold mb-2">Search Flights</h3>
            <p class="text-gray-600 text-sm text-center">
              Explore and compare flights to find the best options for your
              trip.
            </p>
          </div>
        </div>
        <div className="">
          <div class="card flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform">
            <div class="icon text-blue-500 text-4xl mb-4">🎟️</div>
            <h4 class="text-sm font-medium text-gray-500 mb-1">Step Two</h4>
            <h3 class="text-xl font-semibold mb-2">Select Your Ticket</h3>
            <p class="text-gray-600 text-sm text-center">
              Pick the perfect flight that suits your schedule and budget.
            </p>
          </div>
        </div>
        <div className="">
          <div class="card flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform">
            <div class="icon text-blue-500 text-4xl mb-4">📝</div>
            <h4 class="text-sm font-medium text-gray-500 mb-1">Step Three</h4>
            <h3 class="text-xl font-semibold mb-2">Enter Details</h3>
            <p class="text-gray-600 text-sm text-center">
              Provide passenger information and special requests.
            </p>
          </div>
        </div>
        <div className="">
          <div class="card flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform">
            <div class="icon text-blue-500 text-4xl mb-4">✔️</div>
            <h4 class="text-sm font-medium text-gray-500 mb-1">Step Four</h4>
            <h3 class="text-xl font-semibold mb-2">Book & Confirm</h3>
            <p class="text-gray-600 text-sm text-center">
              Secure your booking and get instant confirmation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
