//3rd party packages
import React from "react";
import { Outlet } from "react-router-dom";

// Local
import Main from "../components/wrappers/Main";
import Wrapper from "../components/wrappers/Wrapper";
import Sidebar from "../components/sidebar/Sidebar";
import dashboardItems from "../components/sidebar/dashboardItems";
import Content from "../components/wrappers/Content";
import Navbar from "../components/navbar/Navbar";


const Dashboard = ({ children }) => (
  <React.Fragment>
    <Wrapper>
      <Sidebar items = {dashboardItems}/>
      <Main>
        <Navbar/>
        <Content>
          {children}
          <Outlet />
        </Content>
      </Main>
    </Wrapper>
  </React.Fragment>
);

export default Dashboard;
