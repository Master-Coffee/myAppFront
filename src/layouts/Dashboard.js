//3rd party packages
import React from "react";
import { Outlet } from "react-router-dom";

// Local
import Main from "../components/wrappers/Main";
import Wrapper from "../components/wrappers/Wrapper";
import Sidebar from "../components/sidebar/Sidebar";
import dashboardItems from "../components/sidebar/dashboardItems";


const Dashboard = ({ children }) => (
  <React.Fragment>
    <Wrapper>
      <Sidebar items = {dashboardItems}/>
      <Main>
        {children}
        <Outlet />
      </Main>
    </Wrapper>
  </React.Fragment>
);

export default Dashboard;
