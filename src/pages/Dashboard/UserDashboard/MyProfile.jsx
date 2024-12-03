import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { useAxiosSequre } from "../../../hooks/useAxiosSequre";
import { useAuth } from "../../../hooks/useAuth";
import img from "../../../assets/images/profile.jpg";
import { curdOperationChecker } from "../../../utlis/curdOperationChecker";
import { Loading } from "../../../component/Loading/Loading";

export const MyProfile = () => {
  const axiosSequre = useAxiosSequre();
  const { user } = useAuth();
  const [userDetails, setUserDetails] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: userDetails,
  });

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    reset(userDetails);
  };

  const onSubmit = async (formData) => {
    try {
      const { username, phone } = formData;
      const response = await axiosSequre.put(`/user/${user.userId}`, {
        username,
        phone,
      });
      curdOperationChecker(response);
      setUserDetails({ ...userDetails, ...response.data });
      setIsEditing(false);
      refetch();
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const result = await axiosSequre.get(`/user/${user.userId}`);
      setUserDetails(result?.data);
      return result.data;
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center pt-12">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {" "}
          <div className="max-w-4xl w-full p-5">
            <div className="bg-slate-200 shadow-lg rounded-lg p-5 flex flex-col items-center">
              <img
                src={img}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-primary mb-6"
              />
              <h1 className="text-3xl font-bold text-gray-900">
                {data?.username}
              </h1>
              <button
                onClick={toggleEdit}
                className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-pink-600"
              >
                {isEditing ? "Cancel" : "Edit Profile"}
              </button>
            </div>

            {isEditing && (
              <div className="mt-10 bg-slate-200 shadow-md rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Edit Profile
                </h2>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-6 space-y-4"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      {...register("username", {
                        required: "Name is required",
                      })}
                      className="mt-1 p-2 w-full bg-gray-200 border text-black rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.username && (
                      <p className="text-red-500 text-sm">
                        {errors.username.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      type="text"
                      {...register("phone", {
                        required: "Phone is required",
                        pattern: {
                          value: /^[0-9+\s-]+$/,
                          message: "Invalid phone number",
                        },
                      })}
                      className="mt-1 text-black p-2 w-full bg-gray-200 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      value={data.email}
                      disabled
                      className="mt-1 p-2 w-full bg-gray-200 border rounded-md text-gray-500 cursor-not-allowed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            )}

            {!isEditing && (
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-200 shadow-md rounded-lg p-8">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Phone
                  </h2>
                  <p className="mt-4 text-gray-600">{data?.phone}</p>
                </div>

                <div className="bg-slate-200 shadow-md rounded-lg p-8">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Email
                  </h2>
                  <p className="mt-4 text-gray-600">{data?.email}</p>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};
