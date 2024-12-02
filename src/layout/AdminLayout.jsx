import React from "react";
import { DrawerForAdmin } from "../component/DrawerForAdmin/DrawerForAdmin";
import { useAuth } from "../hooks/useAuth";
import { Link, NavLink, Outlet } from "react-router";
import logo from "../assets/logo/logoc.png";
import profile from "../assets/images/profile.jpg";

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
          to="/admin/profile"
          className={({ isActive }) =>
            `${
              isActive && "bg-primary !text-white"
            } hover:bg-primary hover:text-white text-black focus:!bg-primary transition-colors duration-500 ease-linear`
          }
          end
        >
          Admin Profile
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
          <div className="flex w-full justify-between items-center pt-2 pb-[7px]  bg-white  ">
            <DrawerForAdmin menu={menu} />
            <img className="w-20 h-8 lg:hidden" src={logo} alt="" />
            <div className="dropdown dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="profile" src={profile} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white *:text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/admin/profile">Profile</Link>
                </li>

                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
          <hr />

          <Outlet />
        </div>
      </div>
    </>
  );
};
