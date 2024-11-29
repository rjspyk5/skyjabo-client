import React, { useState, forwardRef } from "react";
import "../../../Style/style.css";
import "../Hero.css";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router";
import { CustomDatePicker } from "../CustomDatePicker/CustomDatePicker";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";

export const SearchSection = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(null);
  const {
    control,
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => navigate("/flights", { state: data });
  return (
    <div className="backdrop-blur-lg mt-5">
      <div className="md:p-12 p-8 relative">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="inputt flex items-center gap-2">
                <GiAirplaneDeparture />
                <input
                  {...register("origin", { required: true })}
                  type="text"
                  name="origin"
                  className=""
                  placeholder="From"
                />
              </label>{" "}
              <span className="text-red-500">
                {errors?.origin && "  This field is required"}
              </span>
            </div>

            <div className="">
              <label className="inputt  flex items-center gap-2">
                <GiAirplaneArrival />
                <input
                  {...register("destination", { required: true })}
                  type="text"
                  className=" grow"
                  name="destination"
                  placeholder="To"
                />
              </label>

              <span className="text-red-500">
                {" "}
                {errors?.destination && "  This field is required"}
              </span>
            </div>
            <Controller
              control={control}
              name="date"
              rules={{ required: "Required" }}
              render={({ field }) => (
                <CustomDatePicker
                  startDate={field.value}
                  setStartDate={setStartDate}
                  change={field.onChange}
                  errors={errors}
                />
              )}
            />
          </div>
          <input
            type="submit"
            value="Search"
            className="custom-btn2  absolute left-[29%] md:left-[44%] bottom-[-20px]"
          />
        </form>
      </div>
    </div>
  );
};
