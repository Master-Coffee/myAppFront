import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Button, Card} from "react-bootstrap";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";


//Local
import useSidebar from '../hooks/useSidebar';
import {SIDEBAR_BEHAVIOR} from "../constants";
import useWindowSize from '../hooks/useWindowSize';



const sidebarBehaviorOptions = [
  {
    name: "Sticky",
    value: SIDEBAR_BEHAVIOR.STICKY,
  },
  {
    name: "Fixed",
    value: SIDEBAR_BEHAVIOR.FIXED,
  },
  {
    name: "Compact",
    value: SIDEBAR_BEHAVIOR.COMPACT,
  },
];



const Blank = () => {
  const {behavior, setBehavior } = useSidebar();
  const size = useWindowSize();
  
  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title>Social Buttons</Card.Title>
          <h6 className="card-subtitle text-muted">Social buttons with icons.</h6>
        </Card.Header>
        <Card.Body className="text-center">
          <div className = "mb-3">
            <Button variant="facebook" className="me-1 mb-1" >
              <FontAwesomeIcon icon={faFacebook} className="align-middle" />{" "}
              Facebook
            </Button>
          </div>
          <div>
            {sidebarBehaviorOptions.map(({ name, value }) => (
              <label className="me-1" key={value}>
                <input
                  className="settings-button-label"
                  type="radio"
                  name="sidebarBehavior"
                  value={value}
                  checked={behavior === value}
                  onChange={() => setBehavior(value)}
                />
                <div className="settings-button">{name}</div>
              </label>
            ))}
          </div>
          <span> Window size:{size}</span>;
        </Card.Body>
      </Card>
    </>
  )
}

export default Blank;



