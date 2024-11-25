import React from "react";
import { Outlet } from "react-router";
import { Navbar } from "../component/shared/Navbar";
import { Footer } from "../component/shared/Footer/Footer";

export const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
