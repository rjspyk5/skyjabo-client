import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export const Bookings = () => {
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    const dummyData = {
      date: "2024-12-15",
      email: "test@example.com",
      departureCity: "Dhaka",
      destinationCity: "New York",
    };

    setValue("date", dummyData.date);
    setValue("email", dummyData.email);
    setValue("departureCity", dummyData.departureCity);
    setValue("destinationCity", dummyData.destinationCity);
  }, [setValue]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Book Your Flight
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold mb-2 text-black">
                Full Name
              </label>
              <input
                type="text"
                {...register("fullName", { required: true })}
                className="input input-bordered w-full bg-gray-100 text-black"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2 text-black">
                Email Address
              </label>
              <input
                type="email"
                {...register("email")}
                className="input input-bordered w-full !bg-gray-200 !text-gray-700"
                disabled
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold mb-2 text-black">
                Phone Number
              </label>
              <input
                type="tel"
                {...register("phone", { required: true })}
                className="input input-bordered w-full bg-gray-100 text-black"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2 text-black">
                Date of Travel
              </label>
              <input
                type="date"
                {...register("date")}
                className="input input-bordered w-full !bg-gray-200 !text-gray-700"
                disabled
              />
            </div>
          </div>

          {/* Flight Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold mb-2 text-black">
                Departure City
              </label>
              <input
                type="text"
                {...register("departureCity")}
                className="input input-bordered w-full !bg-gray-200 !text-gray-700"
                disabled
              />
            </div>

            <div>
              <label className="block font-semibold mb-2 text-black">
                Destination City
              </label>
              <input
                type="text"
                {...register("destinationCity")}
                className="input input-bordered w-full !bg-gray-200 !text-gray-700"
                disabled
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold mb-2 text-black">
                Number of Passengers
              </label>
              <input
                type="number"
                {...register("passengers", { required: true, min: 1 })}
                className="input input-bordered w-full bg-gray-100 text-black"
                placeholder="Enter number of passengers"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2 text-black">
                Class
              </label>
              <select
                {...register("class", { required: true })}
                className="select select-bordered w-full bg-gray-100 text-black"
              >
                <option value="economy">Economy</option>
                <option value="business">Business</option>
                <option value="first">First Class</option>
              </select>
            </div>
          </div>

          {/* Payment Information */}
          <div>
            <label className="block font-semibold mb-2 text-black">
              Payment Method
            </label>
            <select
              {...register("paymentMethod", { required: true })}
              className="select select-bordered w-full bg-gray-100 text-black"
            >
              <option value="credit-card">Credit/Debit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank-transfer">Bank Transfer</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="pt-6 text-center">
            <button
              type="submit"
              className="py-2 px-4 rounded-md bg-green-500 text-white w-full md:w-auto"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
