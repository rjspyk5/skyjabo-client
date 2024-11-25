import React from "react";
import { createBrowserRouter } from "react-router";
import { RootLayout } from "../layout/rootLayout";
import { Home } from "../pages/Home/Home";

export const Routing = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "", element: <Home /> }],
  },
]);
