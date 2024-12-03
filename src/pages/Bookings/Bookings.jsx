import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { useAxiosPublic } from "../../hooks/useAxiosPublic";
import { useAuth } from "../../hooks/useAuth";
import { useAxiosSequre } from "../../hooks/useAxiosSequre";
import { curdOperationChecker } from "../../utlis/curdOperationChecker";
import { Fade } from "react-awesome-reveal";

export const Bookings = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const axiosPublic = useAxiosPublic();
  const axiosSequre = useAxiosSequre();

  const [Price, setPrice] = useState(0);
  const [seats, setSeats] = useState(1);
  const [initialPrice, setinitialPrice] = useState(0);

  const formatDateTime = (isoDate) => {
    const date = new Date(isoDate);
    const formattedDate = date.toISOString().split("T")[0];
    const formattedTime = date.toTimeString().split(":").slice(0, 2).join(":");
    return { formattedDate, formattedTime };
  };

  useEffect(() => {
    if (id) {
      axiosPublic.get(`/flight/${id}`).then((data) => {
        const { formattedDate, formattedTime } = formatDateTime(
          data?.data?.date
        );
        setValue("date", formattedDate);
        setValue("time", formattedTime);
        setValue("departureCity", data?.data?.origin);
        setValue("destinationCity", data?.data?.destination);
        setPrice(data?.data?.price || 0);
        setinitialPrice(data?.data?.price || 0);
      });
    }

    if (user) {
      axiosSequre.get(`/user/${user?.userId}`).then((res) => {
        setValue("email", res.data.email);
      });
    }
  }, []);

  const handleIncrement = () => {
    setSeats((prev) => prev + 1);
    setPrice((prev) => prev + initialPrice);
  };
  const handleDecrement = () => {
    setSeats((prev) => (prev > 1 ? prev - 1 : 1));
    setPrice((prev) => (seats > 1 ? prev - initialPrice : initialPrice));
  };

  const onSubmit = async (data) => {
    data.flightId = id;
    data.userId = user.userId;
    data.numberOfSeats = seats;
    data.totalPrice = Price;
    data.bookingStatus = "pending";
    const result = await axiosSequre.post("/bookings", data);
    curdOperationChecker(result);
    navigate("/bookings");
  };

  return (
    <Fade>
      <div className="min-h-screen  flex items-center justify-center pb-10 pt-20 px-4">
        <div className="max-w-3xl w-full bg-slate-200 shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-black">
            Book Your Flight
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold mb-2 text-black">
                  Full Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Full Name is required" })}
                  className={`input input-bordered w-full bg-gray-100 text-black ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block font-semibold mb-2 text-black">
                  Phone Number
                </label>
                <input
                  type="number"
                  {...register("phone", {
                    required: "Phone Number is required",
                  })}
                  className={`input input-bordered w-full bg-gray-100 text-black ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  Number of Seats
                </label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleDecrement}
                    className="btn btn-outline btn-sm !bg-gray-200 !text-gray-700"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={seats}
                    readOnly
                    className="input input-bordered w-full !bg-gray-200 text-center !text-gray-700"
                  />
                  <button
                    type="button"
                    onClick={handleIncrement}
                    className="btn btn-outline btn-sm !bg-gray-200 !text-gray-700"
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-2 text-black">
                  Total Price
                </label>
                <input
                  type="text"
                  {...register("totalPrice")}
                  value={Price}
                  disabled
                  className="input input-bordered w-full !bg-gray-200 !text-gray-700"
                />
              </div>
            </div>

            <div className="pt-6 text-end">
              <button
                type="submit"
                className="py-2 px-4 rounded-md bg-green-500 text-white w-full md:w-auto"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fade>
  );
};
