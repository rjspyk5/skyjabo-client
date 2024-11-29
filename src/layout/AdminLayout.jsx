import React from "react";
import { DrawerForAdmin } from "../component/DrawerForAdmin/DrawerForAdmin";
import { useAuth } from "../hooks/useAuth";

export const AdminLayout = () => {
  const { user, logout } = useAuth();
  const menu = (
    <>
      <li>
        <a>Sidebar Item 1</a>
      </li>
      <li>
        <a>Sidebar Item 2</a>
      </li>
    </>
  );
  return (
    <>
      <div className="flex">
        {/* left side menu*/}
        <div className="w-[23%] hidden lg:block bg-white fixed top-0 h-full bg-gradient-to-br ">
          <ul className="menu w-full   p-4">{menu} </ul>
        </div>
        {/* Right side */}

        <div className="flex-1 flex bg-[#F4F2F3] min-h-screen lg:ml-[23%] w-full">
          {/* Navbar */}
          <div className="flex w-full justify-between">
            <DrawerForAdmin menu={menu} />

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
        </div>
      </div>
    </>
  );
};
