import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import Button from "../Button/Button"
// import Button from "../Button/Button";

import "./Navbar.css";
import { useSelector } from "react-redux/es/exports";

function Navbar() {
  const dispatch=useDispatch();
  let user =null;
  user= useSelector(state=>state?.USER);
  console.log("state  in navbar is ",user);
  return (
    <div className={"navbar " }>
      <div className="navbar__logo">
        <div>
          <Link to="">
            {" "}
            <img src="./logo.png" />
          </Link>
        </div>
        <div className="company__description">
          <h1>Quark School Management System </h1>
          <p>Digital Tracking of Schooling Career</p>
        </div>
      </div>      
    </div>
  );
}

export default Navbar;
