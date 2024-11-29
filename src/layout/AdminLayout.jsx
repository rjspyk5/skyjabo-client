import React from "react";
import { DrawerForAdmin } from "../component/DrawerForAdmin/DrawerForAdmin";
import { useAuth } from "../hooks/useAuth";
import { NavLink, Outlet } from "react-router";
import logo from "../assets/logo/logoc.png";

export const AdminLayout = () => {
  const { user, logout } = useAuth();
  const menu = (
    <>
      <li>
        <NavLink
          to=""
          className={({ isActive }) =>
            `${
              isActive && "bg-primary !text-white"
            } hover:bg-primary hover:text-white text-black focus:!bg-primary  transition-colors duration-500 ease-linear`
          }
          end
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="flights"
          className={({ isActive }) =>
            `${
              isActive && "bg-primary !text-white"
            } hover:bg-primary hover:text-white text-black focus:!bg-primary  transition-colors duration-500 ease-linear`
          }
          end
        >
          Manage Flights
        </NavLink>
      </li>

      <li>
        {" "}
        <NavLink
          to="/admin/bookings"
          className={({ isActive }) =>
            `${
              isActive && "bg-primary !text-white"
            } hover:bg-primary hover:text-white text-black focus:!bg-primary transition-colors duration-500 ease-linear`
          }
          end
        >
          All Bookings
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            `${
              isActive && "bg-primary !text-white"
            } hover:bg-primary hover:text-white text-black focus:!bg-primary transition-colors duration-500 ease-linear`
          }
          end
        >
          All Users
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="flex">
        {/* left side menu*/}
        <div className="w-[23%] hidden lg:block bg-white fixed top-0 h-full bg-gradient-to-br ">
          <div className="py-4 px-8">
            <img className="w-20 h-8" src={logo} alt="" />
          </div>

          <hr />
          <ul className="menu w-full space-y-2  p-4">{menu} </ul>
        </div>
        {/* Right side */}

        <div className="flex-1  bg-[#F4F2F3] min-h-screen lg:ml-[23%] w-full">
          {/* Navbar */}
          <div className="flex w-full justify-between items-center py-2 shadow-xl lg:shadow-none bg-white lg:bg-none">
            <DrawerForAdmin menu={menu} />
            <img className="w-20 h-8 lg:hidden" src={logo} alt="" />
            <div className="dropdown dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </ul>
            </div>
          </div>

          <Outlet />
        </div>
      </div>
    </>
  );
};
