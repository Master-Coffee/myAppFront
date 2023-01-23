//3rd party packages
import React from "react";
import { Outlet } from "react-router-dom";


// Local
import Main from "../components/wrappers/Main";


const Dashboard = ({ children }) => (
  <React.Fragment>
    <Main>
      {children}
      <Outlet />
    </Main>
  </React.Fragment>
);

export default Dashboard;
