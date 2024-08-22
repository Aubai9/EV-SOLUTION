import React, { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const Show = () => {
    setShow(true);
  };
  return (
    <div className="Navbar">
      <div className="navlogo">EV-OULTION</div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className="navContact">Contact</li>
      </ul>
      <ul onClick={Show} className="list">
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className={show ? "side" : "hide"}>
        <button className="myBtn"
          onClick={() => {
            setShow(false);
          }}
        >
          X
        </button>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Sevices</li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
