import React from "react";
import logo from "../../assets/logo/logoc.png";
export const Navbar = () => {
  const menu = (
    <>
      {" "}
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Flights</a>
      </li>
    </>
  );
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar justify-between bg-base-300 w-full">
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
              <img src={logo} className="w-20" alt="SkyJabo" />
            </div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                {menu}
              </ul>
            </div>
            <div className="flex space-x-3 items-center justify-center">
              <div className="btn">Login</div>
              <div className="btn">Register</div>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            {menu}
          </ul>
        </div>
      </div>
    </div>
  );
};
