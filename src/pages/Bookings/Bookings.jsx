import React from "react";

export const Bookings = () => {
  const handleBooking = (e) => {
    e.preventDefault();
    alert("Booking successful!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Book Your Flight
        </h2>

        <form onSubmit={handleBooking} className="space-y-4">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold mb-2">Full Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Email Address</label>
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                className="input input-bordered w-full"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Date of Travel</label>
              <input
                type="date"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          {/* Flight Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold mb-2">Departure City</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter departure city"
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Destination City
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter destination city"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold mb-2">
                Number of Passengers
              </label>
              <input
                type="number"
                className="input input-bordered w-full"
                placeholder="Enter number of passengers"
                min="1"
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Class</label>
              <select className="select select-bordered w-full" required>
                <option value="economy">Economy</option>
                <option value="business">Business</option>
                <option value="first">First Class</option>
              </select>
            </div>
          </div>

          {/* Payment Information */}
          <div>
            <label className="block font-semibold mb-2">Payment Method</label>
            <select className="select select-bordered w-full" required>
              <option value="credit-card">Credit/Debit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank-transfer">Bank Transfer</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="pt-6 text-center">
            <button
              type="submit"
              className="btn btn-primary w-full md:w-auto px-8"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
