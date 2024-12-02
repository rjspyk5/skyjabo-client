import React from "react";
import logo from "../../assets/logo/logoc.png";
import img from "../../assets/images/profile.jpg";
import "../../Style/style.css";
import { Link, NavLink } from "react-router";
import { useAuth } from "./../../hooks/useAuth";
export const Navbar = () => {
  const { user, logout } = useAuth();

  const menu = (
    <>
      {" "}
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-primary font-bold text-white"
              : "font-bold text-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/flights"
          className={({ isActive }) =>
            isActive
              ? "bg-primary font-bold text-white"
              : "font-bold text-white"
          }
        >
          Flights Search
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/bookings"
            className={({ isActive }) =>
              isActive
                ? "bg-primary font-bold text-white"
                : "font-bold text-white"
            }
          >
            My Bookings
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="sticky top-0 !z-50">
      <div className="">
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="navbar justify-between ] bg-[#3d3d3d49] backdrop-blur absolute w-full">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-6 w-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="mx-2  px-2">
                <Link to="/">
                  <img src={logo} className="w-20" alt="SkyJabo" />
                </Link>
              </div>
              <div className="hidden flex-none lg:block">
                <ul className="menu menu-horizontal space-x-2">
                  {/* Navbar menu content here */}
                  {menu}
                </ul>
              </div>
              {user ? (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img alt="Tailwind CSS Navbar component" src={img} />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                  >
                    <li>
                      <Link to="/profile" className="justify-between">
                        Profile
                      </Link>
                    </li>

                    <li>
                      <button onClick={logout}>Logout</button>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="flex space-x-3 items-center justify-center">
                  <Link to="/login" className="custom-btn">
                    Login
                  </Link>
                  <Link to="/register" className="custom-btn">
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 min-h-full w-80 p-4 space-y-2">
              {menu}
            </ul>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
