import React from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import "./Authentication.css";

function Authentication() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="authentication">
      <div className="authentication__header">
        {<img src="./logo.png" />}
        <div className="brand">
          <h5>Authentication Portal</h5>
        </div>
      </div>
      <div className="authentication__instructions">
        <p>Welcome To the Quark School Management System</p>
        <p>A Place to Track your Digital Schooling Career</p>
        <p>Are You a Student or Teacher ? Proceed to Respective Portal</p>
      </div>

      <div className="authentication__buttons">
        <Button
          id="stdButton"
          variant={"primary"}
          title={"Student"}
          onClick={() => {
            document.getElementById("stdButton").innerHTML = "Redirecting..";
            dispatch({
              type: "SET__USERTYPE",
              USERTYPE: "student",
            });

            setTimeout(() => {
              navigate("/login");
            }, 1000);
          }}
        />
        <Button
          id="teacherButton"
          variant={"success"}
          title={"Teacher"}
          onClick={() => {
            document.getElementById("teacherButton").innerHTML =
              "Redirecting..";

            dispatch({
              type: "SET__USERTYPE",
              USERTYPE: "teacher",
            });

            setTimeout(() => {
              navigate("/login");
            }, 1000);
          }}
        />
      </div>
    </div>
  );
}

export default Authentication;
