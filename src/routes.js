// 3rd Packages
import React from 'react';

//Local
import Blank from "./pages/Blank";
import DashboardLayout from "./layouts/Dashboard";

const routes = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Blank />,
      },
    ],
  },
]

export default routes;