import React from "react";
import { createBrowserRouter } from "react-router";
import { RootLayout } from "../layout/rootLayout";

export const Routing = createBrowserRouter([
  { path: "/", element: <RootLayout /> },
]);
