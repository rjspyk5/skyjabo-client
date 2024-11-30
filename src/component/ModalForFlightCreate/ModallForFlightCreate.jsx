import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const ModallForFlightCreate = ({ htmlfor }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [startDate, setStartDate] = useState(new Date());
  const [arrivalDate, setArrivalDate] = useState(new Date());

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <input type="checkbox" id={htmlfor} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-white text-black">
          <label
            htmlFor={htmlfor}
            className="absolute right-2 top-2 btn btn-sm btn-circle btn-ghost"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Create Flight</h3>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* Flight Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Flight Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter flight name"
                className="input input-bordered w-full bg-gray-100 text-black"
                {...register("flightName", {
                  required: "Flight name is required",
                })}
              />
              {errors.flightName && (
                <p className="text-red-500">{errors.flightName.message}</p>
              )}
            </div>

            {/* Departure Time */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Departure Time</span>
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                  setValue("departureTime", date);
                }}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="MMMM d, yyyy h:mm aa"
                className="input input-bordered w-full bg-gray-100 text-black"
              />
              <input
                type="hidden"
                {...register("departureTime", {
                  required: "Departure time is required",
                })}
              />
              {errors.departureTime && (
                <p className="text-red-500">{errors.departureTime.message}</p>
              )}
            </div>

            {/* Arrival Time */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Arrival Time</span>
              </label>
              <DatePicker
                selected={arrivalDate}
                onChange={(date) => {
                  setArrivalDate(date);
                  setValue("arrivalTime", date);
                }}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="MMMM d, yyyy h:mm aa"
                className="input input-bordered w-full bg-gray-100 text-black"
              />
              <input
                type="hidden"
                {...register("arrivalTime", {
                  required: "Arrival time is required",
                })}
              />
              {errors.arrivalTime && (
                <p className="text-red-500">{errors.arrivalTime.message}</p>
              )}
            </div>

            {/* Price */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Price (USD)</span>
              </label>
              <input
                type="number"
                placeholder="Enter price"
                className="input input-bordered w-full bg-gray-100 text-black"
                {...register("price", {
                  required: "Price is required",
                  min: 1,
                })}
              />
              {errors.price && (
                <p className="text-red-500">{errors.price.message}</p>
              )}
            </div>

            {/* Available Seats */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Available Seats</span>
              </label>
              <input
                type="number"
                placeholder="Enter available seats"
                className="input input-bordered w-full bg-gray-100 text-black"
                {...register("availableSeats", {
                  required: "Available seats are required",
                  min: 1,
                })}
              />
              {errors.availableSeats && (
                <p className="text-red-500">{errors.availableSeats.message}</p>
              )}
            </div>

            <div className="modal-action">
              <label
                htmlFor={htmlfor}
                className="py-2 px-4 rounded-md bg-slate-500 text-white"
              >
                Close
              </label>
              <button
                type="submit"
                className="py-2 px-4 rounded-md bg-green-500 text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
