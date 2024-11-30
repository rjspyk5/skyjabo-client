import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { useAxiosSequre } from "../../hooks/useAxiosSequre";
import { curdOperationChecker } from "../../utlis/curdOperationChecker";

export const ModallForEditFlight = ({ htmlfor, refetch, data }) => {
  const axiosSequre = useAxiosSequre();
  const modalRef = useRef();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    if (data) {
      setValue("flightNumber", data.flightNumber || "");
      setValue("airline", data.airline || "");
      setValue("price", data.price || 0);
      setValue("availableSeats", data.availableSeats || 0);
      setValue("origin", data.origin || "");
      setValue("destination", data.destination || "");
      setValue("date", new Date(data.date || new Date()));
      setStartDate(new Date(data.date || new Date()));
    }
  }, [data, setValue]);

  const onSubmit = async (formData) => {
    try {
      const date = formData.date;
      formData.date = date.toISOString().split("T")[0];
      formData.time = date.toTimeString().split(" ")[0];

      const response = await axiosSequre.put(`/flights/${data._id}`, formData);
      curdOperationChecker(response);
      refetch();
    } catch (error) {
      console.log(error);
    } finally {
      modalRef.current.checked = false;
    }
  };

  return (
    <div>
      <input
        ref={modalRef}
        type="checkbox"
        id={htmlfor}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box bg-white text-black">
          <label
            htmlFor={htmlfor}
            className="absolute right-2 top-2 btn btn-sm btn-circle btn-ghost"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Edit Flight</h3>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* Flight Number */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Flight Number</span>
              </label>
              <input
                type="text"
                placeholder="Enter flight number"
                className="input input-bordered w-full bg-gray-100 text-black"
                {...register("flightNumber", {
                  required: "Flight number is required",
                })}
              />
              {errors.flightNumber && (
                <p className="text-red-500">{errors.flightNumber.message}</p>
              )}
            </div>

            {/* Airline */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Airline Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter airline name"
                className="input input-bordered w-full bg-gray-100 text-black"
                {...register("airline", {
                  required: "Airline name is required",
                })}
              />
              {errors.airline && (
                <p className="text-red-500">{errors.airline.message}</p>
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
                  setValue("date", date);
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
                {...register("date", {
                  required: "Departure time is required",
                })}
              />
              {errors.date && (
                <p className="text-red-500">{errors.date.message}</p>
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

            {/* Origin */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Origin</span>
              </label>
              <input
                type="text"
                placeholder="Enter origin city"
                className="input input-bordered w-full bg-gray-100 text-black"
                {...register("origin", { required: "Origin is required" })}
              />
              {errors.origin && (
                <p className="text-red-500">{errors.origin.message}</p>
              )}
            </div>

            {/* Destination */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Destination</span>
              </label>
              <input
                type="text"
                placeholder="Enter destination city"
                className="input input-bordered w-full bg-gray-100 text-black"
                {...register("destination", {
                  required: "Destination is required",
                })}
              />
              {errors.destination && (
                <p className="text-red-500">{errors.destination.message}</p>
              )}
            </div>

            <div className="modal-action">
              <label
                htmlFor={htmlfor}
                className="py-2 px-4 cursor-pointer rounded-md bg-slate-500 text-white"
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
