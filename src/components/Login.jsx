import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Login.css";
import Button from "./Button/Button";
import { verifyStudent, verifyTeacher } from "../firebaseConfig";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const [Identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState(null);
  const [verified, setVerified] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const STATE = useSelector((state) => state);

  let loginObj;

  async function postVerification(theUser) {
    if (
      document.getElementById("Identifier") !== null ||
      document.getElementById("Identifier") !== undefined
    )
      document.getElementById("Identifier").innerHTML = null;

    if (
      document.getElementById("password") !== null ||
      document.getElementById("password") !== undefined
    )
      document.getElementById("password").innerHTML = null;

    dispatch({
      type: "SET__USER",
      USER: theUser,
    });
    setTimeout(() => {
      navigate("/menu");
    }, 2000);
  }

  async function nonVerified() {
    console.log("\n\t\t--Non Verified Called\n");

    document.getElementById("validation").innerHTML =
      "You Are Not Registered Yet\nSign Up First";
  }

  async function loginHandler(e) {
    if (
      document.getElementById("validation") !== null ||
      document.getElementById("validation") !== undefined
    )
      document.getElementById("validation").innerHTML = "Verifying...";

    if (Identifier === null || password === null) {
      if (
        document.getElementById("validation") !== null ||
        document.getElementById("validation") !== undefined
      )
        document.getElementById("validation").innerHTML =
          "Kindly Fill the fields Correctly";

      return 0;
    }
    loginObj = {
      Identifier: Identifier,
      password: password,
    };
    // dispatch({
    //   type: "SET__USER",
    //   USER: loginObj,
    // });
    STATE?.USERTYPE === "student"
      ? await verifyStudent(loginObj, postVerification, nonVerified)
      : await verifyTeacher(loginObj, postVerification, nonVerified);

    //   console.log("pushing it ");
    // setTimeout(() => {
    //   navigate("/menu");
    // }, 2000);
  }

  return (
    <div className="login__wrapper">
      <div className="login">
        <div className="login__heading">
          <h1>Login</h1>
        </div>
        <p className="validation" id="validation"></p>

        <div>
          <label htmlFor="Identifier">
            {STATE?.USERTYPE === "student" ? "Roll Number" : "Teacher ID"}
          </label>
          <input
            onChange={(e) => {
              setIdentifier(e.target.value);
            }}
            value={Identifier}
            id="Identifier"
            type={"text"}
            placeholder=""
          />
        </div>
        <div>
          <label htmlFor="csmpass">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="password"
            type={"password"}
          />
        </div>
        <div className="login-btn">
          {/* <Link to="/castVote"> */}
          <Button
            onClick={() => {
              //              capitalize();
              loginHandler();
              setTimeout(() => {
                loginHandler();
              }, 5000);
            }}
            variant="primary"
            title={"Login"}
            key="loginButton__"
          />
          <p id="accountInvalid"></p>
          {/* </Link>
           */}
        </div>
      </div>
    </div>
  );
}

export default Login;
