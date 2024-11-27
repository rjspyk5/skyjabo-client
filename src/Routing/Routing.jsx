import React from "react";
import { createBrowserRouter } from "react-router";
import { RootLayout } from "../layout/rootLayout";
import { Home } from "../pages/Home/Home";
import { Flights } from "../pages/Flights/Flights";
import { Login } from "../pages/Login/Login";
import { Registration } from "../pages/Registration/Registration";

export const Routing = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/flights", element: <Flights /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Registration /> },
    ],
  },
]);
