import React from "react";
import { SectionHearder } from "../SectionHeader/SectionHearder";

export const HowItWork = () => {
  return (
    <div>
      <SectionHearder title="How To Buy Tickets" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="">
          <div className="card flex space-y-1 flex-col items-center px-6 py-4 bg-gradient-to-br from-white to-[#d6d4d4] shadow-lg rounded-lg hover:bg-gradient-to-r !duration-300 !transition-all">
            <div className="icon text-blue-500 text-4xl mb-4">✈️</div>
            <h4 className="text-gray-700 mb-1 text-lg font-bold">Step One</h4>
            <h3 className="text-xl text-gray-500 font-semibold mb-2">
              Search Flights
            </h3>
            <p className="text-gray-600 text-sm text-center">
              Explore and compare flights to find the best options for your
              trip.
            </p>
          </div>
        </div>

        {/* Second Card */}
        <div className="">
          <div className="card flex space-y-1 flex-col items-center px-6 py-4 bg-gradient-to-br from-white to-[#d6d4d4] shadow-lg rounded-lg hover:bg-gradient-to-r !duration-300 !transition-all">
            <div className="icon text-blue-500 text-4xl mb-4">🎟️</div>
            <h4 className="text-gray-700 mb-1 text-lg font-bold">Step Two</h4>
            <h3 className="text-xl text-gray-500 font-semibold mb-2">
              Select Your Ticket
            </h3>
            <p className="text-gray-600 text-sm text-center">
              Pick the perfect flight that suits your schedule and budget.
            </p>
          </div>
        </div>

        {/* Third Card */}
        <div className="">
          <div className="card flex space-y-1 flex-col items-center px-6 py-4 bg-gradient-to-br from-white to-[#d6d4d4] shadow-lg rounded-lg hover:bg-gradient-to-r !duration-300 !transition-all">
            <div className="icon text-blue-500 text-4xl mb-4">📝</div>
            <h4 className="text-gray-700 mb-1 text-lg font-bold">Step Three</h4>
            <h3 className="text-xl text-gray-500 font-semibold mb-2">
              Enter Details
            </h3>
            <p className="text-gray-600 text-sm text-center">
              Provide passenger information and special requests.
            </p>
          </div>
        </div>

        {/* Fourth Card */}
        <div className="">
          <div className="card flex space-y-1 flex-col items-center px-6 py-4 bg-gradient-to-br from-white to-[#d6d4d4] shadow-lg rounded-lg hover:bg-gradient-to-r !duration-300 !transition-all">
            <div className="icon text-blue-500 text-4xl mb-4">✔️</div>
            <h4 className="text-gray-700 mb-1 text-lg font-bold">Step Four</h4>
            <h3 className="text-xl text-gray-500 font-semibold mb-2">
              Book & Confirm
            </h3>
            <p className="text-gray-600 text-sm text-center">
              Secure your booking and get instant confirmation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
