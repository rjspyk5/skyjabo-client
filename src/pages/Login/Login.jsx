import React from "react";
import img from "../../assets/images/low/img (19).jpg";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useAxiosPublic } from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useAuth } from "../../hooks/useAuth";

export const Login = () => {
  const axiosPublic = useAxiosPublic();
  const { setuser } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const result = await axiosPublic.post("/login", data);

    if (result?.data?.data?.role === 1) {
      setuser(result?.data?.data);
      navigate("/");
      Swal.fire({
        icon: "success",
        title: result?.data?.message,
        timer: 1500,
      });
    } else if (result?.data?.data?.role === 0) {
      setuser(result?.data?.data);
      navigate("/admin");
      Swal.fire({
        icon: "success",
        title: result?.data?.message,
        timer: 1500,
      });
    } else if (
      result?.data?.data?.role !== 0 &&
      result?.data?.data?.role !== 1
    ) {
      Swal.fire({
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
          backgrounSize: "cover",
        }}
      >
        <div className="max-w-md w-full mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="backdrop-blur-xl bg-[#d8d8d879] rounded-2xl p-6 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]"
          >
            <div className="mb-12">
              <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
            </div>

            <div>
              <div className="mt-6">
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="text"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                    className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                    placeholder="Enter email"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#333"
                    stroke="#333"
                    className="w-[18px] h-[18px] absolute right-2"
                    viewBox="0 0 682.667 682.667"
                  >
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path
                          d="M0 512h512V0H0Z"
                          data-original="#000000"
                        ></path>
                      </clipPath>
                    </defs>
                    <g
                      clipPath="url(#a)"
                      transform="matrix(1.33 0 0 -1.33 0 682.667)"
                    >
                      <path
                        fill="none"
                        strokeMiterlimit="10"
                        strokeWidth="40"
                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#333"
                  stroke="#333"
                  className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                  viewBox="0 0 128 128"
                >
                  <path
                    d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="mt-12">
              <input
                value="Sign In"
                type="submit"
                className="w-full py-2.5 px-4 cursor-pointer text-sm font-semibold  rounded text-white bg-primary hover:bg-[#fb3b8e] focus:outline-none"
              />

              <p className="text-gray-800 text-sm text-center mt-6">
                Don't have an account{" "}
                <Link
                  to="/register"
                  className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                >
                  Register here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
