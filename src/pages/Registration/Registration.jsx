import React from "react";
import img from "../../assets/images/low/img (19).jpg";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useAxiosPublic } from "./../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

export const Registration = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const result = await axiosPublic.post("/register", data);
    if (
      result?.data?.message === "User Created Successflly,Now you can login"
    ) {
      Swal.fire({
        icon: "success",
        title: result?.data?.message,
        timer: 1500,
      });
      navigate("/login");
    } else {
      return Swal.fire({
        icon: "error",
        title: result?.data?.message,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <div
        className="flex pt-20 justify-center bg-no-repeat bg-cover bg-center items-center font-[sans-serif] h-full min-h-screen p-4 relative"
        style={{
          backgroundImage: `url("${img}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-md w-full mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="backdrop-blur-xl bg-[#d8d8d879] rounded-2xl p-6 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]"
          >
            <div className="mb-12">
              <h3 className="text-gray-800 text-3xl font-extrabold">Sign up</h3>
            </div>

            <div>
              <div className="relative flex items-center">
                <input
                  name="username"
                  type="text"
                  {...register("username", {
                    required: "Username is required",
                    minLength: {
                      value: 3,
                      message: "Username must be at least 3 characters long",
                    },
                  })}
                  className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                  placeholder="Enter username"
                />
              </div>
              {errors.username && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>

            <div>
              <div className="relative flex items-center mt-6">
                <input
                  name="phone"
                  type="text"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{11}$/,
                      message: "Phone number must be 11 digits",
                    },
                  })}
                  className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                  placeholder="Enter phone number"
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="mt-6">
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="text"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                  className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                  placeholder="Enter email"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="mt-6">
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  })}
                  className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                  placeholder="Enter password"
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full py-3 bg-[#1E69FF] text-white font-bold rounded-lg"
              >
                Sign up
              </button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-800">
                Already have an account?{" "}
                <Link to="/login" className="text-[#1E69FF] font-bold">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
