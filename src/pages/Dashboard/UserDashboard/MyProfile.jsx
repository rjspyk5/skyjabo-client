import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const MyProfile = () => {
  const [user, setUser] = useState({
    name: "Rakibul Hasan",
    phone: "+880 123 456 789",
    email: "rakibul@example.com",
    icon: "https://via.placeholder.com/150", // Replace with actual image URL
  });

  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: user,
  });

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    reset(user);
  };

  const onSubmit = (data) => {
    console.log(data);
    setUser({ ...user, ...data });
    console.log("Updated user details:", data);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-4xl w-full p-8">
        <div className="bg-white shadow-lg rounded-lg p-10 flex flex-col items-center">
          <img
            src={user.icon}
            alt="Profile"
            className="w-36 h-36 rounded-full border-4 border-blue-500 mb-6"
          />
          <h1 className="text-4xl font-bold text-gray-900">{user.name}</h1>
          <p className="text-gray-600 mt-2 text-lg">Full Name</p>
          <button
            onClick={toggleEdit}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {isEditing ? "Cancel" : "Edit Profile"}
          </button>
        </div>

        {isEditing && (
          <div className="mt-10 bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Edit Profile
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="mt-1 p-2 w-full bg-gray-200 border text-black rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm  font-medium text-gray-700">
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
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>

              {/* Email (Non-editable) */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={user.email}
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
            <div className="bg-white shadow-md rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800">Phone</h2>
              <p className="mt-4 text-gray-600">{user.phone}</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800">Email</h2>
              <p className="mt-4 text-gray-600">{user.email}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
