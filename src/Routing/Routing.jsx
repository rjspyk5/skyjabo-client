import React from "react";
import { createBrowserRouter } from "react-router";
import { RootLayout } from "../layout/rootLayout";
import { Home } from "../pages/Home/Home";
import { Flights } from "../pages/Flights/Flights";
import { Login } from "../pages/Login/Login";
import { Registration } from "../pages/Registration/Registration";
import { PrivateRoute } from "./PrivateRoute";
import { UserDashboard } from "../pages/Dashboard/UserDashboard/UserDashboard";
import { AdminLayout } from "../layout/AdminLayout";
import { AdminChecker } from "./AdminChecker";
import { AdminRoute } from "./AdminRoute";
import { AllBookings } from "../pages/Dashboard/AdminDashboard/AllBookings";

import { ManageFlights } from "../pages/Dashboard/AdminDashboard/ManageFlights";
import { Bookings } from "../pages/Bookings/Bookings";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { MyBookings } from "../pages/Dashboard/UserDashboard/MyBookings";
import { FlightDetails } from "../pages/FlightDetails/FlightDetails";
import { MyProfile } from "../pages/Dashboard/UserDashboard/MyProfile";

export const Routing = createBrowserRouter([
  {
    path: "/",
    element: (
      <AdminChecker>
        <RootLayout />
      </AdminChecker>
    ),
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "/flights", element: <Flights /> },
      { path: "/flight/:id", element: <FlightDetails /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Registration /> },
      {
        path: "/book/:id",
        element: (
          <PrivateRoute>
            <Bookings />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "admin",
    element: (
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>
    ),
    children: [
      { path: "bookings", element: <AllBookings /> },

      { path: "flights", element: <ManageFlights /> },
      { path: "profile", element: <MyProfile /> },
    ],
  },
]);
