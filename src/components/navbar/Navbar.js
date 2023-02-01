import React from "react";
import { Navbar } from "react-bootstrap";

//Local
import useSidebar from "../../hooks/useSidebar";
import useWindowSize from "../../hooks/useWindowSize";




const NavbarComponent = () => {
  const { behavior, setBehavior, isOpen, setIsOpen } = useSidebar();
  const size = useWindowSize()


  const handleClick = () => {

    switch (size) {

      case "big":
        setBehavior(behavior === "compact" ? "sticky" : "compact")
        setIsOpen(true)
        break;

      case "medium":
        setBehavior("compact")
        setIsOpen(!isOpen)
        break;

      case "small":
        setBehavior("compact")
        setIsOpen(!isOpen)
        break;

      default:
        console.log('Error')
        throw new Error();
    }
    
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
