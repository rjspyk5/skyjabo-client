import React from "react";

export const DrawerForAdmin = ({ menu }) => {
  return (
    <div>
      {" "}
      <div className="drawer z-50">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
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
        </div>
        <div className="drawer-side fixed w-full">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu  min-h-full w-80 space-y-2 backdrop-blur-3xl bg-white p-4">
            {" "}
            {menu}
          </ul>
        </div>
      </div>
    </div>
  );
};
