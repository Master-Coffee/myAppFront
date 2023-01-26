import React from "react";

import { Navbar } from "react-bootstrap";
import useSidebar from "../../hooks/useSidebar";


const NavbarComponent = () => {
  const { behavior, setBehavior } = useSidebar();
  
  const handleClick = () => {
    const value  = behavior === "compact" ? "sticky" : "compact"
    setBehavior(value)
  }

  return (
    <Navbar variant="light" expand className="navbar-bg">
      <span
        className="sidebar-toggle d-flex"
        onClick={handleClick}
      >
        <i className="hamburger align-self-center" />
      </span>

    </Navbar>
  );
};

export default NavbarComponent;
