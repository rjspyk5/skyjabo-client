import React, { useState } from "react";
import { DashboardSectionHeader } from "./DashboardSectionHeader";

export const AllUsers = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "test",
      email: "test@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "test2",
      email: "test2@example.com",
      role: "User",
      status: "Inactive",
    },
  ]);

  return (
    <main className="p-6">
      <section className="mb-12">
        <DashboardSectionHeader heading="All Users" />

        <div className="overflow-x-auto">
          <table className="table w-full table-auto bg-white shadow rounded-lg">
            <thead>
              <tr className="bg-primary text-white border-none">
                <th className="p-2 md:p-4 text-left">User ID</th>
                <th className="p-2 md:p-4 text-left">Name</th>
                <th className="p-2 md:p-4 text-left">Email</th>
                <th className="p-2 md:p-4 text-left">Role</th>
                <th className="p-2 md:p-4 text-left">Status</th>
                <th className="p-2 md:p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t">
                  <td className="p-2 md:p-4 text-gray-800">{user.id}</td>
                  <td className="p-2 md:p-4 text-gray-800">{user.name}</td>
                  <td className="p-2 md:p-4 text-gray-800">{user.email}</td>
                  <td className="p-2 md:p-4 text-gray-800">{user.role}</td>
                  <td
                    className={`p-2 md:p-4 font-semibold ${
                      user.status === "Active"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {user.status}
                  </td>
                  <td className="p-2 md:p-4 space-x-2 flex">
                    <button className="btn btn-sm bg-blue-500 text-white border-none">
                      View
                    </button>
                    {user.status === "Active" ? (
                      <button className="btn btn-sm bg-red-500 text-white border-none">
                        Deactivate
                      </button>
                    ) : (
                      <button className="btn btn-sm bg-green-500 text-white border-none">
                        Activate
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};
